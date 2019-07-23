<style lang="less">
.personalInformation-header {
    height: 56px;
    line-height: 56px;
    font-size: 18px;
    color: #17233d;
    background: #ffffff;
    padding-left: 152px;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.14);
    color: #17233d;
    i {
        font-size: 22px;
        color: rgba(23, 35, 61, 0.75);
        margin-right: 8px;
        position: relative;
        top: -2px;
    }
}
</style>
<template>
    <header class='personalInformation-header'>
        <Icon type="md-arrow-back" />
        <slot></slot>
    </header>
</template>