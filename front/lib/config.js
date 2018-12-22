const port = parseInt(process.env.PORT, 10) || 20162

const env = process.env.NODE_ENV

const dev = process.env.NODE_ENV !== 'production'

const api_prefix = dev ? 'http://api.linxd.cc/' : 'http://api.linxiangdong.com/'

export {
  port,
  env,
  api_prefix
}