import { useSelector,useDispatch } from "react-redux"
import { login } from "../redux/authenticationSlice"
import { logout } from "../redux/authenticationSlice"
import { SignUp } from "../components/Signup"
import { SignIn } from "../components/Signin"
import { useState } from "react"

export const Auth =  () => {
  const [page,setPage] = useState(1)
  const dispatch = useDispatch()
  return (
	<div className="h-screen grid place-items-center">
    {page===1 && <SignUp setPage={setPage} />}
    {page===2 && <SignIn setPage={setPage} />}
  </div>
  )
}
