<template>
    <div
        id="app"
        class='app'
    >
        <p class='app-current'>
            <Button
                type="text"
                @click='open = !open'
            >
                <Icon type="ios-aperture" /></Button>
        </p>
        <nav
            class="app-nav"
            v-if='open'
        >
            <router-link to="/cardList">卡片列表</router-link>
            <router-link to="/personalInformation">个人信息</router-link>
            <router-link to="/standardForm">标准表格</router-link>
            <router-link to="/dropdown">dropdown</router-link>
            <router-link to="/stepsVerticalRow">stepsVerticalRow</router-link>
            <router-link to="/stepsVerticalHorizontal">stepsVerticalHorizontal</router-link>

        </nav>
        <div
            class='app-content'
            :class='{"width80":open}'
        >
            <router-view />
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            open: false
        };
    }
};
</script>
<style lang="less">
.app {
    display: flex;
    &-current {
        position: fixed;
        left: 0;
        top: 50%;
        z-index: 999;
    }
    &-nav {
        width: 100px;
        a {
            font-weight: bold;
            color: #2c3e50;
            display: block;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
    &-content {
        width: 100%;
    }
}
.width80 {
    width: calc(100% - 100px);
}
</style>
