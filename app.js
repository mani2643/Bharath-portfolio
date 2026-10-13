const progressBar = document.querySelector('.scroll-progress');
const navlinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('main section');

window.addEventListener('scroll',()=>{
    const scrollTop = window.scrollY;
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop/scrollableHeight)*100;

    progressBar.style.width = `${progress}%`;
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            const currentId = entry.target.id;
            
            navlinks.forEach((link)=>{
                link.classList.toggle('active',link.getAttribute('href')===`#${currentId}`)
            });
        }
    })
},{
    threshold:0,
    rootMargin: '-20% 0px -60% 0px'
})

sections.forEach((section)=>{
    observer.observe(section);
})