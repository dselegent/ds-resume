import IMODELDATAJSON from '@/interface/modelData'

const MODEL_DATA_JSON: IMODELDATAJSON = {
  BASE_INFO: {
    iconfont: 'ant-design-user-outlined',
    model: 'BASE_INFO',
    show: true,
    title: '基本资料',
    name: '李瓜皮',
    age: 21,
    address: '湖南长沙', // 所在地址
    avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', // 头像地址
    avatarShape: 'RECTANGLE_AVATAR',
    workService: 3, // 工作年限
    phoneNumber: '028-1234321', // 联系电话
    email: '12322233@qq.com', // 邮箱
    abstract: '我是一个没有感情的工作机器', // 简介
    degree: '本科',
    isShow: {
      age: true,
      address: true, // 所在地址
      avatar: true, // 头像地址
      workService: true, // 工作年限
      phoneNumber: true, // 联系电话
      email: true, // 邮箱
      abstract: true, // 简介
      degree: true,
    },
  },
  JOB_INTENTION: {
    iconfont: 'ant-design-usergroup-add-outlined',
    model: 'JOB_INTENTION',
    show: true,
    title: '求职意向',
    intendedPositions: '前端开发工程师', // 意向岗位
    intendedCity: '长沙', // 意向城市
    expectSalary: '4000-6000', // 期望薪资
    jobStatus: '随时入职', // 求职状态
    jobSearchType: '求职类型',
    isShow: {
      intendedPositions: true,
      intendedCity: true,
      expectSalary: true,
      jobStatus: true,
      jobSearchType: true,
    },
  },
  EDU_BACKGROUND: {
    iconfont: 'material-symbols-school-outline',
    model: 'EDU_BACKGROUND',
    show: true,
    title: '教育背景',
    LIST: [
      {
        date: ['2020-9', '2024-6'],
        schoolName: 'xx大学', // 学校名称
        specialized: '计算机科学与技术', // 专业
        degree: '本科', // 学历
        majorCourse: '主修计算机技术、Java、c++等等', // 主修课程
      },
    ],
    isShow: {
      date: true,
      schoolName: true,
      specialized: true,
      degree: true,
      majorCourse: true,
    },
  },
  SKILL_SPECIALTIES: {
    iconfont: 'material-symbols-menu-book-outline-rounded',
    model: 'SKILL_SPECIALTIES',
    show: true,
    title: '专业技能',
    LIST: [
      {
        skillName: 'JavaScript', // 技能名称
        proficiency: '了解', // 熟练度
        introduce: '熟练掌握该项技术', // 介绍
      },
      {
        skillName: 'JavaScript', // 技能名称
        proficiency: '一般', // 熟练度
        introduce: '熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术', // 介绍
      },
      {
        skillName: 'JavaScript', // 技能名称
        proficiency: '熟悉', // 熟练度
        introduce: '熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术熟练掌握该项技术', // 介绍
      },
      {
        skillName: 'JavaScript', // 技能名称
        proficiency: '精通', // 熟练度
        introduce: '熟练掌握该项技术', // 介绍
      },
    ],
  },
  CAMPUS_EXPERIENCE: {
    iconfont: 'material-symbols-edit-note',
    model: 'CAMPUS_EXPERIENCE',
    show: true,
    title: '校园经历',
    LIST: [
      {
        date: ['2021-9', '2022-10'], // 经历时间
        campusBriefly: '经历简要，如社团名称',
        campusDuty: '主要职责',
        campusContent: '经历描述',
      },
      {
        date: ['2021-9', '2022-10'], // 经历时间
        campusBriefly: '经历简要，如社团名称',
        campusDuty: '主要职责',
        campusContent:
          '经历经历描述经历描述经历描经历描述经历描述经历描述经历描述经历描述述经历描述经历描述经历描述经历描述经历描述描述',
      },
    ],
    isShow: {
      date: true, // 经历时间
      campusBriefly: true,
      campusDuty: true,
      campusContent: true,
    },
  },
  WORK_EXPERIENCE: {
    iconfont: 'material-symbols-work-history-outline',
    model: 'WORK_EXPERIENCE',
    show: true,
    title: '工作经验',
    LIST: [
      {
        date: ['2021-9', '2022-10'], // 工作时间
        companyName: '业绩公司', // 公司名称
        posts: '前端开发工程师', // 职位
        jobContent: [
          {
            content: '主要工作内容是打杂',
          },
        ],
      },
    ],
    isShow: {
      date: true,
      companyName: true,
      posts: true,
    },
  },
  PROJECT_EXPERIENCE: {
    iconfont: 'material-symbols-library-books-outline-rounded',
    model: 'PROJECT_EXPERIENCE',
    show: true,
    title: '项目经验',
    LIST: [
      {
        date: ['2021-9', '2022-10'], // 项目时间
        projectName: '项目名称', // 项目名称
        posts: '前端开发工程师', // 项目职责
        projectContent: [
          {
            content: '该项目是一个打杂项目',
          },
        ],
      },
    ],
    isShow: {
      date: true,
      projectName: true,
      posts: true,
    },
  },
  AWARDS: {
    iconfont: 'ant-design-trophy-outlined',
    model: 'AWARDS',
    show: true,
    title: '荣誉奖项',
    LIST: [
      {
        date: '2021-9', // 获奖时间
        awardsName: '奖项名称',
        awardsGrade: '获奖等级',
      },
    ],
    isShow: {
      date: true,
      awardsName: true,
      awardsGrade: true,
    },
  },
  HOBBIES: {
    iconfont: 'material-symbols-sports-baseball-outline',
    model: 'HOBBIES',
    show: true,
    title: '兴趣爱好',
    content: '我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂我喜欢打杂',
    style: {
      textColor: '#757575',
      textFontSize: '14px',
      textFontWeight: 500,
      mBottom: '45px',
      mTop: '0px',
    },
  },
  SELF_EVALUATION: {
    iconfont: 'material-symbols-edit-note',
    model: 'SELF_EVALUATION',
    show: true,
    title: '自我评价',
    content: '我是一个没有责任感的人',
  },
  WORKS_DISPLAY: {
    iconfont: 'material-symbols-folder-open-outline-rounded',
    model: 'WORKS_DISPLAY',
    show: true,
    title: '作品展示',
    LIST: [
      {
        worksName: '作品名称',
        worksLink: 'https://www.baidu.com',
        worksIntroduce: '这是一个千万级作品',
      },
      {
        worksName: '作品名称',
        worksLink: 'https://www.baidu.com',
        worksIntroduce: '这是一个千万级作品',
      },
    ],
  },
  CUSTOM_1: {
    iconfont: 'icon-jibenziliao',
    model: 'CUSTOM_1',
    show: true,
    title: '姓名简介',
    name: '小猪课堂',
    abstract: '用一句话来概括一下自己把！',
    isShow: {
      abstract: true,
      name: true,
    },
  },
  CUSTOM_2: {
    iconfont: 'icon-jibenziliao',
    model: 'CUSTOM_2',
    show: true,
    title: '简历标题',
    name: '个人简历',
    abstract: '给我一个机会，我必全力以赴！',
    isShow: {
      abstract: true,
      name: true,
    },
  },
}
export default MODEL_DATA_JSON
