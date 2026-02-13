import type { Metadata } from "next";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";
import TrackedLink from "@/components/TrackedLink";
import { buildPageMetadata } from "@/lib/seo";
import { resolveLocale, type Locale } from "@/lib/i18n";

type FaqGroup = { title: string; id: string; items: { q: string; a: string }[] };
type Copy = {
  title: string;
  description: string;
  kicker: string;
  heading: string;
  intro: string;
  needDetailKicker: string;
  needDetailHeading: string;
  contactCta: string;
  groups: FaqGroup[];
};

const th: Copy = {
  title: "FAQ",
  description: "คำถามที่พบบ่อยสำหรับ Partner, Developer, Investor และผู้ใช้งานทั่วไปของ Gumon",
  kicker: "FAQ",
  heading: "คำถามที่พบบ่อยสำหรับพาร์ตเนอร์ นักพัฒนา นักลงทุน และผู้ใช้งานทั่วไป",
  intro: "หน้านี้รวบรวมคำถามที่พบบ่อยจากผู้ใช้งานหลายกลุ่ม เพื่อให้ค้นหาข้อมูลสำคัญได้ง่าย ทั้งในมุมธุรกิจ เทคโนโลยี และการใช้งานเว็บไซต์",
  needDetailKicker: "Need More Detail",
  needDetailHeading: "หากไม่พบคำตอบที่ต้องการ",
  contactCta: "ไปหน้า Contact",
  groups: [
    {
      title: "Partner FAQ (พันธมิตร)",
      id: "partner",
      items: [
        { q: "Gumon รับงานลูกค้าปลายทางเองไหม (Do you compete with partners)?", a: "ไม่ Gumon โฟกัสงานแพลตฟอร์ม มาตรฐาน และเครื่องมือ ส่วนงานส่งมอบเชิงพาณิชย์จะทำผ่านพาร์ตเนอร์เป็นหลัก" },
        { q: "พาร์ตเนอร์จะได้อะไรจากการร่วม ecosystem ของ Gumon", a: "ได้ทั้งมาตรฐานการทำงานร่วม เอกสารอ้างอิง และแนวทาง enablement ที่ช่วยให้เริ่มงานเร็วขึ้นและรักษาคุณภาพการส่งมอบได้ต่อเนื่อง" },
        { q: "ก่อนเริ่มเป็นพาร์ตเนอร์ ควรมีความพร้อมด้านไหน", a: "ควรมีทีม delivery ที่ดูแลงานได้ต่อเนื่อง มีทักษะ implementation และพร้อมใช้ shared standards เดียวกันกับทีมอื่นใน ecosystem" },
        { q: "ถ้าลูกค้าองค์กรสนใจเริ่มโครงการผ่านพาร์ตเนอร์ ควรเริ่มยังไง", a: "แนะนำให้เริ่มจาก use case ที่มีผลชัดเจนก่อน แล้ววางมาตรฐานร่วมตั้งแต่ต้น เพื่อให้ขยายงานรอบถัดไปได้ง่าย" },
        { q: "Gumon ช่วยลดความเสี่ยงในการส่งมอบยังไง", a: "ลดความเสี่ยงด้วยมาตรฐานที่ชัดเจน แนวทาง compatibility และเอกสารที่ทีมใช้อ้างอิงร่วมกันได้จริง" },
        { q: "ทำไม boundary ระหว่าง Gumon กับพาร์ตเนอร์ต้องชัด", a: "เพราะความชัดเจนเรื่องบทบาททำให้ทุกฝ่ายวางแผนธุรกิจได้ตรงไปตรงมา และลดความเสี่ยงเรื่องงานทับซ้อนในระยะยาว" },
        { q: "พาร์ตเนอร์ต่อยอดบริการเฉพาะทางบน Gumon ได้ไหม", a: "ได้ แพลตฟอร์มถูกออกแบบมาให้ต่อยอดได้ โดยยังคงมาตรฐานแกนกลางที่ทีมต่างๆ ใช้ร่วมกัน" },
        { q: "มีหลัก fair-play ยังไงใน ecosystem", a: "ยึดหลักความเป็นธรรม สื่อสารนโยบายให้ชัด และหลีกเลี่ยงการเปลี่ยนแปลงแบบกะทันหันที่กระทบพาร์ตเนอร์ย้อนหลัง" },
        { q: "ถ้าเจอปัญหาเชิงเทคนิคระดับแพลตฟอร์มต้องทำอะไร", a: "ส่งเรื่องผ่านช่องทาง support ที่ระบุบนเว็บไซต์ เพื่อให้ทีมคัดกรองและส่งต่อเคสได้ตรงจุด" },
        { q: "Gumon Store / Marketplace มีบทบาทอะไรกับพาร์ตเนอร์", a: "เป็นพื้นที่ช่วย discovery ของบริการและส่วนขยาย โดยแนวทางการเติบโตจะค่อยเป็นค่อยไปตามความพร้อมของ ecosystem" },
        { q: "อยากเริ่มคุยเป็นพาร์ตเนอร์ ต้องติดต่อช่องทางไหน", a: "เริ่มจากหน้า Contact แล้วเลือกหัวข้อความร่วมมือ พร้อมใส่ข้อมูลทีมและรูปแบบงานที่ต้องการ เพื่อให้ทีมตอบกลับได้เร็วขึ้น" },
      ],
    },
    {
      title: "Developer FAQ (นักพัฒนา)",
      id: "developer",
      items: [
        { q: "Gumon เหมาะกับทีมพัฒนาแบบไหน", a: "เหมาะกับทีมที่อยากเริ่มโปรเจกต์เร็วขึ้น ลดงาน setup ซ้ำ และต้องการมาตรฐานที่ใช้ซ้ำได้ในหลายโปรเจกต์" },
        { q: "ควรเริ่มจากตรงไหนก่อน (Where should we start)?", a: "เริ่มจากเอกสารหลักและ quickstart ก่อน ให้ทีมได้ first success เร็วที่สุด แล้วค่อยขยายไปยังแนวทาง production" },
        { q: "Gumon ช่วยลดเวลาเริ่มโปรเจกต์ยังไง", a: "ด้วยโครงสร้างมาตรฐานและ pattern พร้อมใช้ ทำให้งานตั้งต้นที่ต้องทำซ้ำทุกครั้งลดลง" },
        { q: "ทีมที่มีระบบเดิมอยู่แล้วเริ่มได้ไหม", a: "เริ่มได้ แนะนำให้เริ่มจากส่วนเล็กที่เห็นผลไวก่อน แล้วค่อยขยายการใช้งานเป็นเฟส" },
        { q: "รองรับ microservices หรือเปล่า", a: "รองรับ โดยเน้นให้การทำงานข้ามบริการมีแบบแผนเดียวกัน เพื่อลดปัญหาการเชื่อมต่อและการดูแลระยะยาว" },
        { q: "ทำไม Gumon เน้นเอกสารมากเป็นพิเศษ", a: "เพราะ documentation คือส่วนหนึ่งของ product experience ยิ่งเอกสารชัด ทีมยิ่งเริ่มได้เองเร็วและไม่ติดขัดง่าย" },
        { q: "ถ้าทีมยังไม่มีมาตรฐานกลาง จะเริ่มยังไงดี", a: "ใช้ baseline จาก Gumon เป็นจุดเริ่มร่วมก่อน แล้วค่อยปรับให้เหมาะกับบริบทธุรกิจของทีม" },
        { q: "ในทางปฏิบัติ productivity ดีขึ้นตรงไหน", a: "ทีมใช้เวลาน้อยลงกับงานโครงสร้างซ้ำๆ และโฟกัสกับงานที่ส่งผลต่อผู้ใช้หรือธุรกิจได้มากขึ้น" },
        { q: "ถ้ามีการเปลี่ยนที่กระทบผู้ใช้ จะสื่อสารยังไง", a: "หลักคือสื่อสารล่วงหน้า มีช่วงเปลี่ยนผ่านที่เหมาะสม และทำให้ทีมวางแผนได้ล่วงหน้า" },
        { q: "มือใหม่เริ่มได้ไหม", a: "เริ่มได้ โครงสร้างเนื้อหาถูกออกแบบให้ไล่ระดับจากพื้นฐานไปจนถึง production use" },
        { q: "ช่วย onboarding คนใหม่ในทีมยังไง", a: "ด้วยเอกสารและ workflow ที่ทำซ้ำได้ ทำให้ส่งต่องานระหว่างทีมง่ายขึ้น และลดการพึ่งพาคนใดคนหนึ่ง" },
        { q: "มี public roadmap ให้ติดตามไหม", a: "แผนงานระดับสาธารณะจะสื่อสารผ่านช่องทางของเว็บไซต์และสื่อทางการ โดยรายละเอียดเชิงภายในจะไม่เผยแพร่ทั้งหมด" },
      ],
    },
    {
      title: "Investor & Strategic Stakeholder FAQ (นักลงทุน/ผู้มีส่วนได้ส่วนเสีย)",
      id: "investor",
      items: [
        { q: "โมเดลธุรกิจของ Gumon ในภาพรวมคืออะไร", a: "เป็นแนวทาง platform economics ที่ให้ความสำคัญกับการใช้งานจริง การเติบโตของ ecosystem และคุณค่าระยะยาว มากกว่าการเร่งตัวเลขระยะสั้น" },
        { q: "ทำไมถึงไม่เน้นโตด้วยการเพิ่มคนแบบเส้นตรง", a: "เพราะแนวทางหลักคือ platform leverage: โตผ่านมาตรฐาน เครื่องมือ เอกสาร และพาร์ตเนอร์ เพื่อให้โครงสร้างเติบโตได้อย่างมีวินัย" },
        { q: "หลัก Open-first สร้างความต่างเชิงกลยุทธ์ยังไง", a: "Open-first ช่วยสร้างความเชื่อมั่นระยะยาว ทำให้ผู้ใช้และพาร์ตเนอร์กล้าลงทุนบนแพลตฟอร์มโดยไม่กังวลเรื่อง lock-in" },
        { q: "หลัก Partner-only สำคัญต่อการเติบโตอย่างไร", a: "ช่วยลด conflict ใน ecosystem และเปิดพื้นที่ให้พาร์ตเนอร์ขยายงานได้จริง ซึ่งส่งผลต่อการเติบโตที่ยั่งยืนกว่าในระยะยาว" },
        { q: "ช่วงเติบโตควรดูตัวชี้วัดอะไร", a: "ให้ดู adoption จริง คุณภาพการใช้งาน ความพร้อมของ ecosystem และความสม่ำเสมอของมาตรฐานเป็นหลัก" },
        { q: "ความเสี่ยงหลักของแพลตฟอร์ม Open Source คืออะไร", a: "ความเสี่ยงสำคัญคือ trust ของ ecosystem, ความชัดเจนของ boundary และความสามารถในการรักษามาตรฐานเมื่อระบบโตขึ้น" },
        { q: "Gumon จัดการความเสี่ยงด้วยแนวคิดอะไร", a: "ใช้แนวคิด risk-by-design วาง governance และมาตรฐานตั้งแต่ต้น เพื่อลดความเสี่ยงเชิงโครงสร้างก่อนเกิดปัญหา" },
        { q: "จุดต่างเมื่อเทียบผู้เล่นรายใหญ่คืออะไร", a: "จุดต่างคือความชัดเจนเรื่อง openness, practical adoption, และ fairness ต่อพาร์ตเนอร์ พร้อมแนวทางที่เน้น interoperability" },
        { q: "ทิศทางการเติบโตระยะกลางของ Gumon เป็นแบบไหน", a: "เริ่มจากฐานการใช้งานจริง ขยายผ่านพาร์ตเนอร์และการศึกษา แล้วค่อยเพิ่มกลไกสร้างมูลค่าเมื่อ ecosystem พร้อม" },
        { q: "คุณค่าเชิงโครงสร้างระยะยาวของ Gumon คืออะไร", a: "การเป็นโครงสร้างพื้นฐานที่ช่วยลดต้นทุนเชิงระบบ เพิ่มความยืดหยุ่นองค์กร และเปิดโอกาสให้หลายฝ่ายสร้างคุณค่าร่วมกัน" },
        { q: "FAQ หน้านี้ถือเป็นคำแนะนำการลงทุนหรือไม่ (Investment advice)?", a: "ไม่ใช่ เนื้อหาในหน้านี้จัดทำเพื่อการสื่อสารข้อมูลสาธารณะทั่วไปเท่านั้น ไม่ใช่คำแนะนำการลงทุนหรือข้อเสนอขายหลักทรัพย์" },
      ],
    },
    {
      title: "Public Policy, Privacy & Contact FAQ (ข้อมูลสาธารณะ/นโยบาย)",
      id: "public-policy",
      items: [
        { q: "เว็บไซต์เก็บข้อมูลส่วนบุคคลประเภทใด", a: "เก็บข้อมูลที่จำเป็นต่อการให้บริการ เช่น ข้อมูลจากฟอร์มติดต่อ ข้อมูลเชิงเทคนิคการใช้งาน และข้อมูลคุกกี้ตามที่ระบุใน Privacy Policy" },
        { q: "ผู้ใช้งานสามารถขอเข้าถึง แก้ไข หรือลบข้อมูลได้หรือไม่", a: "สามารถดำเนินการได้ตามสิทธิภายใต้กฎหมายที่เกี่ยวข้อง โดยติดต่อผ่านหน้า Contact หรืออีเมลที่ประกาศบนเว็บไซต์" },
        { q: "หากไม่ต้องการใช้คุกกี้ต้องทำอย่างไร", a: "ผู้ใช้สามารถปรับการตั้งค่าเบราว์เซอร์เพื่อปฏิเสธหรือลบคุกกี้ได้ และดูรายละเอียดเพิ่มเติมในหน้า Cookie Notice" },
        { q: "การใช้งานเนื้อหาและแบรนด์บนเว็บไซต์มีข้อกำหนดหรือไม่", a: "มี โดยอยู่ภายใต้เงื่อนไขตามหน้า Terms of Use และนโยบายที่เกี่ยวข้องกับทรัพย์สินทางปัญญา" },
        { q: "ข้อมูลบนเว็บไซต์รับประกันความครบถ้วน 100% หรือไม่", a: "เว็บไซต์พยายามดูแลข้อมูลให้ถูกต้องและอัปเดตสม่ำเสมอ แต่เนื้อหาบางส่วนอาจเปลี่ยนได้ตามเวลา ควรใช้ดุลยพินิจในการนำไปตัดสินใจ" },
        { q: "ต้องการติดต่อทีม Gumon ควรใช้ช่องทางไหน", a: "สามารถติดต่อผ่านหน้า Contact หรืออีเมลที่ระบุบนเว็บไซต์ โดยควรใส่ข้อมูลบริบทโครงการเพื่อให้ทีมตอบกลับได้ตรงประเด็น" },
        { q: "ต้องการพูดคุยความร่วมมือเชิง Partner หรือองค์กรได้หรือไม่", a: "ได้ สามารถส่งข้อมูลเบื้องต้นผ่านหน้า Contact เพื่อให้ทีมคัดเส้นทางประสานงานให้เหมาะกับกรณีใช้งาน" },
        { q: "ถ้าต้องการใช้โลโก้หรือสื่อของ Gumon เพื่อประชาสัมพันธ์ต้องทำอย่างไร", a: "กรุณาติดต่อทีมผ่านหน้า Contact ก่อนใช้งาน เพื่อให้เป็นไปตามเงื่อนไขด้านแบรนด์และทรัพย์สินทางปัญญา" },
      ],
    },
  ],
};

const en: Copy = {
  title: "FAQ",
  description: "Frequently asked questions for partners, developers, investors, and public users.",
  kicker: "FAQ",
  heading: "Frequently Asked Questions for partners, developers, investors, and public users",
  intro: "This page consolidates commonly asked questions so important business, technical, and policy information is easier to find.",
  needDetailKicker: "Need More Detail",
  needDetailHeading: "If you cannot find your answer",
  contactCta: "Go to Contact",
  groups: [
    {
      title: "Partner FAQ",
      id: "partner",
      items: [
        { q: "Does Gumon compete with partners for end-delivery projects?", a: "No. Gumon focuses on platform standards and tooling. Commercial end delivery is primarily partner-led." },
        { q: "What do partners gain from joining the Gumon ecosystem?", a: "Partners get shared standards, reference documentation, and enablement practices that improve startup speed and delivery quality." },
        { q: "What readiness is expected before becoming a partner?", a: "A consistent delivery team, implementation capability, and readiness to operate on shared standards with other ecosystem teams." },
        { q: "How should enterprise customers start projects through partners?", a: "Start with a high-impact use case and align on shared standards from day one so expansion is easier in later phases." },
        { q: "How does Gumon reduce delivery risk?", a: "Through clear standards, compatibility guidance, and practical documentation used consistently across teams." },
        { q: "Why must Gumon and partner boundaries stay clear?", a: "Clear role boundaries help every party plan transparently and reduce long-term overlap and channel conflict." },
        { q: "Can partners build specialized services on top of Gumon?", a: "Yes. The platform is designed for extension while preserving core standards shared across teams." },
        { q: "What fair-play principles apply in the ecosystem?", a: "Policy clarity, transparent communication, and avoiding abrupt changes that negatively impact partners retroactively." },
        { q: "What should we do when platform-level technical issues occur?", a: "Report through the published support channels so the issue can be triaged and routed to the right team quickly." },
        { q: "What role does Gumon Store / Marketplace play for partners?", a: "It supports service and extension discovery, with growth developed progressively based on ecosystem maturity." },
        { q: "How do we start a partner discussion?", a: "Use the Contact page, choose partnership intent, and include team and delivery context for faster response." },
      ],
    },
    {
      title: "Developer FAQ",
      id: "developer",
      items: [
        { q: "What kind of engineering teams is Gumon best for?", a: "Teams that want faster project startup, less repeated setup work, and reusable standards across multiple projects." },
        { q: "Where should we start?", a: "Start with core documentation and quickstart to achieve first success quickly, then expand into production patterns." },
        { q: "How does Gumon reduce project startup time?", a: "Shared architecture baselines and reusable patterns reduce recurring initial setup work." },
        { q: "Can teams with existing legacy systems adopt Gumon?", a: "Yes. Start with a small high-impact scope, then expand by phase." },
        { q: "Does Gumon support microservices?", a: "Yes, with emphasis on consistent cross-service patterns to reduce long-term integration and maintenance risk." },
        { q: "Why does Gumon emphasize documentation so heavily?", a: "Documentation is part of product experience. Better documentation enables teams to self-serve and move faster." },
        { q: "What if our team has no shared standards yet?", a: "Use Gumon baseline standards first, then adapt them to your business context." },
        { q: "Where does productivity improve in practical terms?", a: "Teams spend less time on repeated infrastructure setup and more time on user and business outcomes." },
        { q: "How should changes that affect users be communicated?", a: "Communicate early, provide transition windows, and make planning impact visible ahead of rollout." },
        { q: "Can beginners adopt Gumon?", a: "Yes. The content structure is designed from fundamentals to production-grade usage." },
        { q: "How does Gumon help onboard new team members?", a: "Repeatable documentation and workflow make handover easier and reduce dependence on specific individuals." },
        { q: "Is there a public roadmap?", a: "Public roadmap updates are shared via official channels. Internal detail is not published in full." },
      ],
    },
    {
      title: "Investor & Strategic Stakeholder FAQ",
      id: "investor",
      items: [
        { q: "What is Gumon's high-level business model?", a: "A platform-economics model prioritizing practical adoption, ecosystem growth, and long-term value over short-term vanity metrics." },
        { q: "Why not scale linearly by adding headcount?", a: "Core strategy is platform leverage: scaling through standards, tooling, documentation, and partners." },
        { q: "How does an open-first strategy create strategic advantage?", a: "Open-first builds long-term trust and lowers lock-in risk so users and partners can invest with confidence." },
        { q: "Why is a partner-only delivery stance important for growth?", a: "It reduces ecosystem conflict and creates real room for partners to scale, improving long-term sustainability." },
        { q: "Which indicators matter most during growth?", a: "Practical adoption, usage quality, ecosystem readiness, and consistency of execution standards." },
        { q: "What are the key risks in open-source platform strategy?", a: "Ecosystem trust, boundary clarity, and maintaining standards while the system scales." },
        { q: "How does Gumon manage those risks?", a: "Risk-by-design governance and standards are built early to reduce structural risk before incidents occur." },
        { q: "What differentiates Gumon from larger incumbents?", a: "Clear openness, practical adoption focus, partner fairness, and interoperability-first execution." },
        { q: "What is Gumon's medium-term growth direction?", a: "Start from practical usage, expand through partners and education channels, then add value mechanisms as the ecosystem matures." },
        { q: "What is Gumon's long-term structural value?", a: "Shared infrastructure that lowers system-level cost, increases organizational flexibility, and enables multi-party value creation." },
        { q: "Is this FAQ investment advice?", a: "No. This content is public information only and is not investment advice or a securities offering." },
      ],
    },
    {
      title: "Public Policy, Privacy & Contact FAQ",
      id: "public-policy",
      items: [
        { q: "What personal data does the website collect?", a: "Only data necessary for service operation, such as contact-form submissions, technical usage data, and cookie data as described in the Privacy Policy." },
        { q: "Can users request access, correction, or deletion of data?", a: "Yes, under applicable law. Requests can be submitted via Contact or published email channels." },
        { q: "How can users disable cookies?", a: "Users can reject or delete cookies through browser settings and review details in the Cookie Notice." },
        { q: "Are there terms for using website content and brand assets?", a: "Yes. Usage is governed by Terms of Use and related intellectual-property policies." },
        { q: "Is website information guaranteed to be 100% complete?", a: "We maintain accuracy and timely updates, but some content may change. Users should apply independent judgment." },
        { q: "What is the recommended channel to contact Gumon?", a: "Use the Contact page or listed emails and include relevant project context for faster, more accurate response." },
        { q: "Can organizations discuss partnership opportunities?", a: "Yes. Submit initial context through Contact so the team can route your request appropriately." },
        { q: "How can we request permission to use Gumon logos or media?", a: "Please contact the team through the Contact page before use to ensure brand and IP policy compliance." },
      ],
    },
  ],
};

const fallbackNoticeByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "当前语言版本正在本地化中。以下内容暂以英文提供。",
  ja: "現在この言語版はローカライズ中です。以下は英語版です。",
  ko: "현재 해당 언어 버전은 현지화 중입니다. 아래 내용은 영어로 제공됩니다。",
  es: "Esta versión del idioma está en localización. El contenido se muestra en inglés temporalmente.",
  fr: "Cette version est en cours de localisation. Le contenu ci-dessous est temporairement en anglais.",
  de: "Diese Sprachversion wird derzeit lokalisiert. Der folgende Inhalt wird vorübergehend auf Englisch angezeigt.",
  "pt-BR": "Esta versão de idioma está em localização. O conteúdo abaixo é exibido temporariamente em inglês.",
  ar: "هذه النسخة اللغوية قيد التوطين حالياً. يتم عرض المحتوى أدناه باللغة الإنجليزية مؤقتاً.",
};

function copyFor(locale: Locale): Copy {
  return locale === "th" ? th : en;
}

async function getLocale(params?: Promise<{ locale?: string }>): Promise<Locale> {
  if (!params) return resolveLocale("th");
  const resolved = await params;
  return resolveLocale(resolved.locale);
}

export async function generateMetadata({ params }: { params?: Promise<{ locale?: string }> }): Promise<Metadata> {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  return buildPageMetadata({ title: copy.title, description: copy.description, path: "/faq" });
}

export default async function FaqPage({ params }: { params?: Promise<{ locale?: string }> }) {
  const locale = await getLocale(params);
  const copy = copyFor(locale);
  const fallbackNotice = locale !== "th" && locale !== "en" ? fallbackNoticeByLocale[locale] : null;

  return (
    <section className="ui-section">
      <BreadcrumbJsonLd items={[{ name: "FAQ", path: "/faq" }]} />
      <div className="ui-container">
        <p className="ui-kicker">{copy.kicker}</p>
        <h1 className="ui-h1">{copy.heading}</h1>
        <p className="mt-6 max-w-3xl ui-p">{copy.intro}</p>

        {fallbackNotice ? <div className="mt-6 rounded-xl border border-line/45 bg-bg1/55 p-4 text-sm text-mist">{fallbackNotice}</div> : null}

        <div className="mt-8 flex flex-wrap gap-2">
          {copy.groups.map((group) => (
            <TrackedLink key={group.id} href={`#${group.id}`} className="rounded-full border border-line/45 bg-surf/50 px-4 py-2 text-xs tracking-[0.08em] uppercase text-mist transition hover:border-accent/60 hover:text-ink">
              {group.title}
            </TrackedLink>
          ))}
        </div>

        <div className="mt-12 grid gap-6">
          {copy.groups.map((group) => (
            <div key={group.title} id={group.id} className="card p-7 shadow-soft scroll-mt-28">
              <h2 className="ui-h3">{group.title}</h2>
              <div className="mt-5 grid gap-4">
                {group.items.map((item, index) => (
                  <details key={item.q} className="route-card" open={index === 0}>
                    <summary className="cursor-pointer list-none text-base font-semibold pr-8 relative">
                      {item.q}
                      <span className="absolute right-0 top-0 text-mist">+</span>
                    </summary>
                    <p className="mt-3 text-sm md:text-base text-mist leading-relaxed">{item.a}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 card p-7 shadow-soft">
          <p className="ui-kicker">{copy.needDetailKicker}</p>
          <h2 className="mt-3 ui-h2">{copy.needDetailHeading}</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <TrackedLink href="/contact" className="btn-primary">{copy.contactCta}</TrackedLink>
            <a href="mailto:contact@gumon.io" className="btn-secondary">contact@gumon.io</a>
          </div>
        </div>
      </div>
    </section>
  );
}
