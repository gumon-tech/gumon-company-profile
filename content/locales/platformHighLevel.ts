import type { Locale } from "@/lib/i18n";

export type PlatformHighLevelLayer = {
  zone: string;
  title: string;
  subtitle: string;
  purpose: string;
  items: string[];
  outcome: string;
};

export type PlatformHighLevelCopy = {
  kicker: string;
  heading: string;
  intro: string;
  contentsLabel: string;
  outcomeLabel: string;
  crossHeading: string;
  cross: { title: string; body: string }[];
  promiseLabel: string;
  promiseBody: string;
  footnote: string;
};

export type PlatformHighLevelContent = PlatformHighLevelCopy & {
  layers: PlatformHighLevelLayer[];
};

export const platformHighLevelContent: Partial<Record<Locale, PlatformHighLevelContent>> = {
  th: {
    kicker: "High-Level Architecture",
    heading: "แต่ละชั้นมีอะไรอยู่ข้างในบ้าง",
    intro:
      "ภาพสถาปัตยกรรมด้านบนบอกว่ามีกี่ชั้นและเชื่อมกันอย่างไร ส่วนหัวข้อนี้ลงรายละเอียดอีกขั้นว่าแต่ละชั้นประกอบด้วยอะไร ทำหน้าที่อะไร และทีมธุรกิจกับทีมพัฒนาได้อะไรกลับไป",
    contentsLabel: "องค์ประกอบในชั้นนี้",
    outcomeLabel: "ผลที่ได้",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "เป็นชั้นที่ทำให้ระบบต่าง ๆ เห็นข้อมูลตรงกันด้วยการส่งเหตุการณ์ (event) ต่อกัน แทนการให้แต่ละระบบไปอ่านและเขียนฐานข้อมูลของกันและกันโดยตรง",
        items: [
          "Event streaming — กระแสข้อมูลที่บันทึกและส่งต่อทุกเหตุการณ์ในระบบอย่างต่อเนื่อง",
          "Data pipelines — เส้นทางแปลงและส่งต่อข้อมูลระหว่างระบบ",
          "Message brokers — คิวกลางที่รับประกันว่าข้อมูลหรือชุดคำสั่งจะไม่สูญหายระหว่างทาง",
          "Data synchronization — ทำให้ข้อมูลชุดเดียวกันตรงกันข้ามระบบ",
        ],
        outcome:
          "เพิ่มระบบใหม่เข้ามาได้โดยไม่ต้องรื้อระบบที่รันอยู่แล้ว เพราะทุกอย่างคุยกันผ่านเหตุการณ์ ไม่ใช่การต่อตรงเข้าฐานข้อมูล",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "เป็นชั้นของบริการเชิงธุรกิจที่ทำไว้แล้วและเปิดใช้งานผ่าน API ทีมจึงหยิบมาประกอบเป็นระบบใหม่ ไม่ต้องเขียนงานพื้นฐานเดิมซ้ำทุกโครงการ",
        items: [
          "Point of Sale (POS) — งานขายหน้าร้านและการรับชำระ",
          "Customer Relationship Management (CRM) — ข้อมูลลูกค้าและการติดตามความสัมพันธ์",
          "Content Delivery System (CDS) — การกระจายเนื้อหาไปยังปลายทาง",
          "Content Management System (CMS) — การจัดการเนื้อหาและสิทธิ์การแก้ไข",
          "Inventory Management System (IMS) — สต็อกและการเคลื่อนไหวของสินค้า",
          "Production Order System (PO) — คำสั่งผลิตและการติดตามสถานะ",
          "Human Resource System (HRS) — ข้อมูลบุคลากรและกระบวนการที่เกี่ยวข้อง",
          "Case Management System (CM) — การจัดการเคส เรื่องร้องเรียน และงานที่ต้องติดตามจนจบ",
          "Booking Management System (BMS) — การจองและตารางทรัพยากร",
        ],
        outcome:
          "โครงการใหม่เริ่มจากบริการที่ทำงานได้จริงอยู่แล้ว ไม่ได้เริ่มจากศูนย์ เวลาส่วนใหญ่จึงไปอยู่ที่โจทย์เฉพาะของลูกค้าแทนงานโครงสร้างซ้ำ ๆ",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "แอปพลิเคชันปลายทาง",
        purpose:
          "เป็นชั้นของแอปพลิเคชันปลายทางที่ส่งมอบให้ผู้ใช้ แต่ละแอปเลือกเรียกเฉพาะบริการที่ตัวเองต้องใช้จากชั้น API เท่านั้น",
        items: [
          "E-Commerce Platform — เว็บและแอปสำหรับงานขายออนไลน์",
          "E-Learning Platform — ระบบเรียนรู้ออนไลน์",
          "Factory ERP — งานบริหารจัดการในโรงงาน",
          "Call Center App — งานรับเรื่องและติดตามเคส รวมช่องทาง LINE",
          "Hotel Management App — งานจองและบริหารห้องพัก",
          "Hospital App — งานบริการผู้ป่วยบนมือถือ",
        ],
        outcome:
          "แพลตฟอร์มข้างล่างเป็นชุดเดียวกัน แต่ผลิตภัณฑ์ข้างบนต่างกันได้ตามธุรกิจ และเปลี่ยนหน้าตาแอปได้โดยไม่กระทบบริการที่อยู่ข้างหลัง",
      },
    ],
    crossHeading: "องค์ประกอบที่ใช้ร่วมกันทุกชั้น",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — การยืนยันตัวตนและสิทธิ์การใช้งานชุดเดียวกันทั้งแพลตฟอร์ม ไม่ต้องทำระบบล็อกอินใหม่ต่อโครงการ",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — บริการพื้นฐานที่ทุกชั้นเรียกใช้ได้ ทั้งการแจ้งเตือน งานตามเวลา และที่เก็บไฟล์",
      },
      {
        title: "Operations",
        body: "CLI commands สำหรับการตั้งค่าเริ่มต้น (bootstrap) ปรับแต่ง (configuration) ดูแลระบบ (operations) และส่วนต่อขยาย (extension) — ทำให้การตั้งค่าและดูแลระบบเป็นมาตรฐานเดียวกันทุกทีม",
      },
    ],
    promiseLabel: "สิ่งที่การแบ่งชั้นแบบนี้รับประกัน",
    promiseBody:
      "ความสามารถเสริมที่ไม่พร้อม ต้องทำให้ระบบบอกว่าใช้ไม่ได้ ไม่ใช่ทำให้ระบบล่ม — การแยกชั้นจึงไม่ใช่แค่กล่องซ้อนกันในแผนภาพ แต่คือเงื่อนไขที่ทำให้ส่วนที่หยุดทำงานอยู่ในขอบเขตของมันเอง และงานประจำวันเดินต่อได้",
    footnote:
      "รายการในแต่ละชั้นคือชุดอ้างอิงตามภาพสถาปัตยกรรมด้านบน การใช้งานจริงเลือกเฉพาะส่วนที่โจทย์ต้องการ ไม่จำเป็นต้องใช้ครบทุกตัว",
  },
  en: {
    kicker: "High-Level Architecture",
    heading: "What sits inside each layer",
    intro:
      "The diagram above shows how many layers there are and how they connect. This section goes one level deeper: what each layer is made of, what it is responsible for, and what business and engineering teams get out of it.",
    contentsLabel: "In this layer",
    outcomeLabel: "What you get",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Keeps systems consistent by passing events between them, instead of letting each system read and write another system's database directly.",
        items: [
          "Event streaming — a continuous flow of what happened across the platform",
          "Data pipelines — the routes that transform and forward data between systems",
          "Message brokers — the queue that guarantees messages are not lost in transit",
          "Data synchronization — keeping the same records aligned across systems",
        ],
        outcome:
          "New systems can be added without reworking the ones already running, because integration happens through events rather than direct database coupling.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Pre-built business services exposed through APIs, so teams compose a new system instead of rewriting the same foundations on every project.",
        items: [
          "Point of Sale (POS) — storefront sales and payment capture",
          "Customer Relationship Management (CRM) — customer records and relationship tracking",
          "Content Delivery System (CDS) — distributing content to its destinations",
          "Content Management System (CMS) — authoring, editing rights, and publishing",
          "Inventory Management System (IMS) — stock levels and goods movement",
          "Production Order System (PO) — production orders and their status",
          "Human Resource System (HRS) — people records and related processes",
          "Case Management System (CM) — cases and issues tracked to closure",
          "Booking Management System (BMS) — reservations and resource scheduling",
        ],
        outcome:
          "A new engagement starts from services that already work rather than an empty repository, so most of the effort goes into the client's actual problem instead of repeated groundwork.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "What users actually touch",
        purpose:
          "The delivered applications. Each one calls only the services it needs from the API layer, nothing more.",
        items: [
          "E-Commerce Platform — web and mobile for online sales",
          "E-Learning Platform — online learning and course delivery",
          "Factory ERP — plant and production administration",
          "Call Center App — case intake and follow-up, including the LINE channel",
          "Hotel Management App — booking and room operations",
          "Hospital App — patient-facing services on mobile",
        ],
        outcome:
          "The same platform underneath supports different products on top, and the application can change without disturbing the services behind it.",
      },
    ],
    crossHeading: "Shared across every layer",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — one identity and authorization model for the whole platform, so no project has to build sign-in again.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — foundational services every layer can call for notifications, scheduled tasks, and file storage.",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — the same setup and maintenance steps across every team.",
      },
    ],
    promiseLabel: "What this separation guarantees",
    promiseBody:
      "An optional capability that is not ready must report itself as unavailable rather than bring the system down — which is what makes the layering more than stacked boxes on a diagram. Failure stays inside the layer it belongs to, and day-to-day work continues.",
    footnote:
      "The items listed per layer are the reference set shown in the architecture diagram above. A given engagement adopts only the parts its scope requires.",
  },
  "zh-CN": {
    kicker: "High-Level Architecture",
    heading: "各层包含的内容",
    intro:
      "上图展示了架构中的具体层级以及层间连接方式。本节将更深入探讨：各层的组成部分、承担的职责，以及业务和工程团队从中获得的收益。",
    contentsLabel: "本层内容",
    outcomeLabel: "预期收益",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "通过在系统之间传递事件来保持系统一致性，而不是让各个系统直接读写其他系统的数据库。",
        items: [
          "Event streaming — 平台各类事件的连续数据流",
          "Data pipelines — 在系统间转换和转发数据的路径",
          "Message brokers — 确保消息在传输过程中不丢失的队列",
          "Data synchronization — 跨系统保持相同记录的一致性",
        ],
        outcome:
          "无需重构已在运行的系统即可添加新系统，因为集成是通过事件而非直接的数据库耦合来实现的。",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "通过 API 暴露预置的业务服务，让团队可以组合构建新系统，而无需在每个项目中重写相同的基础模块。",
        items: [
          "Point of Sale (POS) — 门店销售与支付采集",
          "Customer Relationship Management (CRM) — 客户档案与关系跟踪",
          "Content Delivery System (CDS) — 将内容分发到目标位置",
          "Content Management System (CMS) — 创作、编辑权限与发布",
          "Inventory Management System (IMS) — 库存水平与货物调拨",
          "Production Order System (PO) — 生产订单及其状态",
          "Human Resource System (HRS) — 人员档案及相关流程",
          "Case Management System (CM) — 案例与问题的跟踪及闭环",
          "Booking Management System (BMS) — 预订与资源调度",
        ],
        outcome:
          "新项目从已能正常运行的服务开始，而非空代码库，因此大部分精力可投入到客户的实际问题上，避免重复的基础工作。",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "用户实际接触的内容",
        purpose:
          "最终交付的应用程序。每个应用仅调用其在 API 层所需的服务，不会产生多余调用。",
        items: [
          "E-Commerce Platform — 用于在线销售的 Web 和移动端",
          "E-Learning Platform — 在线学习与课程交付",
          "Factory ERP — 工厂与生产管理",
          "Call Center App — 案例受理与跟进，包含 LINE 渠道",
          "Hotel Management App — 预订与客房运营",
          "Hospital App — 面向患者的移动端服务",
        ],
        outcome:
          "底层的同一平台能够支持顶层的多种不同产品，应用程序可以自由变更而不影响后端的服务。",
      },
    ],
    crossHeading: "跨层共享",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — 整个平台统一的身份与授权模型，使任何项目都不必重新构建登录模块。",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — 每一层均可调用的基础服务，用于通知、定时任务和文件存储。",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — 所有团队统一的设置与维护步骤。",
      },
    ],
    promiseLabel: "此项分离所保证的",
    promiseBody:
      "未就绪的可选功能必须将自身报告为不可用，而不是导致整个系统宕机 — 这正是使分层不仅仅是架构图上堆叠方框的关键。故障将被限制在其所属的层内，而日常业务照常运转。",
    footnote:
      "每层列出的项目即为上方架构图所示的参考集合。特定项目仅采用其范围所需的部分。",
  },
  "zh-TW": {
    kicker: "High-Level Architecture",
    heading: "每一層的內容",
    intro:
      "上圖展示了系統的層級數量以及它們如何連接。本節將深入探討：每一層的構成、其負責的職能，以及業務和工程團隊能從中獲得什麼。",
    contentsLabel: "本層內容",
    outcomeLabel: "您將獲得",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "透過在系統之間傳遞事件來保持系統一致性，而不是讓各系統直接讀寫其他系統的資料庫。",
        items: [
          "Event streaming — 記錄整個平台所發生事件的連續資料流",
          "Data pipelines — 在系統之間轉換和轉發資料的路徑",
          "Message brokers — 確保訊息在傳輸過程中不會遺失的佇列",
          "Data synchronization — 保持各系統間的相同紀錄一致",
        ],
        outcome:
          "可以新增新系統而無須重寫已在運行的系統，因為整合是透過事件而非直接的資料庫耦合來進行。",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "透過 API 提供的預建業務服務，讓團隊能夠組合出新系統，而不必在每個專案中重寫相同的基礎架構。",
        items: [
          "Point of Sale (POS) — 門市銷售與付款擷取",
          "Customer Relationship Management (CRM) — 客戶紀錄與關係追蹤",
          "Content Delivery System (CDS) — 將內容發佈至目標端點",
          "Content Management System (CMS) — 創作、編輯權限與發佈",
          "Inventory Management System (IMS) — 庫存水位與貨物移動",
          "Production Order System (PO) — 生產訂單及其狀態",
          "Human Resource System (HRS) — 人員紀錄與相關流程",
          "Case Management System (CM) — 案件與問題追蹤直到結案",
          "Booking Management System (BMS) — 預訂與資源排程",
        ],
        outcome:
          "新的專案將從已經可運作的服務開始，而不是一個空白的儲存庫，因此大部分的心力可以投入在客戶實際的問題上，而非重複的基礎工作。",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "使用者實際接觸的部分",
        purpose:
          "交付的應用程式。每個應用程式只會呼叫其在 API 層所需要的服務，僅此而已。",
        items: [
          "E-Commerce Platform — 用於線上銷售的網頁與行動裝置介面",
          "E-Learning Platform — 線上學習與課程交付",
          "Factory ERP — 工廠與生產管理",
          "Call Center App — 案件受理與後續追蹤，包含 LINE 管道",
          "Hotel Management App — 訂房與客房營運",
          "Hospital App — 面向病患的行動裝置服務",
        ],
        outcome:
          "底層的同一平台可支援上層的不同產品，且應用程式的變更不會干擾其後端的服務。",
      },
    ],
    crossHeading: "跨層級共享",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — 整個平台使用單一身份與授權模型，因此任何專案都無須重新建置登入功能。",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — 每一層都能呼叫的基礎服務，用於通知、排程任務與檔案儲存。",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — 跨團隊一致的設置與維護步驟。",
      },
    ],
    promiseLabel: "此分離機制帶來的保證",
    promiseBody:
      "未就緒的可選功能必須自行回報為不可用，而非導致整個系統崩潰 — 這正是使分層架構不只是圖表上堆疊方塊的關鍵。故障會被侷限在所屬的層級之內，而日常運作得以繼續進行。",
    footnote:
      "每層列出的項目為上圖架構所示的參考集合。特定專案僅採用其範圍所需的部分。",
  },
  ja: {
    kicker: "High-Level Architecture",
    heading: "各レイヤーの内部構成",
    intro:
      "上記の図は、レイヤーの数とそれらの接続方法を示しています。このセクションではさらに一歩踏み込み、各レイヤーの構成要素、その役割、そしてビジネスチームやエンジニアリングチームが得られるメリットについて説明します。",
    contentsLabel: "このレイヤーの構成要素",
    outcomeLabel: "得られる結果",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "各システムが他のシステムのデータベースを直接読み書きするのではなく、システム間でイベントを受け渡すことで、システムの一貫性を保ちます。",
        items: [
          "Event streaming — プラットフォーム全体で発生した事象の連続的な流れ",
          "Data pipelines — システム間でデータを変換および転送する経路",
          "Message brokers — 転送中にメッセージが失われないことを保証するキュー",
          "Data synchronization — 複数システム間で同一レコードの整合性を維持すること",
        ],
        outcome:
          "直接的なデータベースの結合ではなくイベントを通じて統合が行われるため、稼働中のシステムを改修することなく新しいシステムを追加できます。",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "構築済みのビジネスサービスがAPIを通じて公開されるため、各プロジェクトで同じ基盤を書き直すことなく、新しいシステムを構築できます。",
        items: [
          "Point of Sale (POS) — 店頭での販売と決済処理",
          "Customer Relationship Management (CRM) — 顧客情報と関係性の追跡",
          "Content Delivery System (CDS) — 配信先へのコンテンツの配布",
          "Content Management System (CMS) — コンテンツ作成、編集権限、および公開",
          "Inventory Management System (IMS) — 在庫レベルと商品の移動",
          "Production Order System (PO) — 製造オーダーとそのステータス",
          "Human Resource System (HRS) — 人事記録および関連プロセス",
          "Case Management System (CM) — クローズまで追跡されるケースと課題",
          "Booking Management System (BMS) — 予約とリソースのスケジュール管理",
        ],
        outcome:
          "空のリポジトリからではなく、すでに機能するサービスから新しいプロジェクトが開始されるため、繰り返しの基礎作業ではなく、クライアントの実際の課題解決に大半の労力を注ぐことができます。",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "ユーザーが実際に操作する部分",
        purpose:
          "提供されるアプリケーションです。各アプリケーションは、APIレイヤーから必要なサービスのみを呼び出し、それ以上のことは行いません。",
        items: [
          "E-Commerce Platform — オンライン販売向けのウェブおよびモバイル",
          "E-Learning Platform — オンライン学習とコース配信",
          "Factory ERP — 工場および生産の管理",
          "Call Center App — LINEチャネルを含む、ケースの受付とフォローアップ",
          "Hotel Management App — 予約と客室の運用",
          "Hospital App — モバイルでの患者向けサービス",
        ],
        outcome:
          "基盤となる同じプラットフォームが上位のさまざまな製品をサポートし、背後にあるサービスに影響を与えることなくアプリケーションを変更できます。",
      },
    ],
    crossHeading: "全レイヤーで共有される機能",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — プラットフォーム全体で単一のIDおよび認証モデルを提供し、プロジェクトごとにサインイン機能を構築し直す必要がありません。",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — 通知、スケジュールされたタスク、およびファイルストレージのために、すべてのレイヤーが呼び出すことができる基盤サービスです。",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — すべてのチームにおいて同一のセットアップおよび保守手順。",
      },
    ],
    promiseLabel: "この分離が保証するもの",
    promiseBody:
      "準備が整っていないオプション機能は、システムをダウンさせるのではなく、自身を利用不可として報告しなければなりません — これこそが、レイヤリングを単なる図の上の箱の積み重ね以上のものにしている理由です。障害はそれが属するレイヤー内にとどまり、日常の業務は継続されます。",
    footnote:
      "各レイヤーに記載されている項目は、上記のアーキテクチャ図に示されているリファレンスセットです。実際のプロジェクトでは、そのスコープで必要とされる部分のみを採用します。",
  },
  ko: {
    kicker: "High-Level Architecture",
    heading: "각 계층의 구성 요소",
    intro:
      "위 다이어그램은 계층의 수와 연결 방식을 보여줍니다. 이 섹션에서는 각 계층의 구성 요소, 담당 역할, 그리고 비즈니스 및 엔지니어링 팀이 얻을 수 있는 이점에 대해 한 단계 더 깊이 살펴봅니다.",
    contentsLabel: "본 계층 구성 요소",
    outcomeLabel: "기대 효과",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "각 시스템이 다른 시스템의 데이터베이스를 직접 읽고 쓰는 대신, 시스템 간에 이벤트를 전달하여 시스템의 일관성을 유지합니다.",
        items: [
          "Event streaming — 플랫폼 전체에서 발생한 내역의 연속적인 흐름",
          "Data pipelines — 시스템 간 데이터를 변환하고 전달하는 경로",
          "Message brokers — 전송 중 메시지 유실이 없도록 보장하는 대기열",
          "Data synchronization — 시스템 간 동일한 레코드를 일치하도록 유지",
        ],
        outcome:
          "직접적인 데이터베이스 결합이 아닌 이벤트를 통해 통합이 이루어지므로, 이미 실행 중인 시스템을 재작업하지 않고도 새로운 시스템을 추가할 수 있습니다.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "API를 통해 노출되는 사전 구축된 비즈니스 서비스로, 팀이 모든 프로젝트에서 동일한 기반을 다시 작성하는 대신 새로운 시스템을 구성할 수 있도록 합니다.",
        items: [
          "Point of Sale (POS) — 매장 판매 및 결제 캡처",
          "Customer Relationship Management (CRM) — 고객 레코드 및 관계 추적",
          "Content Delivery System (CDS) — 콘텐츠를 목적지로 배포",
          "Content Management System (CMS) — 작성, 편집 권한 및 게시",
          "Inventory Management System (IMS) — 재고 수준 및 상품 이동",
          "Production Order System (PO) — 생산 주문 및 상태",
          "Human Resource System (HRS) — 인적 레코드 및 관련 프로세스",
          "Case Management System (CM) — 해결될 때까지 추적되는 케이스 및 이슈",
          "Booking Management System (BMS) — 예약 및 리소스 일정 관리",
        ],
        outcome:
          "빈 저장소가 아닌 이미 작동하는 서비스에서 새로운 프로젝트를 시작하므로, 반복적인 기초 작업 대신 고객의 실제 문제를 해결하는 데 대부분의 노력을 집중할 수 있습니다.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "사용자가 실제로 접하는 요소",
        purpose:
          "제공되는 애플리케이션입니다. 각각은 API 계층에서 필요한 서비스만 호출하며, 그 이상은 호출하지 않습니다.",
        items: [
          "E-Commerce Platform — 온라인 판매를 위한 웹 및 모바일",
          "E-Learning Platform — 온라인 학습 및 강의 제공",
          "Factory ERP — 공장 및 생산 관리",
          "Call Center App — LINE 채널을 포함한 케이스 접수 및 후속 조치",
          "Hotel Management App — 예약 및 객실 운영",
          "Hospital App — 모바일을 통한 환자 대상 서비스",
        ],
        outcome:
          "동일한 기본 플랫폼이 그 위의 다양한 제품을 지원하며, 배후의 서비스를 방해하지 않고 애플리케이션을 변경할 수 있습니다.",
      },
    ],
    crossHeading: "전체 계층 공유 요소",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — 플랫폼 전체에 대한 단일 ID 및 권한 부여 모델로, 어떤 프로젝트도 로그인 기능을 다시 구축할 필요가 없습니다.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — 모든 계층에서 알림, 예약된 작업 및 파일 스토리지를 위해 호출할 수 있는 기본 서비스입니다.",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — 모든 팀에서 동일하게 적용되는 설정 및 유지보수 단계입니다.",
      },
    ],
    promiseLabel: "이 분리가 보장하는 것",
    promiseBody:
      "준비되지 않은 옵션 기능은 시스템을 중단시키는 대신 스스로 사용 불가능 상태임을 보고해야 합니다 — 바로 이 점이 레이어 구성을 단순히 다이어그램에 쌓아 놓은 상자 그 이상으로 만듭니다. 장애는 그것이 속한 레이어 내에 머물며, 일상적인 업무는 계속됩니다.",
    footnote:
      "각 계층별로 나열된 항목은 위의 아키텍처 다이어그램에 표시된 참조 세트입니다. 특정 프로젝트는 해당 범위에서 요구하는 부분만 채택합니다.",
  },
  vi: {
    kicker: "High-Level Architecture",
    heading: "Thành phần bên trong mỗi lớp",
    intro:
      "Sơ đồ trên hiển thị số lượng các lớp và cách chúng kết nối với nhau. Phần này sẽ đi sâu hơn một mức: cấu trúc của từng lớp, vai trò nhiệm vụ của chúng, và những lợi ích thiết thực mà các đội ngũ kinh doanh cũng như kỹ thuật sẽ nhận được.",
    contentsLabel: "Trong lớp này",
    outcomeLabel: "Kết quả nhận được",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Duy trì tính nhất quán của hệ thống bằng cách truyền tải các sự kiện giữa các hệ thống với nhau, thay vì cho phép mỗi hệ thống trực tiếp đọc và ghi vào cơ sở dữ liệu của hệ thống khác.",
        items: [
          "Event streaming — luồng liên tục ghi nhận các sự kiện xảy ra trên toàn bộ nền tảng",
          "Data pipelines — các tuyến đường chuyển đổi và chuyển tiếp dữ liệu giữa các hệ thống",
          "Message brokers — hàng đợi đảm bảo thông điệp không bị thất lạc trong quá trình truyền tải",
          "Data synchronization — đồng bộ hóa dữ liệu để duy trì tính nhất quán của các bản ghi giữa các hệ thống",
        ],
        outcome:
          "Có thể thêm các hệ thống mới mà không cần chỉnh sửa các hệ thống đang vận hành, vì việc tích hợp được thực hiện thông qua các sự kiện thay vì liên kết trực tiếp vào cơ sở dữ liệu.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Các dịch vụ nghiệp vụ được xây dựng sẵn và cung cấp qua API, giúp các đội ngũ dễ dàng cấu thành một hệ thống mới thay vì phải viết lại các nền tảng giống nhau cho mỗi dự án.",
        items: [
          "Point of Sale (POS) — bán hàng tại cửa hàng và xử lý thanh toán",
          "Customer Relationship Management (CRM) — lưu trữ hồ sơ khách hàng và theo dõi mối quan hệ",
          "Content Delivery System (CDS) — phân phối nội dung đến các điểm đích",
          "Content Management System (CMS) — soạn thảo, phân quyền chỉnh sửa và xuất bản",
          "Inventory Management System (IMS) — quản lý mức tồn kho và luân chuyển hàng hóa",
          "Production Order System (PO) — quản lý lệnh sản xuất và trạng thái của chúng",
          "Human Resource System (HRS) — lưu trữ hồ sơ nhân sự và các quy trình liên quan",
          "Case Management System (CM) — theo dõi các vụ việc và sự cố cho đến khi được giải quyết xong",
          "Booking Management System (BMS) — đặt chỗ và sắp xếp lịch trình sử dụng tài nguyên",
        ],
        outcome:
          "Một dự án hợp tác mới sẽ bắt đầu từ các dịch vụ đã hoạt động sẵn thay vì một kho lưu trữ trống rỗng, nhờ đó phần lớn nỗ lực sẽ được tập trung vào việc giải quyết bài toán thực tế của khách hàng thay vì lặp lại các công việc nền tảng.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Những gì người dùng trực tiếp tương tác",
        purpose:
          "Các ứng dụng được bàn giao. Mỗi ứng dụng chỉ gọi đúng các dịch vụ mà nó cần từ API layer, không hơn không kém.",
        items: [
          "E-Commerce Platform — nền tảng web và di động phục vụ bán hàng trực tuyến",
          "E-Learning Platform — học trực tuyến và phân phối khóa học",
          "Factory ERP — quản trị nhà máy và sản xuất",
          "Call Center App — tiếp nhận và theo dõi vụ việc, bao gồm cả kênh LINE",
          "Hotel Management App — quản lý đặt phòng và vận hành phòng khách sạn",
          "Hospital App — các dịch vụ dành cho bệnh nhân trên thiết bị di động",
        ],
        outcome:
          "Cùng một nền tảng bên dưới có thể hỗ trợ nhiều sản phẩm khác nhau ở bên trên, và ứng dụng có thể thay đổi mà không gây ảnh hưởng đến các dịch vụ phía sau.",
      },
    ],
    crossHeading: "Dùng chung cho mọi lớp",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — một mô hình định danh và phân quyền duy nhất cho toàn bộ nền tảng, giúp không một dự án nào phải xây dựng lại tính năng đăng nhập.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — các dịch vụ nền tảng mà mọi lớp đều có thể gọi để gửi thông báo, thực hiện tác vụ theo lịch trình và lưu trữ tệp tin.",
      },
      {
        title: "Operations",
        body: "CLI commands cho bootstrap, configuration, operations, và extension — các bước thiết lập và bảo trì đồng nhất giữa mọi đội ngũ.",
      },
    ],
    promiseLabel: "Điều sự phân tách này đảm bảo",
    promiseBody:
      "Một tính năng tùy chọn chưa sẵn sàng hoạt động phải tự báo cáo là không khả dụng thay vì làm sập toàn bộ hệ thống — đây chính là điểm khiến việc phân lớp có ý nghĩa thực tế hơn là những chiếc hộp xếp chồng lên nhau trên sơ đồ. Sự cố sẽ được cô lập trong lớp chứa nó, và các hoạt động vận hành hàng ngày vẫn tiếp tục diễn ra.",
    footnote:
      "Các danh mục được liệt kê trong mỗi lớp là bộ tham chiếu được hiển thị trong sơ đồ kiến trúc ở trên. Mỗi dự án thực tế sẽ chỉ áp dụng những phần mà phạm vi yêu cầu.",
  },
  id: {
    kicker: "High-Level Architecture",
    heading: "Apa yang ada di dalam setiap lapisan",
    intro:
      "Diagram di atas menunjukkan berapa banyak lapisan yang ada dan bagaimana mereka terhubung. Bagian ini membahas satu tingkat lebih dalam: dari apa setiap lapisan terdiri, apa tanggung jawabnya, dan apa yang didapatkan oleh tim bisnis dan teknis.",
    contentsLabel: "Di lapisan ini",
    outcomeLabel: "Apa yang Anda dapatkan",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Menjaga konsistensi sistem dengan meneruskan peristiwa di antara sistem, alih-alih membiarkan setiap sistem membaca dan menulis basis data sistem lain secara langsung.",
        items: [
          "Event streaming — aliran terus-menerus dari apa yang terjadi di seluruh platform",
          "Data pipelines — rute yang mengubah dan meneruskan data antar sistem",
          "Message brokers — antrean yang menjamin pesan tidak hilang dalam perjalanan",
          "Data synchronization — menjaga catatan yang sama tetap selaras di seluruh sistem",
        ],
        outcome:
          "Sistem baru dapat ditambahkan tanpa mengerjakan ulang sistem yang sudah berjalan, karena integrasi terjadi melalui peristiwa alih-alih keterikatan basis data secara langsung.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Layanan bisnis pra-bangun yang diekspos melalui API, sehingga tim dapat menyusun sistem baru daripada menulis ulang fondasi yang sama di setiap proyek.",
        items: [
          "Point of Sale (POS) — penjualan di gerai dan pencatatan pembayaran",
          "Customer Relationship Management (CRM) — catatan pelanggan dan pelacakan hubungan",
          "Content Delivery System (CDS) — mendistribusikan konten ke tempat tujuannya",
          "Content Management System (CMS) — penulisan, hak penyuntingan, dan penerbitan",
          "Inventory Management System (IMS) — tingkat stok dan pergerakan barang",
          "Production Order System (PO) — pesanan produksi beserta statusnya",
          "Human Resource System (HRS) — catatan kepegawaian dan proses terkait",
          "Case Management System (CM) — kasus dan masalah yang dilacak hingga selesai",
          "Booking Management System (BMS) — reservasi dan penjadwalan sumber daya",
        ],
        outcome:
          "Pekerjaan baru dimulai dari layanan yang sudah berfungsi alih-alih dari repositori kosong, sehingga sebagian besar upaya digunakan untuk masalah aktual klien daripada pengulangan pekerjaan dasar.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Apa yang sebenarnya disentuh pengguna",
        purpose:
          "Aplikasi yang dikirimkan. Masing-masing hanya memanggil layanan yang diperlukannya dari lapisan API, tidak lebih.",
        items: [
          "E-Commerce Platform — web dan seluler untuk penjualan online",
          "E-Learning Platform — pembelajaran online dan penyampaian kursus",
          "Factory ERP — administrasi pabrik dan produksi",
          "Call Center App — penerimaan kasus dan tindak lanjut, termasuk saluran LINE",
          "Hotel Management App — pemesanan dan operasional kamar",
          "Hospital App — layanan untuk pasien di perangkat seluler",
        ],
        outcome:
          "Platform dasar yang sama mendukung berbagai produk di atasnya, dan aplikasi dapat berubah tanpa mengganggu layanan di belakangnya.",
      },
    ],
    crossHeading: "Digunakan bersama di setiap lapisan",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — satu model identitas dan otorisasi untuk seluruh platform, sehingga tidak ada proyek yang perlu membangun fitur masuk (sign-in) lagi.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — layanan dasar yang dapat dipanggil setiap lapisan untuk notifikasi, tugas terjadwal, dan penyimpanan file.",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — langkah-langkah pengaturan dan pemeliharaan yang sama di seluruh tim.",
      },
    ],
    promiseLabel: "Apa yang dijamin oleh pemisahan ini",
    promiseBody:
      "Kapabilitas opsional yang belum siap harus melaporkan dirinya sebagai tidak tersedia, alih-alih melumpuhkan sistem — hal inilah yang membuat pelapisan ini lebih dari sekadar tumpukan kotak pada diagram. Kegagalan tetap berada di dalam lapisan tempatnya berada, dan operasional sehari-hari tetap berjalan.",
    footnote:
      "Item yang tercantum per lapisan adalah set referensi yang ditunjukkan pada diagram arsitektur di atas. Suatu pekerjaan hanya mengadopsi bagian-bagian yang diperlukan oleh ruang lingkupnya.",
  },
  ms: {
    kicker: "High-Level Architecture",
    heading: "Apa yang terdapat di dalam setiap lapisan",
    intro:
      "Rajah di atas menunjukkan jumlah lapisan yang ada dan cara ia berhubung. Bahagian ini pergi satu tahap lebih mendalam: daripada apa setiap lapisan terdiri, apakah tanggungjawabnya, dan apa yang pasukan perniagaan dan kejuruteraan perolehi daripadanya.",
    contentsLabel: "Dalam lapisan ini",
    outcomeLabel: "Apa yang anda dapat",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Mengekalkan konsistensi sistem dengan menghantar peristiwa di antaranya, dan bukannya membiarkan setiap sistem membaca dan menulis pangkalan data sistem lain secara langsung.",
        items: [
          "Penstriman peristiwa — aliran berterusan mengenai apa yang berlaku merentas platform",
          "Talian paip data — laluan yang mengubah dan memajukan data antara sistem",
          "Broker mesej — barisan gilir yang menjamin mesej tidak hilang semasa transit",
          "Penyegerakan data — memastikan rekod yang sama diselaraskan merentas sistem",
        ],
        outcome:
          "Sistem baharu boleh ditambah tanpa perlu mengubah suai sistem yang sedang berjalan, kerana integrasi berlaku melalui peristiwa berbanding gandingan pangkalan data secara langsung.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Perkhidmatan perniagaan prabina yang didedahkan melalui API, supaya pasukan boleh membina sistem baharu dan bukannya menulis semula asas yang sama pada setiap projek.",
        items: [
          "Point of Sale (POS) — jualan di kedai dan tangkapan bayaran",
          "Customer Relationship Management (CRM) — rekod pelanggan dan penjejakan hubungan",
          "Content Delivery System (CDS) — mengedarkan kandungan ke destinasinya",
          "Content Management System (CMS) — pengarangan, hak penyuntingan, dan penerbitan",
          "Inventory Management System (IMS) — tahap stok dan pergerakan barangan",
          "Production Order System (PO) — pesanan pengeluaran dan statusnya",
          "Human Resource System (HRS) — rekod kakitangan dan proses berkaitan",
          "Case Management System (CM) — kes dan isu yang dijejaki sehingga selesai",
          "Booking Management System (BMS) — tempahan dan penjadualan sumber",
        ],
        outcome:
          "Penglibatan baharu bermula dengan perkhidmatan yang sedia berfungsi dan bukannya repositori kosong, oleh itu sebahagian besar usaha tertumpu pada masalah sebenar pelanggan dan bukannya kerja asas yang berulang.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Apa yang sebenarnya disentuh pengguna",
        purpose:
          "Aplikasi yang disampaikan. Setiap satunya hanya memanggil perkhidmatan yang diperlukan daripada lapisan API, tidak lebih daripada itu.",
        items: [
          "E-Commerce Platform — web dan mudah alih untuk jualan dalam talian",
          "E-Learning Platform — pembelajaran dalam talian dan penyampaian kursus",
          "Factory ERP — pentadbiran kilang dan pengeluaran",
          "Call Center App — penerimaan kes dan tindakan susulan, termasuk saluran LINE",
          "Hotel Management App — operasi tempahan dan bilik",
          "Hospital App — perkhidmatan berhadapan pesakit di mudah alih",
        ],
        outcome:
          "Platform yang sama di bawah menyokong produk berbeza di atasnya, dan aplikasi tersebut boleh berubah tanpa mengganggu perkhidmatan di belakangnya.",
      },
    ],
    crossHeading: "Dikongsi merentas setiap lapisan",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — satu model identiti dan kebenaran untuk seluruh platform, jadi tiada projek perlu membina ciri daftar masuk lagi.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — perkhidmatan asas yang boleh dipanggil oleh setiap lapisan untuk pemberitahuan, tugas berjadual, dan storan fail.",
      },
      {
        title: "Operations",
        body: "CLI commands untuk bootstrap, configuration, operations, dan extension — langkah persediaan dan penyelenggaraan yang sama merentas setiap pasukan.",
      },
    ],
    promiseLabel: "Apa yang dijamin oleh pengasingan ini",
    promiseBody:
      "Keupayaan pilihan yang belum sedia mesti melaporkan dirinya sebagai tidak tersedia dan bukannya merosakkan sistem — inilah yang menjadikan pelapisan ini lebih daripada sekadar kotak tersusun pada rajah. Kegagalan kekal di dalam lapisan asalnya, dan kerja harian dapat diteruskan.",
    footnote:
      "Item yang disenaraikan untuk setiap lapisan ialah set rujukan yang ditunjukkan dalam rajah seni bina di atas. Sesuatu penglibatan hanya menggunakan bahagian yang diperlukan oleh skop kerjanya.",
  },
  hi: {
    kicker: "High-Level Architecture",
    heading: "प्रत्येक परत के अंदर क्या है",
    intro:
      "ऊपर दिया गया आरेख दिखाता है कि इसमें कितनी परतें हैं और वे कैसे जुड़ती हैं। यह खंड एक स्तर और गहराई में जाता है: प्रत्येक परत किस चीज़ से बनी है, यह किसके लिए ज़िम्मेदार है, और व्यावसायिक एवं इंजीनियरिंग टीमों को इससे क्या लाभ मिलता है।",
    contentsLabel: "इस परत में",
    outcomeLabel: "आपको क्या मिलता है",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "प्रत्येक सिस्टम को सीधे दूसरे सिस्टम के डेटाबेस में पढ़ने और लिखने की अनुमति देने के बजाय, उनके बीच इवेंट्स पास करके सिस्टम्स को सुसंगत बनाए रखता है।",
        items: [
          "Event streaming — पूरे प्लेटफ़ॉर्म पर जो कुछ भी घटित हुआ उसका एक निरंतर प्रवाह",
          "Data pipelines — वे मार्ग जो सिस्टम्स के बीच डेटा को रूपांतरित और अग्रेषित करते हैं",
          "Message brokers — वह कतार जो यह गारंटी देती है कि संदेश पारगमन के दौरान खो न जाएं",
          "Data synchronization — विभिन्न सिस्टम्स में समान रिकॉर्ड को संरेखित रखना",
        ],
        outcome:
          "पहले से चल रहे सिस्टम को फिर से काम किए बिना नए सिस्टम जोड़े जा सकते हैं, क्योंकि एकीकरण सीधे डेटाबेस कपलिंग के बजाय इवेंट्स के माध्यम से होता है।",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "APIs के माध्यम से उपलब्ध कराई गई पूर्व-निर्मित व्यावसायिक सेवाएं, ताकि टीमें हर प्रोजेक्ट पर समान आधारों को दोबारा लिखने के बजाय एक नया सिस्टम तैयार कर सकें।",
        items: [
          "Point of Sale (POS) — स्टोरफ्रंट बिक्री और भुगतान कैप्चर करना",
          "Customer Relationship Management (CRM) — ग्राहक रिकॉर्ड और संबंधों की ट्रैकिंग",
          "Content Delivery System (CDS) — सामग्री को उसके गंतव्यों तक वितरित करना",
          "Content Management System (CMS) — लेखन, संपादन अधिकार और प्रकाशन",
          "Inventory Management System (IMS) — स्टॉक स्तर और माल की आवाजाही",
          "Production Order System (PO) — उत्पादन आदेश और उनकी स्थिति",
          "Human Resource System (HRS) — लोगों के रिकॉर्ड और संबंधित प्रक्रियाएं",
          "Case Management System (CM) — बंद होने तक ट्रैक किए गए मामले और समस्याएं",
          "Booking Management System (BMS) — आरक्षण और संसाधन शेड्यूलिंग",
        ],
        outcome:
          "एक नया प्रोजेक्ट खाली रिपोजिटरी के बजाय पहले से काम कर रही सेवाओं से शुरू होता है, इसलिए अधिकांश प्रयास बार-बार बुनियादी काम करने के बजाय क्लाइंट की वास्तविक समस्या को हल करने में लगता है।",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "उपयोगकर्ता वास्तव में जिसका उपयोग करते हैं",
        purpose:
          "वितरित किए गए एप्लिकेशन। प्रत्येक केवल उन्हीं सेवाओं को कॉल करता है जिनकी उसे API परत से आवश्यकता होती है, उससे अधिक कुछ नहीं।",
        items: [
          "E-Commerce Platform — ऑनलाइन बिक्री के लिए वेब और मोबाइल",
          "E-Learning Platform — ऑनलाइन शिक्षण और पाठ्यक्रम वितरण",
          "Factory ERP — संयंत्र और उत्पादन प्रशासन",
          "Call Center App — मामला दर्ज करना और अनुवर्ती कार्रवाई, जिसमें LINE चैनल शामिल है",
          "Hotel Management App — बुकिंग और कमरों का संचालन",
          "Hospital App — मोबाइल पर मरीजों के लिए सेवाएं",
        ],
        outcome:
          "नीचे दिया गया वही प्लेटफ़ॉर्म शीर्ष पर विभिन्न उत्पादों का समर्थन करता है, और एप्लिकेशन अपने पीछे की सेवाओं को प्रभावित किए बिना बदल सकता है।",
      },
    ],
    crossHeading: "प्रत्येक परत में साझा किया गया",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — पूरे प्लेटफ़ॉर्म के लिए एक पहचान और प्राधिकरण मॉडल, ताकि किसी भी प्रोजेक्ट को फिर से साइन-इन बनाने की आवश्यकता न पड़े।",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — बुनियादी सेवाएं जिन्हें प्रत्येक परत नोटिफिकेशन, शेड्यूल्ड कार्यों और फ़ाइल स्टोरेज के लिए कॉल कर सकती है।",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — प्रत्येक टीम में समान सेटअप और रखरखाव चरण।",
      },
    ],
    promiseLabel: "यह अलगाव क्या गारंटी देता है",
    promiseBody:
      "कोई वैकल्पिक क्षमता जो तैयार नहीं है, उसे सिस्टम को ठप करने के बजाय स्वयं को अनुपलब्ध रिपोर्ट करना चाहिए — यही बात इस लेयरिंग को किसी आरेख पर केवल एक के ऊपर एक रखे बक्सों से अधिक बनाती है। विफलता अपनी संबंधित परत के भीतर ही सीमित रहती है, और दैनिक कार्य जारी रहता है।",
    footnote:
      "प्रति परत सूचीबद्ध आइटम ऊपर दिए गए आर्किटेक्चर आरेख में दिखाए गए संदर्भ सेट हैं। कोई भी प्रोजेक्ट केवल उन्हीं हिस्सों को अपनाता है जिनकी उसके दायरे में आवश्यकता होती है।",
  },
  ar: {
    kicker: "High-Level Architecture",
    heading: "ما يوجد بداخل كل طبقة",
    intro:
      "يوضح المخطط أعلاه عدد الطبقات وكيفية اتصالها. يتعمق هذا القسم بمستوى إضافي: مم تتكون كل طبقة، وما هي مسؤولياتها، وما الذي تحصل عليه فرق الأعمال والهندسة منها.",
    contentsLabel: "في هذه الطبقة",
    outcomeLabel: "ما تحصل عليه",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "يحافظ على اتساق الأنظمة عبر تمرير الأحداث بينها، بدلاً من السماح لكل نظام بقراءة وكتابة قاعدة بيانات نظام آخر مباشرة.",
        items: [
          "Event streaming — تدفق مستمر لما حدث عبر المنصة",
          "Data pipelines — المسارات التي تحول البيانات وتعيد توجيهها بين الأنظمة",
          "Message brokers — قائمة الانتظار التي تضمن عدم فقدان الرسائل أثناء النقل",
          "Data synchronization — إبقاء نفس السجلات متوافقة عبر الأنظمة",
        ],
        outcome:
          "يمكن إضافة أنظمة جديدة دون الحاجة إلى إعادة العمل على الأنظمة قيد التشغيل بالفعل، لأن التكامل يتم من خلال الأحداث بدلاً من الارتباط المباشر بقواعد البيانات.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "خدمات أعمال مبنية مسبقاً ومتاحة من خلال واجهات برمجة التطبيقات (APIs)، بحيث تقوم الفرق بتكوين نظام جديد بدلاً من إعادة كتابة نفس الأساسيات في كل مشروع.",
        items: [
          "Point of Sale (POS) — مبيعات واجهة المتجر وتسجيل المدفوعات",
          "Customer Relationship Management (CRM) — سجلات العملاء وتتبع العلاقات",
          "Content Delivery System (CDS) — توزيع المحتوى إلى وجهاته",
          "Content Management System (CMS) — التأليف، وصلاحيات التحرير، والنشر",
          "Inventory Management System (IMS) — مستويات المخزون وحركة البضائع",
          "Production Order System (PO) — أوامر الإنتاج وحالتها",
          "Human Resource System (HRS) — سجلات الموظفين والعمليات ذات الصلة",
          "Case Management System (CM) — الحالات والمشكلات التي يتم تتبعها حتى إغلاقها",
          "Booking Management System (BMS) — الحجوزات وجدولة الموارد",
        ],
        outcome:
          "تبدأ أي مشاركة جديدة من خدمات تعمل بالفعل بدلاً من مستودع فارغ، لذا فإن معظم الجهد ينصب على المشكلة الفعلية للعميل بدلاً من تكرار العمل التأسيسي.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "ما يلمسه المستخدمون فعلياً",
        purpose:
          "التطبيقات المسلمة. يستدعي كل منها فقط الخدمات التي يحتاجها من طبقة واجهة برمجة التطبيقات، ولا شيء أكثر من ذلك.",
        items: [
          "E-Commerce Platform — الويب والأجهزة المحمولة للمبيعات عبر الإنترنت",
          "E-Learning Platform — التعلم عبر الإنترنت وتقديم الدورات",
          "Factory ERP — إدارة المصنع والإنتاج",
          "Call Center App — استقبال الحالات والمتابعة، بما في ذلك قناة LINE",
          "Hotel Management App — الحجوزات وعمليات الغرف",
          "Hospital App — الخدمات الموجهة للمرضى على الأجهزة المحمولة",
        ],
        outcome:
          "تدعم نفس المنصة الأساسية منتجات مختلفة فوقها، ويمكن تغيير التطبيق دون الإخلال بالخدمات الموجودة خلفه.",
      },
    ],
    crossHeading: "مشتركة عبر كل طبقة",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — نموذج هوية وتفويض واحد للمنصة بأكملها، لذا لا يضطر أي مشروع إلى بناء نظام تسجيل الدخول مرة أخرى.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — خدمات أساسية يمكن لكل طبقة استدعاؤها للإشعارات، والمهام المجدولة، وتخزين الملفات.",
      },
      {
        title: "Operations",
        body: "CLI commands for bootstrap, configuration, operations, and extension — نفس خطوات الإعداد والصيانة عبر كل فريق.",
      },
    ],
    promiseLabel: "ما يضمنه هذا الفصل",
    promiseBody:
      "يجب على أي قدرة اختيارية غير جاهزة أن تبلغ عن عدم توفرها بدلاً من إسقاط النظام — وهو ما يجعل الهيكلة الطبقية أكثر من مجرد صناديق متراصة على رسم تخطيطي. يبقى الفشل داخل الطبقة التي ينتمي إليها، ويستمر العمل اليومي.",
    footnote:
      "العناصر المدرجة في كل طبقة هي المجموعة المرجعية الموضحة في مخطط البنية أعلاه. تتبنى أي مشاركة معينة فقط الأجزاء التي يتطلبها نطاقها.",
  },
  he: {
    kicker: "High-Level Architecture",
    heading: "מה נמצא בתוך כל שכבה",
    intro:
      "התרשים שלמעלה מציג כמה שכבות קיימות וכיצד הן מתחברות. חלק זה נכנס רמה אחת לעומק: ממה מורכבת כל שכבה, על מה היא אחראית, ומה צוותי העסקים וההנדסה מפיקים ממנה.",
    contentsLabel: "בשכבה זו",
    outcomeLabel: "מה מקבלים",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "שומר על עקביות המערכות על ידי העברת אירועים ביניהן, במקום לאפשר לכל מערכת לקרוא ולכתוב ישירות למסד הנתונים של מערכת אחרת.",
        items: [
          "הזרמת אירועים — זרימה רציפה של מה שהתרחש ברחבי הפלטפורמה",
          "צינורות נתונים — הנתיבים שמשנים ומעבירים נתונים בין מערכות",
          "מתווכי הודעות — התור שמבטיח שהודעות לא יאבדו במעבר",
          "סנכרון נתונים — שמירה על התאמה של אותן רשומות על פני מערכות שונות",
        ],
        outcome:
          "ניתן להוסיף מערכות חדשות ללא צורך בעבודה מחדש על אלו שכבר פועלות, מכיוון שהאינטגרציה מתבצעת באמצעות אירועים ולא דרך צימוד ישיר של מסדי נתונים.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "שירותים עסקיים מוכנים מראש החשופים דרך ממשקי API, כך שצוותים מרכיבים מערכת חדשה במקום לכתוב מחדש את אותן תשתיות בכל פרויקט.",
        items: [
          "Point of Sale (POS) — מכירות בחנות ולכידת תשלומים",
          "Customer Relationship Management (CRM) — רשומות לקוחות ומעקב אחר קשרים",
          "Content Delivery System (CDS) — הפצת תוכן ליעדיו",
          "Content Management System (CMS) — יצירה, הרשאות עריכה ופרסום",
          "Inventory Management System (IMS) — רמות מלאי ותנועת סחורות",
          "Production Order System (PO) — פקודות ייצור והסטטוס שלהן",
          "Human Resource System (HRS) — רשומות כוח אדם ותהליכים נלווים",
          "Case Management System (CM) — מקרי שירות ובעיות במעקב עד לסגירה",
          "Booking Management System (BMS) — הזמנות ותזמון משאבים",
        ],
        outcome:
          "התקשרות חדשה מתחילה משירותים שכבר עובדים במקום ממאגר קוד ריק, כך שרוב המאמץ מופנה לבעיה האמיתית של הלקוח במקום לעבודת תשתית חוזרת.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "במה משתמשים נוגעים בפועל",
        purpose:
          "האפליקציות שנמסרו. כל אחת קוראת רק לשירותים שהיא צריכה משכבת ה-API, ולא יותר.",
        items: [
          "E-Commerce Platform — רשת ומובייל למכירות מקוונות",
          "E-Learning Platform — למידה מקוונת והעברת קורסים",
          "Factory ERP — ניהול מפעל וייצור",
          "Call Center App — קליטת פניות ומעקב, כולל ערוץ LINE",
          "Hotel Management App — הזמנות ותפעול חדרים",
          "Hospital App — שירותים הפונים למטופל במובייל",
        ],
        outcome:
          "אותה פלטפורמה בבסיס תומכת במוצרים שונים מעליה, והאפליקציה יכולה להשתנות מבלי להפריע לשירותים שמאחוריה.",
      },
    ],
    crossHeading: "משותף בכל שכבה",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — מודל זהות והרשאות אחד עבור כל הפלטפורמה, כך ששום פרויקט לא יצטרך לבנות מחדש מערכת התחברות.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — שירותי תשתית שכל שכבה יכולה לקרוא להם עבור התראות, משימות מתוזמנות ואחסון קבצים.",
      },
      {
        title: "Operations",
        body: "CLI commands עבור bootstrap, configuration, operations, ו-extension — אותם שלבי הגדרה ותחזוקה על פני כל הצוותים.",
      },
    ],
    promiseLabel: "מה מבטיחה הפרדה זו",
    promiseBody:
      "יכולת אופציונלית שאינה מוכנה חייבת לדווח על עצמה כלא זמינה במקום להפיל את המערכת — זה מה שהופך את השכבות ליותר מסתם קופסאות מוערמות בתרשים. כשלים נשארים בתוך השכבה אליה הם שייכים, והעבודה היומיומית נמשכת.",
    footnote:
      "הפריטים המפורטים בכל שכבה מהווים את סט הייחוס המוצג בתרשים הארכיטקטורה שלמעלה. כל התקשרות מאמצת רק את החלקים שהיקפה דורש.",
  },
  es: {
    kicker: "High-Level Architecture",
    heading: "Qué hay dentro de cada capa",
    intro:
      "El diagrama anterior muestra cuántas capas existen y cómo se conectan. Esta sección profundiza un nivel más: de qué está compuesta cada capa, de qué es responsable y qué obtienen de ella los equipos de negocio e ingeniería.",
    contentsLabel: "En esta capa",
    outcomeLabel: "Lo que obtiene",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Mantiene la coherencia de los sistemas pasando eventos entre ellos, en lugar de permitir que cada sistema lea y escriba directamente en la base de datos de otro sistema.",
        items: [
          "Transmisión de eventos — un flujo continuo de lo que sucedió en toda la plataforma",
          "Pipelines de datos — las rutas que transforman y reenvían datos entre sistemas",
          "Brokers de mensajes — la cola que garantiza que los mensajes no se pierdan en tránsito",
          "Sincronización de datos — mantener los mismos registros alineados entre sistemas",
        ],
        outcome:
          "Se pueden agregar nuevos sistemas sin tener que rediseñar los que ya están en funcionamiento, ya que la integración se realiza a través de eventos en lugar de un acoplamiento directo de bases de datos.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Servicios de negocio preconstruidos y expuestos a través de API, para que los equipos compongan un nuevo sistema en lugar de reescribir las mismas bases en cada proyecto.",
        items: [
          "Point of Sale (POS) — ventas en tienda y captura de pagos",
          "Customer Relationship Management (CRM) — registros de clientes y seguimiento de relaciones",
          "Content Delivery System (CDS) — distribución de contenido a sus destinos",
          "Content Management System (CMS) — creación, derechos de edición y publicación",
          "Inventory Management System (IMS) — niveles de existencias y movimiento de mercancías",
          "Production Order System (PO) — órdenes de producción y su estado",
          "Human Resource System (HRS) — registros de personal y procesos relacionados",
          "Case Management System (CM) — seguimiento de casos y problemas hasta su resolución",
          "Booking Management System (BMS) — reservas y programación de recursos",
        ],
        outcome:
          "Un nuevo proyecto comienza a partir de servicios que ya funcionan en lugar de un repositorio vacío, por lo que la mayor parte del esfuerzo se destina al problema real del cliente en lugar de repetir el trabajo base.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Lo que los usuarios realmente utilizan",
        purpose:
          "Las aplicaciones entregadas. Cada una llama solo a los servicios que necesita de la capa de API, nada más.",
        items: [
          "E-Commerce Platform — web y móvil para ventas en línea",
          "E-Learning Platform — aprendizaje en línea y entrega de cursos",
          "Factory ERP — administración de planta y producción",
          "Call Center App — recepción y seguimiento de casos, incluyendo el canal LINE",
          "Hotel Management App — operaciones de reservas y habitaciones",
          "Hospital App — servicios móviles orientados al paciente",
        ],
        outcome:
          "La misma plataforma subyacente soporta diferentes productos por encima, y la aplicación puede cambiar sin alterar los servicios detrás de ella.",
      },
    ],
    crossHeading: "Compartido en todas las capas",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — un modelo único de identidad y autorización para toda la plataforma, de modo que ningún proyecto tenga que volver a construir el inicio de sesión.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — servicios fundamentales a los que cada capa puede llamar para notificaciones, tareas programadas y almacenamiento de archivos.",
      },
      {
        title: "Operations",
        body: "CLI commands para bootstrap, configuration, operations y extension — los mismos pasos de configuración y mantenimiento en todos los equipos.",
      },
    ],
    promiseLabel: "Lo que garantiza esta separación",
    promiseBody:
      "Una capacidad opcional que no esté lista debe reportarse como no disponible en lugar de provocar la caída del sistema — que es lo que hace que esta arquitectura en capas sea más que simples cajas apiladas en un diagrama. Los fallos permanecen dentro de la capa a la que pertenecen y el trabajo diario continúa.",
    footnote:
      "Los elementos enumerados por capa son el conjunto de referencia que se muestra en el diagrama de arquitectura anterior. Un proyecto determinado adopta únicamente las partes que requiere su alcance.",
  },
  "pt-BR": {
    kicker: "High-Level Architecture",
    heading: "O que há dentro de cada camada",
    intro:
      "O diagrama acima mostra quantas camadas existem e como elas se conectam. Esta seção aprofunda-se um nível: do que cada camada é feita, pelo que é responsável e o que as equipes de negócios e de engenharia obtêm dela.",
    contentsLabel: "Nesta camada",
    outcomeLabel: "O que você obtém",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Mantém a consistência dos sistemas transmitindo eventos entre eles, em vez de permitir que cada sistema leia e grave diretamente no banco de dados de outro sistema.",
        items: [
          "Streaming de eventos — um fluxo contínuo do que aconteceu em toda a plataforma",
          "Pipelines de dados — as rotas que transformam e encaminham dados entre os sistemas",
          "Message brokers — a fila que garante que as mensagens não sejam perdidas em trânsito",
          "Sincronização de dados — mantendo os mesmos registros alinhados entre os sistemas",
        ],
        outcome:
          "Novos sistemas podem ser adicionados sem retrabalhar os que já estão em execução, pois a integração ocorre por meio de eventos, em vez de um acoplamento direto de banco de dados.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Serviços de negócios pré-construídos expostos por meio de APIs, para que as equipes componham um novo sistema em vez de reescrever as mesmas bases em todos os projetos.",
        items: [
          "Point of Sale (POS) — vendas em loja e captura de pagamentos",
          "Customer Relationship Management (CRM) — registros de clientes e acompanhamento de relacionamentos",
          "Content Delivery System (CDS) — distribuição de conteúdo para os seus destinos",
          "Content Management System (CMS) — criação, direitos de edição e publicação",
          "Inventory Management System (IMS) — níveis de estoque e movimentação de mercadorias",
          "Production Order System (PO) — ordens de produção e seus respectivos status",
          "Human Resource System (HRS) — registros de pessoas e processos relacionados",
          "Case Management System (CM) — casos e problemas acompanhados até o encerramento",
          "Booking Management System (BMS) — reservas e agendamento de recursos",
        ],
        outcome:
          "Um novo projeto começa a partir de serviços que já funcionam em vez de um repositório vazio, de modo que a maior parte do esforço é direcionada ao problema real do cliente em vez de um trabalho de base repetido.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "O que os usuários realmente acessam",
        purpose:
          "As aplicações entregues. Cada uma chama apenas os serviços de que necessita da camada de API, nada mais.",
        items: [
          "E-Commerce Platform — web e mobile para vendas online",
          "E-Learning Platform — aprendizado online e entrega de cursos",
          "Factory ERP — administração de fábrica e produção",
          "Call Center App — recebimento de casos e acompanhamento, incluindo o canal LINE",
          "Hotel Management App — reservas e operações de quartos",
          "Hospital App — serviços voltados ao paciente em dispositivos móveis",
        ],
        outcome:
          "A mesma plataforma subjacente suporta diferentes produtos na parte superior, e a aplicação pode mudar sem perturbar os serviços por trás dela.",
      },
    ],
    crossHeading: "Compartilhado entre todas as camadas",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — um único modelo de identidade e autorização para toda a plataforma, para que nenhum projeto tenha que construir o login novamente.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — serviços fundamentais que cada camada pode chamar para notificações, tarefas agendadas e armazenamento de arquivos.",
      },
      {
        title: "Operations",
        body: "CLI commands para bootstrap, configuration, operations e extension — as mesmas etapas de configuração e manutenção em todas as equipes.",
      },
    ],
    promiseLabel: "O que esta separação garante",
    promiseBody:
      "Uma capacidade opcional que não esteja pronta deve se reportar como indisponível em vez de derrubar o sistema — o que torna a estruturação em camadas mais do que caixas empilhadas em um diagrama. A falha permanece dentro da camada à qual pertence, e o trabalho do dia a dia continua.",
    footnote:
      "Os itens listados por camada formam o conjunto de referência mostrado no diagrama de arquitetura acima. Um determinado projeto adota apenas as partes que o seu escopo exige.",
  },
  fr: {
    kicker: "High-Level Architecture",
    heading: "Composition de chaque couche",
    intro:
      "Le schéma ci-dessus montre le nombre de couches et leurs connexions. Cette section va plus loin : de quoi chaque couche est constituée, ses responsabilités, et ce que les équipes commerciales et techniques en retirent.",
    contentsLabel: "Dans cette couche",
    outcomeLabel: "Ce que vous obtenez",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Garantit la cohérence des systèmes en transmettant des événements entre eux, plutôt que de laisser chaque système lire et écrire directement dans la base de données d'un autre.",
        items: [
          "Event streaming — un flux continu d'événements survenant sur l'ensemble de la plateforme",
          "Data pipelines — les canaux qui transforment et acheminent les données entre les systèmes",
          "Message brokers — la file d'attente qui garantit que les messages ne sont pas perdus en transit",
          "Data synchronization — l'alignement des mêmes enregistrements entre les systèmes",
        ],
        outcome:
          "De nouveaux systèmes peuvent être ajoutés sans modifier ceux déjà en production, car l'intégration se fait par le biais d'événements plutôt que par un couplage direct des bases de données.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Services métiers pré-intégrés et exposés via des API, permettant aux équipes de composer un nouveau système au lieu de réécrire les mêmes bases pour chaque projet.",
        items: [
          "Point of Sale (POS) — ventes en magasin et encaissement des paiements",
          "Customer Relationship Management (CRM) — fiches clients et suivi de la relation",
          "Content Delivery System (CDS) — diffusion de contenus vers leurs destinations",
          "Content Management System (CMS) — création, droits d'édition et publication",
          "Inventory Management System (IMS) — niveaux de stock et mouvements de marchandises",
          "Production Order System (PO) — ordres de fabrication et leur suivi",
          "Human Resource System (HRS) — dossiers du personnel et processus RH",
          "Case Management System (CM) — suivi et résolution des requêtes et incidents",
          "Booking Management System (BMS) — réservations et planification des ressources",
        ],
        outcome:
          "Chaque nouveau projet démarre à partir de services opérationnels plutôt que d'un dépôt vide, de sorte que l'essentiel des efforts se concentre sur le besoin réel du client plutôt que sur des tâches de fond répétitives.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Ce que les utilisateurs manipulent réellement",
        purpose:
          "Les applications livrées. Chacune appelle uniquement les services dont elle a besoin de l'API Service Layer, rien de plus.",
        items: [
          "E-Commerce Platform — web et mobile pour les ventes en ligne",
          "E-Learning Platform — apprentissage en ligne et diffusion de cours",
          "Factory ERP — administration de l'usine et de la production",
          "Call Center App — réception et suivi des requêtes, y compris le canal LINE",
          "Hotel Management App — réservations et gestion des chambres",
          "Hospital App — services mobiles destinés aux patients",
        ],
        outcome:
          "Une infrastructure commune prend en charge différents produits en surface, et l'application peut évoluer sans perturber les services sous-jacents.",
      },
    ],
    crossHeading: "Transversal à chaque couche",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — un modèle d'identité et d'autorisation unique pour l'ensemble de la plateforme, évitant à chaque projet de recréer un système de connexion.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — services de base que chaque couche peut appeler pour les notifications, les tâches planifiées et le stockage de fichiers.",
      },
      {
        title: "Operations",
        body: "CLI commands pour bootstrap, configuration, operations, et extension — les mêmes étapes de configuration et de maintenance pour toutes les équipes.",
      },
    ],
    promiseLabel: "Ce que cette séparation garantit",
    promiseBody:
      "Une fonctionnalité optionnelle non disponible doit signaler son indisponibilité plutôt que de paralyser l'ensemble du système — c'est ce qui fait de ce découpage bien plus qu'une simple superposition de boîtes sur un schéma. Les pannes restent confinées à leur couche respective, et les opérations quotidiennes se poursuivent.",
    footnote:
      "Les éléments répertoriés par couche constituent l'ensemble de référence présenté dans le schéma d'architecture ci-dessus. Chaque projet n'adopte que les composants requis par son périmètre.",
  },
  de: {
    kicker: "High-Level Architecture",
    heading: "Was sich in den einzelnen Layern befindet",
    intro:
      "Das obige Diagramm zeigt, wie viele Layer es gibt und wie sie miteinander verbunden sind. Dieser Abschnitt geht eine Ebene tiefer: woraus jeder Layer besteht, wofür er verantwortlich ist und welchen Nutzen Business- und Engineering-Teams daraus ziehen.",
    contentsLabel: "In diesem Layer",
    outcomeLabel: "Was Sie erhalten",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Hält Systeme konsistent, indem Events zwischen ihnen übertragen werden, anstatt zuzulassen, dass jedes System direkt die Datenbank eines anderen Systems liest und beschreibt.",
        items: [
          "Event streaming — ein kontinuierlicher Fluss dessen, was auf der gesamten Plattform passiert",
          "Data pipelines — die Routen, die Daten transformieren und zwischen Systemen weiterleiten",
          "Message brokers — die Warteschlange, die garantiert, dass Nachrichten bei der Übertragung nicht verloren gehen",
          "Data synchronization — die Abstimmung derselben Datensätze über Systeme hinweg",
        ],
        outcome:
          "Neue Systeme können hinzugefügt werden, ohne die bereits laufenden zu überarbeiten, da die Integration über Events und nicht über eine direkte Datenbankkopplung erfolgt.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Vorgefertigte Business-Services, die über APIs bereitgestellt werden, sodass Teams ein neues System zusammensetzen können, anstatt bei jedem Projekt dieselben Grundlagen neu zu entwickeln.",
        items: [
          "Point of Sale (POS) — Verkäufe in Filialen und Zahlungserfassung",
          "Customer Relationship Management (CRM) — Kundendatenbank und die Verfolgung von Kundenbeziehungen",
          "Content Delivery System (CDS) — Verteilung von Inhalten an ihre Ziele",
          "Content Management System (CMS) — Erstellung, Bearbeitungsrechte und Veröffentlichung",
          "Inventory Management System (IMS) — Lagerbestände und Warenbewegungen",
          "Production Order System (PO) — Produktionsaufträge und deren Status",
          "Human Resource System (HRS) — Personalakten und zugehörige Prozesse",
          "Case Management System (CM) — Fälle und Probleme, die bis zum Abschluss verfolgt werden",
          "Booking Management System (BMS) — Reservierungen und Ressourcenplanung",
        ],
        outcome:
          "Ein neues Projekt startet mit bereits funktionierenden Services statt mit einem leeren Repository. So fließt der Großteil des Aufwands in das tatsächliche Problem des Kunden statt in wiederholte Grundlagenarbeit.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Was Anwender tatsächlich nutzen",
        purpose:
          "Die bereitgestellten Anwendungen. Jede ruft nur die Services aus dem API-Layer auf, die sie benötigt, nicht mehr.",
        items: [
          "E-Commerce Platform — Web und Mobile für den Online-Verkauf",
          "E-Learning Platform — Online-Lernen und Bereitstellung von Kursen",
          "Factory ERP — Betriebs- und Produktionsverwaltung",
          "Call Center App — Fallaufnahme und Nachverfolgung, einschließlich des LINE-Kanals",
          "Hotel Management App — Buchungs- und Zimmerabläufe",
          "Hospital App — Services für Patienten auf Mobilgeräten",
        ],
        outcome:
          "Dieselbe zugrunde liegende Plattform unterstützt verschiedene darauf aufsetzende Produkte, und die Anwendung kann geändert werden, ohne die dahinterliegenden Services zu beeinträchtigen.",
      },
    ],
    crossHeading: "Gemeinsam genutzt über alle Layer hinweg",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — ein einziges Identitäts- und Autorisierungsmodell für die gesamte Plattform, sodass kein Projekt die Anmeldung erneut entwickeln muss.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — grundlegende Services, die jeder Layer für Benachrichtigungen, geplante Aufgaben und Dateispeicherung aufrufen kann.",
      },
      {
        title: "Operations",
        body: "CLI commands für bootstrap, configuration, operations und extension — dieselben Einrichtungs- und Wartungsschritte in jedem Team.",
      },
    ],
    promiseLabel: "Was diese Trennung garantiert",
    promiseBody:
      "Eine optionale Funktion, die nicht betriebsbereit ist, muss sich als nicht verfügbar melden, anstatt das System zum Absturz zu bringen — was die Schichtstruktur zu mehr als nur gestapelten Boxen auf einem Diagramm macht. Fehler verbleiben innerhalb der Schicht, zu der sie gehören, und der tägliche Betrieb läuft weiter.",
    footnote:
      "Die pro Layer aufgeführten Elemente sind das Referenzset, das im obigen Architekturdiagramm dargestellt ist. Ein konkretes Projekt umfasst nur die Teile, die für dessen Umfang erforderlich sind.",
  },
  it: {
    kicker: "High-Level Architecture",
    heading: "Cosa contiene ogni livello",
    intro:
      "Il diagramma sopra mostra quanti livelli sono presenti e come sono collegati. Questa sezione va un livello più in profondità: di cosa è composto ciascun livello, di cosa è responsabile e quali vantaggi offre ai team aziendali e di ingegneria.",
    contentsLabel: "In questo livello",
    outcomeLabel: "Cosa si ottiene",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Mantiene la coerenza tra i sistemi scambiando eventi tra di essi, anziché consentire a ciascun sistema di leggere e scrivere direttamente nel database di un altro.",
        items: [
          "Event streaming — un flusso continuo di ciò che accade all'interno della piattaforma",
          "Data pipelines — i percorsi che trasformano e inoltrano i dati tra i sistemi",
          "Message brokers — la coda che garantisce che i messaggi non vadano persi durante il transito",
          "Data synchronization — l'allineamento dei medesimi record tra i diversi sistemi",
        ],
        outcome:
          "È possibile aggiungere nuovi sistemi senza dover rielaborare quelli già in funzione, poiché l'integrazione avviene tramite eventi anziché attraverso un accoppiamento diretto dei database.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Servizi aziendali predefiniti esposti tramite API, consentendo ai team di comporre un nuovo sistema anziché riscrivere le stesse fondamenta per ogni progetto.",
        items: [
          "Point of Sale (POS) — vendite in negozio e acquisizione dei pagamenti",
          "CRM — record dei clienti e tracciamento delle relazioni",
          "CDS — distribuzione dei contenuti verso le relative destinazioni",
          "CMS — creazione, diritti di modifica e pubblicazione",
          "IMS — livelli di scorte e movimentazione delle merci",
          "PO — ordini di produzione e relativo stato",
          "HRS — dati del personale e processi correlati",
          "CM — gestione dei casi e delle problematiche fino alla risoluzione",
          "BMS — prenotazioni e pianificazione delle risorse",
        ],
        outcome:
          "Ogni nuova collaborazione parte da servizi già funzionanti anziché da un repository vuoto, consentendo di concentrare la maggior parte del lavoro sulla risoluzione delle reali esigenze del cliente invece che sulle attività di base ripetitive.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Ciò con cui gli utenti interagiscono concretamente",
        purpose:
          "Le applicazioni fornite. Ciascuna di esse richiama solo i servizi necessari dal livello API, nient'altro.",
        items: [
          "E-Commerce Platform — portale web e app mobile per le vendite online",
          "E-Learning Platform — apprendimento online ed erogazione di corsi",
          "Factory ERP — amministrazione dello stabilimento e della produzione",
          "Call Center App — presa in carico e tracciamento dei casi, incluso il canale LINE",
          "Hotel Management App — prenotazioni e operazioni relative alle camere",
          "Hospital App — servizi per i pazienti su dispositivi mobili",
        ],
        outcome:
          "La stessa piattaforma sottostante supporta prodotti diversi in superficie, e l'applicazione può essere modificata senza interferire con i servizi retrostanti.",
      },
    ],
    crossHeading: "Condiviso tra tutti i livelli",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — un unico modello di identità e autorizzazione per l'intera piattaforma, in modo che nessun progetto debba ricreare il sistema di accesso.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — servizi fondamentali che ogni livello può richiamare per notifiche, attività pianificate e archiviazione di file.",
      },
      {
        title: "Operations",
        body: "CLI commands per bootstrap, configuration, operations e extension — le stesse procedure di configurazione e manutenzione per tutti i team.",
      },
    ],
    promiseLabel: "Cosa garantisce questa separazione",
    promiseBody:
      "Una funzionalità opzionale che non è pronta deve segnalarsi come non disponibile anziché causare l'arresto del sistema — ed è questo che rende la stratificazione qualcosa di più di semplici scatole sovrapposte su un diagramma. Il malfunzionamento rimane all'interno del livello a cui appartiene e l'operatività quotidiana prosegue.",
    footnote:
      "Gli elementi elencati per ciascun livello costituiscono l'insieme di riferimento illustrato nel diagramma dell'architettura sopra riportato. Ogni specifico progetto adotta esclusivamente i componenti richiesti dal proprio ambito di applicazione.",
  },
  nl: {
    kicker: "High-Level Architecture",
    heading: "Wat zich in elke laag bevindt",
    intro:
      "Het bovenstaande diagram toont de verschillende lagen en hoe deze met elkaar in verbinding staan. Deze sectie gaat een niveau dieper: waaruit elke laag is opgebouwd, waarvoor deze verantwoordelijk is en wat dit oplevert voor business- en engineeringteams.",
    contentsLabel: "In deze laag",
    outcomeLabel: "Wat het oplevert",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Houdt systemen consistent door events tussen systemen uit te wisselen, in plaats van elk systeem rechtstreeks de database van een ander systeem te laten lezen en schrijven.",
        items: [
          "Event streaming — een continue stroom van gebeurtenissen over het hele platform",
          "Data pipelines — de routes die data transformeren en doorsturen tussen systemen",
          "Message brokers — de wachtrij die garandeert dat berichten tijdens de overdracht niet verloren gaan",
          "Datasynchronisatie — het synchroon houden van dezelfde gegevens over verschillende systemen",
        ],
        outcome:
          "Nieuwe systemen kunnen worden toegevoegd zonder de reeds actieve systemen aan te passen, omdat de integratie verloopt via events in plaats van een directe databasekoppeling.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Kant-en-klare business services die via API's worden ontsloten, zodat teams een nieuw systeem kunnen samenstellen in plaats van bij elk project dezelfde basis opnieuw te moeten schrijven.",
        items: [
          "Point of Sale (POS) — winkelverkoop en betalingsverwerking",
          "Customer Relationship Management (CRM) — klantgegevens en het opvolgen van klantrelaties",
          "Content Delivery System (CDS) — het distribueren van content naar de bestemmingen",
          "Content Management System (CMS) — creatie, bewerkingsrechten en publicatie van content",
          "Inventory Management System (IMS) — voorraadniveaus en goederenbewegingen",
          "Production Order System (PO) — productieorders en hun status",
          "Human Resource System (HRS) — personeelsdossiers en gerelateerde processen",
          "Case Management System (CM) — dossiers en problemen opvolgen tot aan de afhandeling",
          "Booking Management System (BMS) — reserveringen en resourceplanning",
        ],
        outcome:
          "Een nieuw project start direct vanuit reeds werkende services in plaats van een lege repository, waardoor de meeste inspanning naar het daadwerkelijke probleem van de klant gaat in plaats van herhaaldelijk basiswerk.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Wat gebruikers daadwerkelijk gebruiken",
        purpose:
          "De opgeleverde applicaties. Elke applicatie roept alleen de services aan die deze nodig heeft uit de API-laag, niets meer.",
        items: [
          "E-Commerce Platform — web en mobiel voor online verkoop",
          "E-Learning Platform — online leren en het aanbieden van cursussen",
          "Factory ERP — fabrieks- en productieadministratie",
          "Call Center App — dossierregistratie en opvolging, inclusief het LINE-kanaal",
          "Hotel Management App — boekingen en hotelkamerbeheer",
          "Hospital App — patiëntgerichte diensten op mobiel",
        ],
        outcome:
          "Hetzelfde onderliggende platform ondersteunt verschillende bovenliggende producten, en de applicatie kan worden gewijzigd zonder de achterliggende services te verstoren.",
      },
    ],
    crossHeading: "Gedeeld over elke laag",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — één identiteits- en autorisatiemodel voor het hele platform, zodat geen enkel project opnieuw een inlogsysteem hoeft te bouwen.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — basisservices die elke laag kan aanroepen voor notificaties, geplande taken en bestandsopslag.",
      },
      {
        title: "Operations",
        body: "CLI commands voor bootstrap, configuration, operations, en extension — dezelfde setup- en onderhoudsstappen voor elk team.",
      },
    ],
    promiseLabel: "Wat deze scheiding garandeert",
    promiseBody:
      "Een optionele functie die nog niet gereed is, moet zichzelf als niet-beschikbaar melden in plaats van het hele systeem plat te leggen — dit is wat de gelaagdheid meer maakt dan gestapelde blokken op een diagram. Storingen blijven beperkt tot de laag waar ze thuishoren, en de dagelijkse werkzaamheden gaan gewoon door.",
    footnote:
      "De per laag vermelde onderdelen vormen de referentieset die in het bovenstaande architectuurdiagram wordt getoond. Een specifiek project neemt alleen de onderdelen over die binnen de scope vallen.",
  },
  pl: {
    kicker: "High-Level Architecture",
    heading: "Co znajduje się w każdej warstwie",
    intro:
      "Powyższy diagram przedstawia liczbę warstw i sposób ich połączenia. Ta sekcja wchodzi o poziom głębiej: z czego składa się każda warstwa, za co odpowiada oraz jakie korzyści przynosi zespołom biznesowym i inżynieryjnym.",
    contentsLabel: "W tej warstwie",
    outcomeLabel: "Co zyskujesz",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Utrzymuje spójność systemów poprzez przekazywanie między nimi zdarzeń, zamiast pozwalać każdemu systemowi na bezpośredni odczyt i zapis w bazie danych innego systemu.",
        items: [
          "Strumieniowanie zdarzeń — ciągły przepływ informacji o tym, co wydarzyło się na platformie",
          "Potoki danych — ścieżki, które przekształcają i przesyłają dane między systemami",
          "Brokery wiadomości — kolejki gwarantujące, że komunikaty nie zostaną utracone podczas przesyłania",
          "Synchronizacja danych — utrzymywanie zgodności tych samych rekordów w różnych systemach",
        ],
        outcome:
          "Nowe systemy mogą być dodawane bez konieczności przebudowy tych już działających, ponieważ integracja opiera się na zdarzeniach, a nie na bezpośrednim powiązaniu baz danych.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Gotowe usługi biznesowe udostępniane poprzez API, dzięki którym zespoły mogą komponować nowy system zamiast tworzyć te same fundamenty od nowa dla każdego projektu.",
        items: [
          "Point of Sale (POS) — sprzedaż w sklepie i rejestracja płatności",
          "Customer Relationship Management (CRM) — kartoteki klientów i śledzenie relacji",
          "Content Delivery System (CDS) — dystrybucja treści do miejsc docelowych",
          "Content Management System (CMS) — tworzenie, uprawnienia do edycji i publikacja",
          "Inventory Management System (IMS) — stany magazynowe i przepływ towarów",
          "Production Order System (PO) — zlecenia produkcyjne i ich status",
          "Human Resource System (HRS) — kartoteki pracowników i powiązane procesy",
          "Case Management System (CM) — sprawy i zgłoszenia śledzone aż do zamknięcia",
          "Booking Management System (BMS) — rezerwacje i harmonogramowanie zasobów",
        ],
        outcome:
          "Nowy projekt rozpoczyna się od usług, które już działają, a nie od pustego repozytorium, dzięki czemu większość wysiłku skupia się na rzeczywistym problemie klienta, a nie na powielaniu prac podstawowych.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "To, z czym faktycznie stykają się użytkownicy",
        purpose:
          "Dostarczane aplikacje. Każda z nich wywołuje tylko te usługi z warstwy API, których potrzebuje, i nic poza tym.",
        items: [
          "E-Commerce Platform — aplikacje webowe i mobilne do sprzedaży online",
          "E-Learning Platform — nauka online i udostępnianie kursów",
          "Factory ERP — administracja zakładem i produkcją",
          "Call Center App — przyjmowanie i monitorowanie zgłoszeń, w tym kanał LINE",
          "Hotel Management App — rezerwacje i obsługa pokoi",
          "Hospital App — mobilne usługi skierowane do pacjentów",
        ],
        outcome:
          "Ta sama platforma bazowa obsługuje różne produkty, a aplikacja może ulegać zmianom bez zakłócania działania usług w tle.",
      },
    ],
    crossHeading: "Współdzielone we wszystkich warstwach",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — jeden model tożsamości i autoryzacji dla całej platformy, więc żaden projekt nie musi budować logowania od nowa.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — fundamentalne usługi, które każda warstwa może wywołać w celu obsługi powiadomień, zaplanowanych zadań i przechowywania plików.",
      },
      {
        title: "Operations",
        body: "CLI commands dla bootstrap, configuration, operations i extension — takie same kroki konfiguracji i utrzymania dla każdego zespołu.",
      },
    ],
    promiseLabel: "Co gwarantuje taki podział",
    promiseBody:
      "Opcjonalna funkcjonalność, która nie jest gotowa, musi zgłosić się jako niedostępna, zamiast powodować awarię całego systemu — to właśnie sprawia, że warstwy są czymś więcej niż tylko ułożonymi na sobie polami na diagramie. Błędy pozostają w obrębie warstwy, do której należą, a codzienna praca może być kontynuowana.",
    footnote:
      "Elementy wymienione dla poszczególnych warstw stanowią zestaw referencyjny przedstawiony na powyższym diagramie architektury. Dany projekt wdraża tylko te części, których wymaga jego zakres.",
  },
  tr: {
    kicker: "High-Level Architecture",
    heading: "Her katmanda neler yer alıyor",
    intro:
      "Yukarıdaki şema kaç katman olduğunu ve bunların birbirine nasıl bağlandığını göstermektedir. Bu bölüm bir adım daha derine inerek her bir katmanın nelerden oluştuğunu, nelerden sorumlu olduğunu ve iş ile mühendislik ekiplerine ne gibi faydalar sağladığını açıklamaktadır.",
    contentsLabel: "Bu katmanda",
    outcomeLabel: "Elde ettikleriniz",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Sistemlerin doğrudan birbirlerinin veritabanlarını okuyup yazmalarına izin vermek yerine, aralarında olaylar aktararak sistemlerin tutarlı kalmasını sağlar.",
        items: [
          "Event streaming — platform genelinde gerçekleşenlerin kesintisiz akışı",
          "Data pipelines — verileri sistemler arasında dönüştüren ve ileten yollar",
          "Message brokers — mesajların iletim sırasında kaybolmamasını garanti eden kuyruk",
          "Data synchronization — aynı kayıtların sistemler genelinde uyumlu tutulması",
        ],
        outcome:
          "Yeni sistemler, halihazırda çalışan sistemleri yeniden tasarlamaya gerek kalmadan eklenebilir; çünkü entegrasyon doğrudan veritabanı eşleşmesi yerine olaylar aracılığıyla gerçekleşir.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "API'ler aracılığıyla sunulan hazır iş servisleri sayesinde, ekipler her projede aynı temelleri sıfırdan yazmak yerine yeni bir sistemi doğrudan bir araya getirebilir.",
        items: [
          "Point of Sale (POS) — mağaza içi satışlar ve ödeme alma",
          "CRM — müşteri kayıtları ve ilişki takibi",
          "CDS — içeriğin hedef noktalara dağıtılması",
          "CMS — içerik üretme, düzenleme yetkileri ve yayınlama",
          "IMS — stok seviyeleri ve mal hareketi",
          "PO — üretim emirleri ve bunların durumları",
          "HRS — çalışan kayıtları ve ilgili süreçler",
          "CM — sonuçlandırılana kadar takip edilen vakalar ve sorunlar",
          "BMS — rezervasyonlar ve kaynak planlaması",
        ],
        outcome:
          "Yeni bir çalışma, boş bir depolama alanı yerine halihazırda çalışan servislerle başlar; böylece eforun büyük kısmı tekrarlayan temel çalışmalara değil, müşterinin asıl sorununa harcanır.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Kullanıcıların doğrudan etkileşime girdiği alan",
        purpose:
          "Sunulan uygulamalar. Her biri API katmanından yalnızca ihtiyaç duyduğu servisleri çağırır, daha fazlasını değil.",
        items: [
          "E-Commerce Platform — web ve mobil için online satışlar",
          "E-Learning Platform — çevrimiçi öğrenme ve ders sunumu",
          "Factory ERP — tesis ve üretim yönetimi",
          "Call Center App — LINE kanalı dahil olmak üzere vaka kaydı ve takibi",
          "Hotel Management App — rezervasyon ve oda operasyonları",
          "Hospital App — mobil cihazlarda hastalara yönelik hizmetler",
        ],
        outcome:
          "Alttaki aynı platform, üstteki farklı ürünleri destekler ve arkasındaki servislere müdahale edilmeden uygulama üzerinde değişiklik yapılabilir.",
      },
    ],
    crossHeading: "Shared across every layer",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — tüm platform için tek bir kimlik ve yetkilendirme modeli, böylece hiçbir projenin oturum açma sistemini yeniden inşa etmesi gerekmez.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — bildirimler, planlanmış görevler ve dosya depolama için her katmanın çağırabileceği temel servisler.",
      },
      {
        title: "Operations",
        body: "bootstrap, configuration, operations, ve extension için CLI commands — her ekipte aynı kurulum ve bakım adımları.",
      },
    ],
    promiseLabel: "Bu ayrımın garanti ettikleri",
    promiseBody:
      "Hazır olmayan isteğe bağlı bir yetenek, sistemi çökertmek yerine kendisini kullanılamaz olarak bildirmelidir — katmanlandırmayı bir şema üzerindeki üst üste yığılmış kutulardan daha fazlası yapan şey de budur. Hata, ait olduğu katmanın içinde kalır ve günlük işleyiş devam eder.",
    footnote:
      "Katman başına listelenen ögeler, yukarıdaki mimari şemasında gösterilen referans setidir. Belirli bir çalışma kapsamında yalnızca projenin gerektirdiği bölümler uygulanır.",
  },
  ru: {
    kicker: "High-Level Architecture",
    heading: "Что находится внутри каждого уровня",
    intro:
      "Приведенная выше схема показывает количество уровней и их связи. В этом разделе мы рассмотрим всё на уровень глубже: из чего состоит каждый уровень, за что он отвечает и какую пользу из него извлекают бизнес- и инженерные команды.",
    contentsLabel: "На этом уровне",
    outcomeLabel: "Что вы получаете",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Обеспечивает согласованность систем путем передачи событий между ними вместо прямого чтения и записи баз данных одних систем другими.",
        items: [
          "Потоковая передача событий — непрерывный поток данных о том, что произошло на платформе",
          "Конвейеры данных — маршруты, по которым данные преобразуются и передаются между системами",
          "Брокеры сообщений — очередь, гарантирующая, что сообщения не будут потеряны при передаче",
          "Синхронизация данных — поддержание идентичности записей во всех системах",
        ],
        outcome:
          "Новые системы можно добавлять без переработки уже работающих, поскольку интеграция происходит через события, а не через прямое связывание баз данных.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Готовые бизнес-сервисы, доступные через API, благодаря которым команды собирают новую систему, а не переписывают одну и ту же основу для каждого проекта.",
        items: [
          "Point of Sale (POS) — продажи через витрину и прием платежей",
          "Customer Relationship Management (CRM) — записи о клиентах и отслеживание взаимодействия",
          "Content Delivery System (CDS) — доставка контента до конечных точек",
          "Content Management System (CMS) — создание контента, права на редактирование и публикация",
          "Inventory Management System (IMS) — учет остатков и движение товаров",
          "Production Order System (PO) — производственные заказы и их статусы",
          "Human Resource System (HRS) — учет сотрудников и связанные с этим процессы",
          "Case Management System (CM) — обращения и инциденты, отслеживаемые до закрытия",
          "Booking Management System (BMS) — бронирование и планирование ресурсов",
        ],
        outcome:
          "Работа над новым проектом начинается с уже функционирующих сервисов, а не с пустого репозитория, поэтому основные усилия направляются на решение реальных задач клиента, а не на повторную подготовку базовой инфраструктуры.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "То, с чем непосредственно взаимодействуют пользователи",
        purpose:
          "Поставляемые приложения. Каждое из них вызывает только те сервисы с уровня API, которые ему необходимы, и ничего более.",
        items: [
          "E-Commerce Platform — веб- и мобильные приложения для онлайн-продаж",
          "E-Learning Platform — онлайн-обучение и предоставление курсов",
          "Factory ERP — управление заводом и производством",
          "Call Center App — прием обращений и их сопровождение, включая канал LINE",
          "Hotel Management App — бронирование и управление номерным фондом",
          "Hospital App — сервисы для пациентов на мобильных устройствах",
        ],
        outcome:
          "Единая базовая платформа поддерживает различные продукты поверх неё, и приложение можно изменять, не затрагивая работающие за ним сервисы.",
      },
    ],
    crossHeading: "Общие для всех уровней",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — единая модель идентификации и авторизации для всей платформы, благодаря которой ни одному проекту не нужно заново создавать механизм входа в систему.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — базовые сервисы, которые каждый уровень может вызывать для уведомлений, запланированных задач и хранения файлов.",
      },
      {
        title: "Operations",
        body: "CLI commands для bootstrap, configuration, operations и extension — одинаковые шаги по настройке и обслуживанию для каждой команды.",
      },
    ],
    promiseLabel: "Что гарантирует это разделение",
    promiseBody:
      "Необязательная функция, которая еще не готова, должна сообщить о своей недоступности, а не выводить из строя всю систему — именно это делает разделение на уровни чем-то большим, чем просто набором блоков на схеме. Сбой остается внутри того уровня, к которому он относится, а повседневная работа продолжается.",
    footnote:
      "Элементы, перечисленные для каждого уровня, представляют собой эталонный набор, показанный на архитектурной схеме выше. В конкретном проекте используются только те компоненты, которые требуются для его реализации.",
  },
  uk: {
    kicker: "High-Level Architecture",
    heading: "Що міститься всередині кожного рівня",
    intro:
      "На діаграмі вище показано кількість рівнів та спосіб їхнього зв'язку. Цей розділ дозволяє зануритися на один рівень глибше: з чого складається кожен рівень, за що він відповідає та яку користь від цього отримують бізнес- та інженерні команди.",
    contentsLabel: "На цьому рівні",
    outcomeLabel: "Що ви отримуєте",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Підтримує узгодженість систем шляхом передачі подій між ними, замість того, щоб дозволяти кожній системі безпосередньо читати та записувати дані в базу даних іншої системи.",
        items: [
          "Event streaming — безперервний потік подій на платформі",
          "Data pipelines — маршрути, які перетворюють та передають дані між системами",
          "Message brokers — черга, яка гарантує, що повідомлення не будуть втрачені під час передачі",
          "Data synchronization — синхронізація однакових записів між різними системами",
        ],
        outcome:
          "Нові системи можна додавати без переробки вже працюючих, оскільки інтеграція відбувається через події, а не через пряме зв'язування баз даних.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Готові бізнес-сервіси, доступні через API, що дозволяє командам компонувати нові системи замість повторного створення базової інфраструктури в кожному проєкті.",
        items: [
          "Point of Sale (POS) — роздрібні продажі та прийом платежів",
          "Customer Relationship Management (CRM) — облік клієнтів та відстеження взаємодії",
          "Content Delivery System (CDS) — доставка контенту до точок призначення",
          "Content Management System (CMS) — створення, права редагування та публікація контенту",
          "Inventory Management System (IMS) — рівні запасів та рух товарів",
          "Production Order System (PO) — замовлення на виробництво та їхні статуси",
          "Human Resource System (HRS) — кадровий облік та пов'язані процеси",
          "Case Management System (CM) — відстеження справ та звернень до їхнього вирішення",
          "Booking Management System (BMS) — бронювання та планування використання ресурсів",
        ],
        outcome:
          "Робота над новим проєктом починається з уже готових сервісів, а не з порожнього репозиторію, тому основні зусилля спрямовуються на вирішення реальних завдань клієнта, а не на повторну побудову базових елементів.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Те, з чим безпосередньо взаємодіють користувачі",
        purpose:
          "Кінцеві додатки. Кожен із них викликає лише ті сервіси, які йому потрібні з API-рівня, і нічого більше.",
        items: [
          "E-Commerce Platform — веб- та мобільні рішення для онлайн-продажів",
          "E-Learning Platform — онлайн-навчання та проведення курсів",
          "Factory ERP — адміністрування заводів та виробництва",
          "Call Center App — прийом звернень та подальший супровід, включаючи канал LINE",
          "Hotel Management App — бронювання та управління номерами",
          "Hospital App — мобільні сервіси для пацієнтів",
        ],
        outcome:
          "Єдина базова платформа підтримує різні кінцеві продукти, а додатки можуть змінюватися без втручання в роботу сервісів, які за ними стоять.",
      },
    ],
    crossHeading: "Спільні компоненти для всіх рівнів",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — єдина модель ідентифікації та авторизації для всієї платформи, тому в жодному проєкті не потрібно наново створювати систему входу.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — базові сервіси, які кожен рівень може викликати для надсилання сповіщень, виконання запланованих завдань та зберігання файлів.",
      },
      {
        title: "Operations",
        body: "CLI commands для bootstrap, configuration, operations та extension — однакові кроки налаштування та обслуговування для всіх команд.",
      },
    ],
    promiseLabel: "Що гарантує таке розділення",
    promiseBody:
      "Неактивна або не готова додаткова функція повинна повідомляти про свою недоступність, а не призводити до збою всієї системи. Саме це робить розділення на рівні чимось більшим, ніж просто стопкою блоків на схемі. Будь-який збій локалізується в межах свого рівня, а повсякденна робота продовжується.",
    footnote:
      "Перелічені елементи для кожного рівня є еталонним набором, показаним на схемі архітектури вище. Для конкретного проєкту впроваджуються лише ті компоненти, яких вимагає його обсяг.",
  },
  sv: {
    kicker: "High-Level Architecture",
    heading: "Vad som finns inom varje lager",
    intro:
      "Diagrammet ovan visar hur många lager det finns och hur de hänger ihop. Det här avsnittet går en nivå djupare: vad varje lager består av, vad det ansvarar för och vad affärs- och utvecklingsteam får ut av det.",
    contentsLabel: "I det här lagret",
    outcomeLabel: "Vad ni får",
    layers: [
      {
        zone: "Cloud Server Zone",
        title: "Data Stream Layer",
        subtitle: "Event Base",
        purpose:
          "Håller systemen konsistenta genom att skicka händelser mellan dem, istället för att låta varje system läsa och skriva direkt i ett annat systems databas.",
        items: [
          "Event streaming — ett kontinuerligt flöde av vad som hänt på plattformen",
          "Data pipelines — de vägar som omvandlar och vidarebefordrar data mellan system",
          "Message brokers — kön som garanterar att meddelanden inte går förlorade under överföringen",
          "Data synchronization — att hålla samma poster samstämda mellan system",
        ],
        outcome:
          "Nya system kan läggas till utan att de som redan körs behöver göras om, eftersom integrationen sker via händelser snarare än direkt databaskoppling.",
      },
      {
        zone: "Cloud Server Zone",
        title: "API Service Layer",
        subtitle: "Ready to use",
        purpose:
          "Färdigbyggda affärstjänster som tillhandahålls via API:er, så att team kan sätta ihop ett nytt system istället för att skriva om samma grund i varje projekt.",
        items: [
          "Point of Sale (POS) — butiksförsäljning och betalningshantering",
          "Customer Relationship Management (CRM) — kundregister och relationsspårning",
          "Content Delivery System (CDS) — distribution av innehåll till dess slutdestinationer",
          "Content Management System (CMS) — skapande, redigeringsrättigheter och publicering",
          "Inventory Management System (IMS) — lagersaldon och varuförflyttning",
          "Production Order System (PO) — produktionsorder och deras status",
          "Human Resource System (HRS) — personalregister och relaterade processer",
          "Case Management System (CM) — ärenden och problem som spåras till avslut",
          "Booking Management System (BMS) — bokningar och resursschemaläggning",
        ],
        outcome:
          "Ett nytt projekt startar med tjänster som redan fungerar istället för ett tomt kodarkiv, så att merparten av arbetet kan läggas på kundens faktiska problem istället för upprepat grundarbete.",
      },
      {
        zone: "Client Zone",
        title: "Application Layer",
        subtitle: "Vad användarna faktiskt interagerar med",
        purpose:
          "De levererade applikationerna. Var och en anropar endast de tjänster den behöver från API-lagret, ingenting mer.",
        items: [
          "E-Commerce Platform — webb och mobil för onlineförsäljning",
          "E-Learning Platform — onlinelärande och kursleverans",
          "Factory ERP — anläggnings- och produktionsadministration",
          "Call Center App — ärendehantering och uppföljning, inklusive LINE-kanalen",
          "Hotel Management App — bokning och rumsdrift",
          "Hospital App — patientvända tjänster i mobilen",
        ],
        outcome:
          "Samma underliggande plattform stödjer olika produkter ovanpå, och applikationen kan ändras utan att störa de bakomliggande tjänsterna.",
      },
    ],
    crossHeading: "Shared across every layer",
    cross: [
      {
        title: "Identity & Access",
        body: "Auth / Access Control / Profile — en gemensam identitets- och behörighetsmodell för hela plattformen, så att inget projekt behöver bygga inloggning på nytt.",
      },
      {
        title: "Shared Services",
        body: "Notification / Schedule / Storage — grundläggande tjänster som alla lager kan anropa för aviseringar, schemalagda uppgifter och fillagring.",
      },
      {
        title: "Operations",
        body: "CLI commands för bootstrap, configuration, operations, och extension — samma installations- och underhållssteg för alla team.",
      },
    ],
    promiseLabel: "Vad denna uppdelning garanterar",
    promiseBody:
      "En valfri funktion som inte är redo måste rapportera sig själv som otillgänglig snarare än att sänka systemet — vilket är det som gör uppdelningen i lager till mer än bara staplade lådor i ett diagram. Fel stannar inom det lager där de hör hemma, och det dagliga arbetet fortsätter.",
    footnote:
      "De objekt som listas per lager är den referensuppsättning som visas i arkitekturdiagrammet ovan. Ett givet projekt använder endast de delar som dess omfattning kräver.",
  },
};
