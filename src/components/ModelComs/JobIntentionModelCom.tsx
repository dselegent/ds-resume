import React from 'react'
import type { IJOBINTENTION } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const JobIntention = styled.section<{
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

const JobIntentionItem = styled.li<{
  isShow: boolean
  textFontSize: string
  textColor: string
  textFontWeight: number
}>`
  ${props => ({
    display: props.isShow ? '' : 'none',
    fontSize: props.textFontSize,
    color: props.textColor,
    fontWeight: props.textFontWeight,
  })}

  i {
    margin-right: 8px;
    font-size: 17px;
  }
`

type JobIntentionModelComPropsType = {
  children: React.ReactNode
  modelData: IJOBINTENTION // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const JobIntentionModelCom: React.FC<JobIntentionModelComPropsType> = ({ children, modelData, modelStyle }) => {
  return (
    <JobIntention {...modelStyle} className='relative box-border'>
      {/* 标题 */}
      {children}
      {/* 求职意向 */}
      <ul className='mt-6 flex justify-between'>
        {/* 求职类型 */}
        <JobIntentionItem
          className='flex list-none items-center letter-2'
          {...modelStyle}
          isShow={modelData.isShow.jobSearchType}
        >
          <i className='i-material-symbols-article-outline-rounded'></i>
          {modelData.jobSearchType}
        </JobIntentionItem>
        {/* 意向岗位 */}
        <JobIntentionItem
          className='flex list-none items-center letter-2'
          {...modelStyle}
          isShow={modelData.isShow.intendedPositions}
        >
          <i className='i-ant-design-user-add-outlined'></i>
          {modelData.intendedPositions}
        </JobIntentionItem>
        {/* 意向城市 */}
        <JobIntentionItem
          className='flex list-none items-center letter-2'
          {...modelStyle}
          isShow={modelData.isShow.intendedCity}
        >
          <i className='i-ant-design-environment-outlined'></i>
          {modelData.intendedCity}
        </JobIntentionItem>
        {/* 期望薪资 */}
        <JobIntentionItem
          className='flex list-none items-center letter-2'
          {...modelStyle}
          isShow={modelData.isShow.expectSalary}
        >
          <i className='i-ant-design-pay-circle-outlined'></i>
          {modelData.expectSalary}
        </JobIntentionItem>
        {/* 求职状态 */}
        <JobIntentionItem
          className='flex list-none items-center letter-2'
          {...modelStyle}
          isShow={modelData.isShow.jobStatus}
        >
          <i className='i-material-symbols-pending-actions-rounded'></i>
          {modelData.jobStatus}
        </JobIntentionItem>
      </ul>
    </JobIntention>
  )
}

export default JobIntentionModelCom
