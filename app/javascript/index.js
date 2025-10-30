//HTML要素が読み込まれてから処理を実行するようにする記述
window.addEventListener('load', () => {
  //ボタンの要素を取得
  const button = document.querySelector("button");
  //リポジトリ一覧を表示するulの要素を取得
  const repositorySpace = document.querySelector("#repository_list");

  button.addEventListener('click', () => {
    const githubName = document.querySelector("#github_name").value;
    console.log(githubName);
    fetch(`https://api.github.com/users/${githubName}/repos`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // GitHub APIの結果全体を確認
        for (const repositoryInfo of data) {
          const li = document.createElement("li")
          li.innerHTML = repositoryInfo["name"]
          repositorySpace.appendChild(li)
        }
      })
  });
});



  // <input type="text" id="github_name" placeholder="github nameを入力してください"><br>
  // <button id="get_repositories_button">取得</button><br>
  // <ul id="repository_list">
  // </ul>