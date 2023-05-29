import React from 'react'

type ResumeBackgroundType = {
  children: React.ReactNode
}

const ResumeBackground: React.FC<ResumeBackgroundType> = ({ children }) => {
  const customContentPdf = useRef<HTMLDivElement>(null)

  return (
    <section className='relative mx-auto my-10 min-h-290 w-205 flex bg-white'>
      <div ref={customContentPdf}>{children}</div>
    </section>
  )
}

export default ResumeBackground
