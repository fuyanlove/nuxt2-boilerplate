<template>
    <div class="c-lang-switcher" :class="{'el-menu-item': isPhone }">
        <span class="c-lang-label">{{ $t('language') }}</span>
        <el-dropdown trigger="click">
            <span :class="[{ 'el-button el-button--large': !isPhone }]">
                <span class="u-lang">{{ $t("lang") }}</span>
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in options" :key="item.code" @click.native="changeLang(item.code)">
                    <span>{{ item.text }}</span>
                </el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
    name: "LangSwitcher",
    data() {
        return {
            isPhone: false,
        };
    },
    mounted() {
        this.isPhone = window.innerWidth < 768;
    },
    computed: {
        options() {
            return this.$i18n.locales;
        },
    },
    methods: {
        changeLang(lang) {
            this.$i18n.setLocale(lang);
        },
    },
};
</script>
