import React from 'react'
import { Button } from 'antd'

type ZoomAndOutPropsType = {
  setSizeCenter: Function
}

const ZoomAndOut: React.FC<ZoomAndOutPropsType> = ({ setSizeCenter }) => {
  const [number, { inc: incNumber, dec: decNumber }] = useCounter(100, { min: 50, max: 150 })
  // 加
  const { run: increase } = useThrottleFn(
    () => {
      if (number >= 150) return
      incNumber(5)
      setSizeCenter((number + 5) / 100)
    },
    {
      wait: 500,
    }
  )
  // 减
  const { run: decrease } = useThrottleFn(
    () => {
      if (number <= 50) return
      decNumber(5)
      setSizeCenter((number - 5) / 100)
    },
    {
      wait: 500,
    }
  )

  return (
    <section className='absolute left-1/2 top-17 h-6 w-26 f-b-c rounded-3.5 bg-[#e2e4e7] -translate-x-1/2'>
      <Button
        className='h-6 w-6 f-c-c cursor-pointer border-[#bbb] rounded-3.5 bg-[#eee] p-0 pb-1.25 text-2xl text-[#888]'
        onClick={decrease}
      >
        -
      </Button>
      <div className='h-6 w-10 f-c-c text-sm text-[#888]'>{number}%</div>
      <Button
        className='h-6 w-6 f-c-c cursor-pointer border-[#bbb] rounded-3.5 bg-[#eee] p-0 pb-1 text-lg text-[#888]'
        onClick={increase}
      >
        +
      </Button>
    </section>
  )
}

export default ZoomAndOut
