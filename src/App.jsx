import Button from './components/Button'
import GreenContainer from './components/GreenContainer'
import Input from './components/Input'

export default function App() {
  return (
    <main className="h-screen w-[100%] flex">
      <Button className="absolute right-2 top-2 p-3" text="Sign Up" />
      <GreenContainer />
      <section className="w-[1000px] flex items-center justify-center">
        <div className="flex flex-col gap-5 w-[400px]">
          <div className="flex justify-center">
            <p className="font-bold text-2xl">Login</p>
          </div>
          <p>Email</p>
          <Input type="email" placeholder="yoru2@gmail.com" />
          <p>Password</p>
          <Input type="password" placeholder="**********" />
          <p className="self-end">Forgot your password?</p>
          <Button className="p-2" text="Login" />
        </div>
      </section>
    </main>
  )
}
