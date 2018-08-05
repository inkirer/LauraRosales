<template>
    <div>
    <b-container>
        <form class="form-signin" @submit.prevent="login">
            <h2 class="form-signin-heading">Please sign in</h2>
            <div class="alert alert-danger" v-if="error">{{ error }}</div>
            <b-form-input class="mt-2" type="email" placeholder="Email" v-model="User.Email"></b-form-input>
            <b-form-input class="mt-2" type="password" placeholder="Password" v-model="User.Password"></b-form-input>
            <b-btn class="mt-2" variant="primary" type="submit">Login</b-btn>
        </form>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        User:{},
        error: false
    }
  },
  methods: {
    login () {
      this.$http.post('/auth/token', this.User)
        .then(request => this.loginSuccessful(request))
        .catch(() => this.loginFailed())
    },
    loginSuccessful (req) {
        if (!req.data) {
            this.loginFailed()
            return
        }
        localStorage.token = req.data
        this.error = false
        this.$router.replace(this.$route.query.redirect || '/Admin')
    },
    loginFailed () {
        this.error = 'Login failed!'
        delete localStorage.token
    }
  }
}
</script>