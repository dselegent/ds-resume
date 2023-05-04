import React from 'react'
import logo from '@/assets/logo.png'

type NavBarPropsType = { fontColor: string }

const LogoCom: React.FC<NavBarPropsType> = ({ fontColor }) => {
  return (
    <Link to='/' className='h-full flex items-center'>
      <img className='w-9' src={logo} alt='logo' />
      <span
        className={
          'ml-3 font-[cursive] text-2xl font-600 letter-2 transition-colors text-font_color ' + `text-${fontColor}`
        }
      >
        ds化简
      </span>
    </Link>
  )
}

export default LogoCom
