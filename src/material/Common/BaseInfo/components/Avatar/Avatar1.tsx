import React from 'react'
import { Image } from 'antd'
import avatarComponents from '@/utils/registerAvatarCom'
import type { IBASEINFO } from '@/interface/model'

type UserInfo1PropsType = {
  modelData: IBASEINFO // 模块数据
}

const Avatar1: React.FC<UserInfo1PropsType> = ({ modelData }) => {
  return (
    <>
      {!modelData.avatarShape ? (
        <section className='h-37.5 w-30 overflow-hidden border-4 border-slate-100 border-solid'>
          <Image width='115px' height='145px' src={modelData.avatar} preview={false} alt='avatar' />
        </section>
      ) : (
        <DynamicComponent
          is={avatarComponents.find((item: any) => item.name === modelData.avatarShape).com}
          modelData={modelData}
        />
      )}
    </>
  )
}

export default Avatar1
