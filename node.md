HTML

●.HMTL <span> ในสำหรับเติมสี้ใน css จัดในองค์ประกอบย่อย
มีผลในบรรทัด ไม่ออกนอกบรรทัด
เช่น <p>นี่คือข้อความปกติ แต่คำนี้คือ <span style="color: red;">สีแดง</span> ที่ถูกแยกออกมา</p>


CSS

●root {} กำหนดพี่จะใช้ในเว็ปโดยเก็บมาเป็นคำสั้งใช้งานง่ายๆภาพหลัง
●html {scroll-behavior: smooth;} ทำให้การเลือนสมุทขี้น
●overflow-x: hidden; ไม้ให้เลือนสกอในแนวนอนได้
●backdrop-filter: blur(12px); ทำให้พิ้นหลัวเบอ 12px
●transition:color var(--transition); ทำให้ตอนเปลี่ยนตอน hover ลื่นขี้น 0.3 มาจาก
  --transition: 0.3s ease;
●.nav-links a:hover { color: var(--accent);}
●.letter-spacing แบงช่องว่างไฟของตัวอักษร
● position: absolute ทำให้ วัสถุเคลือนไหนได้อิตสะ
● animation: fadeUp 0.6s 0.5s ease both;
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
}
ทำให้วัตถุเฟตขึ้นเมื่อเปิดหน้าต่างมา
 ค่อย ๆ โผล่ขึ้นมาจากด้านล่าง
 พร้อมกับจางจาก 0 → 1
 ใช้เวลา 0.6s และเริ่มหลังจากรอ 0.5s
เป็นเอฟเฟกต์ยอดนิยมสำหรับการทำให้ข้อความหรือรูปภาพ “ลอยขึ้น” แบบนุ่ม ๆ

● text-transform: uppercase เปลี่ยนตัวอักษรให้เป็นตัวใหญ่หมด
●  display: block กินเต็มพืนที่เสมอ
● transition: all var(--transition); ประกาศไว้ก่อนว่าจะทำ transition แล้วค่อยมาเปลี่ยนที่หลัง

● content: ''; ต้องมี text ก่อนถึงจะแสดง
● background: linear-gradient(90deg, var(--accent), var(--accent2));
ไล่สีจาก A -> B 
● :Before คือสร้างรอไว้ก่อนอันที่ต้องการให้จะเป็น
● :hover เมาส์ชี้มื้อทำงาน
● :hover::before = ตอนเมาส์ชี้ ให้เปลี่ยนสไตล์ของ element เสมือนนั้
● position: relative; คงตัวเองอยู่ใน layer

JS

●substring(0,0)
ตัดstringที่กำหนด (start,end)

"Hello world".substring(0, 5)
// ผลลัพธ์: "Hello" ตั้งแต่ตัวที่ 5 เป็นต้นไป

"JavaScript".substring(4)
// ผลลัพธ์: "Script" ถ้าใส่แค่ start


●let speed = isDeleting ? 60 : 110;
<!-- let speed;

if (isDeleting) {
    speed = 60;
} else {
    speed = 110;
} -->

● เอฟเฟกต์พิมพ์ดีด (typewriter effect)

● let speed = isDeleting ? 60 : 110;
● setTimeout(type, speed);
● type()
ทำให้เกิดเรียกซ้ำได้แบบ 再帰
type() ทำงาน
   ↓
รอ 110 ms
   ↓
เรียก type() ใหม่
   ↓
รออีก
   ↓
เรียกใหม่อีก

● SetTimeout()
setTimeout(function, delay);
- function → โค้ดที่ต้องการให้ทำงาน
- delay → เวลาหน่วง (มิลลิวินาที) เช่น 1000 = 1 วินาที
setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

แ window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

ตอนบนสุด → navbar ใหญ่
พอเลื่อนลง → navbar เล็กลง เพื่อประหยัดพื้นที่

● window.addEventListener("scroll", ...)
รับฟัง event เมื่อมีการสกอเกิดขึ้น

●
