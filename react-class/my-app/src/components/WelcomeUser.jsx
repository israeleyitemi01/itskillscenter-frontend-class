import React, { useState, useEffect } from 'react'

function WelcomeUser() {
    const [message, setMessage] = useState('')
    useEffect(() => {
        setMessage("Welcome Israel Eyitemi")
    }, [])
  return (
    <div>{message}</div>
  )
}

export default WelcomeUser 