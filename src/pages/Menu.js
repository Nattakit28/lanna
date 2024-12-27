import React from 'react';
import '../App.css';

const Menu = () => {
  return (
    <section id="menu" className="info-section">
      <div className="info-container">
        <div className="info-text">
          <h2>เกี่ยวกับวิทยาลัยโปลิเทคนิคลานนาเชียงใหม่</h2>
          <p>
            วิทยาลัยโปลิเทคนิคลานนาเชียงใหม่เป็นสถาบันการศึกษาที่มีชื่อเสียง 
            เน้นการพัฒนานักศึกษาในด้านเทคโนโลยีสารสนเทศและการทำงานจริงในอุตสาหกรรม 
            เพื่อเตรียมความพร้อมสำหรับการทำงานในยุคดิจิทัล
          </p>

          <h3>วิสัยทัศน์</h3>
          <p>
            ผลิตบุคลากรที่มีคุณภาพ มีความรู้ ความสามารถทางเทคโนโลยีสารสนเทศ 
            และตอบสนองความต้องการของตลาดแรงงานอย่างยั่งยืน
          </p>

          <h3>เป้าหมาย</h3>
          <ul>
            <li>พัฒนาทักษะทางวิชาการและวิชาชีพที่ทันสมัย</li>
            <li>เชื่อมโยงการเรียนรู้กับการทำงานในภาคอุตสาหกรรม</li>
            <li>สร้างนักศึกษาที่พร้อมเผชิญความท้าทายของโลกดิจิทัล</li>
            <li>ส่งเสริมคุณธรรมและจริยธรรมในการทำงาน</li>
          </ul>
        </div>

        <div className="info-image">
          <img src="https://www.lannapoly.ac.th/web/assets/img-it-UTNwL-IP.jpeg" alt="Lanna Polytechnic College" />
        </div>
      </div>
    </section>
  );
};

export default Menu;
