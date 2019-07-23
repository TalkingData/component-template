<style lang='less' scoped>
.steps {
    padding: 24px;
}
</style>

<template>
    <main class='steps'>
        <Steps
            size='small'
            :current="1"
            direction="vertical"
        >
            <Step
                title="已完成"
                content="这里是该步骤的描述信息"
            ></Step>
            <Step
                title="进行中"
                content="这里是该步骤的描述信息"
            ></Step>
            <Step
                title="待进行"
                content="这里是该步骤的描述信息"
            ></Step>
        </Steps>
    </main>

</template>
<script>
export default {};
</script>
