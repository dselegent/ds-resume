import React from 'react'
import type { IAWARDS } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const AwardList = styled.ul<{
  textFontSize: string
  textColor: string
  textFontWeight: number
}>`
  &:not(:last-child) {
    margin-bottom: 20px;
  }

  li {
    ${props => ({
      fontSize: props.textFontSize,
      color: props.textColor,
      fontWeight: props.textFontWeight,
    })}
  }
`

type AwardsCom1PropsType = {
  modelData: IAWARDS // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const AwardsCom1: React.FC<AwardsCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='awardsContent box-border'>
      <div className='awardsList box-border w-full flex-col pt-4'>
        {modelData.LIST.map((item: any, index: number) => (
          <AwardList className='f-b-c' {...modelStyle} key={index}>
            {/* 获奖日期 */}
            {modelData.isShow.date && <li className='list-none letter-2'>{item.date}</li>}
            {/* 奖项名称 */}
            {modelData.isShow.awardsName && <li className='list-none letter-2'>{item.awardsName}</li>}
            {/* 奖项等级 */}
            {modelData.isShow.awardsGrade && <li className='list-none letter-2'>{item.awardsGrade}</li>}
          </AwardList>
        ))}
      </div>
    </section>
  )
}

export default AwardsCom1
