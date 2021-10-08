<template>
<div class="w-100 h-100">
  <div v-if="!signup" class=" d-none d-sm-flex login-grad w-100 h-100">
    <div class=" bg-light align-items-center">

      <div style="width:400px;" class=" text-start p-4  h-100  overflow-auto">
        <div class="row">
          <div class=" p-3 d-flex">
            <img class="" src="@/assets/FF-Business-Colour-Print.png" height="50">
          </div>

        </div>
        <div class="row mt-3  ">

          <div class="card-body align-middle align-self-center">
            <h3 class="card-title ff-font login-title mt-4">
              <b> {{$store.state.loginTitle}} </b>
            </h3>
            <p v-if="error" class="text-danger">
              <a>{{ error }}</a>
            </p>
            <p v-if="message" class="text-success"> <a>{{ message }}</a> </p>

            <form v-if="!reset" @submit.prevent="login2" class="mt-3">

              <div class="input-group mb-3">
                <input v-model.trim="user.email" type="email" class="form-control login-input" placeholder="Email">
              </div>
              <div class="input-group mb-3">
                <input v-model.trim="user.password" type="password" class="form-control login-input" placeholder="Password">
              </div>
              <!-- <div class="d-grid gap-2">
              <button class="btn mt-2" :class="{'btn-primary': user.email.length && user.password.length, 'btn-light': !user.email.length || !user.password.length}">Sign in</button>
            </div> -->
              <button class="btn mt-2 w-100 btn-primary " :class="{'disabled': !user.email.length || !user.password.length}">Sign in</button>
              <!-- <div class="w-100 btn btn-primary"> Sign in </div> -->
              <p class="card-text mt-4"><small class="text-muted">Help / Questions? Drop us an email: support@futurefitbusiness.org</small></p>
              <div class=" mt-3">
                Not signed up yet?
                <span @click="openSignup" class="ms-2 text-primary">
                  <u> Sign up for free </u>
                </span>
              </div>
            </form>

            <form v-if="reset" @submit.prevent="resetPassword" class="">

              <h3 class="text-black-50">Reset Password</h3>
              <div class="input-group mb-3 mt-3">
                <input v-model.trim="user.email" type="email" class="form-control login-input" placeholder="Email">
              </div>

              <div class="row">
                <div @click="back" class="col-5 btn btn-secondary btn-block m-1 ms-3">Back</div>
                <!-- <div class="col-6"> -->
                <!-- <button @click="back" type="button" class=" btn btn-light btn-lg">
                  <i class="bi bi-chevron-left "></i>
                </button> -->

                <!-- </div> -->
                <button class="col-5 m-1 ms-3 btn btn-primary btn-block">Send</button>
              </div>

            </form>
            <div @click="showReset" class="mt-4 text-black-50 cursor-hover" href="#"><u>Reset Password</u></div>

          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MOBILE login -->
  <div v-show="!signup" class="d-sm-none w-100 h-100">
    <div class="col-10 offset-1 mt-5 text-start">
      <div class=" p-4">
        <img class="" src="@/assets/FF-Business-Colour-Print.png" height="50">
      </div>
      <div class="card-body align-middle align-self-center">
        <h3 class="card-title ff-font login-title">
          <b> {{$store.state.loginTitle}} </b>
        </h3>
        <p v-if="error" class="text-danger">
          <a>{{ error }}</a>
        </p>
        <p v-if="message" class="text-success"> <a>{{ message }}</a> </p>

        <form v-if="!reset" @submit.prevent="login2" class="mt-3">

          <div class="input-group mb-3">
            <input v-model.trim="user.email" type="email" id="inputEmail" class="form-control" placeholder="Email">
          </div>
          <div class="input-group mb-3">
            <input v-model.trim="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password">
          </div>
          <div class="d-grid gap-2">
            <button class="btn mt-2" :class="{'btn-primary': user.email.length && user.password.length, 'btn-light': !user.email.length || !user.password.length}">Sign in</button>
          </div>
          <div @click="showReset" class="mt-3 btn-block text-black-50 link" href="#"><u>Reset Password</u></div>
          <div class="text-center mt-5">
            <div @click="openSignup" cl ass=" btn btn-outline-success">Get a free account</div>

          </div>
          <p class="card-text"><small class="text-muted">Need help, or have questions? Drop us an email: support@futurefitbusiness.org</small></p>
        </form>

        <form v-if="reset" @submit.prevent="resetPassword" class="">
          <label for="inputEmail" class="sr-only">Email address</label>
          <input v-model="user.email" type="email" id="inputEmail" class="form-control login-input" placeholder="Email" required="" autofocus="">
          <button class="mt-2 btn btn-primary btn-block">Send</button>
          <div @click="back" class="mt-2 btn btn-light btn-block">Back</div>
        </form>
      </div>
    </div>

  </div>


  <!-- signup -->

  <div v-if="signup" class=" d-none d-sm-flex login-grad w-100 h-100 position-sticky ">

    <div class=" bg-light align-items-center overflow-auto">
      <div style="width:400px;" class="p-4">
        <div class="row">
          <div class=" d-flex p-4">
            <img class="" src="@/assets/FF-Business-Colour-Print.png" height="50">
          </div>

        </div>
        <div class="row ">
          <div class="card-body align-middle align-self-center overflow-auto">
            <div @click="signup=false" class="mt-2 btn btn-light float-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </div>
            <h3 class="card-title ff-font login-title mt-2"> <b>Sign up </b> </h3>
            <p v-if="error" class="text-danger"> <a>{{ error }}</a> </p>
            <p v-if="message" class="text-success"> <a>{{ message }}</a> </p>

            <form @submit.prevent="signUpUser" class="mt-3 text-start">

              <div class="mt-3">
                <label for="name1" class="form-label">Company Name</label>
                <input v-model.trim="newuser.company_name" type="text" id="name1" class="form-control">
              </div>
              <div class="mt-3">
                <label for="ba1" class="form-label">Primary Business Activity</label>
                <input v-model.trim="newuser.business_activity" type="text" id="ba1" class="form-control">
                <div id="passwordHelpBlock" class="form-text">
                  Please summarise in a couple of words, what the primary business activity of your Company is.
                </div>
              </div>
              <div class="mt-3">
                <label for="email1" class="form-label">Email</label>
                <input v-model.trim="newuser.email" type="email" id="email1" class="form-control">
              </div>
              <div class="mt-3">
                <label for="pw1" class="form-label">Password</label>
                <input v-model="newuser.password" type="password" id="pw1" class="form-control">
              </div>

              <div v-if="!signUpCheck()" disabled class="btn btn-block mt-5 btn-outline-secondary disabled w-100">Create account</div>
              <button v-if="signUpCheck()" class="btn btn-block mt-5 btn-success w-100">Create account</button>
            </form>


          </div>
        </div>
      </div>
    </div>
  </div>

</div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data: function() {
    let state = {
      signup: false,
      reset: false,
      is_public: false,
      loading: false,
      user: {
        email: '',
        password: '',
        app: this.$store.state.app
      },
      newuser: {
        email: '',
        password: '',
        company_name: '',
        business_activity: '',
      },
      error: '',
      message: '',
    }
    if (process.env.VUE_APP_DEBUG === 'true') {
      state.user.email = 'tester@futurefitbusiness.org'
      state.user.password = '123456'
      // state.user.email = '2@2.xo'
      // state.user.password = '1234'
    }
    return state
  },
  computed: {},
  methods: {
    login2: function() {
      this.error = ''
      if (this.loading) {
        console.log('somethings gone wrong here')
        return
      }
      this.loading = true
      this.user.app = this.$store.state.app
      this.$http.post('login', this.user).then((response) => {
        if (Object.keys(response.data).length && response.data.auth_token) {
          console.log('dispatch logging in')
          this.$store.dispatch('login', response.data)
        } else {
          this.error = response.data.message
        }
        this.loading = false
      })
    },
    openSignup() {
      this.signup = true
      this.error = ''
      this.message = ''
    },
    signUpCheck: function() {
      let email = this.newuser.email.length > 0
      let pw = this.newuser.password.length > 0
      let name = this.newuser.company_name.length > 0
      let ba = this.newuser.business_activity.length > 0
      return email && pw && name && ba
    },
    signUpUser: function() {
      if (this.signUpCheck()) {
        this.$http.post('signup', this.newuser).then((response) => {
          if (response.data && response.data.auth_token) {
            this.$store.dispatch('login', response.data)
          } else {
            this.error = response.data.message
          }
        }).catch(err => {
          this.error = 'something went wrong, please try again.'
        })
      }
    },
    back: function() {
      this.error = ''
      this.message = ''
      this.reset = false
    },
    showReset: function() {
      this.error = ''
      this.message = ''
      this.reset = true
    },
    resetPassword: function() {
      this.error = ''
      this.message = ''
      this.$http.post('reset/password', this.user).then((response) => {
        if (response.data && response.data.status === 'success') {
          this.message = response.data.message
          this.reset = false
          this.error = ''
        } else {
          this.error = response.data.message
        }
      })
    }
  }
}
</script>


<style scoped>
.login-input {
  background: #f0f0f0;
  border: none;
}

.login-title {
  color: #313131;
  color: #595959;
}

.ff-tag {
  position: absolute;
  /* bottom: 0; */
  font-size: 18px;
  font-weight: 600;
  color: #5b5b5b;
  opacity: 0.8;
}

.login-grad {
  /* min-height: 100%;
  overflow-y: hidden;
  position: relative; */
  background-image: linear-gradient(120deg, #99d4e1 0%, #4BA4C0);
}


.btn-primary {
  color: #fff;
  background-color: #1c93b5;
  border-color: #1c93b5;
  background-color: rgba(54, 162, 235) !important;
  border-color: rgba(54, 162, 235) !important;
}


.login {
  display: flex;
  align-items: center;
  /* padding-top: 40px; */
  /* padding-bottom: 40px; */
}

.rounded-more {
  border-radius: 1em;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
