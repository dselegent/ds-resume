import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import WorksDisplayCom1 from '@/material/Common/WorksDisplay/WorksDisplayCom1'
import type { IWORKSDISPLAY } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const WorksDisplay2Box = styled.section<{
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

  .workDisplayContent {
    flex: 1;
    .workDisplayList {
      padding: 0;
    }
  }
`

type WorksDisplay2PropsType = {
  className: string
  modelData: IWORKSDISPLAY // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const WorksDisplay2: React.FC<WorksDisplay2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <WorksDisplay2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <WorksDisplayCom1 modelData={modelData} modelStyle={modelStyle} />
    </WorksDisplay2Box>
  )
}

export default WorksDisplay2
