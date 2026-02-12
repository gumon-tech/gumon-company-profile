export const metadata = {
  title: "ติดต่อ",
  description:
    "ติดต่อทีม Gumon สำหรับความร่วมมือ technical support และข้อมูลสำหรับนักลงทุน",
};

export default function Page() {
  return (
    <section className="ui-section">
      <div className="ui-container">
        <p className="ui-kicker">ติดต่อเรา</p>
        <h1 className="ui-h1">ติดต่อ Gumon</h1>
        <p className="mt-6 max-w-2xl ui-p">
          ระบุหัวข้อที่ต้องการและเล่าบริบทสั้นๆ ทีมงานจะส่งต่อให้ตรงฝ่ายและติดต่อกลับโดยเร็ว
        </p>

        <div className="mt-12 grid lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 card p-7 shadow-soft">
            <h2 className="ui-h3">ส่งคำถามของคุณ</h2>
            <form className="mt-6 grid gap-4">
              <label className="grid gap-2">
                <span className="text-sm text-mist">ชื่อ-นามสกุล</span>
                <input className="rounded-xl2 border border-line/20 bg-bg1/60 px-4 py-3 text-sm" placeholder="ชื่อของคุณ" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-mist">อีเมลองค์กร</span>
                <input className="rounded-xl2 border border-line/20 bg-bg1/60 px-4 py-3 text-sm" placeholder="name@company.com" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-mist">องค์กร</span>
                <input className="rounded-xl2 border border-line/20 bg-bg1/60 px-4 py-3 text-sm" placeholder="ชื่อองค์กร" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-mist">ประเภทคำถาม</span>
                <select className="rounded-xl2 border border-line/20 bg-bg1/60 px-4 py-3 text-sm">
                  <option>ความร่วมมือทางธุรกิจ</option>
                  <option>สนับสนุนด้านเทคนิค</option>
                  <option>ข้อมูลสำหรับนักลงทุน</option>
                  <option>สื่อและประชาสัมพันธ์</option>
                </select>
              </label>
              <label className="grid gap-2">
                <span className="text-sm text-mist">รายละเอียด</span>
                <textarea
                  rows={5}
                  className="rounded-xl2 border border-line/20 bg-bg1/60 px-4 py-3 text-sm"
                  placeholder="เล่าบริบท ข้อจำกัด เป้าหมาย และ timeline ที่ต้องการ"
                />
              </label>
              <button type="button" className="btn-primary w-fit">ส่งคำถาม</button>
            </form>
          </div>

          <div className="lg:col-span-5 card p-7 shadow-soft">
            <p className="ui-kicker">ช่องทางหลัก</p>
            <h2 className="mt-3 ui-h3">เลือกหัวข้อให้ตรงทีม</h2>
            <ul className="mt-4 space-y-3 text-sm text-mist">
              <li>ความร่วมมือทางธุรกิจ: พูดคุยรูปแบบการทำงานร่วมกัน</li>
              <li>สนับสนุนด้านเทคนิค: คำถามเริ่มใช้งานหรือการต่อยอดระบบ</li>
              <li>ข้อมูลสำหรับนักลงทุน: ขอข้อมูลแผนงานและภาพรวมธุรกิจ</li>
              <li>สื่อและประชาสัมพันธ์: ประสานงานด้านข่าวสารและภาพลักษณ์องค์กร</li>
            </ul>
            <p className="mt-6 text-sm text-mist">
              หากเพิ่งเริ่มใช้งาน แนะนำให้ดูหน้าสำหรับนักพัฒนาและหน้าการเรียนรู้ก่อน
              เพื่อได้คำตอบเร็วขึ้น
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
