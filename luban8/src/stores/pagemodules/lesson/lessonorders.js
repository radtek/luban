export default {
    'pageName': 'lessonorders',
    'pageLable': '订单',
    'tableSearch': [{
        'localField': 'student_id',
        'from': 'student',
        'foreignField': '_id',
        'as': 'student'
    }],
    'pageSearch': [
        {
            'type': 'textSearch',
            'fields': [
                {
                    'label': '订单号',
                    'defvalue': '',
                    'default': true,
                    'value': 'order_no'
                }
            ]
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
            'searchfunction': function (form) {
                let filterObj = []
                let search_value = form-1
                if (search_value>=0) {
                    filterObj.push({
                        'key': 'pay_status',
                        'value': Number(search_value),
                        'type': ''
                    })
                }
                return filterObj
            },
            'fields': [
                {
                    'labels': [
                        { 'label': '所有' },
                        { 'label': '未缴费' },
                        { 'label': '部分缴费' },
                        { 'label': '已缴费' },
                    ]
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
            'type': 'tabletext',
            'label': '学员',
            'table': 'student',
            'prop': 'student_name',
        },
        {
            'type': 'orderRouter',
            'label': '订单号',
        },
        {
            'type': 'getButtongroupText',
            'label': '类型',
            'color': 'gray',
            'prop': 'order_type',
            'othertype': [{
                'value': 1,
                'text': '报名费'
            }, {
                'value': 2,
                'text': '预交费'
            }, {
                'value': 3,
                'text': '学杂费'
            }],
        },
        {
            'type': 'getToFixed',
            'label': '订单金额',
            'prop': 'origin_amount',
        },
        {
            'type': 'text',
            'label': '订单内容',
            'prop': 'body',
        },
        {
            'type': 'datetime',
            'label': '下单日期',
            'prop': 'createtime',
        },
        {
            'type': 'getButtongroupText',
            'label': '付款情况',
            'color': 'gray',
            'prop': 'pay_status',
            'othertype': [{
                'value': -1,
                'text': '所有'
            }, {
                'value': 0,
                'text': '未缴费'
            }, {
                'value': 1,
                'text': '部分缴费'
            }, {
                'value': 2,
                'text': '已缴费'
            }]
        },
        {
            'type': 'text',
            'label': '备注',
            'prop': 'order_remark',
        },
    ],
    'pageTable': 'order',
    'pageTemplate': 'table1',
    'pagePath': ''
}