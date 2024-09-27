import Navbar from '@/components/auth/Navbar'
import React from 'react'

export default function AuthLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}
