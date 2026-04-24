# Ridge Studio Pitch Microsite

Ridge Studio（山峸製作設計）官網提案專案。  
這個 repo 是正式的本機專案目錄，目標是做出一份給客戶看的單頁式 pitch microsite，而不是一般公司官網。

## Project Goal

- 用網站本身當提案載體，而不是 PDF
- 用七幕敘事方式說服客戶理解「為什麼 Ridge Studio 值得有一個官網」
- 讓視覺與互動本身成為 IWARE 的技術證明

## Repo Status

目前這個 repo 內有正式的 Next.js 專案骨架與 openspec 文件，但這一輪針對 3D 敘事與劇場感的快速實驗，主要先在 Omma 匯出的單檔 HTML 上進行。

也就是說，現在有兩條線：

- `repo 內正式專案`：`/Users/waynechen/01_開發專案/proposals/ridge-studio/`
- `外部快速實驗輸出`：`/Users/waynechen/Downloads/website-recreation-and-redesig_patched/index.html`

目前已做的大量 3D 與舞台感調整，**主要落在外部快速實驗輸出**，尚未完整搬回這個 Next.js repo。

## Current Experimental Output

目前最新可看的實驗檔案：

- `index.html`: `/Users/waynechen/Downloads/website-recreation-and-redesig_patched/index.html`
- `zip`: `/Users/waynechen/Downloads/website-recreation-and-redesig_patched.zip`

這份檔案最初來自 Omma 匯出，後續已手動重構與增修。

## What Has Been Done In The Experimental Version

### Narrative

- 將 Omma 原本重寫成英文概念頁的內容，拉回成中文提案版本
- 保留七幕敘事方向，讓網站更接近原始提案口吻
- 將頁面定位從「一般創意 landing page」拉回「劇場式提案 microsite」

### Act I

- 強化劇場揭幕感
- 加入 curtain、spotlight、stage floor、dust、ambient haze
- 讓 quote 成為主開場，而不是一般標題先出

### Act IV

- 從原本較平面的 section 改成懸掛式 3D 主裝置
- 加入 manifesto panel、source nodes、scaffold、archive cards converging
- 補上左側前後景層：ghost typography + featured fragment card
- 多次縮減與調整底部黑場，現在已比前幾輪合理
- 加入很輕的舞台薄霧，讓空間更像真實劇場

### Act VI

- 四個 proposal modules 從普通展示卡升級成更像舞台裝置
- 每個 module 現在有：
  - module header
  - side note
  - ambient light layer
  - light fog layer
- `Three.js` 場景已重做：
  - `Portfolio`: 策展走道與懸掛展框
  - `道具租賃`: 倉儲架、推車、道具庫存場景
  - `北投藝術鎮`: 文化地景與節點連結
  - `3D 環景展示廳`: 黑盒子 portal chamber

## Frontend Technologies Used In The Current Experimental Version

目前外部實驗版雖然是單一 `index.html`，但實際上已經用到多層前端技術：

- `HTML`: 承載七幕敘事結構、文字內容、資訊節點、proposal module 外層舞台裝置
- `CSS`: 主要負責 editorial 視覺、3D 假透視、舞台感、霧氣、光束、地板、hairline、層次與轉場
- `CSS 3D syntax`:
  - `perspective`
  - `transform-style: preserve-3d`
  - `translateZ()`
  - `rotateX()`
  - `rotateY()`
  - `translate3d()`
  - `scale()`
- `CSS visual syntax`:
  - `radial-gradient()`
  - `linear-gradient()`
  - `filter: blur()`
  - `mix-blend-mode`
  - `box-shadow`
  - `backdrop-filter`
  - pseudo-elements `::before` / `::after`
- `JavaScript`: 控制 scroll-driven transforms、section choreography、進場節奏、卡片收束、主裝置推進
- `Three.js`: 負責 `Act VI` 四個 proposal scenes 的真正 3D 空間

## Current Interaction / Visual Techniques Already Proven Useful

以下做法已被證明適合這個案子的氣質：

- `stage reveal`: 幕布、聚光燈、塵埃、舞台地板、薄霧
- `suspended composition`: 用吊掛式主裝置取代一般 section block
- `scroll-driven composition`: 不是單純 reveal，而是整體構圖隨 scroll 推進
- `foreground / midground / background layering`: 前景卡、主板、遠景 ghost typography
- `converging archive panels`: 散落卡片回收成單一舞台
- `ambient atmosphere`: 薄霧、紅色殘光、低對比空間層
- `micro-world modules`: 每個 proposal module 有自己的空間語言，而不是共用同一種卡片模板

## Other Highly Creative Frontend Directions Worth Exploring

如果要把這個專案做得更生動、有趣，而且不是一般商業 landing page，可以往下面這些方向走。

### 1. HTML As Scenery, Not Just Content

不是把文字貼在畫面上，而是讓 DOM 本身像展板、布幕、吊卡、字幕牌。

可用方式：

- `CSS 3D transforms` 直接把 DOM 放進空間
- `Three.js CSS3DRenderer` 把 HTML 與 3D 場景更緊密結合
- 未來若要更實驗性，可研究 `HTML in Canvas / DOM in 3D scene` 類型做法

### 2. Research Wall / Archive Wall

`Act II / III` 可以從一般內容段落，變成像研究牆、資料牆、檔案櫃。

可用方式：

- 卡片層疊
- platform cards 前後景穿插
- scroll 時像穿過資料層
- SVG 線條把資料節點串起來

### 3. Stage Machinery

讓 transition 像舞台換景，而不是一般網站 section 切換。

可用方式：

- sliding panels
- hanging frames
- tracked rails
- rotating platforms
- mechanical reveal / curtain-style masking

### 4. Atmospheric Space

不是靠大粒子或炫技 shader，而是靠更細的空氣感讓頁面有生命。

可用方式：

- very light floor fog
- low-contrast light beams
- drifting dust
- soft red glow
- shadow planes and reflected floor highlights

### 5. Text As Performance

文字本身也可以是演出的一部分，不只是資訊。

可用方式：

- staggered quote reveal
- oversized ghost typography
- split lines moving at different depths
- masked typography reveals
- layered serif / monospace contrast

### 6. More Experimental But Still Controlled Options

這些不一定現在就要做，但很適合記錄下來：

- `SVG filters`: `feTurbulence`, `feDisplacementMap` 做輕微布幕 / 熱氣 / 投影扭曲感
- `clip-path` / `mask-image`: 做舞台切幕、視窗、探照燈型 reveal
- `canvas` overlays: 做更自然的灰塵、霧、光斑
- `shader-based distortion`: 只在少數高潮段落使用，避免全站過重
- `scroll-synced camera feeling`: 不是真的 camera，但視覺上像鏡頭推進與對焦

## Interface Direction Note

這個案子如果要真的「生動有趣」，關鍵不是加更多效果，而是：

- 讓每一幕都有自己的空間個性
- 讓 HTML 元件本身也參與演出
- 讓轉場像敘事，而不是像特效展示
- 保持克制，不做成科技感樣板網站

## Current Open Notes

- `Act IV` 底部黑空間仍可再微調，但已比早期版本好很多
- 薄霧效果目前走「空氣感」路線，不強
- `Act II / III` 還可以繼續做得更空間化
- 目前的重度 3D / 劇場感改動，還沒有完整回寫到 Next.js repo 裡

## Important Files In This Repo

- `README.md`: 專案總覽與目前進度
- `openspec/changes/pitch-microsite-v1/proposal.md`: 提案目的與範圍
- `openspec/changes/pitch-microsite-v1/design.md`: 設計決策與技術方向
- `openspec/changes/pitch-microsite-v1/tasks.md`: 任務清單

## Recommended Next Step

如果下一步要正式收斂，我建議照這個順序：

1. 先決定 Omma 實驗版的視覺方向是否成立
2. 確認哪些效果要保留
3. 再把確定保留的版本搬回這個 Next.js repo
4. 最後做正式整合、效能與 RWD 收尾

## Local Run

```bash
npm run dev
```

預設開發網址：

```text
http://localhost:3000
```
