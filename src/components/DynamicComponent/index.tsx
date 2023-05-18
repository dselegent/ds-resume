import React from 'react'

type DynamicComponentPropsType = {
  is: any
  [propName: string]: any
}

const DynamicComponent: React.FC<DynamicComponentPropsType> = ({ is, ...rest }) => {
  return React.createElement(is, {
    ...rest,
  })
}

export default DynamicComponent
