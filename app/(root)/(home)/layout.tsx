import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='relative left-0 top-0 min-h-screen bg-dark-1'>
      <Navbar/>
      <div className='flex  '>
        <Sidebar />
        <section className='bg-slate-300'>
          {children}
        </section>
      </div>
    </main>
  )
}

export default layout
