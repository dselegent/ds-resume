import React from 'react'
import defaultAvatar from '@/assets/images/people.jpg'
import { Image } from 'antd'

const SquareAvatarBox = styled.section<{
  width: string
  height: string
}>`
  width: ${props => props.width};
  height: ${props => props.height};
`

type SquareAvatarPropsType = {
  width?: string
  height?: string
}

const SquareAvatar: React.FC<SquareAvatarPropsType> = ({ width = '120px', height = '120px' }) => {
  return (
    <SquareAvatarBox
      width={width}
      height={height}
      className='f-c-c cursor-pointer overflow-hidden border-3 border-gray-300 rounded border-solid'
    >
      <Image
        src={defaultAvatar}
        alt='squareAvatar'
        width='100%'
        height='100%'
        className='rounded object-cover'
        preview={false}
      />
    </SquareAvatarBox>
  )
}

export default SquareAvatar
