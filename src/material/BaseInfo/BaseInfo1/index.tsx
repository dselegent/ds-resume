import React from 'react'
import BaseInfoCom1 from '@/material/Common/BaseInfo/BaseInfoCom1'
import type { IBASEINFO } from '@/interface/model'
import type { IMODELSTYLE } from '@/interface/modelStyle'

type BaseInfo1PropsType = {
  className: string
  modelData: IBASEINFO // 模块数据
  modelStyle: IMODELSTYLE // 模块样式
}

const BaseInfo1: React.FC<BaseInfo1PropsType> = ({ className, modelData, modelStyle }) => {
  return (
    <section className={className}>
      <BaseInfoCom1 modelData={modelData} modelStyle={modelStyle} />
    </section>
  )
}

export default BaseInfo1
