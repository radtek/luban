export default {
    'pageName': 'feelist3',
    'pageLable': '欠费明细',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }, {
        'key': 'pay_status',
        'value': 2,
        'type': 'lt'
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
                            endTime = vm.getDatetimeEndOf(form[1])
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
        }
    ],
    'pageTableField': [
        {
            'type': 'operation',
            'label': '操作',
        },
        {
            'type': 'datetimeMinute',
            'label': '日期',
            'prop': 'createtime'
        },
        {
            'type': 'getToFixed',
            'label': '欠费金额',
            'prop': 'unpay_amount',
        },
        {
            'type': 'getToFixed',
            'label': '总金额',
            'prop': 'order_amount'
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name'
        },
        {
            'type': 'text',
            'label': '订单号',
            'prop': 'order_no',
        },
        {
            'type': 'text',
            'label': '订单内容',
            'prop': 'body'
        }
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}