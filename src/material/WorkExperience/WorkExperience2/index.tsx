import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import WorkExperienceCom1 from '@/material/Common/WorkExperience/WorkExperienceCom1'
import type { IWORKEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const WorkExperience2Box = styled.section<{
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

  .workExperienceContent {
    flex: 1;
    .workExperienceList {
      padding: 0;
    }
  }
`

type WorkExperience2PropsType = {
  className: string
  modelData: IWORKEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const WorkExperience2: React.FC<WorkExperience2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <WorkExperience2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <WorkExperienceCom1 modelData={modelData} modelStyle={modelStyle} />
    </WorkExperience2Box>
  )
}

export default WorkExperience2
