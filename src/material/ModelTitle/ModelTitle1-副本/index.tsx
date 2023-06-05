import React from 'react'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const ModelTitle = styled.section<{
  themeColor: string
  firstTitleFontSize: string
}>`
  border-bottom: 1px solid ${props => props.themeColor};

  h1 {
    ${props => ({
      fontSize: props.firstTitleFontSize,
      color: props.themeColor,
      borderBottom: `3px solid ${props.themeColor}`,
    })}
  }
`

type ModelTitle1PropsType = {
  title: string
  modelStyle: IMODELSTYLE // 模块样式
}

const ModelTitle11: React.FC<ModelTitle1PropsType> = ({ title, modelStyle }) => {
  return (
    <ModelTitle {...modelStyle} className='h-10 w-full flex items-center justify-start'>
      <h1 className='h-full min-h-37.5 flex items-center'>{title}</h1>
    </ModelTitle>
  )
}

export default ModelTitle11
