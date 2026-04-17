# Ridge Studio 官網提案 — Pitch Microsite v1

## Why

Ridge Studio（山峸製作設計）近期主動詢問 IWARE 的 3D 環景服務。觀察其品牌資產發現：四條業務線、12 個代表作（蒙藏文化館、台中歌劇院、妖山祭等）、Behance 累積 29,260 瀏覽，但**作品散落在 Behance / IG / FB / Portaly 四個平台，沒有統一官網**。

IWARE 主動提案合作建置官網，**但客戶並未表達官網需求**，傳統 PDF 提案無法穿透這層 indifference。需要一份本身就是技術示範的「pitch microsite」— 媒介就是訊息，讓客戶看完即理解 IWARE 既懂他們的策展調性、又有跨產業客製化能力。

成功定義：客戶看完願意主動回信約面談（A）或表態想了解大致預算（B）。

## What Changes

- **新建一份 production-grade pitch microsite**（不是簡報、不是 PDF），部署在 Vercel，連結直接寄給客戶
- **七幕敘事結構**：作品開場 → 認識你們 → 欣賞你們 → 散落的觀察 → IWARE 介紹 → 假設有官網 → CTA
- **三段式視覺切換**：Dark 劇場感（Act 1, 4）+ Cream 編輯感（Act 3, 6）+ White 美術館感（Act 2, 5, 7），三段共享 serif typography 與 hairline DNA
- **動效炫技三亮點**：Act 4 GSAP Flip 散落卡片重組、Act 6 Three.js 3D 環景嵌入 demo、全站 ScrollSmoother 平滑捲動
- **網站等級而非簡報等級**：自訂 cursor、loading screen、page transition、SEO meta、響應式、無障礙（WCAG AA）
- **內容姿態守則**：不指出客戶缺什麼、不偽裝成策展同行、不裝熟、不教育客戶 — 主詞從「你」改成「我們」

## Non-Goals

留空，待 design.md 撰寫時於 Goals/Non-Goals 章節記錄拒絕的方案與範圍排除。

## Capabilities

### New Capabilities

- `pitch-narrative`: 七幕敘事的內容、文案、結構與順序定義。包含每幕標題、文字內容、戲劇節奏、敘事姿態守則（不越界、不教育、不裝熟）
- `editorial-design-system`: 編輯雜誌風的設計 token 系統。融合 S02 極簡黑白 + S15 palette（黑+暗酒紅）+ S19 奢華編輯三套風格 DNA，定義配色、字體（Bodoni / Playfair）、間距、hairline 邊線、零圓角、紙質紋理
- `scroll-motion-system`: 動效與互動規範。GSAP（ScrollSmoother / ScrollTrigger / SplitText / DrawSVG / Flip）為主力，Motion（whileInView / whileHover / layoutId）為輔，Three.js / R3F 在 Act 6 點睛 3D 環景 demo
- `cta-conversion`: 結尾轉換系統。雙 CTA（約 30 分鐘聊聊 / 想先了解大致預算）、表單或 Calendly 整合、可選的轉換追蹤與分享機制

### Modified Capabilities

無 — 全新專案，無既有 spec 需修改。

## Impact

- **新建 GitHub repo**：`waynetrece/Ridge-Studio`（已建立空 repo）
- **新建本地專案目錄**：`/Users/waynechen/01_開發專案/proposals/ridge-studio/`
- **技術棧**：Next.js 15 App Router、TypeScript、Tailwind v4、GSAP（含 Premium plugins，2025 起免費）、Motion（原 Framer Motion）、Three.js / React Three Fiber + drei
- **部署**：Vercel（連結 GitHub repo 自動部署）
- **第三方依賴**：Calendly（可選）或自架表單寄信
- **IWARE 內部資產**：本案完成後可作為 IWARE 官網的新案例（雙重價值）
- **未涉及**：CMS、多語系、會員系統、後台管理 — 純 static 內容
- **需確認的外部資源**：
  - 案例縮圖授權（Act 5 用 IWARE 自家案例，無爭議）
  - Ridge Studio 作品縮圖處理方式（Act 4 — 之前討論過版權禮節風險，傾向用「平台 logo + 案名 + 抽象縮圖」呈現，避免直接拿他們的高解析作品圖）
  - 字體授權（Bodoni、Playfair、思源宋體 / Noto Serif TC — 確認商用授權）
