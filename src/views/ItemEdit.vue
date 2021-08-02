<template>
    <div>
        <h1>{{id ? '编辑':'新建'}}菜品</h1>
        <el-form label-width="80px" @submit.native.prevent="save">
            <el-form-item label="上级分类">
                <el-select v-model="model.parent">
                    <el-option v-for="item in parents" :key="item._id" :label="item.name" :value="item._id"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item label="价格">
                <el-input v-model="model.price"></el-input>
            </el-form-item>
            <el-form-item label="描述">
                <el-input v-model="model.describe"></el-input>
            </el-form-item>
            <el-form-item label="图标">
                <el-upload
                    class="avatar-uploader"
                    :headers="getAuthHeaders()"
                    :action="$http.defaults.baseURL + '/upload'"
                    :show-file-list="false"
                    :on-success="afterUpload"
                    >
                    <img v-if="model.icon" :src="model.icon" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
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
            parents:[],
            model:{},
        }
    },
    methods: {
        async save(){
            let res
            if (this.id) {
                const res = await this.$http.put(`rest/items/${this.id}`,this.model)
               
            }else{
                 const res = await this.$http.post('rest/items',this.model)
            }
            this.$router.push('/items/list')
            this.$message({
                type:'success',
                message:'保存成功'
            })
        },
        async fetch(){
            const res = await this.$http.get(`rest/items/${this.id}`)
            this.model = res.data
        },
        async fetchParents(){
            const res = await this.$http.get('rest/categories')
            this.parents = res.data
        },
        
        afterUpload(res){
            console.log(res);
            this.$set(this.model,'icon',res.url)    
        }
    },
    created() {         
        this.id &&  this.fetch()
        this.fetchParents()    
    },

}
</script>

<style>

</style>
