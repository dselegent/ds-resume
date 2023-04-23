import React from 'react'

const TemplateSelect: React.FC = () => {
  return (
    <section className='flex flex-col items-center'>
      <IntroduceTitle title='在线简历制作' subtitle='选择简历模板，点击在线制作，永久云端保存，可一键导出 ' />
      <aside className='w-[1400px] flex flex-wrap justify-between'>
        {[...Array(8).keys()].map((_, index) => (
          <div className='flex flex-[0_0_25%] justify-center' key={index}>
            <TemplateCard />
          </div>
        ))}
      </aside>
    </section>
  )
}

export default TemplateSelect
