export default function App() {
  return (
    <main className="h-screen w-[100%] flex">
      <button className="absolute right-2 top-2 bg-green-300 p-3 rounded ">
        Sign Up
      </button>
      <div className="bg-green-300 w-[500px] h-screen"></div>
      <section className="w-[1000px] flex items-center justify-center">
        <div className="flex flex-col gap-5 w-[400px]">
          <div className="flex justify-center">
            <p className="font-bold text-2xl">Login</p>
          </div>
          <p>Email</p>
          <input
            className="outline-none p-3 border rounded-md border-gray-200"
            type="email"
            name="email"
            placeholder="yoru2@gmail.com"
          />
          <p>Password</p>
          <input
            className="outline-none p-3 border rounded-md border-gray-200"
            type="password"
            name="password"
            placeholder="**********"
          />
          <p className="self-end">Forgot your password?</p>
          <button className="bg-green-300 p-2 rounded-lg">Login</button>
        </div>
      </section>
    </main>
  )
}
