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

## Complete Redesign Based on Attached Image
- [x] 宇宙空間と地球が下に見える3D素材をダウンロードし直し（添付画像を参考に）
- [x] Wave 6の背景を画面全体を覆うように設定（地球が画面下部5分の1を覆う）
- [x] 機体デザインを白い逆三角形のステルス戦闘機風に一から作り直し（左右対称、色を0xffffffに変更）
- [x] 三つのエンジン噴射口を追加（既存のデザインを維持）
- [x] 左右移動時に丸い噴射口が青白く光るエフェクトを追加（シンプルな発光のみ）
- [x] Wave 6の隕石の数を2倍に増やす（asteroidChanceを0.15から0.30に）
- [x] Wave 6の隕石のスピードをさらに速くする（3.5倍から4.5倍に）

## Wave 6 Background and Ship Design Refinement
- [x] Wave 6の背景を3D空間で再構築（写真ではなくThree.jsで地球と宇宙空間を作成）
- [x] 地球を画面下約5分の1を覆う水平線として配置（青い地球、雲、緑の大地）
- [x] 宇宙空間に星をまばらに配置（瞬く星のエフェクト）
- [x] 機体デザインをおむすび型の三角形に修正（右翼が見えない問題を解決）
- [x] 左右対称の白い三角形機体に変更
- [x] 3つのエンジン噴出口を同じ丸いデザインに統一
- [x] エンジン噴出エフェクトを噴出口だけに限定（範囲を丸く小さく）

## Ship Design - Unified Triangle Body
- [x] 胴体と翼を一体化させて全体が一つの大きな三角形になるように変更（ステルス爆撃機風）
- [x] 左右対称の三角形デザインに統一

## Earth and Ship Design Improvements
- [x] 地球の位置を画面下5分の1を水平に覆うように調整
- [x] 地球のグラフィックを改善（青い海、白い雲、緑の大地、茶色の山脈を表現）
- [x] 機体デザインを丸みを帯びた三角形に変更（スペースシャトル風、中央の隆起を追加）
- [x] 3つの丸い噴出口をデザインして追加（外側ハウジング、内側ノズル、マウント）
- [x] 機体に装飾オブジェクトや描画を追加（パネルライン、コックピット、エアインテーク）
- [x] 噴出エフェクトを丁寧に実装（左右移動時の青白い炎、炎の延び）

## Earth Background and Ship Design Refinement
- [x] 地球の背景を水平の帯状に変更（球体ではなく画面下約5分の1を埋める）
- [x] 機体デザインを流線型の丸みを帯びた形状に変更（添付画像を参考、主胴体、左右翼、尾翼）
- [x] 機体のディテールを追加（大きなコックピット、3つの大きな丸いエンジン噴出口、エンジンポッド）

## Fix WebGL Context Loss on Wave 6
- [x] Earth背景を事前に作成して使い回すロジックを実装（disposeしない、visibleで制御）
- [x] 背景切り替え完了待機ロジックを導入（次のフレームでレンダリングを完了）
- [x] PixelRatio制限を追加してGPU負荷を軽減（Math.min(1.5, window.devicePixelRatio)）

## Fix Wave 6 Background Error and Earth Design
- [x] renderer.renderエラーを修正（不要なコードを削除）
- [x] 地球を画面横全体に広げて画面下約5分の1を埋める地平線として表現（幅600、高さ100）
- [x] 青い海、緑の大地、茶色の山脈、白い雲を美しく表現（4096x1024の高解像度テクスチャ）

## Wave 6 Adjustments
- [x] Wave 6以降の地球描画を削除（星空のみをレンダリング）
- [x] 隗石のスピードを1.5倍に引き上げ（4.5倍から6.75倍に）
- [x] Wave 6以降のボスの弾幕威力（hit damages）を1.5倍に引き上げ（全ボスのdamageMultiplierを適用）

## Fix Orange Particle Residue on Wave 5/6 Background Change
- [x] オレンジ色の点々の原因を調査（異次元の裂け目のパーティクルが原因）
- [x] 背景切り替え時のパーティクル削除ロジックを修正（異次元の裂け目を完全に削除、星の色を白に戻す）

## GPU Resource Release - Fix WebGL Context Lost
- [x] Explosionクラスのdisposeを強化（ジオメトリとマテリアルを明示的にdispose、パーティクルのメッシュを完全に解放）
- [x] Bulletクラスのトレイルdisposeを強化（destroy()でトレイル配列をクリア）
- [x] 敵・隗石のdisposeを強化（全敵クラス、Mine、BossAlienを含む）
- [x] VFXManagerにクリーンアップメソッドを追加（MuzzleFlash、KillMarkerも強化）
- [x] Wave切り替え時にクリーンアップを呼び出す（startWaveの最初に実行）

## Fix Boss Bullet Residue Bug
- [x] ボス撃破後にオレンジ色の弾幕（敵弾）が次のステージに残るバグを修正
- [x] ボス撃破時に全敵弾を消去するロジックを追加
- [x] Wave切り替え時に敵弾配列をクリアするロジックを追加

## Fix Remaining Boss Bullet Residue and Null Errors
- [x] ボス撃破後にまだ２７個の弾丸が残る問題を調査（エンディングムービー再生中に新たに生成される弾丸）
- [x] playEndingMovie内でも敵弾を消去するロジックを追加
- [x] Cannot read properties of null (reading 'children')エラーを修正（4454行目、4297行目）

## Fix Boss Bullet Trail Burn-in Issue
- [x] ボスの弾幕パーティクルが背景に焼き付いて残る問題を調査
- [x] Projectileクラスのトレイル（軌跡）エフェクトのクリーンアップを強化
- [x] ボス撃破時とWave切り替え時にシーンから全トレイルオブジェクトを削除
- [x] 弾丸destroy時にトレイルメッシュをシーンから確実に削除

## Bullet Mesh Cleanup Enhancement
- [x] 弾丸のメッシュエフェクトにも同様の削除ロジックを適用
- [x] ボス撃破時・Wave切り替え時に弾丸メッシュも確実に削除

## Add EnemyAce (Mid-Boss Enemy) for Wave 6+
- [x] EnemyAceクラスを実装（HP1000、レーザー連射、3D空間を自由に動き回る）
- [x] 複数の動作パターンを実装（ランダム選択）
- [x] Wave 6以降のスポーンロジックにEnemyAceを追加

## Adjust EnemyAce and Add Wave 6+ BGM
- [x] EnemyAceの出現確率を調整（Wave 6: 2%, Wave 7: 3%, Wave 8+: 4%）
- [x] EnemyAceのHPを1000から1500に増加
- [x] Wave 6以降のBGMをダウンロード（Blazing Stars by Eric Matyas - soundimage.org）
- [x] BGM再生ロジックを修正してWave 6以降で新しいBGMを再生

## Fix Wave 6+ Audio Issue
- [x] Wave 6以降で音が全く出ない問題を調査
- [x] BGMファイルのパスと存在を確認
- [x] BGM再生ロジックを確認・修正（エンディングムービー後にボリューム復元が欠落していた）

## Adjust EnemyAce Movement
- [x] EnemyAceがプレイヤー機に近づきすぎる問題を修正
- [x] プレイヤー機の前方空間で動くように制限
- [x] 移動速度を上げて素早く近づいたり遠ざかったりするように調整
- [x] 上下左右にランダムに動き回りミサイルを回避する動作を追加

## EnemyAce Adjustments and Wave 7-10 BGM
- [x] EnemyAceの出現場所を最奥の空間からに変更
- [x] EnemyAceの動きに「遠方への回避行動」パターンを追加
- [x] EnemyAceのHPを1500から2000に増加
- [x] Wave 7用のBGMをダウンロードして設定（Light Years）
- [x] Wave 8用のBGMをダウンロードして設定（Trouble On Mercury）
- [x] Wave 9用のBGMをダウンロードして設定（Cold Moon）
- [x] Wave 10用のBGMをダウンロードして設定（Steamtech Mayhem）
- [x] EnemyAce撃破時に大きな爆発エフェクトを追加

## EnemyAce2の追加とEnemyAce出現確率調整
- [x] EnemyAce2クラスを作成（白い宇宙船デザイン、HP 2000）
- [x] EnemyAce2の遠方レーザー射撃特化の攻撃パターンを実装
- [x] EnemyAce2のEnemyAceとは異なる動作パターンを実装
- [x] EnemyAce2のスポーンロジックを追加（Wave 7以降、1%の確率）
- [x] EnemyAceの出現確率を調整（Wave 7: 1.5%、Wave 8以降: 2%）
- [x] EnemyAce2撃破時の大爆発エフェクト（EnemyAceと同じ）

## EnemyAce3の追加とEnemyAce出現確率再調整
- [x] EnemyAce3クラスを作成（赤いステルス戦闘機デザイン、HP 3000）
- [x] EnemyAce3の複雑な動作パターンを実装（EnemyAce/Ace2とは全く異なる）
- [x] EnemyAce3の断続的なレーザー射撃を実装
- [x] EnemyAce3の「撃破しない限りフィールドに残り続ける」特性を実装
- [x] EnemyAce3のスポーンロジックを追加（Wave 7以降、0.5%の確率）
- [x] EnemyAceの出現確率を再調整（Wave 7: 1%、Wave 8以降: 1.5%）
- [x] EnemyAce3撃破時の大爆発エフェクト

## EnemyAce2/Ace3の強化
- [x] EnemyAce3のHPを4000に変更
- [x] EnemyAce3に遠方へのテレポート動作を追加
- [x] EnemyAce3に高出力の大型チャージレーザーを追加
- [x] EnemyAce3の通常オレンジ弾丸を断続的に発射するように変更
- [x] EnemyAce2のHPを4000に変更
- [x] EnemyAce2をより遠方で行動するように調整
- [x] EnemyAce2のスピードを上げる
- [x] EnemyAce2に高出力の大型チャージレーザーを追加
- [x] EnemyAce2の通常オレンジ弾丸を断続的に発射するように変更
