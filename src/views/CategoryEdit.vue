<template>
    <div>
        <h1>{{id ? '编辑':'新建'}}菜品分类</h1>
        <el-form label-width="80px" @submit.native.prevent="save">

            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item lable="按钮">
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

export default {
    name:'CategoryEditVue',
    props:{
        id:{}
    },
    data(){
        return{
            model:{},
            parents:[],
        }
    },
    methods: {
        async save(){
            let res
            if (this.id) {
                const res = await this.$http.put(`rest/categories/${this.id}`,this.model)
               
            }else{
                 const res = await this.$http.post('rest/categories',this.model)
            }
            this.$router.push('/categories/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/categories/${this.id}`)
            this.model = res.data
        },

    },
    created() {         
        this.id &&  this.fetch()        

    },

}
</script>

<style>

</style>