import { useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword, updateProfile, browserLocalPersistence, setPersistence } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

import { login } from "../../redux/authenticationSlice";
import { createAvatar } from '@dicebear/core';
import { identicon } from '@dicebear/collection';

export const SignUp = ({setPage}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("")
  const [usernameError, setUsernameError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  const onUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const minUsernameLength = 3;
	const minPasswordLength = 6;

    if (!username.trim()) {
		setUsernameError("Username cannot be empty")
		return false;
    }

    if (username.trim().length < minUsernameLength) {
		setUsernameError("Username must be at least 3 characters long.");
    	return false;
    }

	setUsernameError("")

    if (!email.trim()) {
		setEmailError("Please enter an email.");
    	return false;
    }

    if (!emailRegex.test(email.trim())) {
		setEmailError("Please enter a valid email address.");
    	return false;
    }

	setEmailError("")

	if (!password.trim()) {
		setPasswordError("Please enter a password.");
		return false;
	}

	if (password.trim().length < minPasswordLength) {
		setPasswordError("Password must be at least 6 characters long.");
		return false;
	}

    return true;
  };

  const GenerateProfileImageLink = async (uid) => {
	const storage = getStorage()

	const avatar = createAvatar(identicon, {
		seed: uid,
		backgroundColor: ["ffffff"]
	  });

	const imageObject = await avatar.png();


	const profilePictureRef = ref(storage, `profile/${uid}.png`)

	const ImageUrl = uploadBytes(profilePictureRef, await imageObject.toArrayBuffer()).then(async (snapshot) => {
		console.log("worked:", snapshot.metadata.fullPath)
		return await getDownloadURL(profilePictureRef)
	})

	return ImageUrl
  }

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
		const auth = getAuth();
		setPersistence(auth, browserLocalPersistence).then(() => {
			return createUserWithEmailAndPassword(auth, email, password)
		}).then(async ({user}) => {
			const userObject = await updateProfile(user, {displayName: username, photoURL: await GenerateProfileImageLink(user.uid)}).then(() => {
				return {
					username:  user.displayName,
					email:  user.email,
					id:  user.uid,
					image: user.photoURL,
				}
			})
			dispatch(login(userObject))
		}).catch((err) => {
			setError(err.message)
			console.log("error:", err.message)
		})
    }
  };

  return (
    <div className="grid place-items-center gap-8 bg-darkGrey p-8 sm:p-16 rounded-md shadow-md w-11/12 sm:w-4/12">
      <h1 className="text-xl">Sign up</h1>
      <form className="flex flex-col gap-4 w-full">
		<p className="text-redish">{error? error:""}</p>
        <label htmlFor="username">
			<p className="text-redish">{usernameError? usernameError:""}</p>
			<input
	          type="text"
			  name="username"
	          className="w-full rounded-md bg-darkGrey border-bluish border-2 p-2"
	          onChange={onUsernameChange}
	          placeholder="username"
	        />
		</label>

		<label htmlFor="email" >
			<p className="text-redish">{emailError? emailError:""}</p>
	        <input
	          type="text"
			  name="email"
	          className="w-full rounded-md bg-darkGrey border-bluish border-2 p-2"
	          onChange={onEmailChange}
	          placeholder="example@something.com"
	        />
		</label>

		<label htmlFor="password">
			<p className="text-redish">{passwordError? passwordError:""}</p>
			<input
	          type="password"
			  name="password"
	          className="w-full rounded-md bg-darkGrey border-bluish border-2 p-2"
	          onChange={onPasswordChange}
	          placeholder="password"
	        />
		</label>

        <button className="px-8 py-2 bg-bluish rounded-md" onClick={handleSignup}>
          Sign up
        </button>
		<p>Already have an account? <span className="font-bold cursor-pointer" onClick={() => setPage(2)}>Log in</span></p>
      </form>
    </div>
  );
}
