<template>
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="ng-scope">
                <div class="modal-header">
                    <button class="close" type="button" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="modal-title">
                        <i class="fa fa-flag"></i>{{title}}课程
                    </h3>
                </div>
                <div class="modal-body">
                    <form name="form1" class="form-validation form-horizontal ng-invalid ng-invalid-required ng-valid-minlength ng-valid-pattern ng-dirty">
                        <div class="panel panel-default">
                            <div class="panel-heading">基本信息</div>
                            <div class="panel-body">
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程类型:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <lb-buttongroup :group-data="localdata.lesson_type" v-model="localdata.form.lesson_type" @input="handleTypeCommand"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程分类:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <lb-cascader placeholder="课程分类" :options="getreeData" v-model="localdata.form.cate_array" filterable change-on-select></lb-cascader>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程名:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <input type="text" name="lesson_name" class="form-control ng-pristine ng-untouched ng-invalid ng-invalid-required" :class="{'ng-dirty':localdata.validator.fields.lesson_name.errorStatus}" placeholder="输入课程名" v-model.trim.lazy="localdata.form.lesson_name" @change="validate('lesson_name')">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程编号:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <input type="text" name="lesson_no" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.lesson_no">
                                    </div>
                                </div>
                                <div class="form-group ng-scope" v-if="localdata.form.lesson_type=='0'">
                                    <label class="control-label col-md-3 col-xs-12">课程时间跨度:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <div class="input-group">
                                            <div class="input-group-btn">
                                                <lb-dropdowns menu-align="start" @command="handleCommand">
                                                    <lb-dropdown-button button-class="btn btn-default">
                                                        选择
                                                        <span class="caret"></span>
                                                    </lb-dropdown-button>
                                                    <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                        <lb-dropdown-item command="30">1个月</lb-dropdown-item>
                                                        <lb-dropdown-item command="90">1个季度</lb-dropdown-item>
                                                        <lb-dropdown-item command="180">半年</lb-dropdown-item>
                                                        <lb-dropdown-item command="365">1年</lb-dropdown-item>
                                                    </lb-dropdown-menu>
                                                </lb-dropdowns>
                                            </div>
                                            <input type="text" name="lesson_days" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.lesson_days">
                                            <span class="input-group-addon">天</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">定价</div>
                            <div class="panel-body">
                                <div class="form-group ng-scope" v-if="this.localdata.form.lesson_type=='0'">
                                    <label class="control-label col-md-3 col-xs-12">收费模式:</label>
                                    <div class="col-md-9 col-xs-12">
                                        <lb-buttongroup :group-data="localdata.price_model" v-model="localdata.form.price_model" @input="handleHoursCommand"></lb-buttongroup>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <span class="input-group-addon">￥</span>
                                            <input type="text" class="form-control ng-pristine ng-untouched ng-valid" @change="changeTimePrice" v-model="localdata.form.unit_price">
                                            <span v-if="localdata.form.price_model=='1'" class="input-group-addon ng-scope">元/次</span>
                                            <span v-if="localdata.form.price_model=='0'" class="input-group-addon ng-scope">期/次</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">总共:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group ng-scope" v-if="localdata.form.price_model=='1'">
                                            <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.inc_timesprice" @change="changeTimePrice">
                                            <span class="input-group-addon">次</span>
                                        </div>
                                        <div class="input-group ng-scope" v-if="localdata.form.price_model=='0'">
                                            <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.inc_period" @change="changeTimePrice">
                                            <span class="input-group-addon">期</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">售价:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="number" class="form-control ng-pristine ng-untouched ng-valid" v-model="localdata.form.price">
                                            <span class="input-group-addon">元</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="panel panel-default">
                            <div class="panel-heading">内容</div>
                            <div class="panel-body">
                                <div class="form-group ng-scope" v-if="localdata.form.price_model == '0'">
                                    <label class="control-label col-md-3 col-xs-12">授课次数:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="number" v-model="localdata.form.inc_times" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern ng-valid-parse" @change="changeTimeInc"> <span class="input-group-addon">次</span></div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">单次课时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group m-b">
                                            <div class="input-group-btn">
                                                <lb-dropdowns menu-align="start" @command="handleTimeCommand">
                                                    <lb-dropdown-button button-class="btn btn-default">
                                                        选择
                                                        <span class="caret"></span>
                                                    </lb-dropdown-button>
                                                    <lb-dropdown-menu slot="dropdown" style="z-index:3000;">
                                                        <lb-dropdown-item command="0.75">45分钟</lb-dropdown-item>
                                                        <lb-dropdown-item command="1.00">1个小时</lb-dropdown-item>
                                                        <lb-dropdown-item command="1.50">1个半小时</lb-dropdown-item>
                                                        <lb-dropdown-item command="2.00">2小时</lb-dropdown-item>
                                                    </lb-dropdown-menu>
                                                </lb-dropdowns>
                                            </div>
                                            <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.unit_hours" @change="changeTimeInc">
                                            <span class="input-group-addon">小时</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label class="control-label col-md-3 col-xs-12">课程总时长:</label>
                                    <div class="col-md-5 col-xs-12">
                                        <div class="input-group">
                                            <input type="number" class="form-control ng-pristine ng-untouched ng-valid ng-valid-pattern" v-model="localdata.form.inc_hours">
                                            <span class="input-group-addon">小时</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-primary" @click="handleClick">确定</button>
                    <button class="btn btn-warning" @click="lbClosedialog($event)">取消</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'newLesson',
    data() {
        let localdata = {
            'lesson_type': [{
                'value': '0',
                'text': '班课'
            }, {
                'value': '1',
                'text': '1对1'
            }, {
                'value': '2',
                'text': '课时包'
            }],
            'form': {
                'lesson_type': '0',
                'cate_array': [],
                'lesson_name': '',
                'lesson_no': '',
                'lesson_days': '',
                'price_model': '0',
                'unit_price': '',
                'inc_times': '',
                'inc_period': '',
                'inc_timesprice': '',
                'price': '',
                'unit_hours': '',
                'inc_hours': ''
            },
            'validator': {
                'type': 'object',
                'errorStatus': false,
                'additional': true,
                'fields': {
                    'lesson_name': {
                        'type': 'string',
                        'required': true,
                        'min': 1,
                        'max': 256,
                        'errorStatus': false
                    },

                    'birth': {
                        'type': 'date',
                    }
                }
            },
            'price_model': [{
                'value': '0',
                'text': '按期收费'
            }, {
                'value': '1',
                'text': '按次收费'
            }]
        }
        return {
            localdata,
            model: 'course',
            title: '创建',
        }
    },
    mounted() {
        if (this.$store.state.dialogs.dailogdata) {
            this.title = '编辑'
            this.setEditModle(this.$store.state.dialogs.dailogdata['_id'])
            this.localdata.form = this.lodash.assign(this.localdata.form, this.$store.state.dialogs.dailogdata)
        } else {
            this.title = '创建'
        }
        this.getTableApidata('cate')
    },
    computed: {
        getreeData() {
            let cateData = this.$store.state.models.models.cate.data
            let treeData = []
            let treemap = {}
            for (var item of cateData) {
                treemap[item._id] = {
                    value: item._id,
                    label: item.name
                }
            }
            for (var subitem of cateData) {
                if (subitem.pid == '') {
                    treeData.push(treemap[subitem._id])
                } else {
                    if (typeof treemap[subitem.pid] == 'object') {
                        if (typeof treemap[subitem.pid].children !== 'object') {
                            treemap[subitem.pid].children = []
                        }
                        treemap[subitem.pid].children.push(treemap[subitem._id])
                    }
                }
            }
            return treeData
        }
    },
    watch: {},
    methods: {
        changeTimePrice() {
            if (this.localdata.form.price_model == '1') {
                this.localdata.form.price = this.localdata.form.unit_price * this.localdata.form.inc_timesprice
            } else {
                this.localdata.form.price = this.localdata.form.unit_price * this.localdata.form.inc_period
            }
        },
        changeTimeInc() {
            this.localdata.form.inc_hours = this.localdata.form.unit_hours * this.localdata.form.inc_times
        },
        handleTypeCommand() {
            if (this.localdata.form.lesson_type == '0') {
                this.localdata.form.price_model = '0'
            } else {
                this.localdata.form.price_model = '1'
            }
        },
        handleTimeCommand(value) {
            this.localdata.form.unit_hours = value
            this.changeTimeInc()
        },
        handleHoursCommand() {
            this.changeTimePrice()
        },
        handleCommand(value) {
            this.localdata.form.lesson_days = value
        },
        handleClick() {
            this.handleSave().then(() => {
                this.$message({
                    message: '操作成功',
                    type: 'success'
                })
            })
        }

    }
}
</script>
