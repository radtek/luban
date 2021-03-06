export default {
    'pageName': 'iaeicome',
    'pageLable': '收入明细',
    'tableSearch': [{
        'localField': 'op_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee',
    },{
        'key': 'type',
        'value': 1,
        'type':''
    }],
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
                            endTime = this.getDatetimeEndOf(vm.localdata.form.daterange[1])
                        }
                        filterObj.push({
                            'key': 'createtime',
                            'value': startTime,
                            'type': 'gte'
                        })
                        filterObj.push({
                            'key': 'createtime',
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
            'type': 'selectSearch',
            'searchfunction': function (form) {
                let filterObj = []
                let searchValue = form + ''
                if (searchValue.length > 0) {
                    filterObj.push({
                        'key': 'student_id',
                        'value': searchValue,
                        'type': ''
                    })
                }
                return filterObj
            },
            'fields': [
                {
                    'text': '请选择学员',
                    'showdialog': 'selectstudentdialog',
                    'search': 'student_name'
                }
            ]
        },
        {
            'type': 'radioGroupSearch',
            'fields': [
                {
                    'label': '未对账',
                    'icon': ''
                },
                {
                    'label': '已对账',
                    'icon': ''
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type': 'datetimeMinute',
            'label': '付款日期',
            'prop': 'create_time'
        },
        {
            'type': 'textTag',
            'label': '金额',
            'prop': 'amount',
            'color': 'gray'
        },
        {
            'type': 'text',
            'label': '类别',
            'prop': 'sel',
        },
        {
            'type': 'text',
            'label': '备注',
            'prop': 'note',
        },
        {
            'type': 'tabletext',
            'label': '经办人',
            'table': 'employee',
            'prop': 'name',
        },
        {
            'type': 'checkstatus',
            'statutype': 'accountcheck',
            'label': '对账状态'
        },
        {
            'type': 'checkstatus',
            'statutype': 'checkAccount',
            'label': '操作'
        }
    ],
    'pageTable': 'flow',
    'pageTemplate': 'table1',
    'pagePath': ''
}