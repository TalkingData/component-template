<style lang="less" scoped>
.tAdministrationMenu {
    &-setUp {
        position: fixed;
        bottom: 48px;
        box-shadow: inset 0 1px 0 0 #e7e9eb;
        padding-left: 26px;
        line-height: 48px;
        height: 48px;
        width: 100%;
        font-size: 14px;
        color: rgba(23, 35, 61, 0.75);
        z-index: 900;
        background: #fff;
        width: 256px;
        transition: width 0.3s ease;
        i {
            color: rgba(23, 35, 61, 0.55);
            font-size: 24px;
            transition: width 0.2s ease;
            cursor: pointer;
        }
        span {
            transition: width 0.2s ease 0.2s;
            display: inline-block;
            overflow: hidden;
            width: 150px;
            text-overflow: ellipsis;
            white-space: nowrap;
            transition: width 0.2s ease;
        }
    }
    .widthClose {
        width: 64px;
        transition: width 0.2s ease;
        i {
            transform: translateX(-6px);
        }
        span {
            width: 0px;
        }
    }
    .ivu-layout-sider-children > .ivu-menu {
        margin-bottom: 98px;
    }
}
</style>
<template>
    <main class='tAdministrationMenu'>
        <Layout
            :style="{minHeight: '100vh'}"
            class="td-layout-light"
        >
            <Sider
                collapsible
                :collapsed-width="78"
                v-model="isCollapsed"
                @on-collapse="LayoutCollapse"
                width="256px"
            >
                <Menu
                    active-name="1-1"
                    :open-names="names"
                    width="auto"
                    @on-open-change="menuChange"
                    ref="menu"
                >

                    <MenuItem name="0">
                    <Icon
                        custom="i-td i-td-social_poll"
                        color='rgba(23,35,61,.55)'
                    />
                    <span>Dasboard</span>
                    </MenuItem>

                    <Submenu name="1">
                        <template slot="title">
                            <Icon custom="i-td i-td-action_explore" />
                            <span>应用分析</span>
                        </template>
                        <MenuItem name="1-1">概览</MenuItem>
                        <MenuItem name="1-2">用户趋势</MenuItem>
                        <MenuItem name="1-3">渠道分析</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon custom="i-td i-td-account_circle_px" />
                            <span>推送营销</span>
                        </template>
                        <MenuItem name="2-1">二级菜单</MenuItem>
                        <MenuItem name="2-2">二级菜单</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon custom="i-td i-td-action_explore" />
                            <span>开发助手</span>
                        </template>
                        <MenuItem name="3-1">二级菜单</MenuItem>
                        <MenuItem name="3-2">二级菜单</MenuItem>
                        <MenuItem name="3-3">二级菜单</MenuItem>
                        <MenuItem name="3-4">二级菜单</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon custom="i-td i-td-settings_px" />
                            <span>应用管理</span>
                        </template>
                        <MenuItem name="4-1">二级菜单</MenuItem>
                        <MenuItem name="4-2">二级菜单</MenuItem>
                        <MenuItem name="4-3">二级菜单</MenuItem>
                        <MenuItem name="4-4">二级菜单</MenuItem>
                    </Submenu>
                </Menu>
                <div
                    class='tAdministrationMenu-setUp'
                    :class='{"widthClose":isCollapsed}'
                >
                    <Row :gutter="24">
                        <Col span="4">

                        <Icon custom="i-td i-td-settings_px" />

                        </Col>
                        <Col span="20">
                        <span>管理设置</span>
                        </Col>
                    </Row>
                </div>
            </Sider>
            <Layout>
                <slot></slot>
            </Layout>
        </Layout>
    </main>

</template>
<script>
export default {
    data() {
        return {
            isCollapsed: false,
            names: ['1']
        };
    },
    computed: {},
    methods: {
        menuChange(data) {
            if (data.length) {
                this.isCollapsed = false;
            }
        },
        LayoutCollapse(data) {
            if (data) {
                this.names = [];
                this.$nextTick(() => {
                    this.$refs.menu.updateOpened();
                });
            }
        }
    }
};
</script>

