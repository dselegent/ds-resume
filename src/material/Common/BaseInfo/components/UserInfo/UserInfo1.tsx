import React from 'react'

import type { IBASEINFO } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const Name = styled.h1<{
  titleFontSize: string
  titleColor: string
  titleFontWeight: number
}>(null, props => ({
  fontSize: props.titleFontSize,
  color: props.titleColor,
  fontWeight: props.titleFontWeight,
}))

const Abstract = styled.p<{
  isShow: boolean
  textFontSize: string
  titleColor: string
  titleFontWeight: number
}>(null, props => ({
  display: props.isShow ? 'block' : 'none',
  fontSize: props.textFontSize,
  color: props.titleColor,
  fontWeight: props.titleFontWeight,
}))

const Li = styled.li<{
  isShow: boolean
  textFontSize: string
  textColor: string
  titleFontWeight: number
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  height: 18px;
  padding-right: 24px;
  margin-right: 10px;

  &:not(:last-child) {
    border-right: 2px solid #b4b4b4;
  }

  ${props => ({
    display: props.isShow ? 'block' : 'none',
    fontSize: props.textFontSize,
    color: props.textColor,
    fontWeight: props.titleFontWeight,
  })}
`

type UserInfo1PropsType = {
  modelData: IBASEINFO // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const UserInfo1: React.FC<UserInfo1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='flex flex-col justify-between'>
      <aside className='flex flex-col justify-between'>
        <Name className='mb-2.5' {...modelStyle}>
          {modelData.name}
        </Name>
        <Abstract className={modelData.abstract} isShow={modelData.isShow.abstract} {...modelStyle}>
          {modelData.abstract}
        </Abstract>
      </aside>
      <aside>
        <ul className='flex'>
          <Li isShow={modelData.isShow.age} {...modelStyle}>
            {modelData.age}岁
          </Li>
          <Li isShow={modelData.isShow.address} {...modelStyle}>
            {modelData.address}
          </Li>
          <Li isShow={modelData.isShow.workService} {...modelStyle}>
            {modelData.workService}年经验
          </Li>
          <Li isShow={modelData.isShow.phoneNumber} {...modelStyle}>
            {modelData.phoneNumber}
          </Li>
          <Li isShow={modelData.isShow.email} {...modelStyle}>
            {modelData.email}
          </Li>
        </ul>
      </aside>
    </section>
  )
}

export default UserInfo1
