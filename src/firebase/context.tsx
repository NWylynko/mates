import { createContext, useContext, useState, useEffect } from "react"

import type { Unsubscribe, User } from "firebase/auth";

import { onAuth } from "./auth";

import { LoadingPage } from "../components/Loading";
import { Person } from "../types/Person";
import { people } from "./firestore";

interface FirebaseContext {
  user: User | null;
}

const firebaseContext = createContext<FirebaseContext>({
  user: null,
})

export const useFirebase = () => useContext(firebaseContext)

export const FirebaseProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuth(user => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const { data: peopleList, loading: loadingPeople, error: peopleError } = useFirestore(user, people.getAll)

  console.log({ peopleList, loadingPeople, peopleError })

  if (loading) {
    return <LoadingPage />
  }

  return (
    <firebaseContext.Provider value={{ user }}>
      {children}
    </firebaseContext.Provider>
  )
}

const useFirestore = (user: User | null, getData: (userId: string, callback: (data: any[]) => void, error: (error: Error) => void) => Unsubscribe) => {

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    if (!user) return;
    const unsub = getData(user.uid, (data) => {
      console.log(data)
      setData(data)
      setLoading(false)
    }, (error) => {
      setError(error)
      setLoading(false)
    })
    return () => unsub()
  }, [user, getData])

  return { data, loading, error }
}
  