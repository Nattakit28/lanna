import React from "react";
import '../App.css';

const Courses = () => {
  const vocationalCourses = [
    {
      level: "ปวช.",
      programs: [
        {
          name: "การเขียนโปรแกรมคอมพิวเตอร์",
          description: "เรียนรู้พื้นฐานการเขียนโปรแกรม การพัฒนาเว็บและแอปพลิเคชันเบื้องต้น",
          expertise: "นักศึกษาจะมีทักษะพื้นฐานด้านการเขียนโปรแกรมและการแก้ปัญหาด้วยโค้ด"
        },
        {
          name: "การจัดการฐานข้อมูล",
          description: "การออกแบบและจัดการฐานข้อมูลด้วยเครื่องมือมาตรฐาน",
          expertise: "นักศึกษาจะสามารถสร้างและจัดการฐานข้อมูลเพื่อใช้ในระบบต่าง ๆ ได้"
        }
      ]
    },
    {
      level: "ปวส.",
      programs: [
        {
          name: "การพัฒนาซอฟต์แวร์",
          description: "การพัฒนาซอฟต์แวร์อย่างมืออาชีพ รวมถึงการทำงานในโครงการจริง",
          expertise: "นักศึกษาจะสามารถพัฒนาซอฟต์แวร์ที่ซับซ้อนและใช้งานได้จริงในองค์กร"
        },
        {
          name: "เครือข่ายคอมพิวเตอร์",
          description: "การออกแบบและบริหารจัดการระบบเครือข่ายในองค์กร",
          expertise: "นักศึกษาจะมีทักษะในการติดตั้ง ดูแล และแก้ปัญหาเครือข่ายคอมพิวเตอร์"
        }
      ]
    }
  ];

  return (
    <div className="courses">
      <h1>หลักสูตรที่เปิดสอน</h1>
      {vocationalCourses.map((course) => (
        <div key={course.level} className="course-level">
          <h2>ระดับ {course.level}</h2>
          {course.programs.map((program, index) => (
            <div key={index} className="program">
              <h3>{program.name}</h3>
              <p><strong>คำอธิบาย:</strong> {program.description}</p>
              <p><strong>ความเชี่ยวชาญ:</strong> {program.expertise}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Courses;
