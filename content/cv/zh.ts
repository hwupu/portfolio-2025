import type { Experience, Education } from "@/types/cv";

export const experiences: Experience[] = [
  {
    title: "資深前端工程師",
    company: "瑞芙國際設計",
    url: "http://www.lexionlu.com",
    location: "台北",
    startDate: "08/2021",
    endDate: "04/2025",
    description: [
      "為某大型航空公司開發符合 WCAG 標準的網頁應用程式，透過實作 ARIA 屬性、語意化 HTML、鍵盤導覽功能，以及執行自動與手動無障礙測試，成功服務超過 600 萬名用戶。",
      "為某大型銀行的 Web-view 行動應用程式打造現代化 UI 元件庫，採用 headless 函式庫與 Storybook，並與設計與原生團隊協作，有效提升開發效率與可維護性。",
      "建立高效的網站開發 DevOps 流程，透過 Docker 與 GitHub Actions 自動部署至 Ubuntu，並使用 Traefik 作為反向代理進行流量管理，將部署時間減少 90%。",
      "針對 Wagtail CMS 的安全性疑慮，導入基於 nonce 的內容安全政策（CSP）設定，並於各專案中推行安全程式撰寫準則。",
    ],
  },
  {
    title: "Deputy General Manager",
    company: "Siam P&W Technic",
    url: "https://siampw.com",
    location: "泰國",
    startDate: "03/2017",
    endDate: "05/2021",
    description: [
      "透過導入最佳雲端解決方案實務（如 AWS、Azure AD、Exchange Online、Cloudflare Proxy 等）以及將專案內部化，成功降低 60% IT 營運成本。",
      "組建數位 UV 印刷製程團隊，成功拓展市場並提升營收 30%。",
      "導入 ISO 9001 與 5S 品質管理系統，標準化定價模式並減少品質損失，提升利潤達 10%。",
    ],
  },
  {
    title: "實習",
    company: "Tagtoo 塔圖科技",
    url: "https://tagtoo.com",
    location: "台北",
    startDate: "06/2016",
    endDate: "01/2017",
    description: ["(內部系統)"],
    hide: true,
  },
  {
    title: "實習",
    company: "交通大學資訊技術服務中心",
    url: "https://it.nycu.edu.tw",
    location: "新竹",
    startDate: "02/2013",
    endDate: "12/2013",
    description: ["(內部系統)"],
    hide: true,
  },
];

export const education: Education[] = [
  {
    institution: "國立交通大學",
    degree: "應用藝術研究所 工業設計組",
    url: "https://www.nycu.edu.tw",
    startDate: "09/2016",
    endDate: "01/2017",
    status: "肄業",
    hide: true,
  },
  {
    institution: "國立交通大學",
    degree: "資訊工程學系 資訊工程組",
    url: "https://www.nycu.edu.tw",
    startDate: "09/2012",
    endDate: "06/2016",
    gpa: "3.51",
  },
  {
    institution: "泰國中華國際學校",
    description: "WASC 認證 (AP 課程)",
    url: "https://www.tcis.ac.th",
    startDate: "08/2008",
    endDate: "05/2012",
    gpa: "3.56",
  },
];
