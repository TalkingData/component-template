<style lang="less" scoped>
.cardList {
    background: #eff0f2;
    &-header {
        height: 56px;
        line-height: 56px;
        font-size: 20px;
        color: #17233d;
        background: #ffffff;
        padding-left: 152px;
        box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
    }
    &-content {
        width: 1140px;
        margin: 24px auto;
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap;

        &-card {
            width: 266px;
            height: 192px;
            background: #ffffff;
            box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14);
            border-radius: 4px;
            overflow: hidden;
        }

        &-add {
            padding: 57px 24px 24px;
            color: #2185f0;
            text-align: center;
            margin-bottom: 24px;

            i {
                font-size: 33px;
            }
            p {
                padding-top: 21px;
                font-size: 14px;
            }
        }
        &-light {
            margin: 0 0 24px 24px;
            padding: 24px;
            h2 {
                font-size: 16px;
                color: #17233d;
                line-height: 24px;
            }
            p {
                padding-top: 8px;
                font-size: 13px;
                color: rgba(23, 35, 61, 0.55);
                line-height: 21px;
            }
            footer {
                padding-top: 35px;
                span {
                    font-size: 13px;
                    font-size: 13px;
                    color: rgba(23, 35, 61, 0.55);
                }
                b {
                    float: right;
                    font-size: 12px;
                    width: 22px;
                    height: 22px;
                    border-radius: 50%;
                    line-height: 22px;
                    text-align: center;
                    color: #fff;
                }
            }
        }
        &-dark {
            margin: 0 0 24px 24px;
            padding-bottom: 24px;
            &-top {
                background: #2185f0;
                height: 112px;
                padding: 24px;
            }
            h2 {
                font-size: 16px;
                color: #fff;
                line-height: 24px;
            }
            p {
                padding-top: 8px;
                font-size: 13px;
                color: #fff;
                line-height: 21px;
            }
            footer {
                padding: 35px 24px 24px;

                span {
                    font-size: 13px;
                    font-size: 13px;
                    color: rgba(23, 35, 61, 0.55);
                }
                i {
                    float: right;
                    font-size: 20px;
                    color: rgba(23, 35, 61, 0.35);
                }
            }
        }
    }
}
</style>
<template>
    <main class="cardList">
        <t-header></t-header>
        <header class='cardList-header'>
            卡片列表
        </header>
        <section class='cardList-content'>
            <div class='cardList-content-add cardList-content-card'>
                <Icon type="md-add-circle" />
                <p>创建项目</p>
            </div>
            <div
                class='cardList-content-light cardList-content-card'
                v-for='(option) in data'
                :key='option.projectName'
            >
                <h2>{{option.projectName}}</h2>
                <p>{{option.describe}}</p>
                <footer>
                    <span>{{option.creationTime}}</span>
                    <b :style='{"background":stringToColor(option.name)}'>{{option.name}}</b>
                </footer>
            </div>
            <div class='cardList-content-add cardList-content-card'>
                <Icon type="md-add-circle" />
                <p>创建项目</p>
            </div>
            <div
                class='cardList-content-dark cardList-content-card'
                v-for='(option,index) in data1'
                :key='index'
            >
                <div class='cardList-content-dark-top'>
                    <h2>{{option.projectName}}</h2>
                    <p>{{option.describe}}</p>
                </div>
                <footer>
                    <span>{{option.creationTime}}</span>
                    <Icon :type="option.icon" />
                </footer>
            </div>
        </section>
    </main>
</template>

<script>
import tHeader from '@/components/t-header';
export default {
    name: 'cardList',
    components: { tHeader },
    data() {
        return {
            data: [
                {
                    projectName: '项目名称01',
                    describe:
                        '我的第一个项目，主要用来加工APP标签描述，文案最好控制在两到三行最好，在视觉上比较美观…',
                    creationTime: '创建时间: 2018-02-03',
                    name: 'an'
                },
                {
                    projectName: '项目名称02',
                    describe:
                        '我的第一个项目，主要用来加工APP标签描述，文案最好控制在两到三行最好，在视觉上比较美观…',
                    creationTime: '创建时间: 2018-02-03',
                    name: 'om'
                },
                {
                    projectName: '项目名称03',
                    describe:
                        '我的第一个项目，主要用来加工APP标签描述，文案最好控制在两到三行最好，在视觉上比较美观…',
                    creationTime: '创建时间: 2018-02-03',
                    name: 'aj'
                }
            ],
            data1: [
                {
                    projectName: '文件名称.xsl',
                    describe: '创建时间：2016.02.28 12:00:00',
                    creationTime: '创建时间: 2018-02-03',
                    icon: 'md-settings'
                },
                {
                    projectName: '文件名称.xsl',
                    describe: '创建时间：2016.02.28 12:00:00',
                    creationTime: '创建时间: 2018-02-03',
                    icon: 'md-settings'
                },
                {
                    projectName: '文件名称.xsl',
                    describe: '创建时间：2016.02.28 12:00:00',
                    creationTime: '创建时间: 2018-02-03',
                    icon: 'md-settings'
                }
            ]
        };
    },
    methods: {
        stringToColor: function(str) {
            const colorList = [
                '#03ccaa',
                '#38BA4C',
                '#34508C',
                '#FF8454',
                '#DB425A',
                '#34508C'
            ];
            let hash = 0;
            if (!str) return;
            for (let i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            let color = '';
            for (let i = 0; i < 3; i++) {
                let value = (hash >> (i * 8)) & 0xff;
                color += ('00' + value.toString(16)).substr(-2);
            }
            const index = parseInt(color, 16) % 6;
            return colorList[index];
        }
    }
};
</script>
