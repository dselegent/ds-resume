import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import SkillSpecialtiesCom1 from '@/material/Common/SkillSpecialties/SkillSpecialtiesCom1'
import type { ISKILLSPECIALTIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const SkillSpecialties2Box = styled.section<{
  mTop: number
  mBottom: number
  pTop: number
  pBottom: number
  pLeftRight: number
}>`
  box-sizing: border-box;
  display: flex;
  align-items: center;

  ${props => ({
    marginTop: props.mTop + 'px',
    marginBottom: props.mBottom + 'px',
    paddingTop: props.pTop + 'px',
    paddingBottom: props.pBottom + 'px',
    paddingLeft: props.pLeftRight + 'px',
    paddingRight: props.pLeftRight + 'px',
  })}

  .skillSpecialtiesContent {
    flex: 1;
    ul {
      padding-top: 0;
    }
  }
`

type SkillSpecialties2PropsType = {
  className: string
  modelData: ISKILLSPECIALTIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const SkillSpecialties2: React.FC<SkillSpecialties2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <SkillSpecialties2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <SkillSpecialtiesCom1 modelData={modelData} modelStyle={modelStyle} />
    </SkillSpecialties2Box>
  )
}

export default SkillSpecialties2
