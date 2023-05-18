import React from 'react'
import defaultAvatar from '@/assets/images/people.jpg'
import { Image } from 'antd'

const CircleAvatarBox = styled.section<{
  width: string
  height: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border: 3px solid #e5e5e5;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`

type CircleAvatarPropsType = {
  width?: string
  height?: string
}

const CircleAvatar: React.FC<CircleAvatarPropsType> = ({ width = '115px', height = '115px' }) => {
  return (
    <CircleAvatarBox width={width} height={height}>
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
