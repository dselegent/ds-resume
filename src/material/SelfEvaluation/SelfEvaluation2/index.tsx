import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import SelfEvaluationCom1 from '@/material/Common/SelfEvaluation/SelfEvaluationCom1'
import type { ISELFEVALUATION } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const SelfEvaluation2Box = styled.section<{
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

  .selfEvaluationContent {
    flex: 1;
    padding: 0;
  }
`

type SelfEvaluation2PropsType = {
  className: string
  modelData: ISELFEVALUATION // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const SelfEvaluation2: React.FC<SelfEvaluation2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <SelfEvaluation2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <SelfEvaluationCom1 modelData={modelData} modelStyle={modelStyle} />
    </SelfEvaluation2Box>
  )
}

export default SelfEvaluation2
