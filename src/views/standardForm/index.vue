<style lang="less" scoped>
.standardForm {
    &-content {
        background: #f1f2f4;
        padding: 24px;
        &-card {
            padding-top: 4px;
            text-align: center;
            height: 96px;
            span {
                color: #17233d;
                font-size: 14px;
                line-height: 22px;
            }
            p {
                padding-top: 4px;
                line-height: 28px;
                color: #17233d;
                font-size: 20px;
            }
        }
        &-table {
            margin-top: 24px;
        }
    }
}
.fr {
    float: right;
}
</style>
<template>
    <div class='standardForm'>
        <t-header></t-header>

        <t-administration-menu>
            <standardFormHeader></standardFormHeader>
            <section class='standardForm-content'>
                <Row :gutter="24">
                    <Col span="6">
                    <Card class='standardForm-content-card'>
                        <span>应用数量</span>
                        <p>5个应用</p>
                    </Card>
                    </Col>
                    <Col span="6">
                    <Card class='standardForm-content-card'>
                        <span>累计覆盖设备</span>
                        <p>126,932</p>
                    </Card>
                    </Col>
                    <Col span="6">
                    <Card class='standardForm-content-card'>
                        <span>今日新增设备</span>
                        <p>126,932</p>
                    </Card>
                    </Col>
                    <Col span="6">
                    <Card class='standardForm-content-card'>
                        <span>今日活跃设备</span>
                        <p>126,932</p>
                    </Card>
                    </Col>
                </Row>
                <Card class='standardForm-content-table'>
                    <div slot="title">
                        <Button
                            type="primary"
                            icon="md-add"
                        >创建应用</Button>
                        <Input
                            prefix="ios-search"
                            placeholder="检索内容"
                            style="width:209px"
                            class='fr'
                        />
                    </div>
                    <Table
                        border
                        :columns="columns6"
                        :data="data5"
                    ></Table>

                </Card>
            </section>
        </t-administration-menu>

    </div>
</template>
<script>
import tHeader from '@/components/t-header';
import tAdministrationMenu from '@/components/t-administration-menu';
import standardFormHeader from './standardForm-header';
export default {
    name: 'standardForm',
    components: { tHeader, tAdministrationMenu, standardFormHeader },
    data() {
        return {
            columns6: [
                {
                    title: '应用名称',
                    key: 'name'
                },
                {
                    title: '应用平台',
                    key: 'platform',
                    render: (h, params) => {
                        let list = [];
                        params.row.platform.forEach((option, index) => {
                            list.push(
                                h('Icon', {
                                    style: {
                                        fontFamily: 'i-td"',
                                        fontSize: '16px',
                                        marginRight:
                                            index !==
                                            params.row.platform.length - 1
                                                ? '8px'
                                                : 0
                                    },
                                    props: {
                                        custom: `i-td i-td-${option}`
                                    }
                                })
                            );
                        });

                        return h(
                            'div',
                            {
                                style: {
                                    color: 'rgba(23,35,61,0.55)'
                                }
                            },
                            list
                        );
                    }
                },
                {
                    title: '累计设备覆盖',
                    key: 'coverageEquipment',
                    sortable: true
                },
                {
                    title: '今日新增设备',
                    key: 'additionalEquipment',
                    sortable: true
                },
                {
                    title: '今日活跃设备',
                    key: 'activeEquipment',
                    sortable: true
                },
                {
                    title: '操作',
                    key: 'action',
                    render: h => {
                        return h(
                            'div',
                            {
                                style: {
                                    color: 'rgba(23,35,61,0.55)'
                                }
                            },
                            [
                                h('Icon', {
                                    style: {
                                        fontFamily: 'i-td"',
                                        cursor: 'pointer'
                                    },
                                    props: {
                                        custom: 'i-td i-td-visibility_px'
                                    }
                                }),
                                h('Icon', {
                                    style: {
                                        fontFamily: 'i-td"',
                                        margin: '0 26px',
                                        cursor: 'pointer'
                                    },
                                    props: {
                                        custom: 'i-td i-td-create_px'
                                    }
                                }),
                                h('Icon', {
                                    style: {
                                        fontFamily: 'i-td"',
                                        cursor: 'pointer'
                                    },
                                    props: {
                                        custom: 'i-td i-td-more_vert_px'
                                    }
                                })
                            ]
                        );
                    }
                }
            ],
            data5: [
                {
                    name: '我是应用名称',
                    platform: [
                        'ios',
                        'android',
                        'windows',
                        'html',
                        'miniprogram'
                    ],
                    coverageEquipment: '126.932',
                    additionalEquipment: '126,932',
                    activeEquipment: '126,932'
                },
                {
                    name: '我是应用名称',
                    platform: [
                        'ios',
                        'android',
                        'windows',
                        'html',
                        'miniprogram'
                    ],
                    coverageEquipment: '126.932',
                    additionalEquipment: '126,932',
                    activeEquipment: '126,932'
                },
                {
                    name: '我是应用名称',
                    platform: [
                        'ios',
                        'android',
                        'windows',
                        'html',
                        'miniprogram'
                    ],
                    coverageEquipment: '126.932',
                    additionalEquipment: '126,932',
                    activeEquipment: '126,932'
                },
                {
                    name: '我是应用名称',
                    platform: [
                        'ios',
                        'android',
                        'windows',
                        'html',
                        'miniprogram'
                    ],
                    coverageEquipment: '126.932',
                    additionalEquipment: '126,932',
                    activeEquipment: '126,932'
                }
            ]
        };
    }
};
</script>