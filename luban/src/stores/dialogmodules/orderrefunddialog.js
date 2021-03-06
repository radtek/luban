export default {
    'pageName': 'orderdialog',
    'pageLable': '退费',
    'student': true,
    'tableSearch': [
        {
            'key': 'pay_status',
            'value': 0,
            'type': 'gt'
        }
    ],
    'pageSearch': [
        {
            'type': 'handle',
            'searchfunction': function (vm) {
                let filterObj = []
                let student_id = vm.getStudentId()
                if (student_id.length > 0) {
                    filterObj.push({
                        'key': 'student_id',
                        'value': student_id,
                        'type': ''
                    })
                }
                return filterObj
            },
            'fields': [{}]
        }
    ],
    'pageTableField': [
        {
            'type': 'text',
            'label': '订单编号',
            'prop': 'order_no'
        },
        {
            'type': 'checkstatus',
            'label': '支付状态',
            'statutype': 'checkPay',
        },
        {
            'type': 'subtract',
            'label': '已付款',
            'prop1': 'order_amount',
            'prop2': 'unpay_amount',
        },
        {
            'type': 'text',
            'label': '退款',
            'prop': 'back_amount'
        },
        {
            'type': 'button',
            'label': '操作',
            'dialog': 'lb-refunds',
            'text': '办理退款'
        },
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}