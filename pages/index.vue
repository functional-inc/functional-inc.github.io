<template>
  <main>
    <div class="jumbotron-fluid mb-0">
      <div class="container d-flex align-items-center">
        <div>
          <h1 class="mb-0">FUNCTIONAL</h1>
          <span>System develop & Beauty</span>
        </div>
      </div>
    </div>
    <section id="sec3">
      <div class="container">
        <h2 class="text-center">事業内容</h2>
        <p class="lead text-center font-weight-normal pb-lg-3"></p>

        <div class="row justify-content-start">
          <div class="col-md-6 col-sm-12 text-center">
            <img class="logo" src="/img/logo-system.png" />
            <h3 class="text-center system">システム開発</h3>
            <p class="text-body text-center mb-5 mt-4">
              最新のWeb技術を中心としたシステムの開発から保守、インフラ環境の構築まで幅色い技術と経験でお客様をサポートいたします。
            </p>
          </div>
          <div class="col-md-6 col-sm-12 text-center">
            <img class="logo" src="/img/logo-beauty.png" />
            <h3 class="text-center beauty">美容</h3>
            <p class="text-body text-center mb-5 mt-4">
              システム開発に加えヘアメイクから美容室の運営まで関わっています。<br />
              美容に関連する実績や経験をもとに美容業務を改善するシステム開発を得意としています。
            </p>
          </div>
        </div>
      </div>
      <!-- .container -->
    </section>
    <section id="sec4">
      <div class="container">
        <h2 class="text-center">採用情報</h2>
        <p class="lead text-center font-weight-normal"></p>
        <div class="content-box">
          <h4 class="content-heading align-center">求める人材</h4>
          <table>
            <tr>
              <th>求めるスキル</th>
              <td>JavascriptまたはRubyでの開発経験（目安実務1年以上）</td>
            </tr>
            <tr>
              <th>あると望ましいスキル・経験</th>
              <td>
                Gitを使ったバージョン管理<br />
                上流工程の経験<br />
                サーバ・インフラ関連の経験
              </td>
            </tr>
            <tr>
              <th>求める人物像</th>
              <td>
                プログラミングが大好きな方<br />
                技術的好奇心の強い方
              </td>
            </tr>
          </table>
          <div class="m-5"></div>
          <h4 class="content-heading align-center">雇用形態・制度</h4>
          <table>
            <tr>
              <th>雇用形態</th>
              <td>正社員</td>
            </tr>
            <tr>
              <th>勤務地</th>
              <td>
                東京本社<br />
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
                月給制<br />
                スキル・経験・能力によって決定いたします
              </td>
            </tr>
            <tr>
              <th>休日・休暇</th>
              <td>
                完全週休二日制（土・日）<br />
                祝祭日・年末年始休暇・年次有給休暇
              </td>
            </tr>
            <tr>
              <th>待遇・福利厚生</th>
              <td>
                社会保険（健康保険、厚生年金、雇用保険）<br />
                交通費支給、時間外手当、出張手当、定期健康診断、技術書購入補助
              </td>
            </tr>
          </table>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <h2 class="text-center">お問い合わせ</h2>
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <form class="form1 mt-5" id="contact_form">
              <div class="mt-4">
                <label for="form_name" class="form-label">お名前 *</label>
                <input
                  type="text"
                  class="form-control"
                  id="form_name"
                  value=""
                  required
                />
              </div>
              <div class="mt-4">
                <label for="form_email" class="form-label"
                  >メールアドレス *</label
                >
                <input
                  type="email"
                  class="form-control"
                  id="form_email"
                  value=""
                  required
                />
              </div>
              <div class="mt-4">
                <label for="form_tel" class="form-label"
                  >電話番号（任意）</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="form_tel"
                  value=""
                />
              </div>
              <div class="mt-4">
                <label for="form_title" class="form-label">タイトル *</label>
                <input
                  type="text"
                  class="form-control"
                  id="form_title"
                  value=""
                  required
                />
              </div>
              <div class="mt-4">
                <label for="form_body" class="form-label">本文 *</label>
                <textarea
                  class="form-control"
                  id="form_body"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div class="mt-5 text-center">
                <button type="submit" class="btn btn-success">確認</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <!-- .container -->
    </section>
    <div class="modal" id="confirm_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">以下の内容でよろしいですか？</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p id="confirm_text" style="white-space: pre-wrap"></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              キャンセル
            </button>
            <button type="button" class="btn btn-primary" id="submit_button">
              送信
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="modal" id="result_modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">送信結果</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p id="result_text" style="white-space: pre-wrap"></p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  mounted() {
    // $(function () {
    //   $(contact_form).on("submit", function (event) {
    //     event.preventDefault();
    //     showConfirmModal(getFormText());
    //   });
    //   $(submit_button).on("click", function () {
    //     const base64URL =
    //       "aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDAxOEdDVjNNQlAvQjAxVFRHMUNEQTkvRklvQmsweEV3cndUUWYxUjZqOHpGZ1NX";
    //     const url = atob(base64URL);
    //     $.ajax({
    //       url,
    //       type: "POST",
    //       dataType: "text",
    //       data: JSON.stringify({ text: getFormText() }),
    //       timeout: 5000,
    //     })
    //       .done(function (data) {
    //         $(confirm_modal).modal("hide");
    //         showResultModal(
    //           `送信を完了しました。\n\n【送信内容】\n${getFormText()}`
    //         );
    //         $(contact_form)[0].reset();
    //       })
    //       .fail(function () {
    //         $(confirm_modal).modal("hide");
    //         showResultModal(
    //           "エラーが発生しました。\nしばらく時間が経ってからもう一度お試しください。"
    //         );
    //       });
    //   });
    //   function getFormText() {
    //     return [
    //       `お名前: ${$("#form_name").val()}`,
    //       `メールアドレス: ${$("#form_email").val()}`,
    //       `電話番号: ${$("#form_tel").val()}`,
    //       `タイトル: ${$("#form_title").val()}`,
    //       `本文: ${$("#form_body").val()}`,
    //     ].join("\n");
    //   }
    //   function showConfirmModal(text) {
    //     $(confirm_text).text(text);
    //     $(confirm_modal).modal();
    //   }
    //   function showResultModal(text) {
    //     $(result_text).text(text);
    //     $(result_modal).modal();
    //   }
    // });
  },
});
</script>
