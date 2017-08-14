export default {
    'pageName': 'studenttracks',
    'pageLable': '跟踪回访记录',
    'tableSearch': [
        {
            'localField': 'student_id',
            'from': 'student',
            'foreignField': '_id',
            'as': 'student'
        }
    ],
    'pageSearch': [
        {
            'type': 'dateSearch',
            'searchfunction': function (form, vm) {
                let filterObj = []
                if (form && form.length == 2) {
                    let startTime = vm.getDatetime(form[0])
                    let endTime = vm.getDatetime(form[1])
                    if (startTime > 0) {
                        if (startTime == endTime) {
                            endTime = vm.getDatetimeEndOf(form[1])
                        }
                        filterObj.push({
                            'key': 'track_time',
                            'value': startTime,
                            'type': 'gte'
                        })
                        filterObj.push({
                            'key': 'track_time',
                            'value': endTime,
                            'type': 'lte'
                        })
                    }
                }
                return filterObj
            },
            'fields': [{}]
        },
        {
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'labels': [
                        { 'label': '售前' },
                        { 'label': '售后' }
                    ]
                }
            ]
        },
        {
            'type': 'selectUserSearch',
            'fields': [
                {}
            ]
        },
        {
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '跟踪回访登记',
                    'type': 'success',
                    'icon': 'edit',
                    'showdialog': 'lb-addtrackmodal',
                    'actionoption': 'studenttracksadd'
                }
            ]
        },
    ],
    'pageTableField': [
        {
            'type': 'studenttracksadd',
            'label': '学员',
            'prop': 'student',
        },
        {
            'type': 'constant',
            'label': '状态',
            'prop': '已报读',
        },
        {
            'type': 'content',
            'label': '沟通内容',
            'prop': 'detail',
        },
        {
            'type': 'text',
            'label': '沟通方式',
            'prop': 'track_way',
        },
        {
            'type': 'text',
            'label': '接洽人',
            'prop': 'op_name',
        },
        {
            'type': 'datetime',
            'label': '沟通时间',
            'prop': 'track_time'
        },
        {
            'type': 'getButtongroupText',
            'label': '类型',
            'prop': 'track_type',
            'othertype': [{
                'value': '0',
                'text': '售前'
            }, {
                'value': '1',
                'text': '售后'
            }]
        }
    ],
    'pageTable': 'inquiry',
    'pageTemplate': 'table1',
    'pagePath': ''
}