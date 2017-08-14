export default {
    'pageName': 'lessonclasses',
    'pageLable': '班级设置',
    'tableSearch': [{
        'localField': 'course_id',
        'from': 'course',
        'foreignField': '_id',
        'as': 'course'
    }, {
        'localField': '_id',
        'from': 'order',
        'foreignField': 'class_id',
        'as': 'order'
    }],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '班级名',
                    'defvalue': '',
                    'default': true,
                    'value': 'class_name'
                },
                {
                    'label': '老师姓名',
                    'defvalue': '',
                    'default': true,
                    'value': 'employee.name'
                }
            ]
        },
        {
            'type': 'radioGroupSearch',
            'groupSearchfun': function (form,key,vm) {
                let filterObj = []
                if (form[key] && form[key] == 2) {
                    let startTime = vm.getDatetime(form[key][0])
                    let endTime = vm.getDatetime(form[key][1])
                    if (startTime > 0) {
                        if (startTime == endTime) {
                            endTime = vm.getDatetimeEndOf(form[key][1])
                        }

                        filterObj.push({
                            'key': 'creattime',
                            'value': startTime,
                            'type': 'gt'
                        })
                        filterObj.push({
                            'key': 'creattime',
                            'value': endTime,
                            'type': 'lt'
                        })
                    }
                }

                return filterObj
            },
            'key': 'daterange',
            'fields': [
                {
                    'label': '已开课',
                    'icon': ''
                },
                {
                    'label': '未开课',
                    'icon': ''
                },
                {
                    'label': '已结课',
                    'icon': ''
                }
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '开班',
                    'type': 'success',
                    'showdialog': 'lb-openclassmodal',
                    'actionoption': 'lessonclasses'
                },
            ]
        },

    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
            'prop': 'setting'
        },
        {
            'type': 'text',
            'label': '班级名',
            'prop': 'class_name',
        },
        {
            'type': 'tabletext',
            'label': '老师',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'tabletext',
            'label': '课程名',
            'table': 'course',
            'prop': 'lesson_name',
        },
        {
            'type': 'datetime',
            'label': '开课时间',
            'prop': 'open_time',
        },
        {
            'type': 'checkstatus',
            'statutype': 'openlessonsstatus',
            'label': '状态',
        }, {
            'type': 'progress',
            'label': '招生情况',
            'order': 'order',
            'max_student_num': 'max_student_num'
        },
        {
            'type': 'payconditions',
            'label': '缴费情况',
            'order': 'order',
        },
    ],
    'pageTable': 'classes',
    'pageTemplate': 'table1',
    'pagePath': ''
}