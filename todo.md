# Stellar Assault - Project TODO

## Completed
- [x] オープニングムービーの実装
- [x] 機体デザインの変更（白い三角ウィング、3つのエンジン噴射口）
- [x] playOpeningMovieメソッドのスコープエラー修正

## Pending
- [x] エンディングムービー再生中にゲームを完全に一時停止し、ムービー終了後に再開するロジックを実装

## Critical Bug Fix
- [x] エンディングムービー再生中のゲーム完全停止ロジックの実装（isMoviePlayingフラグが機能していない問題を修正）
- [x] Wave 5ボス撃类時にエンディングムービー再生前に自動的に「中断」ボタンを押すロジックを追加

## New Issues
- [x] Wave 5ボス撃破時にplayEndingMovieメソッドが呼ばれず、Wave 6に自動遷移してしまう問題を修正

## New Features
- [x] エンディングムービー再生中のゲーム音（ミサイル発射音など）をオフにする
- [x] エンディングムービー終了後、Wave 6へ自動遷移するロジックを実装
- [x] Wave 6以降の背景を青い地球が見える宇宙空間に変更
- [x] Wave 6以降に高速で流れる隕石を追加
- [x] Wave 6以降で全種類の敵が出現するように設定

## Bug Fixes
- [x] Wave 6への自動遷移が失敗している問題を修正（Congratulationsアナウンス終了後にWave 6ステージが表示されない）
- [x] WebGLコンテキストロストエラーを修正（背景切り替え時のリソース管理改善）

## Critical Bug - Wave 6 Transition
- [x] Wave 5\u7d42\u4e86\u6642\u306e\u30b2\u30fc\u30e0\u72b6\u614b\u7ba1\u7406\u3092\u6574\u7406\uff08\u8907\u6570\u306e\u30ed\u30b8\u30c3\u30af\u6df7\u5728\u3092\u89e3\u6c7a\uff09
- [x] showGameClearAnnouncement\u30e1\u30bd\u30c3\u30c9\u3092\u7c97\u3044\u30ed\u30b8\u30c3\u30af\u3067\u518d\u5b9f\u88c2
- [x] Wave 6\u958b\u59cb\u6642\u306e\u30b2\u30fc\u30e0\u72b6\u614b\u3092\u6b63\u3057\u304f\u521d\u671f\u5316

## Wave 6 Transition Logic - Second Attempt
- [x] playEndingMovieメソッドを修正してムービー終了後にWave 6を開始
- [x] showGameClearAnnouncementメソッドを修正してアナウンス表示のみに専念（5秒後にゲーム再開）

## Critical Bug - WebGL Context Lost on Wave 6 Transition
- [x] setEarthSpaceBackgroundメソッドのリソース管理を改善してWebGLコンテキストロストを防止
- [x] 異次元の裂け目削除時のジオメトリとマテリアルの適切な解放

## New Modifications
- [x] エンディングムービー再生中にWave 6への遷移を実行（ムービー終了後ではなく）
- [x] 爆弾の残弾表示をSHIELDメーターの上に移動

## Key Binding Changes
- [x] バレルロール操作のキーアサインをQ/EからV/Nに変更
- [x] ゲーム説明のテキストをQ/EからV/Nに更新
- [x] V/Nゲージ表示のUIを右端の機体行動範囲枠外に移動

## Critical Bug - Wave 6 Transition Failed
- [x] Wave 6への遷移が失敗している問題を修正（Congratulations表示がWave 5のまま）
- [x] WebGLコンテキストロストエラーを解決（背景切り替え時のリソース削除問題）
- [x] setEarthSpaceBackgroundメソッドのリソース削除ロジックをシンプル化
- [x] Wave 6遷移タイミングを最適化
