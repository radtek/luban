export default [{
    menuTitle: '工作台',
    menuIcon: 'icon-home text-primary-dker',
    to: '/main/home'
}, {
    menuTitle: '学员',
    menuIcon: 'fa-users',
    menu: [{
        menuTitle: '档案录入',
        to: '/student/add'
    }, {
        menuTitle: '学员管理',
        to: '/student/list'
    }, {
        menuTitle: '在读学员',
        to: '/student/list1'
    }, {
        menuTitle: '已结课学员',
        to: '/student/list2'
    }, {
        menuTitle: '咨询管理',
        to: '/student/list0'
    }, {
        menuTitle: '流失名单',
        to: '/student/lost'
    }, {
        menuTitle: '跟踪回访记录',
        to: '/student/tracks'
    }, {
        menuTitle: '生日学员', 
        to: '/student/birthdays'
    }, {
        menuTitle: '赛事记录',
        to: '/student/recording'
    }]
}, {
    menuTitle: '课程',
    menuIcon: 'fa-book',
    menu: [{
        menuTitle: '教室设置',
        to: '/lesson/sclasses'
    }, {
        menuTitle: '课程设置',
        to: '/lesson/manage'
    }, {
        menuTitle: '班级设置',
        to: '/lesson/classes'
    }, {
        menuTitle: '订单',
        to: '/lesson/orders'
    }]
}, {
    menuTitle: '学费',
    menuIcon: 'fa-money',
    menu: [{
        menuTitle: '缴费明细',
        to: '/fee/list1'
    }, {
        menuTitle: '欠费明细',
        to: '/fee/list3'
    }, {
        menuTitle: '退费明细',
        to: '/fee/list4'
    }]
}, {
    menuTitle: '课时',
    menuIcon: 'icon-clock',
    menu: [{
        menuTitle: '课程表',
        to: '/hours/arrange'
    }, {
        menuTitle: '排课',
        to: '/hours/schedule'
    }, {
        menuTitle: '考勤',
        to: '/hours/attendance'
    }, {
        menuTitle: '教师课耗',
        to: '/hours/teacher'
    }, {
        menuTitle: '学员课耗',
        to: '/hours/student'
    }, {
        menuTitle: '课时预警',
        to: '/hours/warning'
    }, {
        menuTitle: '缺课记录',
        to: '/hours/absences'
    }, {
        menuTitle: '请假管理',
        to: '/hours/leaves'
    }, {
        menuTitle: '停课管理',
        to: '/hours/suspends'
    }]
}, {
    menuTitle: '收支',
    menuIcon: 'fa-tachometer',
    menu: [{
        menuTitle: '流水',
        to: '/iae/flow'
    }, {
        menuTitle: '收入明细',
        to: '/iae/income'
    }, {
        menuTitle: '支出明细',
        to: '/iae/expenses'
    }]
}, {
    menuTitle: '家校',
    menuIcon: 'fa-university',
    menu: [{
        menuTitle: '短信通知',
        to: '/has/sms'
    }, {
        menuTitle: '公告发布',
        to: '/has/news'
    }]
}, {
    menuTitle: '设置',
    menuIcon: 'fa-cog',
    menu: [{
        menuTitle: '参数配置',
        to: '/system/config'
    }, {
        menuTitle: '角色权限',
        to: '/system/roles'
    }, {
        menuTitle: '员工管理',
        to: '/system/employee'
    }, {
        menuTitle: '数据字典管理',
        to: '/system/dict'
    }, {
        menuTitle: '机构与校区设置',
        to: '/system/org'
    }]
}, {
    menuTitle: '日志',
    menuIcon: 'fa-file-archive-o',
}, {
    menuTitle: '系统状态',
    menuIcon: ' fa-dashboard',
    to: '/header/system'
}]
