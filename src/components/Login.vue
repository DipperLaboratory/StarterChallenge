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
                  hint="用户名是您在此挑战中验证身份的唯一凭据"
                  persistent-hint
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
import axios from 'axios'
import {apiurl} from '@/api'

export default {
  name: "Login",
  data: () => ({
    dialog: true,
    username: '',
    rule: [value => !!value || '用户名不能为空',]
  }),
  methods: {
    login: function () {
      var that = this
      axios.get(apiurl+'/login', {
        params: {
          'username': this.username
        }
      }).then(function (resp) {
        let data = resp.data
        let step = data['data']['step']
        let salt = data['data']['salt']
        that.$cookies.set('user', that.username, '365d')
        that.$cookies.set('step', step, '365d')
        that.$cookies.set('salt', salt, '365d')
        that.$bus.$emit('showSnackbar',['登陆成功','success'])
        that.$emit('login')
      }).catch(function () {
        that.$bus.$emit('showSnackbar',['后端服务器出错','error'])
      })
    }
  }
}
</script>

<style scoped>

</style>