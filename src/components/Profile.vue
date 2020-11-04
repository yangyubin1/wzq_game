<template>
    <div class="container">
        <div class="header">
            <span class="title">{{$t('lang.profile.profile')}}</span>
        </div>
        <div class="scrollbar">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
            <el-form :model="player">
                <!--                <el-form-item :label="$t('lang.profile.id')">{{player.id}}</el-form-item>-->
                <el-form-item :label="$t('lang.profile.name')">{{player.name}}</el-form-item>
                <el-form-item :label="$t('lang.profile.status')">{{$t('lang.status.' + player.status)}}</el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
            }
        },
        computed: {
            player() {
                // console.log("vuex获取的用户信息:", this.$store.getters.player)
                return this.$store.getters.player
            }
        },
        mounted() {
            //console.log("vuex获取的用户信息:", this.$store.getters.player)
            //刷新相当于也是websocket断开，所以强制刷新重新登录
            if (this.$store.getters.player.name === 'unnamed') {
                this.$message({
                    message: '刷新页面强制断开websocket连接，两秒钟后请重新登录'
                })
                setTimeout(()=> {
                    this.$router.push('/login')
                }, 2000)

            }
        }
    }
</script>

<style scoped>
    .scrollbar {
        height: calc(30vh);
        min-height: 180px;
        margin-left: 10%;
        margin-top: 5%;
    }

    .header {
        border-bottom: 1px solid lightgrey;
        padding: 2% 0 2% 5%;
    }

    .title {
        padding-top: 100px;
    }

    .el-form-item {
        margin: 0 0 0 0;
    }
</style>
