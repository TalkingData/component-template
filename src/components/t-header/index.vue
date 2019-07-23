<template>
    <div
        id='tdd-header'
        style='height:64px'
    >
    </div>
</template>
<script>
export default {
    mounted() {
        this.init();
    },
    methods: {
        init() {
            window['TDUI'].setConfig({
                env: 'dev', //环境参数
                tdppt: '4cb4684c-90fe-41a4-b8f1-8d7f9e0a2a28',
                productList: [
                    {
                        id: '-1', //产品id，官网没有产品id，用-1表示
                        theme: 'white', //主题
                        icon:
                            '//jic.talkingdata.com/websites/v2/images/logo.png', //图片logo，一般不用配置，默认读取数据库配置。
                        documentLink: '', //文档链接地址，一般不用配置，默认读取数据库配置。
                        link: '', //产品入口，一般不用配置，默认读取数据库配置。
                        lookLink: '' //产品介绍页入口，一般不用配置，默认读取数据库配置。
                    }
                ]
            });
            let head = document.getElementById('tdd-header');
            new window['TDUI'].PageHeader(head, {
                productId: '-1', //产品id
                onSettingClick() {
                    //设置按钮 触发事件
                    console.log('click setting icon');
                },
                onLoad(user, productConfig) {
                    //数据请求并且加载完成事件
                    console.log(user, productConfig);
                },
                onInformShow() {
                    //消息模块呼出事件
                    //document.body.style.overflow = "hidden";
                },
                onInformHide() {
                    //消息模块关闭事件
                    // document.body.style.overflow = "auto";
                }
            });

            // let notiModul = new window['TDUI'].Notification({
            //     productId: '-1', //产品ID，设置当前消息模块的分类， 一般默认分类是全部
            //     onShow() {
            //         //document.body.style.overflow = "hidden";
            //     },
            //     onHide() {
            //         //document.body.style.overflow = "auto";
            //     }
            // });
            // notiModul.show();
            // let notificationDetail = new window['TDUI'].NotificationDetail({
            //     onShow() {
            //         //   document.body.style.overflow = "hidden";
            //     },
            //     onHide() {
            //         //  document.body.style.overflow = "auto";
            //     }
            // });
            //  notificationDetail.show('12'); //参数通知消息ID
        }
    }
};
</script>