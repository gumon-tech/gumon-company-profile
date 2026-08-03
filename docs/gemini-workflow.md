# Gemini workflow (copy review & localization)

ใช้สำหรับ review copywriting และ generate คำแปลของ locale ที่เหลือ
**ไม่ได้ผูกกับ build หรือ deploy** — เป็นเครื่องมือช่วยตอนเขียน content เท่านั้น

## Key

สคริปต์อ่านจาก env `GEMINI_API_KEY` เท่านั้น ไม่มีการเขียนคีย์ลงไฟล์ใน repo นี้
(คีย์ของ Gumon อยู่ในไฟล์ `.env` ของโปรเจกต์อื่นบนเครื่อง dev — ไม่ commit เข้ามาที่นี่)

```bash
set -a; . /path/to/project/.env; set +a   # โหลด GEMINI_API_KEY เข้า shell
```

## Commands

Review copy:

```bash
node scripts/gemini.mjs --model gemini-3-pro-preview --prompt "Review this website copy for tone and clarity. Reply in Thai." --stdin < draft.txt
```

Generate structured output (บังคับให้ตอบเป็น JSON):

```bash
node scripts/gemini.mjs --json --prompt "Translate the JSON below into fr. Keep keys unchanged." --stdin < source.json
```

Flags: `--prompt` (บังคับ) · `--model` (default `gemini-3-pro-preview`) · `--json` · `--stdin`

## Models ที่ใช้ได้ (ยืนยัน 2026-08-03)

- ข้อความ: `gemini-3-pro-preview`, `gemini-3-flash-preview`, `gemini-2.5-pro`, `gemini-2.5-flash`
- ภาพ: `gemini-3-pro-image`, `gemini-3.1-flash-image`, `gemini-2.5-flash-image`
  (endpoint เดียวกัน แต่ response จะมี `inlineData` — `scripts/gemini.mjs` ยังรองรับเฉพาะ text)

ดูรายการล่าสุด:

```bash
curl -s -H "x-goog-api-key: $GEMINI_API_KEY" https://generativelanguage.googleapis.com/v1beta/models
```

## กติกา

- อย่าใส่คีย์ลงใน argv (มันโผล่ใน `ps`) — ใช้ env เท่านั้น
- Gemini ใช้ **ช่วย review และแปล** ผลลัพธ์ต้องมีคนอ่านก่อนขึ้นเว็บเสมอ
- ห้ามส่งข้อมูลลูกค้าหรือเอกสารที่เป็นความลับเข้า API นี้ — ใช้กับ copy ของเว็บ public เท่านั้น
