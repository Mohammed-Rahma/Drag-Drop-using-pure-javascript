let btn = document.getElementById('btn')
let inp = document.getElementById('inp')
let boxs = document.querySelectorAll('.Box')
let drag = null;

btn .onclick = function(){

    if(inp.value != ''){
        boxs[0].innerHTML +=
        innerHTML = `
        <p class ="item" draggable = "true"> ${inp.value} <p/>

            `
        inp.value ='';
    }
    dragItem();
}

function dragItem(){
        let items = document.querySelectorAll('.item');
        items.forEach(item=>{
            item.addEventListener('dragstart' ,function(){
                drag=item;
                item.style.opacity='0.5';
            })
        })

        items.forEach(item=>{
            item.addEventListener('dragend' ,function(){
                drag=null;
                item.style.opacity='1';
            })
        })

        boxs.forEach(box=>{
            box.addEventListener('dragover' , function(e){
                e.preventDefault
                this.style.background = '#284fc2';
                this.style.color = "#fff"
            })

            box.addEventListener('dragleave' , function(){
                this.style.background = '#fff';
                this.style.color='#000'
            })
            
            box.addEventListener('drop' ,function(){
                box.append(drag);
                this.style.background = '#fff';
                this.style.color='#000'
            })
        })

    
}


