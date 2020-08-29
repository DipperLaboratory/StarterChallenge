<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card class="pa-2">
      <v-card-title>
        <span class="headline">登录</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                  ref="user"
                  label="用户名"
                  v-model="username"
                  :rules="rule"
                  @keydown.enter="login"
              />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="login"
        >开始挑战
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Cookies from 'cookies'
import axios from 'axios'
import {apiurl} from '@/api'

export default {
  name: "Login",
  data: () => ({
    dialog: true,
    username: '',
    step: '',
    salt: '',
    rule: [value => !!value || '用户名不能为空',]
  }),
  methods: {
    login: function () {
      var that = this
      axios.get(apiurl, {
        params: {
          'username': this.username
        }
      }).then(function (resp) {
        let data = resp.data
        that.step = data['data']['step']
        that.salt = data['data']['salt']
      })
      Cookies.set('user', this.username, {signed: true, maxAge: 0})
      Cookies.set('step', this.step, {signed: true, maxAge: 0})
      Cookies.set('salt', this.salt, {signed: true, maxAge: 0})
    }
  }
}
</script>

<style scoped>

</style>