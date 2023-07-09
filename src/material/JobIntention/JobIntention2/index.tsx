import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import JobIntentionCom1 from '@/material/Common/JobIntention/JobIntentionCom1'
import type { IJOBINTENTION } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const JobIntention2Box = styled.section<{
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

  .jobIntentionContent {
    flex: 1;
    ul {
      padding: 0;
    }
  }
`

type JobIntention2PropsType = {
  className: string
  modelData: IJOBINTENTION // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const JobIntention2: React.FC<JobIntention2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <JobIntention2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <JobIntentionCom1 modelData={modelData} modelStyle={modelStyle} />
    </JobIntention2Box>
  )
}

export default JobIntention2
