import React from 'react'
import type { IEDUBACKGROUND } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

const EduBackground = styled.section<{
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

const DateSchoolBox = styled.div<{
  titleFontSize: string
  titleColor: string
  titleFontWeight: number
}>`
  ${props => ({
    fontSize: props.titleFontSize,
    color: props.titleColor,
    fontWeight: props.titleFontWeight,
  })}
`

const Describe = styled.p<{
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

type EduBackgroundModelComPropsType = {
  children: React.ReactNode
  modelData: IEDUBACKGROUND // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const EduBackgroundModelCom: React.FC<EduBackgroundModelComPropsType> = ({ children, modelData, modelStyle }) => {
  console.log(modelData)

  return (
    <EduBackground {...modelStyle} className='relative box-border'>
      {/* 标题 */}
      {children}
      {/* 教学鳖精 */}
      <div className='w-full flex-col'>
        {modelData.LIST.map((item, index) => (
          <div className='mt-5 w-full f-b-c flex-col' key={index}>
            {/* 日期和学校 */}
            <DateSchoolBox {...modelStyle} className='mb-2 w-full flex justify-between letter-2 first:min-w-41'>
              {modelData.isShow.date && <span>{item.date.join('-')}</span>}
              {modelData.isShow.schoolName && <span>{item.schoolName}</span>}
              {modelData.isShow.degree && <span>{item.degree}</span>}
            </DateSchoolBox>
            {/* 专业 */}
            {modelData.isShow.specialized && (
              <Describe {...modelStyle} className='mb-3 w-full'>
                {item.specialized}
              </Describe>
            )}
            {/* 教学经历 */}
            {modelData.isShow.majorCourse && (
              <Describe {...modelStyle} className='mb-1.5 w-full'>
                {item.majorCourse}
              </Describe>
            )}
          </div>
        ))}
      </div>
    </EduBackground>
  )
}

export default EduBackgroundModelCom
