import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import EduBackgroundCom1 from '@/material/Common/EduBackground/EduBackgroundCom1'
import type { IEDUBACKGROUND } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const EduBackground2Box = styled.section<{
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

  .eduBackgroundContent {
    flex: 1;
    ul {
      padding: 0;
      margin-bottom: 20px;
    }
  }
`

type EduBackground2PropsType = {
  className: string
  modelData: IEDUBACKGROUND // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const EduBackground2: React.FC<EduBackground2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <EduBackground2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <EduBackgroundCom1 modelData={modelData} modelStyle={modelStyle} />
    </EduBackground2Box>
  )
}

export default EduBackground2
