console.log("らん");

new Promise((resolve) => {
  setTimeout(() => {
    console.log("て");
    resolve();
    }, 3000);
  }).then(() => {
    console.log("くん");
  });


  new Promise((resolve, reject) => {
  reject()
}).then(() => {
    console.log("resolveが実行されてthenの処理が動きました")
  })
  .catch(() => {
    console.log("rejectが実行されてcatchの処理が動きました")
  })

//   console.log("① Promiseを作るよ");

// const promise = new Promise((resolve) => {
//   console.log("② 3秒待つ処理を開始");
//   setTimeout(() => {
//     console.log("③ 3秒経過！resolveを実行！");
//     resolve("✅ 成功しました！");
//   }, 3000);
// });

// console.log("④ Promise作成は完了。結果を待つ...");

// promise.then((message) => {
//   console.log("⑤ thenが呼ばれた！");
//   console.log(message);
// });