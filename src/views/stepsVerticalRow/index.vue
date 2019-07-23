<style lang="less" scoped>
.stepsVerticalRow {
    &-card {
        width: 936px;
        margin: 24px auto;
        // background: rgba(23, 35, 61, 0.03);
        footer {
            height: 63px;
            text-align: right;
            padding-right: 24px;
            line-height: 63px;
            border-top: 1px solid #f1f2f3;
            background: #ffffff;
        }
    }
}
</style>
<style lang="less">
</style>
<template>
    <div class="stepsVerticalRow">
        <t-header></t-header>
        <t-administration-menu>
            <page-header
                :data='pageHeaderData'
                name='竖向步骤表单'
            ></page-header>
            <Card
                class='stepsVerticalRow-card'
                :padding='0'
            >
                <Row>
                    <Col span="7">
                    <my-step></my-step>
                    </Col>
                    <Col span="17">
                    <my-form :labelPosition='"top"'></my-form>
                    </Col>
                </Row>
                <footer>
                    <Button
                        type="text"
                        style='margin-right:24px'
                    >取消</Button>
                    <Button type="primary">确定</Button>
                </footer>
            </Card>
        </t-administration-menu>
    </div>
</template>
<script>
import tHeader from '@/components/t-header';
import tAdministrationMenu from '@/components/t-administration-menu';
import pageHeader from '@/components/pageHeader';
import myForm from '@/components/form';
import myStep from './steps';
export default {
    name: 'stepsVerticalRow',
    components: { tHeader, tAdministrationMenu, pageHeader, myStep, myForm },
    data() {
        return {
            pageHeaderData: [
                {
                    name: '首页',
                    link: '/'
                },
                {
                    name: '表单',
                    link: '/'
                }
            ]
        };
    }
};
</script>