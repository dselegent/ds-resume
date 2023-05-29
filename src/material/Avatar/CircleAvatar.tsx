import React from 'react'
import defaultAvatar from '@/assets/images/people.jpg'
import type { IBASEINFO } from '@/interface/model'

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
  modelData?: IBASEINFO | null
}

const CircleAvatar: React.FC<CircleAvatarPropsType> = ({ width = '115px', height = '115px', modelData }) => {
  return (
    <CircleAvatarBox
      width={width}
      height={height}
      className='f-c-c cursor-pointer overflow-hidden border-3 border-slate-100 rounded-full border-solid'
    >
      {modelData?.avatar ? (
        <Image
          src={modelData?.avatar}
          alt='circleAvatar'
          width='100%'
          height='100%'
          className='rounded-[8%] object-cover'
          preview={false}
        />
      ) : (
        <Image
          src={defaultAvatar}
          alt='circleAvatar'
          width='100%'
          height='100%'
          className='rounded-[8%] object-cover'
          preview={false}
        />
      )}
    </CircleAvatarBox>
  )
}

export default CircleAvatar
