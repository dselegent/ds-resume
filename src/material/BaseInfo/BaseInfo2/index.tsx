import React from 'react'
import { Image } from 'antd'
import avatarComponents from '@/utils/registerAvatarCom'
import type { IBASEINFO } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const BaseInfoBox2 = styled.section<{
  mTop: number
  mBottom: number
  pTop: number
  pBottom: number
  pLeftRight: number
  themeColor: string
}>`
  ${props => ({
    marginTop: props.mTop + 'px',
    marginBottom: props.mBottom + 'px',
    paddingTop: props.pTop + 'px',
    paddingBottom: props.pBottom + 'px',
    paddingLeft: props.pLeftRight + 'px',
    paddingRight: props.pLeftRight + 'px',
  })}
`

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
  textColor: string
  titleFontWeight: number
}>(null, props => ({
  display: props.isShow ? 'block' : 'none',
  fontSize: props.textFontSize,
  color: props.textColor,
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
  padding-right: 12px;
  height: 20px;
  margin-right: 20px;

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

type BaseInfo2PropsType = {
  className: string
  modelData: IBASEINFO // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const BaseInfo2: React.FC<BaseInfo2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <BaseInfoBox2 className={className + ' baseInfoBox2 box-border w-full'} {...modelStyle}>
      {/* 基本信息 */}
      <aside className='userInfo flex-col'>
        <div className='top flex items-end'>
          {/* 个人头像 */}
          {!modelData.avatarShape ? (
            <section className='h-37.5 w-30 overflow-hidden border-4 border-slate-100 border-solid'>
              <Image width='115px' height='145px' src={modelData.avatar} preview={false} alt='avatar' />
            </section>
          ) : (
            <div className='avatar-shape-box mr-12.5'>
              <DynamicComponent
                is={avatarComponents.find((item: any) => item.name === modelData.avatarShape).com}
                modelData={modelData}
              />
            </div>
          )}
          <div className='right'>
            <Name className='m-0 mb-5' {...modelStyle}>
              {modelData.name}
            </Name>
            <Abstract className={modelData.abstract} isShow={modelData.isShow.abstract} {...modelStyle}>
              {modelData.abstract}
            </Abstract>
            <div className='bottom h-11 flex items-end'>
              {/* 年龄、地点、经验等信息 */}
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
            </div>
          </div>
        </div>
      </aside>
    </BaseInfoBox2>
  )
}

export default BaseInfo2
