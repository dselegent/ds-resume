import React, { ReactNode } from 'react'

type PreviewImagePropsType = { closePreview: () => void; children: ReactNode }

const PreviewImage: React.FC<PreviewImagePropsType> = ({ closePreview, children }) => {
  return (
    <section
      className='transition-base fixed inset-0 z-100 h-screen w-screen flex justify-center bg-mask pt-10'
      onClick={closePreview}
    >
      <div onClick={e => e.stopPropagation()}>{children}</div>
      <i className='i-ant-design-close-circle-filled fixed right-12 top-12 h-10 w-10 cursor-pointer text-white'></i>
    </section>
  )
}

export default PreviewImage
