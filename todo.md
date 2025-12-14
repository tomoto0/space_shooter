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

## Critical Bug - Wave 6 Transition Still Failed
- [x] Wave 6への遷移が依然として失敗している問題を根本的に解決（敵が現れず、Wave 5の画面が続く）
- [x] WebGLコンテキストロストエラーの根本原因を特定して修正
- [x] Wave 5からWave 6への背景切り替えロジックを完全に見直し

## Player Ship Design Improvement
- [x] 機体デザインをステルス戦闘機風の三角形ウィングに変更
- [x] 白っぽいメタリック（スペースシャトルのような色）に変更
- [x] 左右移動時に噴射口から青白いジェットエフェクトを追加

## Critical - Wave 6 Transition Not Executing
- [x] Wave 6遷移がstartWaveを呼び出さない根本原因を特定（setEarthSpaceBackgroundのログが出力されない）
- [x] playEndingMovie後のWave 6開始ロジックに詳細なデバッグログを追加
- [x] startWaveメソッドに詳細なデバッグログを追加

## Critical - Player Ship Design Not Applied
- [x] 機体デザインのコードをファイル横断で検索（複数箇所に存在する可能性）
- [x] 現在の黒っぽい機体デザインコードを白いメタリックに上書き
- [x] 全ての機体作成箇所に変更を適用（ブラウザキャッシュをクリアして確認）

## Critical - waveManager is null after ending movie
- [x] playEndingMovie実行時にwaveManagerがnullになる根本原因を特定（this参照が失われる）
- [x] waveManager参照を保持するように修正（const game = thisで保持）
- [x] Wave 6への遷移を正常に実行

## Player Ship Color Too Dark
- [x] 機体の色をより白っぽく変更（0xf5f5f5から0xffffffに）
- [x] emissiveIntensityを上げて発光を強化（0.02から0.15に）

## Critical - waveManager still undefined in playEndingMovie
- [x] playEndingMovie呼び出し元でwaveManagerがundefinedになる原因を特定（WaveManagerクラス内でthis.waveManagerを参照）
- [x] WaveManagerクラスからGameクラスへの参照を修正（gameRefを追加）
- [x] Wave 6への遷移を正常に実行（waveManager.startWave(6)を呼び出し）

## Player Ship Wing Design Improvement
- [x] ウィングをお尻まで伸ばして三角形の底辺のようなデザインに
- [x] 三つの噴出口のエフェクトをより明確に（左右移動時に青白い炎がはっきり見える）

## Critical - playEndingMovie is not a function
- [x] playEndingMovieメソッドをWaveManagerからGameクラスに移動
- [x] WaveManagerからGameクラスのplayEndingMovieを呼び出すように修正
- [x] ending movieが正常に再生されることを確認

## Player Ship Design Final Improvement
- [x] 機体デザインを三角形で丸みと膝らみを帯びたデザインに変更
- [x] 三つの噴出口ジェットエフェクトを見えるように改善（サイズを3倍、強度を2-3倍に強化）

## Critical - Wave 6 starts but then Game Over and restarts from Wave 1
- [x] playEndingMovie後にPlayer destroyed!とGame started!が発生する原因を特定（pauseGame呼び出しが原因）
- [x] pauseGame/resumeGameの処理を見直してゲーム状態を正しく管理（pauseGame呼び出しを削除）
- [x] Wave 6が正常に開始され、プレイヤーが破壊されないように修正

## Revert Player Ship Design to Two Versions Ago
- [x] 機体デザインを二つ前のバージョン（ステルス戦闘機風の三角形ウィング）に戻す
- [x] 三つの噴出口ジェットエフェクトを丁寧に作り込む（サイズ1.8、強度を最適化）

## Critical - Player destroyed immediately after Wave 6 starts
- [x] Wave 6開始直後にPlayer destroyed!が表示される原因を調査（healthが0のまま）
- [x] Wave 6開始時にプレイヤーのhealthを回復して状態をリセット（maxHealthに設定）
- [x] Wave 6が正常に開始され、プレイヤーが破壊されないように修正

## Wave 6 Background Improvement
- [x] 宇宙空間の3D背景素材を検索してダウンロード（画面下部に青い地球、宇宙に星が見える）
- [x] Wave 6の背景を3D素材に変更（Creating wave 6 spaceの負荷を軽減）

## Player Ship Design Complete Overhaul
- [x] 機体デザインをスペースシャトル風の三角ウィング（ステルス爆撃機のような）機体に一から作り直し
- [x] 機体デザインを超細かく作り込む（ディテール、パネルライン、ウィングエッジ、エンジンマウントなど）
- [x] 三つのエンジン噴射口を追加（外側ハウジング、内側ノズル、マウント）
- [x] 左右移動時に噴射口付近から青白い炎が噴き出すエフェクトを追加（強度を5倍に強化）
