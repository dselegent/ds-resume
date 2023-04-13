import { Button, Result } from 'antd'
import React from 'react'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <Result
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
