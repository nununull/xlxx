<template>
  <div class="player-main">
    <div class="player-header">
      <el-page-header @back="$router.go(-1)" content="秋名山车神" />
    </div>
    <div class="player">
      <xg-player :play-url="playUrl"/>
    </div>
  </div>
</template>

<script>
import XgPlayer from "@/components/common/XgPlayer";

export default {
  name: "Player",
  components: {
    "xg-player": XgPlayer
  },
  data() {
    return {}
  },
  computed: {
    playUrl() {
      return localStorage.getItem("playUrl");
      // return "https://vip4.ddyunbo.com/20210225/9Bna7EPn/index.m3u8?skipl=1";
    }
  }
}
</script>

<style scoped>
.player-main{
  padding: 0 0 0 30px;
}

.player-header{
  padding: 0 0 30px 0;
}

.player{
  width: 100vw;
  margin: 0 auto;
}
</style>