import React from 'react'
import defaultAvatar from '@/assets/images/people.jpg'
import { Image } from 'antd'

const SquareAvatarBox = styled.section<{
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

type SquareAvatarPropsType = {
  width?: string
  height?: string
}

const SquareAvatar: React.FC<SquareAvatarPropsType> = ({ width = '120px', height = '120px' }) => {
  return (
    <SquareAvatarBox width={width} height={height}>
      <Image
        src={defaultAvatar}
        alt='squareAvatar'
        width='100%'
        height='100%'
        className='rounded-[8%] object-cover'
        preview={false}
      />
    </SquareAvatarBox>
  )
}

export default SquareAvatar
