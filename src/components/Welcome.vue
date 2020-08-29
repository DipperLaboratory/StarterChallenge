<template>
  <v-container
      style="height: 60vh"
      class="d-flex flex-column justify-center align-center text-center pa-9 mx-auto"
  >
    <v-icon
        size="9em"
        color="grey"
    >mdi-language-xaml
    </v-icon>
    <h1>入门者挑战</h1>
    <p
        class="my-4"
        style="max-width: 50vw"
    >
      在这个挑战中，你将被要求完成若干个小任务。<br>
      在完成任务前，你需要根据任务提供的学习路线学习相应的知识。<br>
      完成任务后，将获得小礼品一份。<br>
      <strong>PS:</strong> 如果您能力足够，可以尝试破解以跳过测试。成功后，您将获得额外的奖品一份。
    </p>
    <div class="my-4">
      <v-btn
          color="primary"
          @click="startchallenge"
      >开始挑战
      </v-btn>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    startchallenge: function () {
      this.$emit('challenge')
    }
  }
}
</script>

<style scoped>

</style>