<style lang="less" scoped>
.form {
    background: #ffffff;
    width: 100%;
    height: 100%;
    border-left: 1px solid rgba(23, 35, 61, 0.1);
    padding: 28px 32px;
}
</style>
<template>
    <Form
        class='form'
        :model="form"
        :label-width="labelWidth"
        :label-position="labelPosition"
    >
        <FormItem>
            <span slot="label">
                人群名称
                <Tooltip
                    content="提示"
                    placement="top"
                >
                    <Icon
                        color="#aeb2bb"
                        custom="i-td i-td-help_outline_px"
                    />
                </Tooltip>
            </span>
            <Input
                v-model="form.name"
                placeholder="例：营销潜客人群"
                style='width:300px'
            />
        </FormItem>
        <FormItem>
            <span slot="label">
                人群描述 (选填)
                <Tooltip
                    content="提示"
                    placement="top"
                >
                    <Icon
                        color="#aeb2bb"
                        custom="i-td i-td-help_outline_px"
                    />
                </Tooltip>
            </span>
            <Input
                v-model="form.desc"
                type="textarea"
                placeholder="例：营销潜客人群"
                style='width:300px'
            />
        </FormItem>
        <FormItem>
            <span slot="label">
                种子人群
            </span>
            <Select
                v-model="form.select"
                style='width:300px'
            >
                <Option value="东直门商圈人群">东直门商圈人群</Option>
                <Option value="海淀区商圈人群">海淀区商圈人群</Option>
            </Select>
            <div class="td-form-desc">
                由于人群样本数不能低于1000且不能高于10,000,000，系统自动过滤不符合条件的人群
            </div>
        </FormItem>
        <FormItem>
            <span slot="label">
                人群范围
            </span>
            <RadioGroup v-model="form.radio">
                <Radio label="value1">包含种子人群</Radio>
                <Radio label="value2">不包含种子人群</Radio>
            </RadioGroup>
        </FormItem>
        <FormItem>
            <span slot="label">
                输出人群数
            </span>
            <Slider
                v-model="form.slider"
                style="width:300px"
            ></Slider>
            <div
                class="td-form-desc"
                style="width:300px"
            >
                <span style="float: left">100万</span>
                <span style="float: right">2000万</span>
            </div>
        </FormItem>
        <FormItem>
            <Button
                type="text"
                style="margin-right:16px"
            >上一步</Button>
            <Button type="primary">下一步</Button>
        </FormItem>
    </Form>
</template>
<script>
export default {
    props: {
        labelPosition: {
            type: String
        },
        labelWidth: {
            type: Number
        }
    },
    data() {
        return {
            form: {
                name: '',
                desc: '',
                select: '东直门商圈人群',
                radio: 'value1',
                slider: 60
            }
        };
    },
    methods: {
        handleSubmit(name) {
            this.$refs[name].validate(valid => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            });
        },
        handleReset(name) {
            this.$refs[name].resetFields();
        }
    }
};
</script>
