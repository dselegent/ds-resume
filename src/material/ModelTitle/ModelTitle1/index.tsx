import React from 'react'

const ModelTileBox = styled.section<{
  themeColor: string
  firstTitleFontSize: number
}>`
  .iconBox {
    background-color: ${props => props.themeColor};
  }

  .rightTitle {
    h1 {
      ${props => ({
        color: props.themeColor,
        fontSize: props.firstTitleFontSize,
      })}
    }
  }
`

type ModelTitle1PropsType = {
  title: string
  iconfont: string
}

const ModelTitle1: React.FC<ModelTitle1PropsType> = ({ title, iconfont }) => {
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  return (
    <ModelTileBox {...resumeJsonData.GLOBAL_STYLE} className='relative flex items-center -left-7.5'>
      <aside className='iconBox mr-2.5 h-7.5 w-7.5 f-c-c rounded-full'>
        <i className={`i-${iconfont} text-white`}></i>
      </aside>
      <aside className='rightTitle'>
        <h1>{title}</h1>
      </aside>
    </ModelTileBox>
  )
}

export default ModelTitle1
