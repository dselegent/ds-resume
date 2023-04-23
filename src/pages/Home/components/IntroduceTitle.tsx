import React from 'react'

type IntroduceTitlePropsType = {
  title: string
  subtitle: string
}

const IntroduceTitle: React.FC<IntroduceTitlePropsType> = ({ title, subtitle }) => {
  return (
    <section className='h-50 f-c-c flex-col'>
      <h1 className="relative mb-6 text-black letter-3 after:absolute before:absolute after:left-62 after:top-1/2 before:top-1/2 after:h-px after:w-50 before:h-px before:w-50 after:bg-gray-400 before:bg-gray-400 after:content-[''] before:content-[''] before:-left-62">
        {title}
      </h1>
      <p className='text-sm text-gray-400'>{subtitle}</p>
    </section>
  )
}

export default IntroduceTitle
