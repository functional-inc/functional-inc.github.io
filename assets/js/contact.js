(function () {
  const contactSubmitBtn = document.getElementById("contact-submit-btn");
  function getContactFormText(name, email, comment) {
    return `お名前: ${name} \n\nメールアドレス: ${email} \n\n本文: ${comment}`;
  }
  contactSubmitBtn.addEventListener("click", () => {
    const slackURL = atob("aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDAxOEdDVjNNQlAvQjAzSDI3Vk1LVVovZHBmaG44b0xhc0JrWk1ubENYelltNTl1");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;
    const data = { text: getContactFormText(name, email, comment) };
    if (name && email && comment) {
      $.ajax({
        type: "POST",
        url: slackURL,
        data: `payload=${JSON.stringify(data)}`,
      }).then(() => {
        alert("お問い合わせを送信しました。");
      });
    } else {
      alert("入力に漏れがあります。");
    }
  });
})(document);
