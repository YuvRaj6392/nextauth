"use client"
import { signIn, signOut, useSession } from 'next-auth/react';


export default function Appbar() {
  const session=useSession();
  return (
    <div>
      <button onClick={() => {
            signIn();
      }}>Signin</button>
      <br />
      <button onClick={() => {
            signOut();
      }}>
        Logout
      </button>


      {JSON.stringify(session)}
    </div>
  )
}
