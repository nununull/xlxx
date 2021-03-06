<template>
  <div>
    <div id="Mp4Player"></div>
  </div>
</template>

<script>
import Player from "xgplayer";

export default {
  name: "Mp4Player",
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
    this.player = new Player({
      id: "Mp4Player",
      url: this.url,
      width: "1060px",
      height: "50rem",
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
      fitVideoSize: "auto",
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