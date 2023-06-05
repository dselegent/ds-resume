import React from 'react'
import BaseInfo1 from '@/material/BaseInfo/BaseInfo1'
import JobIntention1 from '@/material/JobIntention/JobIntention1'
import EduBackground1 from '@/material/EduBackground/EduBackground1'
import SkillSpecialties1 from '@/material/SkillSpecialties/SkillSpecialties1'
import CampusExperience1 from '@/material/CampusExperience/CampusExperience1'
import WorkExperience1 from '@/material/WorkExperience/WorkExperience1'
import { Tooltip } from 'antd'

const ModelBox: React.FC = () => {
  const resumeJsonData = useAppSelector(selectorResumeJsonData)

  // 移入的组件id
  const [hoverId, setHoverId] = useSafeState('')

  return (
    <>
      {/* 1 */}
      {resumeJsonData.COMPONENTS[0].show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          // onMouseOver={() => setHoverId(resumeJsonData.COMPONENTS[0].keyId)}
          onMouseOut={() => setHoverId('')}
          // onFocus={() => void 0}
          onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside
            className={`absolute right-0  -top-8 ${
              hoverId === resumeJsonData.COMPONENTS[0].keyId ? 'block' : 'display-none'
            }`}
          >
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={BaseInfo1}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={resumeJsonData.COMPONENTS[0].data}
            modelStyle={resumeJsonData.COMPONENTS[0].style}
          />
        </section>
      )}
      {/* 2 */}
      {resumeJsonData.COMPONENTS[1].show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          // onMouseOver={() => setHoverId(resumeJsonData.COMPONENTS[0].keyId)}
          // onMouseOut={() => setHoverId('')}
          // onFocus={() => void 0}
          // onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside
            className={`absolute right-0 -top-8 ${
              hoverId === resumeJsonData.COMPONENTS[1].keyId ? 'block' : 'display-none'
            }`}
          >
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={JobIntention1}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={resumeJsonData.COMPONENTS[1].data}
            modelStyle={resumeJsonData.COMPONENTS[1].style}
          />
        </section>
      )}
      {/* 3 */}
      {resumeJsonData.COMPONENTS[2].show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          // onMouseOver={() => setHoverId(resumeJsonData.COMPONENTS[0].keyId)}
          // onMouseOut={() => setHoverId('')}
          // onFocus={() => void 0}
          // onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside
            className={`absolute right-0 -top-8 ${
              hoverId === resumeJsonData.COMPONENTS[2].keyId ? 'block' : 'display-none'
            }`}
          >
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={EduBackground1}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={resumeJsonData.COMPONENTS[2].data}
            modelStyle={resumeJsonData.COMPONENTS[2].style}
          />
        </section>
      )}
      {/* 4 */}
      {resumeJsonData.COMPONENTS[3].show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          // onMouseOver={() => setHoverId(resumeJsonData.COMPONENTS[0].keyId)}
          // onMouseOut={() => setHoverId('')}
          // onFocus={() => void 0}
          // onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside
            className={`absolute right-0 -top-8 ${
              hoverId === resumeJsonData.COMPONENTS[3].keyId ? 'block' : 'display-none'
            }`}
          >
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={SkillSpecialties1}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={resumeJsonData.COMPONENTS[3].data}
            modelStyle={resumeJsonData.COMPONENTS[3].style}
          />
        </section>
      )}
      {/* 5 */}
      {resumeJsonData.COMPONENTS[4].show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          // onMouseOver={() => setHoverId(resumeJsonData.COMPONENTS[0].keyId)}
          // onMouseOut={() => setHoverId('')}
          // onFocus={() => void 0}
          // onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside
            className={`absolute right-0 -top-8 ${
              hoverId === resumeJsonData.COMPONENTS[4].keyId ? 'block' : 'display-none'
            }`}
          >
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={CampusExperience1}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={resumeJsonData.COMPONENTS[4].data}
            modelStyle={resumeJsonData.COMPONENTS[4].style}
          />
        </section>
      )}
      {/* 6 */}
      {resumeJsonData.COMPONENTS[5].show && (
        <section
          className='relative border border-transparent border-dashed transition-base'
          // onMouseOver={() => setHoverId(resumeJsonData.COMPONENTS[0].keyId)}
          // onMouseOut={() => setHoverId('')}
          // onFocus={() => void 0}
          // onBlur={() => void 0}
        >
          {/* 模块操作区域 */}
          <aside
            className={`absolute right-0 -top-8 ${
              hoverId === resumeJsonData.COMPONENTS[5].keyId ? 'block' : 'display-none'
            }`}
          >
            <Tooltip title='删除当前模块' placement='bottom'>
              <div className='h-8 w-8 f-c-c cursor-pointer rounded bg-emerald-500 hover:bg-emerald-400'>
                <i className='i-ant-design-delete-outlined text-xl text-white'></i>
              </div>
            </Tooltip>
          </aside>
          {/* 物料渲染 */}
          <DynamicComponent
            is={WorkExperience1}
            className={'border border-transparent border-dashed relative hover:cursor-move hover:border-primary'}
            modelData={resumeJsonData.COMPONENTS[5].data}
            modelStyle={resumeJsonData.COMPONENTS[5].style}
          />
        </section>
      )}
    </>
  )
}

export default ModelBox
