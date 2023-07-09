import React from 'react'
import ModelTitle2 from '../../ModelTitle/ModelTitle2'
import HobbiesCom1 from '@/material/Common/Hobbies/HobbiesCom1'
import type { IHOBBIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const Hobbies2Box = styled.section<{
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

  .hobbiesContent {
    flex: 1;
    padding: 0;
  }
`

type Hobbies2PropsType = {
  className: string
  modelData: IHOBBIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const Hobbies2: React.FC<Hobbies2PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <Hobbies2Box className={className} {...modelStyle}>
      <ModelTitle2 title={modelData.title} modelStyle={modelStyle}></ModelTitle2>
      <HobbiesCom1 modelData={modelData} modelStyle={modelStyle} />
    </Hobbies2Box>
  )
}

export default Hobbies2
