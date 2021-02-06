<template>
    <div class="par">
      the prop default value -> {{namn}}
    </div>
    
</template>
<script>
export default {
    data(){
        return{
             namn: this.skrivNamn
             };
    },
    props: {skrivNamn: {type: String, default:"No-Name"}}
}
</script>
