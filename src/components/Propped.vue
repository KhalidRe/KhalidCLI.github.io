<template>
    <div class="par">
      The last name sent into the abyss: {{namn}}
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
