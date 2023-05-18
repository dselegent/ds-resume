import React from 'react'
import defaultAvatar from '@/assets/images/people.jpg'
import { Image } from 'antd'

const CircleAvatarBox = styled.section<{
  width: string
  height: string
}>`
  width: ${props => props.width};
  height: ${props => props.height};
`

type CircleAvatarPropsType = {
  width?: string
  height?: string
}

const CircleAvatar: React.FC<CircleAvatarPropsType> = ({ width = '115px', height = '115px' }) => {
  return (
    <CircleAvatarBox
      width={width}
      height={height}
      className='f-c-c cursor-pointer overflow-hidden border-3 border-gray-300 rounded-full border-solid'
    >
      <Image
        src={defaultAvatar}
        alt='circleAvatar'
        width='100%'
        height='100%'
        className='rounded-[8%] object-cover'
        preview={false}
      />
    </CircleAvatarBox>
  )
}

export default CircleAvatar
