<template>
    <div class="modal-dialog" ng-class="{'modal-sm': size == 'sm', 'modal-lg': size == 'lg','modal-full':size == 'full'}">
        <div class="modal-content" modal-transclude>
            <div class="box box-success direct-chat direct-chat-success ng-scope" page-controller="wechat">
                <div class="box-header with-border">
                    <button class="close" type="button" ng-click="$dismiss()" @click="lbClosedialog($event)">
                        <span aria-hidden="true">×</span>
                        <span class="sr-only">关闭</span>
                    </button>
                    <h3 class="box-title">
                        <i class="fa fa-weixin"></i>与
                        <span class="label bg-info ng-binding">seis</span>微信对话
                    </h3>
                </div>
                <div class="wrapper ng-scope" ng-if="student.wb_id == '0'">
                    <p class="text-center">
                        <i class="fa fa-frown-o"></i>该学员还没有绑定微信,无法进行微信对话
                    </p>
                    <p class="m-t b-t padder-v">
                        <strong>微信绑定步骤:</strong>
                    </p>
                    <ol>
                        <li>
                            学员用微信搜索公众号
                            <code>luban</code>并关注
                        </li>
                        <li>进入公众号界面点击“学生端”菜单，用手机号注册账号</li>
                        <li>登录之后按提示操作即可</li>
                    </ol>
                    <p class="m-t b-t padder-v">
                        <strong>免去注册步骤、帮助开通账号:</strong>
                    </p>
                    <lb-table :data="getTableData" stripe>
                        <lb-table-column prop="data" label="电话">
                            <template scope="scope">13609989744</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="称呼">
                            <template scope="scope">本人</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="姓名">
                            <template scope="scope">未填写</template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="学习管家账号">
                            <template scope="scope">
                                <span class="label bg-info ng-scope" ng-if="item.ou_id != '0'">已开通</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="微信绑定">
                            <template scope="scope">
                                <span class="badge bg-gray ng-scope" ng-if="item.wb_id == '0'">未绑定</span>
                            </template>
                        </lb-table-column>
                        <lb-table-column prop="data" label="操作">
                            <template scope="scope">
                                <a ng-disabled="$index == 0" class="btn btn-xs btn-danger ng-isolate-scope" confirm-action="remove_relation($index,item)" confirm-text="确定要删除该联系人吗?" tooltip="删除" disabled="disabled">
                                    <i class="icon-close"></i>
                                </a>
                                <a ng-click="$util.open('tpl/app/student/edit_contact.modal.html','md',{student:student,contact:item})" @click="lbShowdialog($event,'lb-editcontactmodal')">
                                    <i class="fa fa-pencil"></i>
                                </a>
                            </template>
                        </lb-table-column>
                    </lb-table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'finishadd',
    data() {
        let localdata = {}
        return {
            localdata,
        }
    },
    computed: {},
    watch: {},
    methods: {}
}
</script>