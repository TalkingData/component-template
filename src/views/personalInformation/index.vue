<style lang="less" scoped>
.personalInformation {
    &-content {
        width: 940px;
        margin: 24px auto;
        display: flex;
        &-left {
            width: 264px;
            height: 160px;
        }
        &-right {
            -webkit-flex: 1;
            flex: 1;
            padding-left: 24px;
            .accountInformation {
                height: 68px;
                line-height: 68px;
                margin: 0 24px;
                border-bottom: 1px solid #e4e6e8;
                &:last-child {
                    border-bottom: none;
                }
            }
            .contactInformation {
                padding: 0 24px 24px;
                &:first-child {
                    padding-top: 24px;
                }
                &-label {
                    line-height: 21px;
                    font-size: 14px;
                    padding-bottom: 8px;
                    display: inline-block;
                    color: rgba(23, 35, 61, 0.75);
                }
            }
        }
    }
}
.marginTop24 {
    margin-top: 24px;
}
</style>
<style lang="less">
.personalInformation .ivu-card-body {
    padding: 0;
}
</style>
<template>
    <div class="personalInformation">
        <t-header></t-header>
        <personalInformationHeader>账户管理</personalInformationHeader>
        <section class='personalInformation-content'>
            <div class='personalInformation-content-left'>
                <Card>
                    <Menu
                        active-name="2"
                        width='264'
                    >
                        <MenuItem name="1">
                        账户信息
                        </MenuItem>
                        <MenuItem name="2">
                        联络信息
                        </MenuItem>

                        <MenuItem name="3">
                        登入信息
                        </MenuItem>
                    </Menu>
                </Card>
            </div>
            <div class='personalInformation-content-right'>
                <!-- 账户信息 -->

                <Card>
                    <p slot="title">账户信息</p>
                    <Row class='accountInformation'>
                        <Col span="4"><label for="">账户邮箱</label></Col>
                        <Col span="17">niba.han@tendcloud.com</Col>
                        <Col span="3"><Button type="primary">修改</Button></Col>
                    </Row>
                    <Row class='accountInformation'>
                        <Col span="4"><label for="">账户手机</label></Col>
                        <Col span="17">137 **** 2300</Col>
                        <Col span="3"> <Button type="primary">修改</Button></Col>
                    </Row>
                    <Row class='accountInformation'>
                        <Col span="4"><label for="">账户密码</label></Col>
                        <Col span="17">****</Col>
                        <Col span="3"> <Button type="primary">修改</Button></Col>
                    </Row>
                    <Row class='accountInformation'>
                        <Col span="4"><label for="">注册时间</label></Col>
                        <Col span="20">2016-02-23 12:30:30</Col>
                    </Row>
                </Card>

                <!-- 联络信息 -->
                <Card class='marginTop24'>
                    <p slot="title">联络信息</p>
                    <Row
                        class='contactInformation'
                        :gutter="24"
                    >
                        <Col span="12">
                        <label
                            for=""
                            class='contactInformation-label'
                        >姓名</label>
                        <Input
                            v-model="value"
                            placeholder="请输入姓名..."
                        />
                        </Col>
                        <Col span="12">
                        <label
                            for=""
                            class='contactInformation-label'
                        >职能</label>
                        <Input
                            v-model="value"
                            placeholder="请输入职能..."
                        />
                        </Col>
                    </Row>

                    <Row class='contactInformation'>
                        <Col span="24">
                        <label
                            for=""
                            class='contactInformation-label'
                        >所属公司</label>
                        <Input
                            v-model="value"
                            placeholder="请输入贵公司名称..."
                        />
                        </Col>
                    </Row>

                    <Row
                        class='contactInformation'
                        :gutter="24"
                    >
                        <Col span="12">
                        <label
                            for=""
                            class='contactInformation-label'
                        >联络电话</label>
                        <Input
                            v-model="value"
                            placeholder="请输联系人电话..."
                        />
                        </Col>
                        <Col span="12">
                        <label
                            for=""
                            class='contactInformation-label'
                        >联络QQ</label>
                        <Input
                            v-model="value"
                            placeholder="请输入联系人QQ..."
                        />
                        </Col>
                    </Row>
                </Card>
                <!-- 登入信息 -->
                <Card class='marginTop24'>
                    <p slot="title">登入信息</p>
                    <Table
                        class='td-table-no-border'
                        :columns='columns1'
                        :data='data1'
                        size='small'
                    ></Table>

                </Card>
            </div>
        </section>
        <t-footer></t-footer>
    </div>
</template>
<script>
import tHeader from '@/components/t-header';
import personalInformationHeader from './personalInformation-header';
import tFooter from '@/components/t-footer';
export default {
    name: 'personalInformation',
    components: { tHeader, personalInformationHeader, tFooter },
    data() {
        return {
            value: '',
            columns1: [
                {
                    title: 'IP地址',
                    key: 'name'
                },
                {
                    title: '登入时间',
                    key: 'date'
                }
            ],
            data1: [
                {
                    name: '117.136.38.158',
                    date: '2016-10-03'
                },
                {
                    name: '117.136.38.158',
                    date: '2016-10-01'
                },
                {
                    name: '117.136.38.158',
                    date: '2016-10-02'
                },
                {
                    name: '117.136.38.158',
                    date: '2016-10-04'
                }
            ]
        };
    }
};
</script>