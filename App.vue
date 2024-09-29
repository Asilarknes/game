<script setup>
import UnityWebgl from 'unity-webgl';
import VueUnity from 'unity-webgl/vue'

const unityContext = new UnityWebgl({
  loaderUrl: './Build/builds.loader.js',
  dataUrl: "./Build/builds.data.br",
  frameworkUrl: "./Build/builds.framework.js.br",
  codeUrl: "./Build/builds.wasm.br",
})

unityContext.on('device', () => alert('click device ...'))
</script>

<template>
    <VueUnity :unity="unityContext" width="800" height="600" />
</template>