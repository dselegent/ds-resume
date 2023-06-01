import React from 'react'
import templateBg from '@/assets/images/template1_bg_1.png'
import type { IBASEINFO } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'
import UserInfoCom1 from './components/UserInfo/UserInfo1'
import AvatarCom1 from './components/Avatar/Avatar1'

const BaseInfoSection = styled.section<{
  mTop: number
  mBottom: number
  pTop: number
  pBottom: number
  pLeftRight: number
}>(
  {
    backgroundImage: `url(${templateBg})`,
  },
  props => ({
    marginTop: props.mTop + 'px',
    marginBottom: props.mBottom + 'px',
    paddingTop: props.pTop + 'px',
    paddingBottom: props.pBottom + 'px',
    paddingLeft: props.pLeftRight + 'px',
    paddingRight: props.pLeftRight + 'px',
  })
)

type BaseInfoCom1PropsType = {
  modelData: IBASEINFO // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const BaseInfoCom1: React.FC<BaseInfoCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <BaseInfoSection
      {...modelStyle}
      className='box-border h-62.5 w-full flex justify-between border-0 border-b border-gray-300 border-dashed bg-no-repeat py-10 pl-7.5 pr-12.5'
    >
      {/* 个人信息 */}
      <UserInfoCom1 modelData={modelData} modelStyle={modelStyle} />
      {/* 头像 */}
      <AvatarCom1 modelData={modelData} />
    </BaseInfoSection>
  )
}

export default BaseInfoCom1
