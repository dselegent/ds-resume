import React from 'react'
import type { IWORKSDISPLAY } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const WorksDisplay = styled.section<{
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

type WorksDisplayModelComPropsType = {
  children: React.ReactNode
  modelData: IWORKSDISPLAY // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const WorksDisplayModelCom: React.FC<WorksDisplayModelComPropsType> = ({ children, modelData, modelStyle }) => {
  console.log(modelData)

  return (
    <WorksDisplay {...modelStyle} className='relative box-border'>
      {/* 标题 */}
      {children}
      {/* 作品展示 */}
      <ul className='mt-5 flex-col'>
        {modelData.LIST.map((item: any, index: number) => (
          <WorksDisplayItem {...modelStyle} key={index} className='flex-col list-none items-start'>
            <h1 className='m-0 letter-2'>{item.worksName}</h1>
            <a className='text-sm' href={item.worksLink} target='_blank' rel='noreferrer'>
              {item.worksLink}
            </a>
          </WorksDisplayItem>
        ))}
      </ul>
    </WorksDisplay>
  )
}

export default WorksDisplayModelCom
