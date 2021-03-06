<template>
  <div>
    <div id="xlxxPlayer"></div>
  </div>
</template>

<script>
import "xgplayer";
import HlsJsPlayer from "xgplayer-hls.js";

export default {
  name: "XlxxPlayer",
  props: ["url"],
  data() {
    return {
      player: {}
    }
  },
  computed: {
    playUrl() {
      return this.url;
    }
  },
  mounted() {
    this.player = new HlsJsPlayer({
      id: "xlxxPlayer",
      url: this.url,
      width: "1060px",
      height: "40rem",
      playsinline: true,
      autoplay: true,
      whitelist: [
        ""
      ],
      pip: true,
      playbackRate: [
        1.25,
        1.5,
        2
      ],
      keyShortcut: "on",
      cssFullscreen: true,
      rotate: {
        //只旋转内部video
        innerRotate: true,
        // 旋转方向是否为顺时针
        clockwise: true
      },
      lang: "zh-cn"
    });
  },
  watch: {
    playUrl(newUrl) {
      this.player.src = newUrl;
    }
  }
}
</script>

<style scoped>

</style>