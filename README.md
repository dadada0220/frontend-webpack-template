# 静的フロントエンド開発テンプレートファイル

フレームワークを使わないシンプルな静的コーディングの案件に使えるテンプレートファイルです。

---

## 機能一覧

- 構文チェック&自動整形
  - HTML: `Markuplint`
  - CSS: `Stylelint`（CSSとSCSS記法のみ対応）
  - JavaScript: `ESLint`
- Webpack
  - Sass（SCSS記法）とECMAScript（JS）のコンパイル
  - SCSSファイルに記述したCSSプロパティ順の自動ソート

---

## 環境構築

npmとVSCodeの環境構築が必要です。

### npm

ターミナルでプロジェクト直下のディレクトリ（`package.json`がある場所）に移動し、以下コマンドで必要なモジュールをインストールします。

```
$ npm i
```

検証済みNode.jsのバージョン
- v14.18.1
- v18.15.0

### VSCode

各種構文チェッカーと自動整形Prettierの拡張機能をインストールします。

- ESLint
  - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
- Stylelint
  - https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint
- Markuplint
  - https://marketplace.visualstudio.com/items?itemName=yusukehirao.vscode-markuplint
- Prettier - Code formatter
  - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

`.vscode/extensions.json`に必要な拡張機能のIDを記載しています。  
（未インストールの拡張機能がある場合、このプロジェクトを開いた時にポップアップが出るはずです）

インストール後は、自動整形やリンターが動くかを確認します。

JSで変な文法を書いたらエラーになるかどうか、Sassを保存したらプロパティの順番が自動で並び替わるかどうか、などを確認します。  
もし正しく動かない場合、VSCodeのプロジェクトを一度閉じたり、アプリ自体を再起動してみましょう。

---

## コマンド一覧

### SassとJSのコンパイル（監視モード）
起動中、`_src/sass`と`_src/js`に差分が生じたら開発モードでコンパイルします。
```
$ npm run watch
```

### SassとJSのコンパイル（ビルド）
`_src/sass`と`_src/js`を本番モードでコンパイルします。
```
$ npm run dev // 開発モードでビルド
$ npm run build // 本番モードでビルド
```

### 構文チェック
構文チェックを行います。  
`_src/`内のSass,JSと、全htmlが対象になります。
```
$ npm run lint // ES
$ npm run lint:fix // ES
$ npm run lint:style // Sass
$ npm run lint:style:fix // Sass
$ npm run lint:html // HTML
```

上記コマンドで構文チェックを行えますが、作業中はVSCodeの拡張機能が自動で構文チェックをしてくれます。
