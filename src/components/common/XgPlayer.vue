<template>
  <div>
    <mp4-player :url="playUrl" v-if="isMp4"></mp4-player>
    <xlxx-player :url="playUrl" v-if="!isMp4"></xlxx-player>
  </div>
</template>

<script>
import Mp4Player from "@/components/common/Mp4Player";
import XlxxPlayer from "@/components/common/XlxxPlayer";

export default {
  name: "Player",
  props: ["playUrl"],
  components: {
    "mp4-player": Mp4Player,
    "xlxx-player": XlxxPlayer
  },
  data() {
    return {}
  },
  computed: {
    isMp4() {

      if (-1 < this.playUrl.indexOf("mp4") || -1 < this.playUrl.indexOf("MP4")) {

        return true;
      }

      return false;
    }
  }
}
</script>

<style scoped>

</style>