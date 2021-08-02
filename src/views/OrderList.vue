<template>
   <div>
       <el-table
    :data="order"
    stripe
    style="width: 100%">
    <el-table-column type="expand">
          <template slot-scope="props">
                <el-table
                :data="props.row.items"
                style="width: 100%">
                <el-table-column
                    prop="name"
                    label="菜品"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="count"
                    label="数量"
                    width="180">
                </el-table-column>
                </el-table>
          </template>
        </el-table-column>
    <el-table-column
      prop="_id"
      label="订单编号"
    >
    </el-table-column>
    <el-table-column
      prop="username"
      label="订单用户"
    >
    </el-table-column>
    <el-table-column
        prop="money"
        label="订单总价"
        >
      </el-table-column>
    <el-table-column
      prop="paystate"
      label="是否支付">
      <template slot-scope="props">
           <el-button v-if="props.row.paystate == 1" type="success" icon="el-icon-check" circle ></el-button>
           <el-button v-if="props.row.paystate == 0" type="danger" icon="el-icon-close" circle></el-button>
      </template>
    </el-table-column>
     <el-table-column
            fixed="right"
            label="操作"
            width="180">
            <template slot-scope="scope">
                <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
            </template>
            </el-table-column>
  </el-table>
   </div>
</template>

<script>
export default {
    data() {
        return {
            order:[]
        }
    },
    methods: {
        async getOrders(){
            let res = await this.$http.get('fnorders')
            this.order = res.data
        },
        async remove(row){
         this.$confirm(`是否确定删除订单?${row._id}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            const res =  this.$http.delete(`rest/orders/${row._id}`)
            this.$message({
                type: 'success',
                message: '删除成功!'
            });
            this.getOrders()
            }).catch(err=>{
                console.log(err);
            })
        }
    },
    created() {
        this.getOrders()
    },

}
</script>

<style>

</style>