<template>
  <main>
    <div class="jumbotron-fluid mb-0">
      <div class="container d-flex align-items-center">
        <div>
          <h1 class="mb-0">
            FUNCTIONAL
          </h1>
          <span>System develop & Beauty</span>
        </div>
      </div>
    </div>
    <section id="sec3">
      <div class="container">
        <h2 class="text-center">
          事業内容
        </h2>
        <p class="lead text-center font-weight-normal pb-lg-3" />

        <div class="row justify-content-start">
          <div class="col-md-6 col-sm-12 text-center">
            <img class="logo" src="/img/logo-system.png">
            <h3 class="text-center system">
              システム開発
            </h3>
            <p class="text-body text-center mb-5 mt-4">
              最新のWeb技術を中心としたシステムの開発から保守、インフラ環境の構築まで幅色い技術と経験でお客様をサポートいたします。
            </p>
          </div>
          <div class="col-md-6 col-sm-12 text-center">
            <img class="logo" src="/img/logo-beauty.png">
            <h3 class="text-center beauty">
              美容
            </h3>
            <p class="text-body text-center mb-5 mt-4">
              システム開発に加えヘアメイクから美容室の運営まで関わっています。<br>
              美容に関連する実績や経験をもとに美容業務を改善するシステム開発を得意としています。
            </p>
          </div>
        </div>
      </div>
      <!-- .container -->
    </section>
    <section id="sec4">
      <div class="container">
        <h2 class="text-center">
          採用情報
        </h2>
        <p class="lead text-center font-weight-normal" />
        <div class="content-box">
          <h4 class="content-heading align-center">
            求める人材
          </h4>
          <table>
            <tr>
              <th>求めるスキル</th>
              <td>JavascriptまたはRubyでの開発経験（目安実務1年以上）</td>
            </tr>
            <tr>
              <th>あると望ましいスキル・経験</th>
              <td>
                Gitを使ったバージョン管理<br>
                上流工程の経験<br>
                サーバ・インフラ関連の経験
              </td>
            </tr>
            <tr>
              <th>求める人物像</th>
              <td>
                プログラミングが大好きな方<br>
                技術的好奇心の強い方
              </td>
            </tr>
          </table>
          <div class="m-5" />
          <h4 class="content-heading align-center">
            雇用形態・制度
          </h4>
          <table>
            <tr>
              <th>雇用形態</th>
              <td>正社員</td>
            </tr>
            <tr>
              <th>勤務地</th>
              <td>
                東京本社<br>
                ※リモートワーク相談可、転勤はございません
              </td>
            </tr>
            <tr>
              <th>勤務時間</th>
              <td>フレックス勤務制(コアタイム:11時～16時)</td>
            </tr>
            <tr>
              <th>給与</th>
              <td>
                月給制<br>
                スキル・経験・能力によって決定いたします
              </td>
            </tr>
            <tr>
              <th>休日・休暇</th>
              <td>
                完全週休二日制（土・日）<br>
                祝祭日・年末年始休暇・年次有給休暇
              </td>
            </tr>
            <tr>
              <th>待遇・福利厚生</th>
              <td>
                社会保険（健康保険、厚生年金、雇用保険）<br>
                交通費支給、時間外手当、出張手当、定期健康診断、技術書購入補助
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="text-center">
          お問い合わせ
        </h2>
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <b-form id="contact_form" class="form1 mt-5" @submit="formConfirm">
              <div class="mt-4">
                <b-form-group label="お名前 *" label-for="form_name">
                  <b-form-input id="form_name" v-model="form.name" required />
                </b-form-group>
              </div>
              <div class="mt-4">
                <b-form-group label="メールアドレス *" label-for="form_email">
                  <b-form-input id="form_email" v-model="form.email" required />
                </b-form-group>
              </div>
              <div class="mt-4">
                <b-form-group label="電話番号（任意）" label-for="form_tel">
                  <b-form-input id="form_tel" v-model="form.tel" />
                </b-form-group>
              </div>
              <div class="mt-4">
                <b-form-group label="タイトル *" label-for="form_title">
                  <b-form-input id="form_title" v-model="form.title" required />
                </b-form-group>
              </div>
              <div class="mt-4">
                <b-form-group label="本文 *" label-for="form_body">
                  <b-form-textarea
                    id="form_body"
                    v-model="form.body"
                    rows="5"
                    required
                  />
                </b-form-group>
              </div>
              <div class="mt-5 text-center">
                <b-button type="submit" class="btn-success">
                  確認
                </b-button>
              </div>
            </b-form>
          </div>
        </div>
      </div>
      <!-- .container -->
    </section>
    <b-modal
      id="confirm_modal"
      ref="confirm-modal"
      title="以下の内容でよろしいですか？"
      cancel-title="キャンセル"
      ok-title="送信"
      @ok="formSubmit"
    >
      <p>
        お名前: {{ form.name }}<br>
        メールアドレス: {{ form.email }}<br>
        電話番号: {{ form.tel }}<br>
        タイトル: {{ form.title }}<br>
        本文: {{ form.body }}
      </p>
    </b-modal>
    <b-modal
      id="succes_modal"
      ref="succes-modal"
      title="送信結果"
      :ok-only="true"
    >
      <p>
        送信を完了しました。<br><br>
        【送信内容】<br>
        お名前: {{ form.name }}<br>
        メールアドレス: {{ form.email }}<br>
        電話番号: {{ form.tel }}<br>
        タイトル: {{ form.title }}<br>
        本文: {{ form.body }}
      </p>
    </b-modal>
    <b-modal
      id="failed_modal"
      ref="failed-modal"
      title="送信結果"
      :ok-only="true"
    >
      <p>
        エラーが発生しました。<br>しばらく時間が経ってからもう一度お試しください。
      </p>
    </b-modal>
  </main>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
    form: {
      name: '',
      email: '',
      tel: '',
      title: '',
      body: ''
    },
    submitedResultText: ''
  }),
  computed: {
    formText () {
      const formText =
        `お名前: ${this.form.name}\n` +
        `メールアドレス: ${this.form.email}\n` +
        `電話番号: ${this.form.tel}\n` +
        `タイトル: ${this.form.title}\n` +
        `本文: ${this.form.body}`
      return formText
    }
  },
  mounted () {},
  methods: {
    formConfirm (event: Event) {
      event.preventDefault()
      // @ts-ignore
      this.$refs['confirm-modal'].show()
    },
    formSubmit () {
      const base64URL =
        'aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDAxOEdDVjNNQlAvQjAxVFRHMUNEQTkvRklvQmsweEV3cndUUWYxUjZqOHpGZ1NX'
      const url = atob(base64URL)

      const data = JSON.stringify({
        text: this.formText
      })

      // slackの webhook を利用した際に、CORS制限で投稿が出来ない。
      // https://qiita.com/shu-prog/items/75c48dc45c5839cf88ed
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
      })
        .then(() => {
          // @ts-ignore
          this.$refs['succes-modal'].show()
        })
        .catch(() => {
          // @ts-ignore
          this.$refs['failed-modal'].show()
        })
    }
  }
})
</script>
