import React from 'react'
import type { ISKILLSPECIALTIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const SkillSpecialties = styled.section<{
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

const SkillSpecialtiesItem = styled.li<{
  textFontSize: string
  textColor: string
  textFontWeight: number
}>`
  ${props => ({
    fontSize: props.textFontSize,
    color: props.textColor,
    fontWeight: props.textFontWeight,
  })}

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

type SkillSpecialtiesModelComPropsType = {
  children: React.ReactNode
  modelData: ISKILLSPECIALTIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const SkillSpecialtiesModelCom: React.FC<SkillSpecialtiesModelComPropsType> = ({ children, modelData, modelStyle }) => {
  return (
    <SkillSpecialties {...modelStyle} className='relative box-border'>
      {/* 标题 */}
      {children}
      <ul className='mt-5 px-5'>
        {modelData.LIST.map((item, index) => (
          <SkillSpecialtiesItem {...modelStyle} key={index} className='lh-normal letter-2'>
            {item.introduce}
          </SkillSpecialtiesItem>
        ))}
      </ul>
    </SkillSpecialties>
  )
}

export default SkillSpecialtiesModelCom
