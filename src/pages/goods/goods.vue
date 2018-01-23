
  <template>
    <div>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>

      <div class="block">
        <el-pagination
          layout="prev, pager, next"
          :total="100" @current-change="handleCurrentChange">
        </el-pagination>
      </div>
    </div>

  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
        }
      },
      methods: {
        handleCurrentChange(val) {
          this.page = val;
          this.getUsers();
        },
        //获取用户列表
        getUsers() {
          let para = {
            page: this.page,
            name: this.filters.name
          };
          this.listLoading = true;
          //NProgress.start();
          getUserListPage(para).then((res) => {
            this.total = res.data.total;
            this.users = res.data.users;
            this.listLoading = false;
            //NProgress.done();
          });
        },
      }
    }
  </script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .block
    display flex
    justify-content flex-end
</style>
