import React from 'react'
import type { IAWARDS } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const Awards = styled.section<{
  mTop: number
  mBottom: number
  pTop: number
  pBottom: number
  pLeftRight: number
  themeColor: string
}>`
  &::before {
    content: '';
    position: absolute;
    width: 1px;
    height: 100%;
    background-color: ${props => props.themeColor};
    left: 35px;
    top: 5px;
  }
  ${props => ({
    marginTop: props.mTop + 'px',
    marginBottom: props.mBottom + 'px',
    paddingTop: props.pTop + 'px',
    paddingBottom: props.pBottom + 'px',
    paddingLeft: props.pLeftRight + 'px',
    paddingRight: props.pLeftRight + 'px',
  })}
`

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

type AwardsModelComPropsType = {
  children: React.ReactNode
  modelData: IAWARDS // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const AwardsModelCom: React.FC<AwardsModelComPropsType> = ({ children, modelData, modelStyle }) => {
  return (
    <Awards {...modelStyle} className='relative box-border'>
      {/* 标题 */}
      {children}
      <div className='mt-5 w-full flex-col'>
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
    </Awards>
  )
}

export default AwardsModelCom
