
  <template>
    <div id="content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="id" width="80"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="100"></el-table-column>
        <el-table-column prop="email" label="邮件" width="200"></el-table-column>
        <el-table-column prop="phone" label="手机" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
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
    import axios from 'axios'
    export default {
      data() {
        return {
          tableData: null,
          filters: {
            name: ''
          },
          users: [],
          total: 0,
          page: 1,
          listLoading: false,
          //sels: [],//列表选中列

        }
      },
      mounted(){
        const url = '/api/goods'
        axios.get(url).then(res => {
          const {data} = res.data
          this.tableData = data
        }).catch(error => {
          console.log(error);
        })
      },
      methods: {
        handleCurrentChange(val) {
          this.page = val;
          this.getUsers();
          console.log(val);
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
  .content
    width 100%
    height 100%
  .block
    display flex
    justify-content flex-end
</style>
