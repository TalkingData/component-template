<style lang='less' scoped>
.pageHeader {
    background: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    padding: 16px 0;
    &-content {
        padding: 0 24px;
        &-back {
            font-size: 20px;
            color: #17233d;
            line-height: 28px;
            padding-top: 6px;
            i {
                cursor: pointer;
                margin: -5px 12px 0 0;
            }
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
        <div class='pageHeader-content'>
            <Breadcrumb separator=">">
                <BreadcrumbItem
                    :to="option.link"
                    v-for='option in data'
                    :key='option.name'
                >{{option.name}}</BreadcrumbItem>
            </Breadcrumb>
            <div class='pageHeader-content-back'>

                <Icon
                    type="md-arrow-back"
                    color='rgba(23,35,61,0.55)'
                    size='16px'
                />{{name}}
            </div>
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
