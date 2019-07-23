<style lang='less' scoped>
.pageHeader {
    background: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 16px 24px;
    &-back {
        font-size: 20px;
        color: #17233d;
        line-height: 28px;
        padding-top: 6px;
        i {
            cursor: pointer;
        }
        span {
            padding-left: 12px;
        }
    }
}
</style>
<style lang="less">
.pageHeader .ivu-breadcrumb a {
    font-size: 14px;
    color: rgba(23, 35, 61, 0.55);
}
</style>    
<template>
    <main class='pageHeader'>
        <Breadcrumb separator=">">
            <BreadcrumbItem
                :to="option.link"
                v-for='option in data'
                :key='option.name'
            >{{option.name}}</BreadcrumbItem>
        </Breadcrumb>
        <div class='pageHeader-back'>
            <Icon
                type="md-arrow-back"
                color='rgba(23,35,61,0.55)'
                size='16px'
            /> <span>{{name}}</span>
        </div>
        <slot></slot>
    </main>

</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => {
                return [];
            }
        },
        name: {
            type: String,
            default: ''
        }
    }
};
</script>
