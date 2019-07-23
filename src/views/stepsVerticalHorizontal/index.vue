<style lang="less" scoped>
.stepsVerticalHorizontal {
    &-card {
        width: 936px;
        margin: 24px auto;
    }
}
</style>
<style lang="less">
</style>
<template>
    <div class="stepsVerticalHorizontal">
        <t-header></t-header>
        <t-administration-menu>
            <page-header
                :data='pageHeaderData'
                name='步骤表单-横'
            >
                <my-step></my-step>
            </page-header>
            <Card
                class='stepsVerticalHorizontal-card'
                :padding='0'
            >
                <my-form
                    :labelPosition='"left"'
                    :labelWidth='140'
                ></my-form>
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
    name: 'stepsVerticalHorizontal',
    components: { tHeader, tAdministrationMenu, pageHeader, myForm, myStep },
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