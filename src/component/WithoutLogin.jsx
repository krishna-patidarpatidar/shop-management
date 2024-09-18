import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WithoutLogin = ({children}) => {
  const navigate = useNavigate()
  useEffect(()=>{
    const token = localStorage.getItem("auth")
    if(token){
      navigate("/admin")
    }
  }, [])
  return (
    <>{children}</>
  )
}

export default WithoutLogin
