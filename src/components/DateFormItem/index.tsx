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
  isShow: boolean
  changeDate: Function
  changeDateShow: Function
}

const DateFormItem: React.FC<DateFormItemPropsType> = ({ item, isShow, changeDate, changeDateShow }) => {
  return (
    <Form.Item label='日期选择'>
      <AntdSpace>
        <AntdDatePickerRangePicker
          allowClear={false}
          picker='month'
          size='small'
          value={[dayjs(item.date[0], dateFormat), dayjs(item.date[1], dateFormat)]}
          onChange={(date, dateString) => changeDate(dateString)}
        />
        <Switch size='small' checked={isShow} onChange={(value: boolean) => changeDateShow(value)} />
      </AntdSpace>
    </Form.Item>
  )
}

export default DateFormItem
