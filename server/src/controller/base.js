module.exports = class extends think.Controller {
  async __before() {
    this.setCorsHeader();

    try {
      this.user_info = await this.session('user_info').catch(_ => ({}));
    } catch (err) {
      this.user_info = {};
    }
    const url = this.ctx.originalUrl

    if (this.ctx.method == 'OPTIONS') {
      return this.success()
    }

    const isComeFromAdmin = /admin/.test(this.ctx.request.header['x-forwarded-for'])
    if (isComeFromAdmin && (url !== '/user/login' && url !== '/user/signup') &&
      this.ctx.method !== 'GET' &&
      think.isEmpty(this.user_info)) {
      return this.ctx.fail({
        errno: 401,
        errmsg: '请您先登录',
        data: ''
      });
    }
  }

  setCorsHeader() {
    this.header('Access-Control-Allow-Origin', '*');
    this.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization,  x-forwarded-for');
    this.header('Access-Control-Request-Method', 'GET, POST, PUT, DELETE, OPTIONS');
    this.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    this.header('Access-Control-Allow-Credentials', 'true');
  }
};
