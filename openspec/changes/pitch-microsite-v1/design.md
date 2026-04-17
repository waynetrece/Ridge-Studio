# Design — Ridge Studio Pitch Microsite v1

## Context

IWARE 主動向 Ridge Studio（山峸製作設計）提案官網建置。客戶最近詢問 IWARE 的 3D 環景服務，但**未表達官網需求**。傳統 PDF 提案無法穿透這層 indifference，因此交付物本身設計為一份 production-grade pitch microsite — 媒介就是訊息，部署為一個 Vercel 連結直接寄給客戶。

**現況**：
- GitHub repo `waynetrece/Ridge-Studio` 已建立（空 repo）
- 本地專案目錄 `/Users/waynechen/01_開發專案/proposals/ridge-studio/` 已建立並通過 Spectra init
- IWARE 既有提案 demo (`gaia-ten-peach.vercel.app`) 為 SaaS 風 8 章節結構，本案需要完全不同的編輯雜誌調性
- IWARE 官網（iware.com.tw）強調「客製化、不採用套版」— 本案視覺承諾必須兌現這一點

**主要利害關係人**：
- IWARE 內部：本案完成後可作為 IWARE 官網新案例（雙重價值）
- 客戶：袁浩程（Ridge Studio 創辦人）— 北藝大舞台設計系畢業，重視藝術品質、永續理念

**核心約束**：
- 必須用前端網站技術，不可用 Reveal.js / Slidev 等簡報框架
- 視覺絕不能像 SaaS / tech 風（會與客戶氣質衝突）
- 內容絕不能教育客戶或指出客戶缺什麼（會打臉、自取其辱）
- 開發週期短（提案性質，不能拖過機會窗口）

---

## Goals / Non-Goals

**Goals:**

- 部署一個一個 Vercel 連結，5-8 分鐘 scroll 完整體驗，視覺品質達 Awwwards 候選等級
- 三段式視覺切換（Editorial Dark / Cream Editorial / Gallery White）展現 IWARE 多樣設計能力
- 三個炫技亮點（Act 4 GSAP Flip 重組、Act 6 Three.js 3D demo、全站 ScrollSmoother）作為技術資格證明
- 本案完成後可作為 IWARE 自家官網的新案例
- WCAG AA 無障礙合規、`prefers-reduced-motion` 支援、桌機 LCP < 2.5s

**Non-Goals:**

- 不做多頁面網站、不做 multi-route、不做 menu / footer / breadcrumb（這是 pitch microsite，不是公司官網）
- 不做 CMS 後台、不做動態內容管理（內容是一次性 pitch，無需 CMS）
- 不做多語系（單純繁體中文，目標客戶為台灣藝文工作者）
- 不做會員系統、不做使用者帳號
- 不做 A/B test、不做埋點分析（小範圍 cold pitch，無流量規模）
- 不嘗試取代 Ridge Studio 既有的 Behance / IG / FB / Portaly 內容（提案目的是促成合作，不是搬遷現有資產）
- **不直接使用 Ridge Studio 高解析作品圖**（版權禮節風險，採抽象縮圖 + 平台標籤策略）
- 不做 3D 環景的真實內容（Act 6 的 3D scene 是概念示意，不是實際拍攝資料）

---

## Decisions

### Framework: Next.js 15 App Router

**選擇**：Next.js 15 with App Router、TypeScript、React Server Components 為預設。

**替代方案考慮**：
- **Astro**：靜態優先、bundle 更小，但 SSR React 互動成本高，動效驅動的 client-heavy 場景不利
- **Remix**：路由體驗好，但本案無 multi-route 需求，浪費架構優勢
- **Vite + React SPA**：最輕量，但失去 Next.js 的 Image 最佳化、`next/font`、Vercel 部署整合

**理由**：本案 client interactivity 為主（GSAP / Motion / Three.js 全為 client-side），App Router 的 streaming + Image / Font 最佳化對 LCP 直接有利，Vercel 部署整合最順。

### Styling: Tailwind CSS v4 + CSS Variables

**選擇**：Tailwind v4 + 用 CSS variables 承載三套 palette token，動態切換背景與主色。

**替代方案考慮**：
- **CSS Modules**：型別與整合度差
- **vanilla-extract**：型別好但學習曲線高、社群小
- **styled-components / emotion**：runtime overhead 不利效能
- **純 Tailwind 無 CSS variables**：palette 切換要 prop drilling，複雜度上升

**理由**：CSS variables 讓三 palette 切換成為純 token 換值，動畫只需 transition CSS variable 即可平滑跨 palette。Tailwind v4 對 CSS variables 整合度比 v3 好。

### Animation: GSAP 主力 + Motion 元件級 + Three.js 點睛

**選擇**：GSAP 為全站滾動敘事與佈局過渡主力，Motion 為 React 元件 hover / whileInView / AnimatePresence，Three.js + R3F + drei 僅用於 Act 6 第四模組的 3D 環景 demo。

**替代方案考慮**：
- **單純 Motion**：scroll 動畫弱於 GSAP，layout 動畫優於 GSAP Flip 但 Act 4 散落→重組的複雜性 GSAP Flip 表現更穩
- **單純 GSAP**：React 元件 hover / variants / AnimatePresence 體驗不如 Motion
- **CSS-only 動畫**：scroll choreography 不可行
- **Lottie**：不適合本案需求（無 AE 動畫資產，且本案動畫需與 scroll 綁定）

**理由**：GSAP + Motion 是業界 editorial scroll site 的黃金搭配（參考 Stripe Press、Locomotive 工作室、Codrops 教學）。Three.js / R3F 限於 Act 6 一個 lazy-loaded chunk，不污染主 bundle。

### Animation library: GSAP Flip over Motion layoutId for Act 4

**選擇**：Act 4「散落 → 重組」用 **GSAP Flip**，不用 Motion `layoutId`。

**替代方案考慮**：
- **Motion `layoutId`**：API 簡潔、React 友善，但對隨機散落 + 旋轉狀態的還原不夠強
- **CSS FLIP 手寫**：可行但代碼量大、維護成本高

**理由**：Codrops 2026/01 最新教學示範 GSAP Flip 對複雜 grid 重組的處理能力最強，且我們已有 GSAP 為主力，不需切換 mental model。Flip 也支援 `data-flip-id` 跨容器動畫，未來如要拓展 Act 4 變化更靈活。

### Image strategy for Act 4: Abstract thumbnails + platform labels

**選擇**：Act 4 的 12 張作品縮圖**不直接使用 Ridge Studio 真實作品圖**。改為抽象的 placeholder 縮圖（純色或漸層 + 案名 + 年份 + 平台標籤）。

**替代方案考慮**：
- **直接抓 Ridge Studio Behance 圖**：版權禮節風險高（cold pitch、未經授權）、解析度不可控、客戶可能反感「為什麼用我的東西」
- **聯繫 Ridge Studio 取得授權再用**：違反 cold pitch 性質（若已聯繫就不需 cold pitch）
- **用 IWARE 自家案例替代**：失去「為 Ridge Studio 量身訂做」的訊號

**理由**：抽象縮圖 + 案名 + 平台標籤足以傳達「散落感」與「整合潛力」，無版權風險，且文字資訊本身就是「我們做了功課」的證明。動畫的戲劇性來自佈局變化，不依賴圖片本身的視覺強度。

### 3D scene approach: R3F panoramic sphere

**選擇**：Act 6 第四模組的 3D 環景 demo 用 React Three Fiber + drei 的 `Sphere` + 自訂 panorama texture。允許拖拽旋轉、滾輪縮放、idle 自動慢轉。

**替代方案考慮**：
- **真實 360 panorama 拍攝**：成本高、與 cold pitch 性質不符、可能授權困難
- **Three.js 純手寫**：可行但 R3F 開發效率高很多
- **Cesium / Mapbox GL**：場景型錯誤

**理由**：本案 3D 是「概念示意」非「實際內容」，用一張中性的 panorama texture（例如劇場舞台、藝廊白盒空間）即可達到效果。R3F 與 React 生態相容，drei 提供 OrbitControls 等 boilerplate 直接用。

### CTA backend: Vercel Functions + Resend

**選擇**：表單提交透過 Vercel Functions API endpoint，由 Resend 寄送通知到 IWARE 信箱。Calendly 採外部連結方式（不嵌入 widget）。

**替代方案考慮**：
- **Formspree / Getform**：免費額度低、增加第三方依賴、不易客製
- **EmailJS**：API key 暴露在 client-side，安全性差
- **嵌入 Calendly widget**：載入額外 ~100KB JS、隱私問題、與本站視覺風格衝突

**理由**：Vercel Functions 為 Next.js 自然延伸，Resend 提供 100 emails/day 免費額度足夠 cold pitch 量級，控制權完全在 IWARE 手上。Calendly 採外部連結保持本站視覺純粹。

### Font strategy: Self-hosted via next/font

**選擇**：所有字體透過 `next/font/local` 自託管（Bodoni、Playfair Display、Inter、Noto Sans TC、IBM Plex Mono）。

**替代方案考慮**：
- **Google Fonts CDN**：失去 Vercel edge 加速、隱私問題（GDPR）
- **Adobe Fonts**：商用授權成本

**理由**：`next/font` 自動處理 font preload + display swap + size adjust，對 LCP 與 CLS 直接有利。Bodoni 商用版需確認授權（見 Open Questions）。

### Single-page scroll narrative, no routes

**選擇**：整站只有一個 `/` 路由，七幕用 scroll 串連。**不做** `/about`、`/works`、`/contact` 等子頁。

**替代方案考慮**：
- **多頁面 hybrid**：之前討論時有提，但 user 明確指出「呈現形式仍是 pitch」
- **單頁 anchor link 導覽**：可考慮加上極簡 progress indicator，但不要傳統 menu

**理由**：本案是 pitch microsite，目的是讓客戶看完一條完整敘事。Multi-route 會分散注意力、讓客戶在「探索」而非「被打動」。

### Deployment: Vercel + Preview URLs

**選擇**：Vercel 部署，main branch 自動推 production，PR / branch 自動建 preview URL。

**替代方案考慮**：
- **Netlify**：邊緣函式較弱
- **Cloudflare Pages**：Workers 整合好但 Next.js 支援次於 Vercel
- **自架 VPS**：成本高、無 preview workflow

**理由**：Vercel 是 Next.js 原生平台，preview URL 對提案前內部 review 極有利。

---

## Risks / Trade-offs

| 風險 | 緩解 |
|---|---|
| **三 palette 切換感覺像 3 個網站拼起來** | 共享 typography family + 零圓角 + hairline + 慢動效 DNA；過渡用漸變橋接，不直接 cut |
| **作品縮圖抽象化降低視覺衝擊** | 文字資訊（案名 / 年份 / 平台）+ 散落佈局的戲劇性彌補；動效成為主視覺力量 |
| **Three.js 增加 bundle 重量** | Act 6 第四模組 lazy-load，不污染初始 JS bundle；移動端可降為靜態圖 |
| **GSAP ScrollSmoother 在 iOS Safari 不穩** | 啟用 `normalizeScroll: true`、實機測試、必要時手機端關閉 ScrollSmoother |
| **客戶在手機看而非電腦** | 桌機優先設計但手機完整可看；用 `ScrollTrigger.matchMedia` 降階動畫 |
| **客戶讀不出我們的「克制美學」反而覺得無趣** | Act 4 / Act 6 兩個高潮段落確保視覺爆點；CTA 文案需打動人 |
| **Bodoni 字體商用授權問題** | 改用 Playfair Display 或 Cormorant Garamond（OFL 授權）為 fallback |
| **客戶分享連結時 OG image 不夠吸引** | 設計專屬 og:image（含 IWARE × Ridge Studio 標題），確保 Twitter / Facebook / LINE 預覽美觀 |

---

## Migration Plan

本案為新建專案，無歷史資料遷移。**部署流程**：

1. **本地開發**：`/Users/waynechen/01_開發專案/proposals/ridge-studio/` 用 `npm run dev`
2. **首次推上 GitHub**：將本地 `main` push 到 `waynetrece/Ridge-Studio`（已連接 remote）
3. **連接 Vercel**：在 Vercel 後台 import `waynetrece/Ridge-Studio`，設定 framework preset 為 Next.js
4. **環境變數設定**：`RESEND_API_KEY`、`CONTACT_EMAIL_TO`（IWARE 接收信箱）、`CALENDLY_URL`
5. **Preview 階段**：每次 PR 自動產生 preview URL，IWARE 內部先 review
6. **Production 推送**：merge to main → 自動 production deploy
7. **客戶寄送前最終 check**：
   - LCP < 2.5s（用 PageSpeed Insights）
   - WCAG AA 通過（用 axe DevTools）
   - OG image 在 LINE / FB / Twitter 預覽正確
   - 行動裝置完整可看
8. **寄送客戶**：透過 IWARE 業務管道寄出 Vercel production URL

**回退策略**：Vercel 提供 instant rollback 到任何過往 deployment。若客戶反映重大問題（例如手機看不了），可立即回退至前一版。

---

## Open Questions

以下問題在本 design.md 撰寫時尚未拍板，將在 tasks 階段或實作初期解決：

1. **CTA 文案最終定稿**：目前敘事弧用「約 30 分鐘聊聊 / 想先了解大致預算」是工作版本，最終文案需 IWARE 業務團隊 review。
2. **Resend vs 自架 SMTP**：Resend 100/day 免費額度應足夠，但若 IWARE 偏好用自家信箱 SMTP，可改 nodemailer。
3. **Calendly URL 來源**：要用 IWARE 公用 Calendly 還是業務窗口個人 Calendly？
4. **Bodoni 字體授權**：Bodoni MT 屬 Monotype 商業字體。需確認授權或改 OFL 替代（Cormorant Garamond / EB Garamond）。
5. **Act 6 第四模組的 panorama texture 來源**：用 IWARE 過往專案的場景照片、或用通用劇場 / 藝廊空間圖？
6. **網域**：用 `ridge-studio-proposal.iware.com.tw` 子網域？或 Vercel `.vercel.app` 子網域？影響客戶觀感。
7. **是否加 Plausible 統計觀看時間**：能知道客戶是否真的看完，但增加外部依賴。
8. **送出客戶後是否啟用 OG image 動態生成**：若要分享連結含特定客戶名（例如 OG 標題顯示「給 Ridge Studio 的提案」），需用 `@vercel/og`。但客戶可能不希望被識別為「特殊對待」。
9. **本案是否同步公開為 IWARE 案例**：完成後是否在 IWARE 官網的案例頁掛上 Ridge Studio 案例（需事先得客戶同意）。
