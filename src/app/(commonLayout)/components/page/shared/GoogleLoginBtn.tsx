'use client'
import { Button } from '@nextui-org/react'
import { signIn } from 'next-auth/react'
import React from 'react'

const GoogleLoginBtn = () => {
  return (
    <Button
    onClick={() => {
     signIn('google', { callbackUrl: '/' })
    }}
    >Log in with Google</Button>
  )
}

export default GoogleLoginBtn



