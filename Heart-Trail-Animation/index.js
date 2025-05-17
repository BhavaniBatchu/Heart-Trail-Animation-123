const bodyel = document.querySelector("body")
bodyel.addEventListener("mousemove", (event)=>{
    const Xpos = event.offsetX
    const Ypos = event.offsetY
    const spanEl = document.createElement("span")
    spanEl.style.left = Xpos +"px";
    spanEl.style.top = Ypos +"px";
    const size = Math.random()*100;
    spanEl.style.width = size+ "px";
    spanEl.style.height = size + "px";
    bodyel.appendChild(spanEl)
    setTimeout(()=>{
        spanEl.remove()
    },3000)
})