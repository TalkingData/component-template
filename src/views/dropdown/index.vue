<style lang="less" scoped>
.main {
    padding: 24px;
    background: #f7f7f8;
    .carduser {
        &-header {
            height: 63px;
            line-height: 63px;
            padding: 0 0 0 16px;
            font-size: 14px;
            color: #17233d;

            span {
                width: 40px;
                height: 40px;
                line-height: 40px;
                display: inline-block;
                text-align: center;
                font-size: 16px;
                color: #fff;
                background: rgba(33, 133, 240, 1);
                margin-right: 16px;
                border-radius: 50%;
            }
        }
        &-center {
            padding: 15px 22px;
            p {
                font-size: 14px;
                color: rgba(23, 35, 61, 0.55);
                line-height: 22px;
            }
            & > div {
                font-size: 14px;
                color: #17233d;
                line-height: 22px;
            }
        }
        &-content {
            padding: 8px 30px;
            p {
                height: 48px;
                line-height: 48px;
                font-size: 14px;
                color: rgba(23, 35, 61, 0.75);
                i {
                    margin-right: 30px;
                }
            }
        }

        &-border {
            border-bottom: 1px solid rgba(23, 35, 61, 0.15);
        }
    }
    .application {
        &-header {
            height: 48px;
            overflow: hidden;
            border-bottom: 1px solid #e7e9ea;
        }
        &-contenrt {
            height: 240px;
            overflow-y: auto;
            p {
                height: 48px;
                line-height: 48px;
                padding: 0 19px;
                font-size: 14px;
                color: rgba(23, 35, 61, 0.75);
                img {
                    width: 28px;
                    margin-right: 18px;
                    vertical-align: middle;
                }
            }
        }
        &-footer {
            height: 48px;
            line-height: 48px;
            padding: 0 20px;
            font-size: 14px;
            color: #2185f0;
            border-top: 1px solid #e7e9ea;
            i {
                margin-right: 10px;
            }

            span {
                float: right;
                font-size: 14px;
                color: rgba(23, 35, 61, 0.75);
            }
        }
    }
}
</style>
<style lang="less">
.TDD-application-search {
    height: 48px;
    .ivu-input {
        height: 100%;
        border-color: #fff;
        border-radius: 0;
    }

    .ivu-input-prefix i,
    .ivu-input-suffix i {
        line-height: 48px;
    }
    .ivu-input-prefix,
    .ivu-input-suffix {
        width: 65px;
    }
    .ivu-input-with-prefix {
        padding-left: 65px;
    }
}
</style>
<template>
    <div class='main'>
        <Row
            type="flex"
            justify="center"
            align="top"
            class="code-row-bg"
        >
            <Col span="6">
            <Card
                style="width:246px"
                class='carduser'
                :padding='0'
            >
                <header class='carduser-header carduser-border'>
                    <span>ja</span>
                    jan.yu@tendcloud.com
                </header>
                <div class='carduser-content'>
                    <p>
                        <Icon
                            custom="i-td i-td-account_circle_px"
                            size='20'
                            color='#172d3d8c'
                        />
                        <span>中户中心</span>
                    </p>
                    <p>
                        <Icon
                            custom="i-td i-td-settings_px"
                            size='20'
                            color='#172d3d8c'
                        />
                        <span>账户管理</span>
                    </p>
                    <p>
                        <Icon
                            type="md-exit"
                            size='20'
                            color='#172d3d8c'
                        />
                        <span>推出登录</span>
                    </p>
                </div>
            </Card>
            </Col>

            <Col span="6">
            <Card
                style="width:312px"
                class='carduser'
                :padding='0'
            >
                <header class='carduser-header carduser-border'>
                    <span>ja</span>
                    jan.yu@tendcloud.com
                </header>
                <div class='carduser-center carduser-border'>
                    <p>账户有效期</p>
                    <div>2018-08-28 至 2019-09-07</div>
                </div>
                <div class='carduser-content'>
                    <p>
                        <Icon
                            custom="i-td i-td-account_circle_px"
                            size='20'
                            color='#172d3d8c'
                        />
                        <span>账户设置</span>
                    </p>
                    <p>
                        <Icon
                            type="md-exit"
                            size='20'
                            color='#172d3d8c'
                        />
                        <span>推出登录</span>
                    </p>
                </div>

            </Card>
            </Col>
            <Col span="6">
            <Card
                style="width:280px"
                class='application'
                :padding='0'
            >
                <header class='application-header'>
                    <Input
                        placeholder="搜索应用..."
                        class='TDD-application-search'
                        style="width:100%"
                    >
                    <Icon
                        custom="i-td i-td-search_px"
                        slot="prefix"
                        color='#172d3d8c'
                        :size='17'
                    />
                    </Input>
                </header>
                <div class='application-contenrt'>
                    <p><img
                            src="@/assets/imgs/tb.png"
                            alt=""
                        >淘宝商城</p>
                    <p><img
                            src="@/assets/imgs/wx.png"
                            alt=""
                        >微信</p>
                    <p><img
                            src="@/assets/imgs/wf.png"
                            alt=""
                        >Wi-Fi万能钥匙</p>
                    <p><img
                            src="@/assets/imgs/xl.png"
                            alt=""
                        >新浪微博</p>
                    <p><img
                            src="@/assets/imgs/gg.png"
                            alt=""
                        >谷歌浏览器</p>
                </div>
                <footer class='application-footer'>

                    <Icon
                        custom="i-td i-td-add_px"
                        slot="prefix"
                    />创建产品
                    <span>产品列表</span>
                </footer>
            </Card>
            </Col>
        </Row>

    </div>
</template>