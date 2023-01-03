import Input from '../components/Input'
import Button from '../components/Button'
import Alert from '../components/Alert'
import { danger, success } from '../components/alertTypes'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [showSpin, setShowSpin] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value })
  }

  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleSignInUser = () => {
    setShowSpin(true)
    login(user.email, user.password)
      .then((data) => {
        setShowSpin(false)
        setShowAlert(true)
        setErrors('')
        setUser({ email: '', password: '' })
      })
      .catch((e) => {
        setErrors(e.message)
        setShowSpin(false)
        setShowAlert(true)
        setUser({ email: '', password: '' })
      })
  }

  return (
    <>
      {showAlert && errors === '' && (
        <Alert type={success} setShowAlert={setShowAlert} />
      )}
      {errors !== '' && (
        <Alert type={danger} setShowAlert={setShowAlert} eMessage={errors} />
      )}
      <Button
        className="absolute right-2 top-2 p-3"
        text="Sign Up"
        onClick={() => navigate('/sign-up')}
      />
      <section className="w-[1000px] flex items-center justify-center">
        <div className="flex flex-col gap-5 w-[400px]">
          <div className="flex justify-center">
            <p className="font-bold text-2xl">Login</p>
          </div>
          <p>Email</p>
          <Input
            type="email"
            placeholder="yoru2@gmail.com"
            onChange={handleChangeEmail}
            value={user.email}
          />
          <p>Password</p>
          <Input
            type="password"
            placeholder="**********"
            onChange={handleChangePassword}
            value={user.password}
          />
          <p className="self-end">Forgot your password?</p>
          <Button
            className="p-2"
            text="Login"
            onClick={handleSignInUser}
            showSpin={showSpin}
          />
        </div>
      </section>
    </>
  )
}
