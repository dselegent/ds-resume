import React from 'react'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type ModelTitle2PropsType = {
  title: string
  modelStyle: IMODELSTYLE // 模块样式
}

const Title = styled.h1<{
  firstTitleFontSize: string
  themeColor: string
}>`
  ${props => ({
    fontSize: props.firstTitleFontSize,
    color: props.themeColor,
  })}
`

const ModelTitle2: React.FC<ModelTitle2PropsType> = ({ title, modelStyle }) => {
  return (
    <section className='modelTitleBox w-37.5'>
      <aside className='titleBox h-full flex items-center pr-4'>
        <Title className='font-600 letter-2' {...modelStyle}>
          {title}
        </Title>
      </aside>
    </section>
  )
}

export default ModelTitle2
