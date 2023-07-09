import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import ProjectExperienceCom1 from '@/material/Common/ProjectExperience/ProjectExperienceCom1'
import type { IPROJECTEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const ProjectExperience2Box = styled.section<{
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

  .projectExperienceContent {
    flex: 1;
    .projectExperienceList {
      padding: 0;
    }
  }
`

type ProjectExperience2PropsType = {
  className: string
  modelData: IPROJECTEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const ProjectExperience2: React.FC<ProjectExperience2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <ProjectExperience2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <ProjectExperienceCom1 modelData={modelData} modelStyle={modelStyle} />
    </ProjectExperience2Box>
  )
}

export default ProjectExperience2
