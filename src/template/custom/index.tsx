import React from 'react'
import ModelBox from './ModelBox'

const Custom: React.FC = () => {
  // 简历数据
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  return (
    <section>
      {resumeJsonData.LAYOUT === 'classical' && (
        <div className='box-border min-h-290 min-w-205 w-205 bg-white'>
          <div className='list-group-item'>
            <ModelBox />
          </div>
        </div>
      )}
    </section>
  )
}

export default Custom
