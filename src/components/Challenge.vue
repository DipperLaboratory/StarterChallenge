<template>
  <v-container class="mt-4 mb-12" v-if="step<6">
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
              elevation="2"
              class="ma-3">
            <blockquote class="blockquote py-6">
              <h3>简介</h3>
              <p>越过长城，走向世界。</p>
              <p>查阅技术文档时，我们有时将不得不面对糟糕的网络环境。</p>
              <p>中国的 ISP 规范了与全球公共互联网的离岸连接，这些连接通过容易出现高水平跨界网络拥塞的外围设备进行。这种拥塞造成进出中国的所有 Internet 流量的数据包丢失和延迟。</p>
              <p>尝试去克服它吧！</p>
              <h3>挑战</h3>
              <p>完成 Google 账号的注册，并使用 <a href="https://mail.google.com/" target="_blank">Gmail</a> 接收激活链接来完成挑战。</p>
              <h3>格式</h3>
              <p>一行，输入一个合法的 Gmail 地址</p>
              <div class="mt-10">
                <v-btn
                    @click="c1Init"
                    color="primary"
                >挑战
                </v-btn>
                <v-btn
                    @click="checkStatus"
                    color="primary"
                    class="ml-4"
                >验证
                </v-btn>
                <v-btn
                    @click="help1"
                    class="ml-4"
                >获取帮助
                </v-btn>
              </div>
            </blockquote>
          </v-sheet>
          <v-dialog v-model="dialog.c1" persistent max-width="600px">
            <v-card class="pa-2">
              <v-card-title>
                <span class="headline">挑战</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          ref="c1input"
                          label="Gmail 邮箱"
                          v-model="email"
                          :rules="rules.c1"
                          @keydown.enter="c1Submit"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="primary"
                    text
                    @click="c1Submit"
                >验证
                </v-btn>
                <v-btn
                    color="red darken-2"
                    text
                    @click="dialog.c1=false"
                >关闭
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
          <v-sheet
              elevation="2"
              class="ma-3">
            <blockquote class="blockquote py-6">
              <h3>简介</h3>
              <p>GitHub 是通过 Git 进行版本控制的软件源代码托管服务平台。</p>
              <p>事实上已经成为了世界上最大的代码存放网站和开源社区。</p>
              <p>作为一名开发者，理应拥有一个 Github 账号。</p>
              <h3>挑战</h3>
              <p>完成 Github 账号的注册，并在 <a href="https://github.com/DipperLaboratory/clockin/issues" target="_blank"
                                       class="font-weight-bold">打卡仓库的 Issues</a> 中创建一个标题为</p>
              <p><kbd
                  v-text="c2salt"
              ></kbd></p>
              <p>的 Issue</p>
              <h3>格式</h3>
              <p>一行，输入 Issue 的编号，即 <span
                  class="font-weight-medium">https://github.com/DipperLaboratory/clockin/issues/</span> 后跟随的数字</p>
              <div class="mt-10">
                <v-btn
                    @click="c2Init"
                    color="primary"
                >挑战
                </v-btn>
                <v-btn
                    @click="help2"
                    class="ml-4"
                >获取帮助
                </v-btn>
              </div>
            </blockquote>
          </v-sheet>
          <v-dialog v-model="dialog.c2" persistent max-width="600px">
            <v-card class="pa-2">
              <v-card-title>
                <span class="headline">挑战</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          ref="c2input"
                          label="Issue 编号"
                          v-model="issue"
                          :rules="rules.c2"
                          @keydown.enter="c2Submit"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="primary"
                    text
                    @click="c2Submit"
                >验证
                </v-btn>
                <v-btn
                    color="red darken-2"
                    text
                    @click="dialog.c2=false"
                >关闭
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>

        <v-stepper-step :complete="step > 3" step="3" class="stepTitle">
          认识 HTTP
          <small>HTTP是万维网的数据通信的基础。</small>
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-sheet
              elevation="2"
              class="ma-3">
            <blockquote class="blockquote py-6">
              <h3>简介</h3>
              <p>超文本传输协议（HTTP）是一个用于传输超媒体文档（例如 HTML）的应用层协议。它是为 Web 浏览器与 Web 服务器之间的通信而设计的，但也可以用于其他目的。</p>
              <p>HTTP 遵循经典的客户端-服务端模型，客户端打开一个连接以发出请求，然后等待直到收到服务器端响应。</p>
              <h3>挑战</h3>
              <p>使用 <code>PUT</code> 方法请求</p>
              <p><kbd>{{ c3url }}</kbd></p>
              <div class="mt-10">
                <v-btn
                    @click="checkStatus"
                    color="primary"
                >验证
                </v-btn>
                <v-btn
                    @click="help3"
                    class="ml-4"
                >获取帮助
                </v-btn>
              </div>
            </blockquote>
          </v-sheet>
        </v-stepper-content>

        <v-stepper-step step="4" :complete="step > 4" class="stepTitle">
          激活教育邮箱
          <small>合格教育机构的学生可以免费注册一些服务。</small>
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-sheet
              elevation="2"
              class="ma-3">
            <blockquote class="blockquote py-6">
              <h3>简介</h3>
              <p>作为大学生，我们还有一次机会体验来自世界的善意。</p>
              <p>大量公司为大学生提供了各种各样的教育服务。</p>
              <p>教育邮箱是最常见的验证方式。</p>
              <p>在各位入学之时，学校已经为各位开通了教育邮箱，激活它吧。</p>
              <p>你也可以使用此邮箱直接加入北斗之芯的 GitHub 组织，请访问 <a href="https://reg.jgsu.xyz" target="_blank">Self Reg</a> 。</p>
              <p></p>
              <h3>挑战</h3>
              <p>完成本校教育邮箱账号的激活，并使用 <a href="http://mail.jgsu.edu.cn/" target="_blank">邮件系统</a> 接收激活链接来完成挑战。</p>
              <h3>格式</h3>
              <p>一行，输入一个合法的本校教育邮箱地址</p>
              <div class="mt-10">
                <v-btn
                    @click="c4Init"
                    color="primary"
                >挑战
                </v-btn>
                <v-btn
                    @click="checkStatus"
                    color="primary"
                    class="ml-4"
                >验证
                </v-btn>
                <v-btn
                    @click="help4"
                    class="ml-4"
                >获取帮助
                </v-btn>
              </div>
            </blockquote>
          </v-sheet>
          <v-dialog v-model="dialog.c4" persistent max-width="600px">
            <v-card class="pa-2">
              <v-card-title>
                <span class="headline">挑战</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          ref="c4input"
                          label="本校教育邮箱"
                          v-model="eduemail"
                          :rules="rules.c4"
                          @keydown.enter="c4Submit"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="primary"
                    text
                    @click="c4Submit"
                >验证
                </v-btn>
                <v-btn
                    color="red darken-2"
                    text
                    @click="dialog.c4=false"
                >关闭
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>

        <v-stepper-step step="5" :complete="step > 5" class="stepTitle">
          学会使用搜索引擎
          <small>所有网络流量中93％来自搜索引擎。</small>
        </v-stepper-step>
        <v-stepper-content step="5">
          <v-sheet
              elevation="2"
              class="ma-3">
            <blockquote class="blockquote py-6">
              <h3>简介</h3>
              <p>网络搜索引擎（英语：web search engine）是设计在万维网上进行搜索，意思是指自动从万维网搜集特定的信息，提供给用户进行查询的系统。</p>
              <p>正确地使用搜索引擎是现代大学生应当拥有的技能。</p>
              <h3>挑战</h3>
              <p>查询 Potplayer 的官网</p>
              <p><strong>注意：</strong> 一些糟糕的搜索引擎（如百度）会提供错误的结果，想想应该如何解决。</p>
              <h3>格式</h3>
              <p>一行，输入 Potplayer 官网的域名</p>
              <div class="mt-10">
                <v-btn
                    @click="c5Init"
                    color="primary"
                >挑战
                </v-btn>
                <v-btn
                    @click="help5"
                    class="ml-4"
                >获取帮助
                </v-btn>
              </div>
            </blockquote>
          </v-sheet>
          <v-dialog v-model="dialog.c5" persistent max-width="600px">
            <v-card class="pa-2">
              <v-card-title>
                <span class="headline">挑战</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          ref="c5input"
                          label="Potplayer 域名"
                          v-model="domain"
                          @keydown.enter="c5Submit"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                    color="primary"
                    text
                    @click="c5Submit"
                >验证
                </v-btn>
                <v-btn
                    color="red darken-2"
                    text
                    @click="dialog.c5=false"
                >关闭
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-container>
  <v-container
      style="height: 60vh"
      class="d-flex flex-column justify-center align-center text-center pa-9 mx-auto"
      v-else
  >
    <v-icon
        size="9em"
        color="grey"
    >mdi-gift-outline
    </v-icon>
    <h1>{{ username }}，祝贺你!</h1>

    <div
        class="my-4"
        style="max-width: 50vw"
    >
      <p>祝贺你完成了挑战</p>
      <p>请保存好下面的 salt。</p>
      <p>凭 salt 可获得小礼品一份。</p>
      <p class="headline"><kbd>{{ salt }}</kbd></p>
      <p><strong>PS:</strong> 如果您不是通过完成测试抵达这个页面，请联系 @Zxilly 叙述您的方案并获取额外奖品。</p>
    </div>
  </v-container>
</template>

<script>
import {apiurl} from "@/api";
import axios from "axios"

export default {

  name: "Challenge",
  data: () => ({
    step: 1,
    CAPTCHA: '',
    email: '',
    eduemail: '',
    domain: '',
    dialog: {
      c1: false,
      c2: false,
      c3: false,
      c4: false,
      c5: false
    },
    issue: '',
    rules: {
      c1: [
        value => !!value || '必填',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '无效电子邮件地址'
        },
        value => {
          const pattern = /@gmail.com$/
          return pattern.test(value) || '邮箱应以 @gmail.com 结尾'
        }],
      c2: [
        value => !!value || '必填',
        value => {
          return parseInt(value) === Math.round(value) && value > 0 || '输入应为一个正整数'
        }],
      c4: [
        value => !!value || '必填',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '无效电子邮件地址'
        },
        value => {
          const pattern = /@jgsu.edu.cn$/
          return pattern.test(value) || '邮箱应以 @jgsu.edu.cn 结尾'
        }
      ]
    }
  }),
  created() {
    this.step = this.$cookies.get('step')
  },
  computed: {
    salt: function () {
      return this.$cookies.get('salt')
    },
    progress: function () {
      return this.step / 5 * 100
    },
    username: function () {
      return this.$cookies.get('user')
    },
    c2salt: {
      cache: false,
      get: function () {
        //console.log(this.$cookies.get('salt'))
        return this.$md5(this.$cookies.get('salt') + 'gyo1O@=K`e|+pIoah-/ (fJ@=]+7<gdoKA*NS|DvD<D&cmhH4@F{W+N/-xmL`}6/')
      }
    },
    c3url: function () {
      return apiurl + '/challenge/3/http?username=' + this.username
    }
  },
  methods: {
    checkStatus: function () {
      var that = this
      axios.get(apiurl + '/login', {
        params: {
          'username': this.username
        }
      }).then(function (resp) {
        let data = resp.data
        let step = data['data']['step']
        let salt = data['data']['salt']
        if (parseInt(that.step) === step) {
          that.$bus.$emit('showSnackbar', ['验证失败', 'error'])
        } else {
          that.step = step
          that.$cookies.set('user', that.username, '365d')
          that.$cookies.set('step', step, '365d')
          that.$cookies.set('salt', salt, '365d')
          that.$bus.$emit('showSnackbar', ['验证成功', 'success'])
        }
      }).catch(function () {
        that.$bus.$emit('showSnackbar', ['后端服务器出错', 'error'])
      })
    },
    c1Init: function () {
      this.dialog.c1 = true
    },
    c1Submit: function () {
      var that = this
      if (this.$refs.c1input.validate()) {
        axios.post(apiurl + '/challenge/1/email', {
          'content': this.email
        }, {
          params: {
            'username': this.username
          }
        }).then(function (resp) {
          let data = resp.data
          if (data['status']) {
            that.$bus.$emit('showSnackbar', ['邮件发送成功', 'success'])
            that.dialog.c1 = false
          } else {
            that.$bus.$emit('showSnackbar', [data['msg'], 'error'])
          }
        }).catch(function () {
          that.$bus.$emit('showSnackbar', ['邮件发送失败，请联系管理员', 'error'])
        })
      }
    },
    c2Init: function () {
      this.dialog.c2 = true
    },
    c2Submit: function () {
      var that = this
      if (this.$refs.c2input.validate()) {
        axios.post(apiurl + '/challenge/2/github', {
          'content': this.issue
        }, {
          params: {
            'username': this.username
          }
        }).then(function (resp) {
          let data = resp.data
          if (data['status']) {
            that.dialog.c2 = false
            that.checkStatus()
          } else {
            that.$bus.$emit('showSnackbar', [data['msg'], 'error'])
          }
        })
      }
    },
    c4Init: function () {
      this.dialog.c4 = true
    },
    c4Submit: function () {
      var that = this
      if (this.$refs.c4input.validate()) {
        axios.post(apiurl + '/challenge/4/email', {
          'content': this.eduemail
        }, {
          params: {
            'username': this.username
          }
        }).then(function (resp) {
          let data = resp.data
          if (data['status']) {
            that.dialog.c4 = false
            that.$bus.$emit('showSnackbar', ['邮件发送成功', 'success'])
          } else {
            that.$bus.$emit('showSnackbar', [data['msg'], 'error'])
          }
        }).catch(function () {
          that.$bus.$emit('showSnackbar', ['邮件发送失败，请联系管理员', 'error'])
        })
      }
    },
    c5Init: function () {
      this.dialog.c5 = true
    },
    c5Submit: function () {
      var that = this
      axios.post(apiurl + '/challenge/5/domain', {
        'content': this.domain
      }, {
        params: {
          'username': this.username
        }
      }).then(function (resp) {
        let data = resp.data
        if (data['status']) {
          that.dialog.c5 = false
          that.$bus.$emit('showSnackbar', ['验证成功', 'success'])
          that.checkStatus()
        } else {
          that.$bus.$emit('showSnackbar', ['验证失败', 'error'])
        }
      })
    },
    help1: function () {
      window.open('https://dipperlaboratory.github.io/Navigation_station/', '_blank')
    },
    help2: function () {
      window.open('https://dipperlaboratory.github.io/Navigation_station/', '_blank')
    },
    help3: function () {
      window.open('https://developer.mozilla.org/zh-CN/docs/Web/HTTP', '_blank')
    },
    help4: function () {
      window.open('http://mail.jgsu.edu.cn/Login/DownLoadFile?type=use', '_blank')
    },
    help5: function () {
      window.open('https://cn.bing.com/?ensearch=1', '_blank')
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

blockquote {
  margin-right: 24px;
}
</style>
