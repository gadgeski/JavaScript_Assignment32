const toastContainer = document.getElementById("toastContainer");
const showSuccessToastBtn = document.getElementById("showSuccessToast");
const showErrorToastBtn = document.getElementById("showErrorToast");

// トーストメッセージを表示する関数
function showToast(message, type = "info", duration = 3000) {
  const toast = document.createElement("div");
  toast.classList.add("toast-message");
  toast.textContent = message;

  // タイプに応じてクラスを追加
  if (type === "success") {
    toast.classList.add("success");
  } else if (type === "error") {
    toast.classList.add("error");
  }

  toastContainer.appendChild(toast);

  // 強制的にリフローしてtransitionを有効にする
  // toast.offsetWidth; // これを行うことで、opacity: 0 から opacity: 1 への遷移がアニメーションする

  // 表示クラスを追加してアニメーションを開始
  setTimeout(() => {
    toast.classList.add("show");
  }, 10); // 少し遅延させることで、ブラウザが初期スタイルを適用する時間を確保

  // 指定時間後にフェードアウトを開始し、要素を削除
  setTimeout(() => {
    toast.classList.remove("show"); // フェードアウトを開始
    // transitionが完了するまで待ってから要素を削除
    toast.addEventListener(
      "transitionend",
      () => {
        toast.remove();
      },
      { once: true }
    ); // イベントリスナーを一度だけ実行するように設定
  }, duration);
}

// ボタンクリックイベント
showSuccessToastBtn.addEventListener("click", () => {
  showToast("操作が成功しました！", "success");
});

showErrorToastBtn.addEventListener("click", () => {
  showToast("エラーが発生しました。", "error");
});
