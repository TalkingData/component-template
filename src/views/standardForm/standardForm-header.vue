<style lang="less" scoped>
.standardFormHeader {
    background: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
    height: 56px;
    line-height: 56px;
    padding: 0 24px;
    & > label {
        font-size: 18px;
        font-weight: bold;
    }
    &-right {
        float: right;
    }
}
</style>
<template>
    <div class='standardFormHeader'>
        <label for="">列表</label>
        <div class='standardFormHeader-right'>
            <ButtonGroup style='margin-right:8px;'>
                <Button
                    :type="option.value===value1?'primary':'default'"
                    v-for='option in data'
                    :key='option.value'
                    @click='value1=option.value'
                >{{option.label}}</Button>
            </ButtonGroup>
            <DatePicker
                :value="value2"
                type="daterange"
                placement="bottom-end"
                placeholder="请选择日期..."
                style="width: 218px"
            ></DatePicker>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value1: 'week',
            data: [
                {
                    label: '周',
                    value: 'week'
                },
                {
                    label: '日',
                    value: 'day'
                },
                {
                    label: '月',
                    value: 'month'
                }
            ],
            value2: ['2016-01-01', '2016-02-15']
        };
    }
};
</script>