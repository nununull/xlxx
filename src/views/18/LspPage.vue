<template>
  <div class="main">
    <div style="width: 500px">
      <el-input
          class="search-input"
          placeholder="不知道模糊搜索参数是啥，暂时不管用，直接点右边直接查"
          v-model="keywords">
        <template #append>
          <el-button icon="el-icon-search" @click="search"></el-button>
        </template>
      </el-input>
    </div>
    <!-- 分页 -->
    <div class="search-pagination">
      <el-pagination
          :hide-on-single-page="0 >= zy001.pagecount"
          @current-change="handleCurrentChange"
          :current-page="zy001.page"
          :page-count="zy001.pagecount"
          layout="total, prev, pager, next, jumper"
          :total="zy001.total">
      </el-pagination>
    </div>
    <!-- 分页/ -->
    <!-- 搜索结果内容 -->
    <div class="content">
      <el-row>
        <el-card style="margin: 10px;" shadow="hover" v-for="(item,index) in zy001DataList" :key="index"
                 @click="onPlayVideo(item)">
          <h3>{{ item.vod_title }}</h3>
          <el-tag type="success" v-if="item.category">{{ item.category }}</el-tag>
          <el-tag type="danger" v-if="item.vod_actor">{{ item.vod_actor }}</el-tag>
        </el-card>
      </el-row>
    </div>
    <!-- 搜索结果内容/ -->
  </div>
</template>

<script>

export default {
  name: "LspPage",
  components: {},
  data() {
    return {
      keywords: "",
      zy001DataList: "",
      zy001: {
        searchParams: {
          pg: 1,
          ac: "jsonvideolist"
        },
        limit: 20,
        msg: "数据列表",
        page: 1,
        pagecount: 0,
        total: 0
      }
    }
  },
  methods: {
    async search() {
      let resp = await this.$httpUtil.http(this.$httpApi.SERVICE.ZY001.page, this.zy001.searchParams);

      if (resp) {
        this.zy001DataList = resp.data;

        this.zy001.limit = resp.limit;
        this.zy001.page = resp.page;
        this.zy001.pagecount = resp.pagecount;
        this.zy001.total = resp.total;
      }
    },
    onPlayVideo(item) {

      localStorage.setItem("playUrl", item.vpath);

      this.$router.push("Player");
    },
    async handleCurrentChange(currentPage) {

      if (currentPage <= this.zy001.pagecount) {

        this.zy001.searchParams.pg = currentPage;

        await this.search();
      }
    },
  }
}
</script>

<style scoped>
.main {
  padding: 10px 0 0 30px;
}

.search-input {
  margin-left: 20px;
}

.search-pagination {
  padding-top: 20px;
  margin-left: 10px;
}

.content {
  padding: 0 30px 30px 0;
}
</style>