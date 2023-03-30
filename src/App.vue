<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div class="body flex">
      <BaseSide />
      <BodyCard />
    </div>
  </el-config-provider>
</template>

<style>
.body {
  padding: 10px;
  gap: 10px;
}
</style>
