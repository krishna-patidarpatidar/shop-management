import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Auth = ({children}) => {
  const navigate = useNavigate()
 useEffect(()=>{
  const token = localStorage.getItem("token")
  if(!token){
    navigate("/login")
  }
 }, [])

  return (
    <>{children}</>
  )
}

export default Auth
