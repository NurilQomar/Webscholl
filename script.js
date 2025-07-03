
document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.item').forEach(i =>
            i.classList.remove('active'))
            item.classList.add('active');
            console.log(item)
            console.log(i)
        });
    }); 
    
const items = document.querySelectorAll(".wrapper-card .item");
  let index = 0;

  setInterval(() => {
    items.forEach((item, i) => item.classList.remove("active"));
    items[index % items.length].classList.add("active");
    index++;
  }, 3000);
  
instagram.addEventListener("click",()=>{
  instagram.style.color = '#536ee0';
})
whatsapp.addEventListener("click",()=>{
  whatsapp.style.color = '#6ff624';
})
facebook.addEventListener("click",()=>{
  facebook.style.color = '#316fea';
})
youtube.addEventListener("click",()=>{
  youtube.style.color = '#de2626';
})
