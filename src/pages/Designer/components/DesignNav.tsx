import React from 'react'
import { Tooltip, Input } from 'antd'
import type { InputRef } from 'antd'

const DesignNav: React.FC = () => {
  const [title, setTitle] = useSafeState('我的简历')

  // 更改标题
  const titleInputRef = useRef<InputRef>(null)
  const [isShowInput, { setTrue: setIsShowInputTrue, setFalse: setIsShowInputFalse }] = useBoolean(false)
  useUpdateEffect(() => {
    if (isShowInput === true) titleInputRef.current!.focus()
  }, [isShowInput])

  return (
    <section className='h-15 w-full flex bg-white shadow'>
      <aside className='w-75 flex items-center pl-10'>
        <LogoCom fontColor='#74a274' />
      </aside>
      <aside className='relative f-b-c flex-1'>
        <div className='h-full flex'>
          <div className='flex text-stone-600'>
            <Tooltip title='新增任意简历模块' placement='bottom'>
              <div className='transition-base f-c-c flex-col cursor-pointer px-4 hover:bg-green-50 hover:text-font_color'>
                <i className='i-ant-design-plus-square-outlined text-xl'></i>
                <span className='translate-y-1 text-xs'>添加模块</span>
              </div>
            </Tooltip>
            <Tooltip title='切换另一个模板' placement='bottom'>
              <div className='transition-base f-c-c flex-col cursor-pointer px-4 hover:bg-green-50 hover:text-font_color'>
                <i className='i-ant-design-switcher-outlined text-xl'></i>
                <span className='translate-y-1 text-xs'>切换模块</span>
              </div>
            </Tooltip>
          </div>
          <div className='flex translate-x-2.5 items-center'>
            <span className='text-xs text-gray-400'>已自动保存草稿 2023.05.05 21:34:11</span>
          </div>
        </div>
        <aside className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
          {isShowInput ? (
            <Input
              placeholder='请输入标题'
              ref={titleInputRef}
              onBlur={setIsShowInputFalse}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          ) : (
            <p className='flex items-center'>
              {title}
              <i
                className='i-ant-design-form-outlined translate-x-1 cursor-pointer text-xl text-font_color'
                onClick={setIsShowInputTrue}
              ></i>
            </p>
          )}
        </aside>
      </aside>
      <aside className='flex items-center justify-end pr-12.5'>
        <Tooltip title='下载到本地' placement='bottom'>
          <div className='transition-base h-full f-c-c flex-col cursor-pointer bg-lime-600 px-4 text-white hover:bg-lime-500'>
            <i className='i-ant-design-cloud-download-outlined text-xl'></i>
            <span className='translate-y-1 text-xs'>导出</span>
          </div>
        </Tooltip>
        <Tooltip title='预览简历' placement='bottom'>
          <div className='transition-base h-full f-c-c flex-col cursor-pointer px-4 hover:bg-green-50 hover:text-font_color'>
            <i className='i-ant-design-eye-outlined text-xl'></i>
            <span className='translate-y-1 text-xs'>预览</span>
          </div>
        </Tooltip>
        <Tooltip title='保存为草稿' placement='bottom'>
          <div className='transition-base h-full f-c-c flex-col cursor-pointer px-4 hover:bg-green-50 hover:text-font_color'>
            <i className='i-ant-design-cloud-upload-outlined text-xl'></i>
            <span className='translate-y-1 text-xs'>暂存</span>
          </div>
        </Tooltip>
        <Tooltip title='重置所有设置' placement='bottom'>
          <div className='transition-base h-full f-c-c flex-col cursor-pointer px-4 hover:bg-green-50 hover:text-font_color'>
            <i className='i-ant-design-reload-outlined text-xl'></i>
            <span className='translate-y-1 text-xs'>重置</span>
          </div>
        </Tooltip>
        <Tooltip title='将你的简历分享给别人' placement='bottom'>
          <div className='transition-base h-full f-c-c flex-col cursor-pointer px-4 hover:bg-green-50 hover:text-font_color'>
            <i className='i-ant-design-share-alt-outlined text-xl'></i>
            <span className='translate-y-1 text-xs'>分享</span>
          </div>
        </Tooltip>
      </aside>
    </section>
  )
}

export default DesignNav
