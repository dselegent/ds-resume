import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import CampusExperienceCom1 from '@/material/Common/CampusExperience/CampusExperienceCom1'
import type { ICAMPUSEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const CampusExperience2Box = styled.section<{
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

  .campusExperienceContent {
    flex: 1;
    .campueExperienceList {
      padding: 0;
    }
  }
`

type CampusExperience2PropsType = {
  className: string
  modelData: ICAMPUSEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const CampusExperience2: React.FC<CampusExperience2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <CampusExperience2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <CampusExperienceCom1 modelData={modelData} modelStyle={modelStyle} />
    </CampusExperience2Box>
  )
}

export default CampusExperience2
