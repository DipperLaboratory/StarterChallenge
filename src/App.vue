<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <v-btn icon class="ml-1">
        <v-icon>mdi-star-three-points-outline</v-icon>
      </v-btn>
      <v-toolbar-title class="font-weight-light">
        <span class="font-weight-bold">Starter</span>Challenge
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <v-snackbar
          v-model="snackbarBool"
          :color="snackbarColor"
          top
          dark
      >
        {{ snackbarMessage }}
        <template v-slot:action="{ attrs }">
          <v-btn
              dark
              text
              v-bind="attrs"
              @click="snackbarBool = false"
          >
            关闭
          </v-btn>
        </template>
      </v-snackbar>
      <v-slide-y-transition mode="out-in">
        <template v-if="mobile">
          <v-container
              style="height: 60vh"
              class="d-flex flex-column justify-center align-center text-center pa-9 mx-auto mt-12"
          >
            <v-img
                :src="require('@/assets/cry.png')"
                contain
            />
            <h1 class="mb-4">别看了，移动端没做</h1>
            <p>懒得设计排版了，这个网页只有PC端。</p>
            <p>请在电脑上打开这个网页。</p>
          </v-container>
        </template>
        <template v-else-if="isLogout">
          <login
              key="1"
              v-on:login="login"
          />
        </template>
        <template v-else-if="isStepOne&&isWelcome">
          <Welcome
              key="2"
              v-on:challenge="isWelcome=false"
          />
        </template>
        <template v-else>
          <Challenge
              key="3"
          />
        </template>
      </v-slide-y-transition>
    </v-main>
    <v-footer
        app
    >
      <v-btn text @click="jumpToClub"><span class="font-weight-bold">Dipper</span>Laboratory</v-btn>
      <v-spacer></v-spacer>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>


import Login from "@/components/Login";
import Welcome from "@/components/Welcome";
import Challenge from "@/components/Challenge";

export default {
  name: 'App',
  components: {Challenge, Welcome, Login},
  created() {
    if (this.checkCookie()) {
      this.login()
    }
  },
  mounted() {
    this.$bus.$on('showSnackbar', this.showSnackbar)
  },
  data: () => ({
    username: '',
    step: "1",
    isLogout: true,
    snackbarBool: false,
    snackbarMessage: '',
    snackbarColor: '',
    isWelcome: true,
  }),
  computed: {
    isStepOne: function () {
      return this.step === "1"
    },
    mobile: function () {
      return document.body.clientWidth < 600
    }
  },
  methods: {
    jumpToClub: function () {
      window.open('https://github.com/DipperLaboratory/', '_blank')
    },
    showSnackbar: function (arg) {
      this.snackbarMessage = arg[0]
      this.snackbarColor = arg[1]
      this.snackbarBool = true
    },
    login: function () {
      this.username = this.$cookies.get('user')
      this.step = this.$cookies.get('step')
      this.isLogout = false;
    },
    checkCookie: function () {
      return this.$cookies.isKey('user')
    },
  }
};
</script>
