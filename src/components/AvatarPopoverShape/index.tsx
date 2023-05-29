import React from 'react'
import defaultAvatar from '@/assets/imgaes/default-avatar.png'
import type { IMATERIALITEM } from '@/interface/material'
import avatarDic from '@/dictionary/avatarShapeDic'
import avatarComponents from '@/utils/registerAvatarCom'
import { Popover } from 'antd'

type AvatarPopoverShapePropsType = {
  modelItem: IMATERIALITEM
  changeShape: Function
}

const AvatarPopoverShape: React.FC<AvatarPopoverShapePropsType> = ({ modelItem, changeShape }) => {
  return (
    <Popover
      content={
        <div className='flex flex-wrap justify-between gap-3'>
          {avatarComponents.map((item: any) => (
            <div className='mb-2.5 f-c-c' key={item.name} onClick={() => changeShape(item.name)}>
              <DynamicComponent
                is={item.com}
                width={avatarDic[item.name].miniWidth}
                height={avatarDic[item.name].miniHeight}
              />
            </div>
          ))}
        </div>
      }
      trigger='click'
      placement='bottom'
    >
      <div className='w-18.75'>
        {!modelItem.data.avatarShape ? (
          <img src={defaultAvatar} alt='头像形状选择' />
        ) : (
          <DynamicComponent is={SquareAvatar} width='75px' height='75px' />
        )}
      </div>
    </Popover>
  )
}

export default AvatarPopoverShape
