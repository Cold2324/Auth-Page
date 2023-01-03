import Button from '../components/Button'
import Input from '../components/Input'
import Alert from '../components/Alert'
import { success } from '../components/alertTypes'
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const [showAlert, setShowAlert] = useState(false)
  const { createUser } = useAuth()

  const handleChangeEmail = (e) => {
    setUser({ ...user, email: e.target.value })
  }

  const handleChangePassword = (e) => {
    setUser({ ...user, password: e.target.value })
  }

  const handleCreateUser = () => {
    createUser(user.email, user.password).then((data) => setShowAlert(true))
  }

  return (
    <>
      {showAlert && <Alert type={success} setShowAlert={setShowAlert} />}
      <Button className="absolute right-2 top-2 p-3" text="Login" />
      <section className="w-[1000px] flex items-center justify-center">
        <div className="flex flex-col gap-5 w-[400px]">
          <div className="flex justify-center">
            <p className="font-bold text-2xl">Sign Up</p>
          </div>
          <p>Email</p>
          <Input
            type="email"
            placeholder="yoru2@gmail.com"
            onChange={handleChangeEmail}
          />
          <p>Password</p>
          <Input
            type="password"
            placeholder="**********"
            onChange={handleChangePassword}
          />
          <Button className="p-2" text="Sign Up" onClick={handleCreateUser} />
        </div>
      </section>
    </>
  )
}
