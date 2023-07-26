module.exports = {
  // ベースとなるルールセット
  "extends": [
    "plugin:import/recommended",
    "plugin:import/warnings",
    "prettier"
  ],
  // 個別ルール
  "rules": {
    // importするファイルをアルファベット順に自動で並び替える
    "import/order": [
      "error",
      {
        "alphabetize": {
          "order": "asc"
        }
      }
    ],
  },
  // 除外ファイル
  "ignorePatterns": [
    "webpack.config.js",
    "**/node_modules/**"
  ]
}
