import type { Locale } from "@/lib/i18n";

const fallbackNoticeByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "当前语言版本正在本地化中。以下内容暂以英文提供。",
  "zh-TW": "目前此語言版本正在本地化中。以下內容暫以英文提供。",
  ja: "現在この言語版はローカライズ中です。以下は英語版です。",
  ko: "현재 해당 언어 버전은 현지화 중입니다. 아래 내용은 영어로 제공됩니다。",
  vi: "Phiên bản ngôn ngữ này đang được bản địa hóa. Nội dung bên dưới hiện được hiển thị bằng tiếng Anh.",
  id: "Versi bahasa ini sedang dalam proses lokalisasi. Konten di bawah ini sementara ditampilkan dalam bahasa Inggris.",
  ms: "Versi bahasa ini sedang dilokalkan. Kandungan di bawah dipaparkan dalam bahasa Inggeris buat sementara waktu.",
  hi: "यह भाषा संस्करण स्थानीयकरण प्रक्रिया में है। नीचे की सामग्री फिलहाल अंग्रेज़ी में दिखाई जा रही है।",
  es: "Esta versión del idioma está en localización. El contenido se muestra en inglés temporalmente.",
  fr: "Cette version est en cours de localisation. Le contenu ci-dessous est temporairement en anglais.",
  de: "Diese Sprachversion wird derzeit lokalisiert. Der folgende Inhalt wird vorübergehend auf Englisch angezeigt.",
  it: "Questa versione linguistica è in fase di localizzazione. Il contenuto seguente viene mostrato temporaneamente in inglese.",
  nl: "Deze taalversie wordt momenteel gelokaliseerd. De onderstaande inhoud wordt tijdelijk in het Engels getoond.",
  pl: "Ta wersja językowa jest obecnie lokalizowana. Poniższa treść jest tymczasowo wyświetlana w języku angielskim.",
  tr: "Bu dil sürümü şu anda yerelleştiriliyor. Aşağıdaki içerik geçici olarak İngilizce gösterilmektedir.",
  ru: "Эта языковая версия сейчас локализуется. Содержимое ниже временно отображается на английском языке.",
  uk: "Ця мовна версія зараз локалізується. Вміст нижче тимчасово відображається англійською мовою.",
  sv: "Den här språkversionen lokaliseras just nu. Innehållet nedan visas tillfälligt på engelska.",
  "pt-BR": "Esta versão de idioma está em localização. O conteúdo abaixo é exibido temporariamente em inglês.",
  ar: "هذه النسخة اللغوية قيد التوطين حالياً. يتم عرض المحتوى أدناه باللغة الإنجليزية مؤقتاً.",
  he: "גרסת שפה זו נמצאת כעת בתהליך לוקליזציה. התוכן שלהלן מוצג זמנית באנגלית.",
};

export function getFallbackNotice(locale: Locale): string | null {
  if (locale === "th" || locale === "en") return null;
  return null;
}
