<template>
    <div>
        <page-list :name='this.name'></page-list>
    </div>
</template>
<script>
import pagelsit from './subcomponents/pageList.vue'
export default {
    data() {
        return {
            name:this.$route.name
        }
    },
    components:{
        'page-list':pagelsit,
    }
}


</script>