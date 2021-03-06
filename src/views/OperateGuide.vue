<template>
  <div class="operate-guide">
    <el-collapse v-model="activeCollapse">
      <el-collapse-item title="快捷键和操作说明" name="hotKey">
        <el-space direction="horizontal" alignment="start" :size="10">
          <el-tag type="danger">全屏-F11</el-tag>
          <el-tag type="danger">调试-F8</el-tag>
          <el-tag type="danger">强制退出-ALT+F4</el-tag>

        </el-space>
        <div class="hotKey-item">点击左上角<i class="el-icon-rank window-move"></i>可以拖动窗体</div>
        <div class="hotKey-item">点击右上角<i class="el-icon-position window-btn-fix"></i>可以置顶窗体</div>
      </el-collapse-item>
      <el-collapse-item title="其他" name="3">
        <div><el-tag type="primary">催更：不支持催更，开发是大爷</el-tag></div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: "OperateGuide",
  data() {
    return {
      activeCollapse: "hotKey"
    }
  }
}
</script>

<style scoped>
.operate-guide {
  width: 500px;
  padding-top: 1rem;
  padding-left: 1rem;
}

.hotKey-item {
  padding: 10px 0 0 0;
}

.window-move {
  width: 100px;
  background-color: #ff00ff;
  color: #ffffff;
  padding: 3px;
  text-align: center;
  border-radius: 5px;
}

.window-btn-fix {
  color: #fff;
  background-color: #13ce66;
  border-radius: 60px;
}
</style>