import React from 'react'
import type { IPROJECTEXPERIENCE } from '@/interface/model'
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

const ProjectContent = styled.div<{
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

type ProjectExperienceCom1PropsType = {
  modelData: IPROJECTEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const ProjectExperienceCom1: React.FC<ProjectExperienceCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='projectExperienceContent box-border'>
      {/* 工作经验 */}
      <div className='projectExperienceList box-border pt-4'>
        {modelData.LIST.map((item, index) => (
          <WorkExperienceList className='flex-col' {...modelStyle} key={index}>
            <div className='mb-3 flex justify-between first:min-w-41'>
              {/* 经历时间 */}
              {modelData.isShow.date && (
                <span className='listTitle list-none text-justify letter-2'>{item.date.join('-')}</span>
              )}
              {/* 项目名称 */}
              {modelData.isShow.projectName && (
                <span className='listTitle list-none text-justify letter-2'>{item.projectName}</span>
              )}
              {/* 主要职责 */}
              {/* {modelData.isShow.posts && (
                <span className='listTitle list-none text-justify letter-2'>{item.posts}</span>
              )} */}
            </div>
            {/* 简述 */}
            <ProjectContent {...modelStyle} className='flex'>
              <p className='left w-1/5 letter-2'>工作内容</p>
              <div className='flex-1'>
                <ul className='flex-col pl-4.5'>
                  {item.projectContent.map((list, j) => (
                    <li key={j} className='text-justify lh-normal letter-2'>
                      {list.content}
                    </li>
                  ))}
                </ul>
              </div>
            </ProjectContent>
          </WorkExperienceList>
        ))}
      </div>
    </section>
  )
}

export default ProjectExperienceCom1
