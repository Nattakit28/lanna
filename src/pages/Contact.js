import React from 'react';
import '../App.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>ติดต่อเรา</h1>

      <div className="contact-info">
        <p><strong>เบอร์โทรศัพท์:</strong> 081-234-5678</p>
        <p><strong>อีเมล์:</strong> contact@pcl.ac.th</p>
      </div>

      <div className="contact-form">
        <h2>ฟอร์มติดต่อ</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">ชื่อ:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">อีเมล์:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">ข้อความ:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">ส่งข้อความ</button>
        </form>
      </div>

      <div className="map">
        <h2>แผนที่</h2>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.739177688036!2d98.99999999999999!3d18.799999999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da3a99999abcd!2sPolytechnic%20Lanna%20College!5e0!3m2!1sth!2sth!4v1234567890!5m2!1sth!2sth"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
