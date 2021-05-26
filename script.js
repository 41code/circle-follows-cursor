
    var cursor = document.getElementById('circulo');
    var btnRouded = document.querySelectorAll('.btn-rounded');
        
    window.onmousemove = function(e){
        cursor.style.setProperty("--x",e.pageX +'px');
        cursor.style.setProperty("--y",e.pageY +'px');
    }

    btnRouded.forEach((item)=>{
        item.addEventListener("mouseover",function(e){
            cursor.classList.add("stop");
        })
    });

    btnRouded.forEach((item)=>{
        item.addEventListener("mouseout",function(e){
            cursor.classList.remove("stop");
        })
    });

    btnRouded.forEach((item)=>{
        item.addEventListener("mousemove",function(e){

            const xx = e.pageX - item.offsetLeft;
            const yy = e.pageY - item.offsetTop;
            item.style.setProperty("--xx",xx +'px');
            item.style.setProperty("--yy",yy +'px');
        })
    });