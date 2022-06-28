(function () {
  const entrySubmitBtn = document.getElementById("entry-submit-btn");
  function getEntryFormText(hurigana, name, tel, email, birthday, gender, experience, comment) {
    return `お名前: ${name} \n\nフリガナ: ${hurigana} \n\n電話番号: ${tel} \n\nメールアドレス: ${email} \n\n誕生日: ${birthday} \n\n性別: ${gender} \n\n経験年数: ${experience} \n\n質問: ${comment}`;
  }
  entrySubmitBtn.addEventListener("click", () => {
    const slackURL = atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDAxOEdDVjNNQlAvQjAzTUpDWUZEMk4vclBZQlNsOW9BZVRvNkhtNDBMWHhnOWJ3");
    const hurigana = document.getElementById("hurigana").value;
    const name = document.getElementById("name").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const birthday = document.getElementById("birthday").value;
    const gender = [...document.getElementsByName("gender")].find((x) => x.checked)?.value;
    const experience = document.getElementById("experience").value;
    const comment = document.getElementById("comment").value;

    const data = { text: getEntryFormText(hurigana, name, tel, email, birthday, gender, experience, comment) };
    debugger;
    if (hurigana && name && tel && email && birthday && gender && experience) {
      $.ajax({
        type: "POST",
        url: slackURL,
        data: `payload=${JSON.stringify(data)}`,
      }).then(() => {
        alert("応募情報を送信しました。");
      });
    } else {
      alert("入力に漏れがあります。");
    }
  });
})(document);
