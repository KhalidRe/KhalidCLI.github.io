<template>
    <div class="ere">
        <button v-on:click="show = !show" class="new_pos"></button>
        <transition name="fade">
            <div v-if="show">
        <div class="rand_pos" id="rand" style="position: absolute"></div>
        <div class="rand_pos1" id="rand" style="position: absolute"></div>
        <div class="rand_pos2" id="rand" style="position: absolute"></div>
        <div class="rand_pos3" id="rand" style="position: absolute"></div>
        </div>
        </transition>
        
<div id="pos_log" class="log">x: 0<br />y: 0</div>

    </div>
</template>
<script>
import $ from "jquery"
export default {
    data(){
        return{
            show: true,
        }
    },
 mounted(){
     $('.new_pos').click(function() {
         var bodyWidth = document.body.clientWidth
  var bodyHeight = document.body.clientHeight;
  var randPosX = Math.floor((Math.random()*bodyWidth));
  var randPosY = Math.floor((Math.random()*bodyHeight));
  var randPosX1 = Math.floor((Math.random()*bodyWidth));
  var randPosY1 = Math.floor((Math.random()*bodyHeight));
  var randPosX2 = Math.floor((Math.random()*bodyWidth));
  var randPosY2 = Math.floor((Math.random()*bodyHeight));
  var randPosX3 = Math.floor((Math.random()*bodyWidth));
  var randPosY3 = Math.floor((Math.random()*bodyHeight));
  var posLog = document.getElementById('pos_log');
  var posXY = 'x: ' + randPosX + '<br />' + 'y: ' + randPosY;
  var posXY1 = 'x: ' + randPosX1 + '<br />' + 'y: ' + randPosY1;
  var posXY2 = 'x: ' + randPosX2 + '<br />' + 'y: ' + randPosY2;
  var posXY3 = 'x: ' + randPosX3 + '<br />' + 'y: ' + randPosY3;
  
  $('.rand_pos').css('left', randPosX);
  $('.rand_pos').css('top', randPosY);
  $('.rand_pos1').css('left', randPosX1);
  $('.rand_pos1').css('top', randPosY1);
  $('.rand_pos2').css('left', randPosX2);
  $('.rand_pos2').css('top', randPosY2);
  $('.rand_pos3').css('left', randPosX3);
  $('.rand_pos3').css('top', randPosY3);
  
  posLog.innerHTML = posXY
  posLog.innerHTML = posXY1
  posLog.innerHTML = posXY2
  posLog.innerHTML = posXY3
});
 }
  
     
 
}
</script>
<style scoped>
#rand {
  font-family: Helvetica, sans-serif;
  word-wrap: break;
  width: 100px;
  height: 100px;
  background: steelblue;
  padding: 10px;
  text-align: center;
  position: relative;
  z-index: -1;
}

.log {
  position: fixed;
  border: 1px solid #000;
  bottom: 0;
  right: 0;
  padding: 5px;
  width: 50px;
  height: 50px;
  font-family: Helvetica;
  font-size: 11px;
  background: skyblue;
  box-shadow: 0 0 20px #000;
}


.new_pos {
  background: rgba(4, 78, 97,0);
  
  padding: 5px;
  box-shadow: 0 0 20px #555;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
}

.new_pos:hover {
  background: #bbb;
  box-shadow: 0 0 20px #222;
}


.new_pos:active {
  box-shadow: 0 0 20px #000;
  background: #aaa;
}


*:focus {
  outline: none;
}


body {
  overflow: hidden;
  height: 500px;
}

.new_pos {
    position: relative;
    width: 50px;
    height: 50px;
    border-radius: 100px;
  margin-top: 35.6vh;
  margin-right: 0.5vw;
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>