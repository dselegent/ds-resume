import React from 'react'
import type { ICAMPUSEXPERIENCE } from '@/interface/model'
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

type CampusExperienceModelComPropsType = {
  modelData: ICAMPUSEXPERIENCE // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const CampusExperienceModelCom: React.FC<CampusExperienceModelComPropsType> = ({ modelData, modelStyle }) => {
  return (
    <section className='campusExperienceContent box-border'>
      {/* 校园经历 */}
      <div className='campueExperienceList pt-4'>
        {modelData.LIST.map((item, index) => (
          <div className='mt-5 w-full f-b-c flex-col' key={index}>
            {/* 经历时间 */}
            <DateSchoolBox {...modelStyle} className='mb-2 w-full flex justify-between letter-2 first:min-w-41'>
              {modelData.isShow.date && <span>{item.date.join('-')}</span>}
              {modelData.isShow.campusBriefly && <span>{item.campusBriefly}</span>}
              {modelData.isShow.campusDuty && <span>{item.campusDuty}</span>}
            </DateSchoolBox>
            {/* 简述 */}
            {modelData.isShow.campusContent && (
              <Describe {...modelStyle} className='mb-3 w-full'>
                {item.campusContent}
              </Describe>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default CampusExperienceModelCom
