import React from 'react'
import type { ISKILLSPECIALTIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

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
`

type SkillSpecialtiesCom1PropsType = {
  modelData: ISKILLSPECIALTIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const SkillSpecialtiesCom1: React.FC<SkillSpecialtiesCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section {...modelStyle} className='skillSpecialtiesContent box-border'>
      <ul className='pl-4.5 pt-4'>
        {modelData.LIST.map((item, index) => (
          <SkillSpecialtiesItem {...modelStyle} key={index} className='lh-normal letter-2'>
            {item.introduce}
          </SkillSpecialtiesItem>
        ))}
      </ul>
    </section>
  )
}

export default SkillSpecialtiesCom1
