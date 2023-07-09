import React from 'react'
import type { IEDUBACKGROUND } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

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

type EduBackgroundCom1PropsType = {
  modelData: IEDUBACKGROUND // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const EduBackgroundCom1: React.FC<EduBackgroundCom1PropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='eduBackgroundContent box-border'>
      {/* 教学背景 */}
      <div className='w-full flex-col'>
        {modelData.LIST.map((item, index) => (
          <div className='box-border w-full f-b-c flex-col pb-1 pt-4' key={index}>
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
    </section>
  )
}

export default EduBackgroundCom1
