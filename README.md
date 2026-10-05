# SNOWSCAPE YUZAWA

越後湯沢の魅力と5つのスキー場を紹介し、ユーザーの旅の目的や経験に合うスキー場を提案するレスポンシブなトラベルガイドサイトです。

- 種別：Interactive Travel Guide
- 制作時期：2026年2月

## Project Overview

東京からアクセスしやすい雪国・越後湯沢をテーマに、地域紹介、スキー場比較、旅スタイル診断、アクセス情報を一つのサイトにまとめています。

サイトでは、神立スノーリゾート、かぐらスキー場、石打丸山、苗場スキー場、ガーラ湯沢スキー場の特徴を写真と文章で紹介しています。3つの質問に回答すると、JavaScriptでユーザーに合うスキー場を提案します。

## Features

- 越後湯沢と5つのスキー場を紹介するロングページ
- 全画面メニューとページ内スムーズスクロール
- Heroセクションのparallaxとフェード演出
- `IntersectionObserver`を使ったスクロール表示演出
- 目的、経験、同行者を選ぶ3問の旅スタイル診断
- 回答の組み合わせによるスキー場推薦
- JavaScript objectにまとめたスキー場データから診断結果を取得
- 診断結果にスキー場名、ロゴ、対象ユーザー、説明、リンクを表示
- Google Mapsによる越後湯沢駅のアクセス表示
- Desktop／Tablet／Mobileに対応したレスポンシブレイアウト

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript

## Pages and Files

```text
Presentation/
├── index.html                # 地域・スキー場紹介とアクセス
├── quiz.html                 # 3問の旅スタイル診断
├── result.html               # 診断結果ページ
├── resort-data.js            # 診断に使用するスキー場データ
├── result.js                 # 回答の判定と結果表示
├── quiz-demo.html            # 診断画面の静的デモ
├── script.js                 # メニュー、スクロール、表示演出
├── style.css                 # 共通スタイルとresponsive対応
└── image/                    # 背景画像、ロゴ、地図など
```

## Local Setup

### Steps

1. このフォルダをローカルに保存します。
2. `index.html`をブラウザで開くか、VS CodeのLive Serverなどで表示します。

GitHub Pagesでもそのまま公開できます。

## Quiz Data Notes

`result.js`はURL parametersから3つの回答を取得し、回答の組み合わせに対応するスキー場を表示します。

スキー場データを変更する場合は、`resort-data.js`を編集してください。
