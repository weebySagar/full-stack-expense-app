import Navbar from '@/components/dashboard/Navbar'
import React from 'react'

export default function AppLayout({ children }) {
    return (
        <main>
            <Navbar />
            <div className="container-fluid mt-4">
                {children}
            </div>
        </main>
    )
}
