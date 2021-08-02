<template>
  <div>
      <el-table
      :data="order"
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
        label="点餐用户"
        >
      </el-table-column>
      <el-table-column
        prop="money"
        label="订单总价"
        >
      </el-table-column>
      <el-table-column
        label="操作"
        >
        <template slot-scope="props">
        <el-button type="success" @click="changestate(props.row)">完成订单</el-button>
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
            let res = await this.$http.get('unorders')
            this.order = res.data
        },
        async changestate(item){
                item.state = 1
                const res = await this.$http.put(`rest/orders/${item._id}`,item)
            this.$message({
                type:'success',
                message:'订单已完成'
            })
            this.getOrders()
        }
        
    },
    created() {
        this.getOrders()
    },
}
</script>

<style>

</style>