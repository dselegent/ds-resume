import React from 'react'
import defaultAvatar from '@/assets/images/people.jpg'
import type { IBASEINFO } from '@/interface/model'
import { Image } from 'antd'

const RectangleAvatarBox = styled.section<{
  width: string
  height: string
}>`
  width: ${props => props.width};
  height: ${props => props.height};
`

type RectangleAvatarPropsType = {
  width?: string
  height?: string
  modelData?: IBASEINFO | null
}

const RectangleAvatar: React.FC<RectangleAvatarPropsType> = ({ width = '115px', height = '145px', modelData }) => {
  return (
    <RectangleAvatarBox
      width={width}
      height={height}
      className='f-c-c cursor-pointer overflow-hidden border-3 border-slate-100 rounded border-solid'
    >
      {modelData?.avatar ? (
        <Image
          src={modelData?.avatar}
          alt='rectangleAvatar'
          width='100%'
          height='100%'
          className='rounded object-cover'
          preview={false}
        />
      ) : (
        <Image
          src={defaultAvatar}
          alt='rectangleAvatar'
          width='100%'
          height='100%'
          className='rounded object-cover'
          preview={false}
        />
      )}
    </RectangleAvatarBox>
  )
}

export default RectangleAvatar
