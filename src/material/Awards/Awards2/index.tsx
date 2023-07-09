import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import AwardsCom1 from '@/material/Common/Awards/AwardsCom1'
import type { IAWARDS } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const Awards2Box = styled.section<{
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

  .awardsContent {
    flex: 1;
    .awardsList {
      padding: 0;
    }
  }
`

type Awards2PropsType = {
  className: string
  modelData: IAWARDS // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const Awards2: React.FC<Awards2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <Awards2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <AwardsCom1 modelData={modelData} modelStyle={modelStyle} />
    </Awards2Box>
  )
}

export default Awards2
