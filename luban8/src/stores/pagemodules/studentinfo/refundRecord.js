export default {
    'pageName': 'refundRecord',
    'pageLable': '退费记录',
    'tableSearch': [{
        'localField': 'order_id',
        'from': 'order',
        'foreignField': '_id',
        'as': 'order'
    }],
    'pageSearch': [],
    'pageTableField': [
        {
            'type': 'datetimeMinute',
            'label': '日期',
            'prop': 'createtime',
        },
        {
            'type': 'tabletext',
            'label': '订单号',
            'table': 'order',
            'prop': 'order_no'
        },
        {
            'type': 'getToFixed',
            'label': '退款金额',
            'prop': 'amount'
        },
        {
            'type': 'tabletext',
            'label': '缴费内容',
            'table': 'order',
            'prop': 'body'
        },
        {
            'type': 'text',
            'label': '经办人',
            'prop': 'op_name',
        }
    ],
    'pageTable': 'refund',
    'pageTemplate': 'table1',
    'pagePath': ''
}