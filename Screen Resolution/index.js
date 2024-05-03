let width=document.querySelector('span.width');

let height=document.querySelector('span.height');

let screen_wid=document.querySelector('p.screen-width');

let screen_heig=document.querySelector('p.screen-height');

let color_dep=document.querySelector('p.color-depth');

window.addEventListener('load',()=>{
    let screen_width=screen.width;
    let screen_height=screen.height;
    let color_depth=screen.colorDepth;

    width.innerText=screen_width;
    height.innerText=screen_height;
    screen_wid.innerText=`Screen Width: ${screen_width} pixels`;
    screen_heig.innerText=`Screen Height: ${screen_height} pixels`;
    color_dep.innerText=`Color depth: ${color_depth} bits per pixel`;

})