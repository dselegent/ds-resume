import React from 'react'
import type { IPROJECTEXPERIENCE } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const ProjectExperience = styled.section<{
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

const ProjectExperienceList = styled.div<{
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

type ProjectExperienceModelComPropsType = {
  children: React.ReactNode
  modelData: IPROJECTEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const ProjectExperienceModelCom: React.FC<ProjectExperienceModelComPropsType> = ({
  children,
  modelData,
  modelStyle,
}) => {
  return (
    <ProjectExperience {...modelStyle} className='relative box-border'>
      {/* 标题 */}
      {children}
      {/* 工作经验 */}
      <div className='mt-5'>
        {modelData.LIST.map((item, index) => (
          <ProjectExperienceList className='flex-col' {...modelStyle} key={index}>
            <div className='mb-3 flex justify-between first:min-w-41'>
              {/* 经历时间 */}
              {modelData.isShow.date && (
                <span className='listTitle list-none text-justify letter-2'>{item.date.join('-')}</span>
              )}
              {/* 项目名称 */}
              {modelData.isShow.projectName && (
                <span className='listTitle list-none text-justify letter-2'>{item.projectName}</span>
              )}
              {/* 主要职责
              {modelData.isShow.posts && (
                <span className='listTitle list-none text-justify letter-2'>{item.posts}</span>
              )} */}
            </div>
            {/* 简述 */}
            <ProjectContent {...modelStyle} className='flex'>
              <p className='left w-1/5 letter-2'>工作内容</p>
              <div className='flex-1'>
                <ul className='flex-col'>
                  {item.projectContent.map((list, j) => (
                    <li key={j} className='text-justify lh-normal letter-2'>
                      {list.content}
                    </li>
                  ))}
                </ul>
              </div>
            </ProjectContent>
          </ProjectExperienceList>
        ))}
      </div>
    </ProjectExperience>
  )
}

export default ProjectExperienceModelCom
