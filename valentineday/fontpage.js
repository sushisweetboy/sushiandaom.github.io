
function yes(){
     const a=document.querySelector('yesbutton');
     
        window.location.href = "yespage.html";
     };

function no(){
    
     
    let invite =document.querySelector('.invite');
    let inviteword=document.querySelector('#inviteword');
    let paragraph=document.createElement('h1');
    paragraph.textContent='เลือกผิดแล้ว';
    invite.replaceChild(paragraph,inviteword);
    setTimeout(function(){
        invite.replaceChild(inviteword,paragraph);
     },1500);
}