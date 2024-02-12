function question1yes(){
    const r=document.querySelector('#q1respond');
   const r1=document.createElement('p');
   r1.textContent="เค้าดีใจมากขนาดเลิกคุยกันเเล้วยังหาเวลามาให้เค้าเค้าว่าเธอคงยุ่งมากจริงๆเค้าผิดเองที่ไม่เข้าใจเธอ";
   r.appendChild(r1);

}
function question1no(){
    const r=document.querySelector('#q1respond');
   const r1=document.createElement('p');
   r1.textContent="ไม่เป็นไรเธอ เค้าเข้าใจเค้าเเค่อยากเจอเธออีกครั้ง";
   r.appendChild(r1);

}
function question2yes(){
    const r=document.querySelector('#q2respond');
   const r2=document.createElement('p');
   r2.textContent="เค้าขอโทษนะเพราะที่ผ่านมาสองเดือนเป็นครั้งเเรกที่เค้ารู้สึกว่า อยู่คนเดียวเหมือนเคยไม่ได้ดีเท่ามีเธอมาอยู่ด้วย";
   r.appendChild(r2);

}
function question2no(){
    const r=document.querySelector('#q2respond');
   const r2=document.createElement('p');
   r2.textContent="งั้นก็ขอบคุณนะ แต่พักหลังๆนี่ไม่ตอบแชทเค้าเลยนะ555555";
   r.appendChild(r2);

}
function question3yes(){
    const r=document.querySelector('#q3respond');
   const r3=document.createElement('p');
   r3.textContent="โอเคอย่างน้อยเราก็รู้สึกแบบเดียวกันทั้งคู่ เค้าอยากให้รู้นะว่าสำหรับเค้ามันดีมากกแต่น่าเสียดายเราไม่เข้ากันในบางเรื่อง";
   r.appendChild(r3);

}
function question3no(){
    const r=document.querySelector('#q3respond');
   const r3=document.createElement('p');
   r3.textContent="งั้นก็ขอบคุณเวลาที่มีให้กันตลอดมานะ เค้าขอบคุณมากจริงๆมันเป็นสองเดือนที่ดีมากเเละเร็วมาก และมันเป็นรักแรกของเค้า";
   r.appendChild(r3);

}
function question4yes(){
    const r=document.querySelector('#q4respond');
   const r4=document.createElement('p');
   r4.textContent="งั้นก็เรารู้สึกตรงกัน งั้นเค้าบอกตรงนี้เลยนะกลับมาคุยกันไหมเรื่องที่ไม่เข้ากันเรามาเปิดอกคุยกัน";
   r.appendChild(r4);
  
  
}
function question4no(){
    const r=document.querySelector('#q4respond');
   const r4=document.createElement('p');
   r4.textContent="งั้นโอเคเค้าว่า มันจบไม่ค่อยสวยแต่มันจบลงแบบโอเคมากๆเลยนะ ครั้งนี้อ่ะขอบคุณมากๆนะครับ";
   r.appendChild(r4);
   
}
function next(){
    window.location.href="finalpage.html";
}