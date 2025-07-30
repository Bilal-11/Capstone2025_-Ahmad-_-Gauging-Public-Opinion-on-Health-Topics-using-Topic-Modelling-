const article_link_txtbox = document.querySelector('#articleLink')
const btn = document.querySelector('#getComments')
const comments_display = document.querySelector('#commentsDisplay')



btn.addEventListener('click',(e)=>{
    comments_display.textContent = article_link_txtbox.value
})