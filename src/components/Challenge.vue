<template>
  <v-container class="mt-4 mb-12">
    <v-progress-linear
        class="mb-6"
        height="10px"
        :value="progress"
    />
    <v-stepper v-model="step" vertical>
      <v-stepper-items>
        <v-stepper-step :complete="step > 1" step="1" class="stepTitle">
          拥有一个 Google 账号
          <small>Across the Great Wall we can reach every corner in the world.</small>
        </v-stepper-step>
        <v-stepper-content step="1">
          <v-sheet
              elevation="3"
              class="ma-3">
            <blockquote class="blockquote py-6">
              <h3>简介</h3>
              <p>越过长城，走向世界。</p>
              <p>查阅技术文档时，我们有时将不得不面对糟糕的网络环境。</p>
              <p>中国的 ISP 规范了与全球公共互联网的离岸连接，这些连接通过容易出现高水平跨界网络拥塞的外围设备进行。这种拥塞造成进出中国的所有 Internet 流量的数据包丢失和延迟。</p>
              <p>尝试去克服它吧！</p>
              <h3>挑战</h3>
              <p>完成 Google 账号的注册，并使用 <a href="https://mail.google.com/" target="_blank">Gmail</a> 接收验证码来完成挑战。</p>
              <h3>格式</h3>
              <p>一行，输入一个合法的 Gmail 地址</p>
              <p>一行，输入激活码</p>
              <div class="mt-10">
                <v-btn
                    @click=""
                    color="primary"
                >挑战</v-btn>
                <v-btn
                  @click="help1"
                  class="ml-4"
                >获取帮助</v-btn>
              </div>
            </blockquote>
          </v-sheet>
          <v-dialog v-model="dialog.c1" persistent max-width="600px">
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
                          label="验证码"
                          v-model="CAPTCHA"
                          @keydown.enter="challenge1.submitCode()"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    text
                    @click="challenge1.submitCode()"
                >验证
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>

        <v-stepper-step :complete="step > 2" step="2" class="stepTitle">
          加入 Github 社区
          <small>Build software alongside 50 million developers.</small>
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="step = 3">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step :complete="step > 3" step="3" class="stepTitle">
          认识 HTTP
          <small>HTTP是万维网的数据通信的基础。</small>
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="step = 4">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>

        <v-stepper-step step="4" class="stepTitle">
          激活教育邮箱
          <small>合格教育机构的学生可以免费注册一些服务。</small>
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
          <v-btn color="primary" @click="step = 1">Continue</v-btn>
          <v-btn text>Cancel</v-btn>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
export default {
  name: "Challenge",
  data: () => ({
    step: 1,
    CAPTCHA:'',
    dialog: {
      c1: false,
      c2: false,
      c3: false,
      c4: false,
    }
  }),
  created() {
    this.step = this.$cookies.get('step')
  },
  computed: {
    progress: function () {
      return this.step / 4 * 100
    },
  },
  methods: {
    challenge1:{
      init:function (){
        this.dialog.c1=true
      },
      submitCode:function () {

      }
    },
    help1:function (){

    }
  }
}
</script>

<style scoped>
.stepTitle {
  font-size: 1.25rem;
}

h3 {
  margin-bottom: 16px;
}

small {
  font-size: 1rem;
  margin-top: 5px;
}
</style>