import React from 'react'
import type { IHOBBIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const HobbiesContent = styled.p<{
  textFontSize: string
  textColor: string
  textFontWeight: number
}>`
  ${props => ({
    fontSize: props.textFontSize,
    color: props.textColor,
    fontWeight: props.textFontWeight,
  })}
`

type HobbiesCom1PropsType = {
  modelData: IHOBBIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const HobbiesCom1: React.FC<HobbiesCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section {...modelStyle} className='hobbiesContent box-border'>
      {/* 兴趣爱好 */}
      <aside className='box-border flex pt-5'>
        <HobbiesContent {...modelStyle} className='lh-normal letter-2'>
          {modelData.content}
        </HobbiesContent>
      </aside>
    </section>
  )
}

export default HobbiesCom1
