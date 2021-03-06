export default {
    'pageName': 'iaeflow',
    'pageLable': '流水',
    'tableSearch': [{
        'localField': 'op_id',
        'from': 'employee',
        'foreignField': '_id',
        'as': 'employee'
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
                            endTime = vm.getDatetimeEndOf(vm.localdata.form.daterange[1])
                        }
                        filterObj.push({
                            'key': 'create_time',
                            'value': startTime,
                            'type': 'gte'
                        })
                        filterObj.push({
                            'key': 'create_time',
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
            'type': 'singleBtnSearch',
            'fields': [
                {
                    'label': '记一笔',
                    'type': 'success',
                    'icon': 'edit',
                    'showdialog': 'flowform',
                    'actionoption': 'iaeflow'
                }
            ]
        }
    ],
    'pageTableField': [
        {
            'type':'operation',
            'label':'操作'
        },
        {
            'type': 'datetimeMinute',
            'label': '流水日期',
            'prop': 'create_time'
        },
        {
            'type': 'textTag',
            'label': '金额',
            'prop': 'amount',
            'color': 'gray'
        },
        {
            'type': 'getButtongroupText',
            'label': '类型',
            'color': 'gray',
            'othertype': [{
                'value': '',
                'text': '所有'
            }, {
                'value': 0,
                'text': '支出'
            }, {
                'value': 1,
                'text': '收入'
            }],
            'prop': 'type'
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
            'type': 'datetimeMinute',
            'label': '录入日期',
            'prop': 'createtime'
        }
    ],
    'pageTable': 'flow',
    'pageTemplate': 'table1',
    'pagePath': ''
}