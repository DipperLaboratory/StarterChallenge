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

      <v-btn
        href="https://github.com/DipperLaboratory/"
        target="_blank"
        text
      >
        <span class="mr-2">DipperLaboratory</span>
      </v-btn>
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
      <template v-if="isLogout">
        <login
            v-on:login="login"
        />
      </template>
      <template v-else-if="isWelcome">
        <Welcome/>
      </template>
    </v-main>
  </v-app>
</template>

<script>


import Login from "@/components/Login";
import Welcome from "@/components/Welcome";
export default {
  name: 'App',
  components: {Welcome, Login},
  created() {
    if(this.checkCookie()){
      this.login()
    }
  },
  mounted(){
    this.$bus.$on('showSnackbar',this.showSnackbar)
  },
  data: () => ({
    username:'',
    step:"1",
    isLogout:true,
    snackbarBool:false,
    snackbarMessage:'',
    snackbarColor:''
  }),
  computed:{
    isWelcome:function () {
      return this.step==="1"
    }
  },
  methods:{
    showSnackbar:function (arg){
      this.snackbarMessage=arg[0]
      this.snackbarColor=arg[1]
      this.snackbarBool=true
    },
    login:function () {
      this.username = this.$cookies.get('user')
      this.step = this.$cookies.get('step')
      this.isLogout=false;
    },
    checkCookie: function () {
      return this.$cookies.isKey('user')
    },
  }
};
</script>
