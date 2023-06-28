<template>
    <div class="animebox">
        <div class="spinner-box">
        <div class="blue-orbit leo">
        </div>

        <div class="green-orbit leo">
        </div>

        <div class="red-orbit leo">
        </div>

        <div class="white-orbit w1 leo">
        </div>
        
        <div class="white-orbit w2 leo">
        </div>
        
        <div class="white-orbit w3 leo">
    </div>
    </div>
</div>

</template>

<style scoped>
@keyframes spin3D {
  from {
    transform: rotate3d(.5,.5,.5, 360deg);
  }
  to{
    transform: rotate3d(0deg);
  }
}
.animebox{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    z-index: 20;
    background-color: white;
}
.dark .animebox{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    z-index: 20;
    background-color: #353B41
}
.spinner-box {
  padding-top: 25vh;
  margin: auto;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
}
.leo {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.dark .blue-orbit {
  width: 165px;
  height: 165px;
  border: 1px solid #91daffa5;
  animation: spin3D 3s linear .2s infinite;
}
.blue-orbit {
  width: 165px;
  height: 165px;
  border: 1px solid #5f96b1;
  animation: spin3D 3s linear .2s infinite;
}

.dark .green-orbit {
  width: 120px;
  height: 120px;
  border: 1px solid #91ffbf;
  animation: spin3D 2s linear 0s infinite;
}
.green-orbit {
  width: 120px;
  height: 120px;
  border: 1px solid #487F5F;
  animation: spin3D 2s linear 0s infinite;
}

.dark .red-orbit {
  width: 90px;
  height: 90px;
  border: 1px solid #ffca91;
  animation: spin3D 1s linear 0s infinite;
}
.red-orbit {
  width: 90px;
  height: 90px;
  border: 1px solid #C16548;
  animation: spin3D 1s linear 0s infinite;
}

.dark .white-orbit {
  width: 60px;
  height: 60px;
  border: 2px solid #ffffff;
  animation: spin3D 10s linear 0s infinite;
}
.white-orbit{
    width: 60px;
    height: 60px;
    border: 2px solid #687682;
    animation: spin3D 10s linear 0s infinite;
}
.w1 {
  transform: rotate3D(1, 1, 1, 90deg);
}

.w2 {
  transform: rotate3D(1, 2, .5, 90deg);
}

.w3 {
  transform: rotate3D(.5, 1, 2, 90deg);
}

</style>