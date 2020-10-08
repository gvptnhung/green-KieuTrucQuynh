let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

window.sr = ScrollReveal();

sr.reveal('.animate-left',{
 origin:'left',
 duration:800,
 distance:'25rem',
 delay:500
})
sr.reveal('.animate-right',{
 origin:'right',
 duration:800,
 distance:'25rem',
 delay:500
})
sr.reveal('.animate-top',{
 origin:'top',
 duration:800,
 distance:'25rem',
 delay:500
})
sr.reveal('.animate-bottom',{
 origin:'bottom',
 duration:800,
 distance:'25rem',
 delay:500
})