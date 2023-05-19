import React from 'react'
import logo from '@/assets/logo.png'

const LogoTextSapn = styled.span<{
  fontColor: string
}>`
  color: ${props => props.fontColor};
`

type NavBarPropsType = { fontColor: string }

const LogoCom: React.FC<NavBarPropsType> = ({ fontColor }) => {
  return (
    <Link to='/' className='h-full flex items-center'>
      <img className='w-9' src={logo} alt='logo' />
      <LogoTextSapn className='ml-3 font-[cursive] text-2xl font-600 transition-colors letter-2' fontColor={fontColor}>
        ds化简
      </LogoTextSapn>
    </Link>
  )
}

export default LogoCom
