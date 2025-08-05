const article_link_txtbox = document.querySelector('#articleLink')
const btn = document.querySelector('#getComments')
const comments_display = document.querySelector('#commentsDisplay')



btn.addEventListener('click',async (e)=>{
    try{
        const response = await fetch('http://127.0.0.1:8000/comments/?url=' + article_link_txtbox.value)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        final_display =''
        for(i in Object.keys(json)){
            final_display += i.toString() + '::' + json[i] + '<br><br>'
        }
        // comments_display.innerHTML = final_display
        comments_display.innerHTML = JSON.stringify(json)
    }
    catch(err){
        console.error(error.message);
    }

    
})