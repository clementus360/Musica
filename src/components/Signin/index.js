import { useState } from "react";
import { useDispatch } from "react-redux";
import { browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword} from "firebase/auth";
import { login } from "../../redux/authenticationSlice";

export const SignIn = ({setPage}) =>  {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch()


  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const minPasswordLength = 6;

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

  const handleSignup = (e) => {
    e.preventDefault();
    if (validateForm()) {
		const auth = getAuth();
		setPersistence(auth, browserLocalPersistence).then(() => {
			return signInWithEmailAndPassword(auth, email, password)
		}).then( ({user}) => {
			const userObject = {
				username: user.displayName,
				email: user.displayName,
				id: user.uid,
				image: user.photoURL,
			}
			dispatch(login(userObject))
		}).catch( err => {
			setError(err.message)
		})
    }
  };

  return (
    <div className="grid place-items-center gap-8 bg-darkGrey p-8 sm:p-16 rounded-md shadow-md w-11/12 sm:w-4/12">
      <h1 className="text-xl">Sign in</h1>
      <form className="flex flex-col gap-4 w-full">
		<p className="text-redish">{error? error:""}</p>

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
          Log in
        </button>
		<p>Don't have an account? <span className="font-bold cursor-pointer" onClick={() => setPage(1)}>Sign up</span></p>
      </form>
    </div>
  );
}
