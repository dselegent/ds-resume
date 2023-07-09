import React from 'react'
import type { IWORKEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const WorkExperienceList = styled.div<{
  titleFontSize: string
  titleColor: string
  titleFontWeight: number
}>`
  &:not(:last-child) {
    margin-bottom: 25px;
  }

  .listTitle {
    ${props => ({
      fontSize: props.titleFontSize,
      color: props.titleColor,
      fontWeight: props.titleFontWeight,
    })}
  }
`

const JobContent = styled.div<{
  textFontSize: string
  textColor: string
  textFontWeight: number
  titleFontSize: string
  titleColor: string
  titleFontWeight: number
}>`
  .left {
    ${props => ({
      fontSize: props.titleFontSize,
      color: props.titleColor,
      fontWeight: props.titleFontWeight,
    })}
  }

  li {
    ${props => ({
      fontSize: props.textFontSize,
      color: props.textColor,
      fontWeight: props.textFontWeight,
    })}

    &:not(:last-child) {
      margin-bottom: 6px;
      text-align: justify;
    }
  }
`

type WorkExperienceCom1PropsType = {
  modelData: IWORKEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const WorkExperienceCom1: React.FC<WorkExperienceCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='workExperienceContent box-border'>
      {/* 工作经验 */}
      <div className='workExperienceList box-border pt-4'>
        {modelData.LIST.map((item, index) => (
          <WorkExperienceList className='flex-col' {...modelStyle} key={index}>
            <div className='mb-3 flex justify-between first:min-w-41'>
              {/* 经历时间 */}
              {modelData.isShow.date && <span className='listTitle list-none letter-2'>{item.date.join('-')}</span>}
              {/* 公司名称 */}
              {modelData.isShow.companyName && <span className='listTitle list-none letter-2'>{item.companyName}</span>}
              {/* 主要职责 */}
              {modelData.isShow.posts && <span className='listTitle list-none letter-2'>{item.posts}</span>}
            </div>
            {/* 简述 */}
            <JobContent {...modelStyle} className='flex'>
              <p className='left w-1/5 letter-2'>工作内容</p>
              <div className='flex-1'>
                <ul className='flex-col pl-4.5'>
                  {item.jobContent.map((list, j) => (
                    <li key={j} className='text-justify lh-normal letter-2'>
                      {list.content}
                    </li>
                  ))}
                </ul>
              </div>
            </JobContent>
          </WorkExperienceList>
        ))}
      </div>
    </section>
  )
}

export default WorkExperienceCom1
