import React from 'react'
import type { TemplateSelectHandle } from './TemplateSelect'
import type { CustomTemplateHandle } from './CustomTemplate'
import indexImg from '@/assets/images/index.png'

type ProjectIntroducePropsType = TemplateSelectHandle & CustomTemplateHandle

const ProjectIntroduce: React.FC<ProjectIntroducePropsType> = ({ toTemplateSelect, toCustomTemplate }) => {
  return (
    <section className='h-screen w-full f-b-c from-pink-400 to-blue-400 bg-gradient-to-r'>
      <aside className='pl-25 text-white'>
        <h1 className='mb-5 text-11'>一款免费的简历设计神器</h1>
        <p className='text-lg opacity-80'>快速设计、简历主题切换，支持一键导出高清PDF。</p>
        {/* 查看更多按钮 */}
        <div className='mt-10 flex'>
          <div
            className='mr-5 h-10 w-30 cursor-pointer rounded-12 from-green-400 to-cyan-400 bg-gradient-to-r text-center text-sm leading-10 transition-opacity letter-2 hover:opacity-80'
            onClick={toTemplateSelect}
          >
            免费制作
          </div>
          <div
            className='mr-5 h-10 w-30 cursor-pointer rounded-12 from-green-400 to-cyan-400 bg-gradient-to-r text-center text-sm leading-10 transition-opacity letter-2 hover:opacity-80'
            onClick={toCustomTemplate}
          >
            自定义模板
          </div>
        </div>
      </aside>
      <aside className='w-[50vw] f-c-c'>
        <img className='w-[70%]' src={indexImg} alt='index' />
      </aside>
    </section>
  )
}

export default ProjectIntroduce
