<style lang='less' scoped>
.steps {
    border-top: 1px solid rgba(23, 35, 61, 0.15);
    padding-top: 16px;
    margin-top: 16px;
    &-content {
        width: 936px;
        margin: 0 auto;
        padding-left: 120px;
    }
}
</style>

<template>
    <main class='steps'>
        <div class='steps-content'>
            <Steps
                size='small'
                :current="1"
            >
                <Step title="已完成"></Step>
                <Step title="进行中"></Step>
                <Step title="待进行"></Step>
            </Steps>
        </div>
    </main>
</template>
<script>
export default {};
</script>
