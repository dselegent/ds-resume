import React from 'react'
import { Button, Result } from 'antd'

const AntdResult = styled(Result)`
  .ant-result-image {
    margin: 0;
  }
`

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <AntdResult
      className='h-full flex-col-center'
      status='404'
      title='404'
      subTitle='抱歉，您访问的这个页面不存在。'
      extra={
        <Button type='primary' onClick={() => navigate('/')}>
          返回首页
        </Button>
      }
    />
  )
}

export default NotFound
