import React from 'react'
import type { IWORKSDISPLAY } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const WorksDisplayItem = styled.li<{
  textFontSize: string
  textColor: string
  textFontWeight: number
}>`
  h1 {
    ${props => ({
      fontSize: props.textFontSize,
      color: props.textColor,
      fontWeight: props.textFontWeight,
    })}
  }

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

type WorksDisplayCom1PropsType = {
  modelData: IWORKSDISPLAY // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const WorksDisplayCom1: React.FC<WorksDisplayCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='workDisplayContent box-border'>
      {/* 作品展示 */}
      <ul className='workDisplayList box-border flex-col items-start pt-4'>
        {modelData.LIST.map((item: any, index: number) => (
          <WorksDisplayItem {...modelStyle} key={index} className='flex-col list-none items-start'>
            <h1 className='m-0 letter-2'>{item.worksName}</h1>
            <a className='text-sm' href={item.worksLink} target='_blank' rel='noreferrer'>
              {item.worksLink}
            </a>
          </WorksDisplayItem>
        ))}
      </ul>
    </section>
  )
}

export default WorksDisplayCom1
