<template>
  <div class="loading" :class="{hide: !loading}">
    <div style="width:100%;height:100%" class="lds-wedges">
      <div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "loading",
      props: {
        loading: {
          type: Boolean,
          default: false
        }
      }
    }
</script>

<style>
  .loading {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 9999;
  }
  .loading.hide {
    display: none;
  }
  .loading .lds-wedges {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
  @keyframes lds-wedges {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes lds-wedges {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .lds-wedges {
    position: relative;
  }
  .lds-wedges > div > div {
    -webkit-transform-origin: 100px 100px;
    transform-origin: 100px 100px;
    -webkit-animation: lds-wedges 3s linear infinite;
    animation: lds-wedges 3s linear infinite;
    opacity: 0.8;
  }
  .lds-wedges > div > div > div {
    position: absolute;
    left: 30px;
    top: 30px;
    width: 70px;
    height: 70px;
    border-radius: 70px 0 0 0;
    -webkit-transform-origin: 100px 100px;
    transform-origin: 100px 100px;
  }
  .lds-wedges > div div:nth-child(1) > div {
    background: #d8311c;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .lds-wedges > div div:nth-child(1) {
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
  }
  .lds-wedges > div div:nth-child(2) > div {
    background: #f2c742;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .lds-wedges > div div:nth-child(2) {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
  }
  .lds-wedges > div div:nth-child(3) > div {
    background: rgba(73.45159490207377%,92.43346774193549%,0%,0.915);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .lds-wedges > div div:nth-child(3) {
    -webkit-animation-duration: 1.5s;
    animation-duration: 1.5s;
  }
  .lds-wedges > div div:nth-child(4) > div {
    background: rgba(0%,42.60080645161297%,100%,0.907);
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  .lds-wedges > div div:nth-child(4) {
    -webkit-animation-duration: 3s;
    animation-duration: 3s;
  }
  .lds-wedges {
    width: 100px !important;
    height: 100px !important;
    -webkit-transform: translate(-50px, -50px) scale(0.5) translate(50px, 50px);
    transform: translate(-50px, -50px) scale(0.5) translate(50px, 50px);
  }
</style>
