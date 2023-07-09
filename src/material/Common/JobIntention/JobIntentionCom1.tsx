import React from 'react'
import type { IJOBINTENTION } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

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

type JobIntention2PropsType = {
  modelData: IJOBINTENTION // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const JobIntention2: React.FC<JobIntention2PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='jobIntentionContent box-border'>
      {/* 求职意向 */}
      <ul className='flex justify-between p-0 pt-4'>
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
    </section>
  )
}

export default JobIntention2
