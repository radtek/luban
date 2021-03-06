export default {
    'pageName': 'feelist4',
    'pageLable': '退费明细',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student',
    }, {
        'localField': 'order_id',
        'from': 'order',
        'foreignField': '_id',
        'as': 'order'
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
                            endTime = vm.getDatetimeEndOf(form[0])
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
            'type': 'datetimeMinute',
            'label': '日期',
            'prop': 'createtime'
        },
        {
            'type': 'getToFixed',
            'label': '退款金额',
            'prop': 'amount',
        },
        {
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name'
        },
        {
            'type': 'tabletext',
            'label': '订单号',
            'table': 'order',
            'prop': 'order_no'
        },
        {
            'type': 'tabletext',
            'label': '订单内容',
            'table': 'order',
            'prop': 'body'
        }, {
            'type': 'text',
            'label': '经办人',
            'prop': 'op_name',
        },
    ],
    'pageTable': 'refund',
    'pageTemplate': 'table1',
    'pagePath': ''
}