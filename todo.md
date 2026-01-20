# Project TODO

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
- [x] Wave 5終了時のゲーム状態管理を整理（複数のロジック混在を解決）
- [x] showGameClearAnnouncementメソッドを粗いロジックで再実装
- [x] Wave 6開始時のゲーム状態を正しく初期化

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

## Wave 11 最終ボス戦（暗黒巨大戦闘母艦）
- [x] Insect Emperorのテレポート頻度を上げる
- [x] Wave 11の小惑星帯ステージを実装（約40秒、階石1.2倍速、大量の階石）
- [x] 暗黒巨大戦闘母艦ボスクラスを作成（画面いっぱいの巨大デザイン）
- [x] 4つの砲塔を実装（各HP 15000、超巨大レーザー）
- [x] 砲塔破壊時のアニメーションと残骸を実装
- [x] 様々な種類の弾幕攻撃を実装
- [x] EnemyAce/Ace2/Ace3を定期的に放出する機能を実装
- [x] 美しい星雲の背景を実装
- [x] Wave 11のゲームフロー（小惑星帯→ボス戦→ending.mp4→Wave 12）

## Wave 11の改善とEnemyAce2/Ace3調整
- [x] EnemyAce2の高出力レーザー発射頻度を下げる
- [x] EnemyAce3の高出力レーザー発射頻度を下げる
- [x] 暗黒巨大戦闘母艦のデザインを強化（ディテール追加）
- [x] 暗黒巨大戦闘母艦のアニメーションを強化
- [x] 4つの砲塔のデザインとゲーム性を強化
- [x] 小惑星帯の階石数を大幅に増やす（大小様々）
- [x] Wave 11用BGMをダウンロードして設定

## EnemyAce音声とエフェクト改善
- [x] EnemyAce2の高出力レーザー発射頻度を6秒から10秒に調整
- [x] EnemyAce3の高出力レーザー発射頻度を6秒から10秒に調整
- [x] 高出力レーザー発射音を設定
- [x] ダメージ音（ダメージを受けた時の音）を設定
- [x] EnemyAceの破壊音を設定
- [x] EnemyAce2の破壊音を設定
- [x] EnemyAce3の破壊音を設定

## プレイヤー機エンジン噴射口エフェクト
- [x] 左移動中は右の噴射口が白く発光
- [x] 右移動中は左の噴射口が白く発光
- [x] 上下移動中は三つの噴射口が発光

## Power限界突破システム
- [x] Wave 5ボス撃破後のending.mp4再生後に選択画面を表示
- [x] 「Shooting Power限界突破のunlockをする？」の選択画面
- [x] Yes/Noボタンで選択
- [x] Yesを選択した場合、4つ目以降のPower upで弾丸が赤くなる
- [x] 赤い弾丸は通常の2倍の破壊力

## Power限界突破システム改善
- [x] 4つ目のPower up: 中央の弾道が赤くなる
- [x] 5つ目のPower up: 左右の斜め弾道が赤くなる
- [x] 6つ目のPower up: 広角の弾道と追加中央弾が赤くなる
- [x] 7つ目以降: 基本の左右2発も赤くなる

## バグ修正と機能改善
- [x] Game Over時にPower限界突破効果をリセット
- [x] プレイヤー機の両翼をSR-71風スウェプトバックウィングにリデザイン
- [x] EnemyAce2/Ace3の高出力レーザー連射問題を修正（10秒間隔を確実に）
- [x] 高出力レーザーの狙う位置を0.2秒前のプレイヤー位置に変更
- [x] EnemyAce3撃破時にHP回復アイテムを必ずドロップ

## プレイヤー機翼のSR-71風三角形デルタウィング化
- [x] 両翼を胴体先端からエンジン噴射口横までを接続部分とした三角形デルタウィングに変更


## 現在進行中: プレイヤー機翼の三角翼形状修正（後退角45度）
- [x] 左翼を胴体先端（コックピットあたり）からエンジン噴射口あたりまでを接続部分とした三角翼に修正
- [x] 右翼を胴体先端（コックピットあたり）からエンジン噴射口あたりまでを接続部分とした三角翼に修正
- [x] 翼の後退角45度程度の三角翼形状を実装
- [x] 画面手前（Z負方向）に向かってコンパクトな三角形状に広がる形状を実装
- [x] 翼の色を胴体と同じ白色（0xffffff）に統一
- [x] エンジン噴射口、エンジンポッド、胴体は現状維持


## 現在進行中: プレイヤー機翼の位置調整とディテール強化
- [x] 両翼の位置をずらしてエンジン噴射口と水平に配置
- [x] 翼を少し大きくしてディテールを調整
- [x] 翼上面にパネルラインを追加
- [x] 翼上面にエッジライトを追加
- [x] 胴体のディテール強化
- [x] ステルス戦闘機らしさを強調


## 現在進行中: プレイヤー機翼の位置細調整と厠み拡大・デザイン改善
- [x] 翼位置をさらに調整して底辺がエンジン噴射口と完全に水平に配置
- [x] コックピット近くで翼頂点が露出しないよう柟性な形状で翼を統合
- [x] 翼の厠みを現在の2倍に拡大
- [x] 翼を板ではなくステルス機らしい立体的な形状に変更
- [x] 翼の曲面や流線型を強調してステルス機らしさを向上


## 現在進行中: プレイヤー機の翼底辺水平位置細調整と胴体パネルテクスチャ追加
- [x] 翼の底辺（画面手前の辺）をエンジン噴射口と完全に水平に細調整
- [x] 胴体や機体の白い表面にスペースシップらしいパネルを細い黒い線で描画
- [x] 胴体や機体の白い表面に細かな紋様を細い黒い線で描画
- [x] スペースシップらしい技術的な見ためを強調


## 現在進行中: プレイヤー機の翼底辺水平位置微調整と隙間埋めとディテール追加
- [x] 翼底辺の水平位置をさらに微調整してエンジン噴射口と完全に水平に配置
- [x] コックピット横の胴体部分と翼の隙間を埋めるフェアリング（小さなオブジェクト）を追加
- [x] 両翼の三角翼の頂点あたりの隙間を埋めるストラットを追加
- [x] 縦方向パネルラインを追加してディテールを強化
- [x] 両翼の厚み部分に装飾を施してディテールを強化


## 現在進行中: ホームページのSEO最適化
- [x] メタキーワードを追加（3D space shooter, arcade game, action game など）
- [x] メタディスクリプション（50-160文字）を追加
- [x] H1見出しをページタイトルとして追加
- [x] H2見出しをセクション見出しとして追加


## 現在進行中: Open Graph メタタグの追加
- [x] Open Graph メタタグ（og:title, og:description, og:image, og:url, og:type）をindex.htmlに追加
- [x] SNS共有用画像（1200x630px）を作成してpublic/フォルダにアップロード
- [x] Twitter Card メタタグも追加してTwitter共有を最適化


## 現在進行中: プレイヤーランキング機能の実装
- [x] データベーススキーマを作成してランキングテーブル（player_rankings）を追加
- [x] ランキング取得APIエンドポイント（GET /api/trpc/getRankings）を作成
- [x] スコア登録APIエンドポイント（POST /api/trpc/addScore）を作成
- [x] Game Over画面にランキング表示（1位から100位までスクロール表示）を追加
- [x] 100位以内のスコア達成時に名前入力ポップアップを表示
- [x] 名前とスコアをManusデータベースに登録する機能を実装


## Wave 5とWave 11で異なるエンディングムービーを実装
- [x] 現在のエンディングムービーの構造を確認
- [x] Wave 5用エンディングムービーの画像をNano Bananaで生成（5カット）
- [x] 生成した画像からビデオクリップを生成
- [x] ffmpegでビデオクリップを結合してWave 5用エンディングムービーを作成
- [x] 既存のエンディングムービーをWave 11用に名前変更
- [x] playEndingMovieメソッドを修正してWave番号に応じたムービーを再生
- [x] Wave 5ボス撃破時にムービー番号を渡すように修正
- [x] Wave 11ボス撃破時にムービー番号を渡すように修正
- [x] 動作確認とチェックポイント保存
