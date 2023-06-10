import React from 'react'
import MaterialComponents from '@/utils/registerMaterialCom' // 所有物料组件
import ModelBox from './ModelBox'

const Custom: React.FC = () => {
  // 简历数据
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  return (
    <section>
      {resumeJsonData.LAYOUT === 'classical' && (
        <div className='box-border min-h-290 min-w-205 w-205 bg-white'>
          {resumeJsonData.COMPONENTS.map((item: any, index: number) => (
            <div className='list-group-item' key={index}>
              <ModelBox components={MaterialComponents} item={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default Custom
