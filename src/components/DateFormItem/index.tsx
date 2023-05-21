import React from 'react'
import { Form, Space, Switch, DatePicker } from 'antd'
import dayjs from 'dayjs/esm'

const AntdSpace = styled(Space)`
  width: 100%;
  .ant-space-item:first-of-type {
    flex: 1;
  }
`

const AntdDatePickerRangePicker = styled(DatePicker.RangePicker)`
  width: 100%;
`

const dateFormat = 'YYYY-MM'

type DateFormItemPropsType = {
  item: any
  isShow: {
    [propName: string]: boolean
  }
}

const DateFormItem: React.FC<DateFormItemPropsType> = ({ item, isShow }) => {
  return (
    <Form.Item label='日期选择'>
      <AntdSpace>
        <AntdDatePickerRangePicker
          picker='month'
          size='small'
          value={[dayjs(item.date[0], dateFormat), dayjs(item.date[1], dateFormat)]}
          onChange={(date, dateString) => (item.date = dateString)}
        />
        <Switch size='small' checked={isShow.date} onChange={(value: boolean) => (isShow.date = value)} />
      </AntdSpace>
    </Form.Item>
  )
}

export default DateFormItem
