import Button from '../components/Button'
import Input from '../components/Input'

export default function Register() {
  return (
    <>
      <Button className="absolute right-2 top-2 p-3" text="Login" />
      <section className="w-[1000px] flex items-center justify-center">
        <div className="flex flex-col gap-5 w-[400px]">
          <div className="flex justify-center">
            <p className="font-bold text-2xl">Sign Up</p>
          </div>
          <p>Email</p>
          <Input type="email" placeholder="yoru2@gmail.com" />
          <p>Password</p>
          <Input type="password" placeholder="**********" />
          <Button className="p-2" text="Sign Up" />
        </div>
      </section>
    </>
  )
}
