import React from 'react'
import type { IHOBBIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const Hobbies = styled.section<{
  mTop: number
  mBottom: number
  pTop: number
  pBottom: number
  pLeftRight: number
  themeColor: string
}>`
  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: ${props => props.themeColor};
    left: 35px;
    top: 5px;
  }
  ${props => ({
    marginTop: props.mTop + 'px',
    marginBottom: props.mBottom + 'px',
    paddingTop: props.pTop + 'px',
    paddingBottom: props.pBottom + 'px',
    paddingLeft: props.pLeftRight + 'px',
    paddingRight: props.pLeftRight + 'px',
  })}
`

const HobbiesContent = styled.p<{
  textFontSize: string
  textColor: string
  textFontWeight: number
}>`
  ${props => ({
    fontSize: props.textFontSize,
    color: props.textColor,
    fontWeight: props.textFontWeight,
  })}
`

type HobbiesModelComPropsType = {
  children: React.ReactNode
  modelData: IHOBBIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const HobbiesModelCom: React.FC<HobbiesModelComPropsType> = ({ children, modelData, modelStyle }) => {
  return (
    <Hobbies {...modelStyle} className='relative box-border'>
      {/* 标题 */}
      {children}
      {/* 兴趣爱好 */}
      <aside className='mt-5 flex'>
        <HobbiesContent {...modelStyle} className='lh-normal letter-2'>
          {modelData.content}
        </HobbiesContent>
      </aside>
    </Hobbies>
  )
}

export default HobbiesModelCom
