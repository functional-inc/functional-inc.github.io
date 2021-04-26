export default {
  ssr: false,
  css: ['~/assets/css/queries', '~/assets/css/style'],
  head: {
    title: 'トップページ | 株式会社functional',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'サイトの説明文'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://functional-inc.com'
      },
      {
        property: 'og:image',
        content: './img/logo-wt.png'
      },
      {
        property: 'og:title',
        content: 'トップページ | 株式会社functional'
      },
      {
        property: 'og:description',
        content: '株式会社functionalのコーポレートサイト'
      }
    ]
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxt/typescript-build'
  ],
  plugins: ['~/plugins/bootstrap-vue.ts']
}
