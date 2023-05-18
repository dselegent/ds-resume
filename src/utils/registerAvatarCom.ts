// 注册每一个头像组件
import SQUARE_AVATAR from '@/material/Avatar/SquareAvatar'
import RECTANGLE_AVATAR from '@/material/Avatar/RectangleAvatar'
import CIRCLE_AVATAR from '@/material/Avatar/CircleAvatar'

// 定义属性组件列表
const avatarComponents: any = [
  {
    name: 'SQUARE_AVATAR',
    com: SQUARE_AVATAR,
  },
  {
    name: 'RECTANGLE_AVATAR',
    com: RECTANGLE_AVATAR,
  },
  {
    name: 'CIRCLE_AVATAR',
    com: CIRCLE_AVATAR,
  },
]

export default avatarComponents
