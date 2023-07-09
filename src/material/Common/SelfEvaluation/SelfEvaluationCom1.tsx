import React from 'react'
import type { IHOBBIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const SelfEvaluationContent = styled.p<{
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

type SelfEvaluationCom1PropsType = {
  modelData: IHOBBIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const SelfEvaluationCom1: React.FC<SelfEvaluationCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='selfEvaluationContent box-border'>
      {/* 兴趣爱好 */}
      <aside className='selfEvaluationContent box-border flex pt-4'>
        <SelfEvaluationContent {...modelStyle} className='lh-normal letter-2'>
          {modelData.content}
        </SelfEvaluationContent>
      </aside>
    </section>
  )
}

export default SelfEvaluationCom1
