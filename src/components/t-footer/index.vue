<template>
    <Row>
        <Col
            span="12"
            offset="2"
        >
        <div id='tdd-footer'>
        </div>
        </Col>
        <Col
            span="6"
            offset="4"
        >
        <Dropdown @on-click='onLanguageChange'>
            <a href="javascript:void(0)">
                {{getlanguage}}
                <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem
                    :name='option.value'
                    v-for='option in columns'
                    :key='option.value'
                    :selected='option.value===currentValue'
                >{{option.label}}</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </Col>
    </Row>

</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => {
                return [
                    {
                        zh: '服务条款',
                        en: 'The terms of service',
                        link: ''
                    },
                    {
                        zh: '服务政策',
                        en: 'Privacy Policy',
                        link: ''
                    },
                    {
                        zh: '文档中心',
                        en: 'Documents',
                        link: ''
                    },
                    {
                        zh: 'SDK下载',
                        en: 'Download SDK',
                        link: ''
                    }
                ];
            }
        },
        value: {
            type: String,
            default: 'zh'
        }
    },
    data() {
        return {
            columns: [
                {
                    label: '中文 (简体）',
                    value: 'zh'
                },
                {
                    label: 'English',
                    value: 'en'
                }
            ],
            currentValue: this.value,
            pageFooter: null
        };
    },
    computed: {
        getlanguage() {
            return this.columns.filter(data => {
                return data.value === this.value;
            })[0].label;
        }
    },
    watch: {
        value(val) {
            this.currentValue = val;
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            let footer = document.getElementById('tdd-footer');
            this.pageFooter = new window['TDUI'].PageFooter({
                id: footer,
                language: this.currentValue,
                extendLinks: this.data
            });
            //切换中英文
            this.pageFooter.setLanguage(this.currentValue);
        },
        onLanguageChange(data) {
            this.currentValue = data;
            this.pageFooter.setLanguage(data);
        }
    }
};
</script>