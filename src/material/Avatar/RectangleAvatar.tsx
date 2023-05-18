import React from 'react'
import defaultAvatar from '@/assets/images/people.jpg'
import { Image } from 'antd'

const RectangleAvatarBox = styled.section<{
  width: string
  height: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: ${props => props.height};
  border: 3px solid #e5e5e5;
  border-radius: 8%;
  overflow: hidden;
  cursor: pointer;
`

type RectangleAvatarPropsType = {
  width?: string
  height?: string
}

const RectangleAvatar: React.FC<RectangleAvatarPropsType> = ({ width = '115px', height = '145px' }) => {
  return (
    <RectangleAvatarBox width={width} height={height}>
      <Image
        src={defaultAvatar}
        alt='rectangleAvatar'
        width='100%'
        height='100%'
        className='rounded-[8%] object-cover'
        preview={false}
      />
    </RectangleAvatarBox>
  )
}

export default RectangleAvatar
