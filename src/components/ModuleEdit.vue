<script lang="ts" setup>
const props = defineProps<{
  nowTitle?: string;
  nowIntro?: string;
}>();

const { nowTitle, nowIntro } = props;

const form = reactive({
  user: "",
  region: "",
});
</script>

<template>
  <div class="w-full h-auto">
    <el-form :model="form">
      <el-form-item label="title now" v-if="nowTitle">
        <span>{{ nowTitle }}</span>
      </el-form-item>
      <el-form-item :label="nowTitle ? 'new title' : 'title'">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="intro now" v-if="nowIntro">
        <span>{{ nowIntro }}</span>
      </el-form-item>
      <el-form-item :label="nowIntro ? 'new intro' : 'intro'">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="scss">
.el-dialog {
  transform: scale(1.5);
}
</style>
