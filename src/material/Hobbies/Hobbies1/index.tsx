import React from 'react'
import ModelTitle1 from '../../ModelTitle/ModelTitle1'
import type { IHOBBIES } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type Hobbies1PropsType = {
  className: string
  modelData: IHOBBIES // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const Hobbies1: React.FC<Hobbies1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <HobbiesModelCom modelData={modelData} modelStyle={modelStyle}>
        {/* 标题 */}
        <ModelTitle1 title={modelData.title} iconfont={modelData.iconfont} />
      </HobbiesModelCom>
    </section>
  )
}

export default Hobbies1
