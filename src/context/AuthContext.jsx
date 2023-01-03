import { useContext, createContext } from 'react'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../firebase/firebase'

const context = createContext()

export function useAuth() {
  return useContext(context)
}

export default function AuthContext({ children }) {
  const createUser = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password)
  }

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }

  return (
    <context.Provider value={{ createUser, login }}>
      {children}
    </context.Provider>
  )
}
