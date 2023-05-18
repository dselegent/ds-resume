import React from 'react'
import { Popover } from 'antd'
import avatarDic from '@/dictionary/avatarShapeDic'
import avatarComponents from '@/utils/registerAvatarCom'

const content = (
  <div className='flex flex-wrap justify-between gap-3'>
    {avatarComponents.map((item: any) => (
      <DynamicComponent
        is={item.com}
        width={avatarDic[item.name].miniWidth}
        height={avatarDic[item.name].miniHeight}
        key={item.name}
      />
    ))}
  </div>
)

const AvatarPopoverShape: React.FC = () => {
  return (
    <Popover content={content} trigger='click' placement='bottom'>
      <div className='w-18.75'>
        <DynamicComponent is={SquareAvatar} width='75px' height='75px' />
      </div>
    </Popover>
  )
}

export default AvatarPopoverShape
