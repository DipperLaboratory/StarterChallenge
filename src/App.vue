<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-btn icon class="ml-1">
        <v-icon>mdi-language-xaml</v-icon>
      </v-btn>
      <v-toolbar-title class="font-weight-light">
        <span class="font-weight-bold">Starter</span>Challenge
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/DipperLaboratory/"
        target="_blank"
        text
      >
        <span class="mr-2">DipperLaboratory</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <template v-if="isFirst">
        <login/>
      </template>
    </v-main>
  </v-app>
</template>

<script>


import Login from "@/components/Login";
export default {
  name: 'App',
  components: {Login},
  data: () => ({
    isFirst:true,

  }),
};
</script>
