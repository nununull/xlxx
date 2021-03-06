<template>
  <div>
    <div v-if="isElectron">
      <div class="window-move">
        <i class="el-icon-rank window-btn-item window-btn-move"/>
      </div>
      <div class="fix-window-button">
        <div class="window-btn-group">
          <i class="window-btn-item window-btn-fix" :class="isFixed ? 'el-icon-s-promotion' : 'el-icon-position'"
             @click="fix"/>
          <i class="el-icon-bottom-right window-btn-item window-btn-mini" @click="mini"/>
          <i class="el-icon-full-screen window-btn-item window-btn-max" @click="max"/>
          <i class="el-icon-switch-button window-btn-item window-btn-close" @click="close"/>
        </div>
      </div>
    </div>

    <el-affix>
      <el-tabs class="main" :tab-position="tabPosition" :active-name="activeTab" style="height: 90vh;"
               @tab-click="tabClick">
        <el-tab-pane label="小学生打卡区" name="/XxsPage">

        </el-tab-pane>
        <el-tab-pane label="老色批飙车区" name="/LspPage">

        </el-tab-pane>
        <el-tab-pane label="操作指南" name="/operateGuide">

        </el-tab-pane>
      </el-tabs>
    </el-affix>
    <div class="view">
      <router-view v-slot="{ Component }">
        <keep-alive exclude="Player">
          <component :is="Component"/>
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script>
import isElectron from "is-electron";

export default {
  name: 'Home',
  data() {
    return {
      isElectron: isElectron(),
      activeTab: 'under18',
      isFixed: false,
      tabPosition: 'left',
    }
  },
  computed: {},
  methods: {
    tabClick(tab) {

      this.$router.push(tab.paneName);
    },
    fix() {

      window.ipcRenderer.send("window-fix");

      this.isFixed = !this.isFixed;
    },
    mini() {

      window.ipcRenderer.send("window-mini");
    },
    max() {
      window.ipcRenderer.send("window-max");
    },
    close() {
      window.ipcRenderer.send("window-close");
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
.main {
  padding: 10px 0 10px 10px;
  -webkit-app-region: no-drag;
}

.window-move {
  display: flex;
  text-align: center;
  justify-content: left;
  padding-top: 12px;
}

.window-btn-move {
  color: #fff;
  background-color: #ff00ff;
  width: 120px;
  border-radius: 5px;
  -webkit-app-region: drag;
}

.fix-window-button {
  position: fixed;
  right: 0;
  top: 12px;
  z-index: 99999;
}

.window-btn-group {
  display: flex;
  justify-content: flex-end;
  padding: 0 10px 0 0;
  justify-items: center;
  -webkit-app-region: drag
}

.window-btn-item {
  padding: 3px;
  margin: 0 5px;
}

.window-btn-fix {
  color: #fff;
  background-color: #13ce66;
  border-radius: 60px;
  -webkit-app-region: no-drag;
}

.window-btn-mini {
  color: #fff;
  background-color: #409EFF;
  border-radius: 60px;
  -webkit-app-region: no-drag;
}

.window-btn-max {
  color: #fff;
  background-color: #E6A23C;
  border-radius: 60px;
  -webkit-app-region: no-drag;
}

.window-btn-close {
  color: #fff;
  background-color: #F56C6C;
  border-radius: 60px;
  -webkit-app-region: no-drag;
}

.view {
  position: absolute;
  top: 30px;
  left: 140px;
  z-index: 100;
}
</style>
