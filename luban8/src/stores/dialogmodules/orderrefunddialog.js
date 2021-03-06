export default {
    'pageName': 'orderdialog',
    'pageLable': '退费',
    'student': true,
    'modallg':true,
    'created': function (vm) {
        vm.deffilterObj.push({
            'key': 'student_id',
            'value': vm.$store.state.envs.currStudent._id,
            'type': ''
        })
    },
    'tableSearch': [
        {
            'key': 'pay_status',
            'value': 0,
            'type': 'gt'
        },
        {
            'key': 'refund_status',
            'value': 2,
            'type': 'lt'
        },
    ],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'text',
            'label': '订单编号',
            'prop': 'order_no'
        },
        {
            'type': 'text',
            'label': '订单内容',
            'prop': 'body'
        },
        {
            'type': 'checkstatus',
            'label': '支付状态',
            'statutype': 'checkPay',
        },
        {
            'type': 'text',
            'label': '已付款',
            'prop': 'order_amount',
        },
        {
            'type': 'text',
            'label': '已付款',
            'prop': 'pay_amount',
        },
        {
            'type': 'text',
            'label': '退款',
            'prop': 'back_amount'
        },
        {
            'type': 'button',
            'label': '操作',
            'dialog': 'refundstepdialog',
            'text': '办理退款'
        },
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}