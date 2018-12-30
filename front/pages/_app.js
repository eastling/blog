import React from 'react'
import App, { Container } from 'next/app'
import NProgress from 'nprogress'
import Router from 'next/router'
import '~/static/about.scss'
import '~/static/blog-detail.scss'
import '~/static/blog-layout.scss'
import '~/static/blog-list.scss'
import '~/static/book.scss'
import '~/static/card.scss'
import '~/static/dashboard-item.scss'
import '~/static/index.scss'
import '~/static/left-menu.scss'



Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}