function typeMainText(){
    let textBox= document.getElementById("main-text-auto-type")
    const text="Hello I'm Ivo Sokoloski A student of Computer science and Engineering"
    let i=0;
    let interval=setInterval(()=>{
        if(i===23){
            textBox.innerHTML+="<br>"
            i++
        }else {
            textBox.innerHTML += text.charAt(i)
            i++
        }
        if(i>text.length){
            clearInterval(interval)
            scrollTextAnimation()
        }
    },50)
}
function mainPhotoScaleUP(){
    anime({
        targets:".main-photo-img",
        scale:[1,1.5],
        translateX:-40,
        duration: 500,
        easing: 'linear',
        loop: false,
    })
}
function mainPhotoScaleDown(){
    anime({
        targets:".main-photo-img",
        scale:[1],
        translateX: 0,
        duration: 500,
        easing: 'linear',
        loop: false,
    })
}
function navElementsAnimationOn(obj){
    anime({
        targets:obj,
        scale:[1,1.2],
        duration:200,
        easing:"easeInOutQuad",
    })

}
function navElementsAnimationOff(obj){
    anime({
        targets:obj,
        scale:[1],
        duration:200,
        easing:"easeInOutQuad",

    })
}
function scrollTextAnimation(){
    let element=document.getElementById("main-scroll-text")
    document.getElementById("main").style.margin=0+"px"
    element.style.display="block";
    anime({
        targets:".main-scroll-text",
        scale: [1,1.3,1],
        duration:2000,
        easing:"linear",
        loop:true
    })
}
function movingMain(){
    let fabout1=false
    let fproject=false
    let fprojectimg=false
    let fprojectimg2=false
    let i=0
    let currentScroll=0
    let currentScrollprojects=0
    let currentScrollprojectsimg=100000000
    let currentScrollprojectsimg2=0
    $(window).on('scroll', function() {
        document.getElementById("main-scroll-text").style.display="none"
        const scrollPosition = window.scrollY; // Get the current scroll position
        const main = document.getElementById("main");
        const about = document.getElementById("about");
        const projects = document.getElementById("projects");
        const projectsImg = document.getElementById("projects-main-element");
        const projectElements = document.getElementById("project-elements");
        const personalInfo = document.getElementById("personal-info");
        main.style.left = `${scrollPosition*1.5}px`;
        i=window.scrollY*0.0004
        if(parseInt(main.style.left)>window.innerWidth*0.7){
            about.style.opacity=i
            about.style.scale=i*1.1
        }else{
            about.style.opacity=0
        }
        if(about.style.opacity>1){
            if(!fabout1){
                 currentScroll=scrollPosition
                fabout1=true
            }
            about.style.top=`${currentScroll+(window.innerHeight/2)-scrollPosition}px`
        }
        if(about.offsetTop<0){
            if(!fproject){
                currentScrollprojects=scrollPosition
                fproject=true
            }
            projects.style.background="white"
            projects.style.width = window.innerWidth + "px"
            projects.style.height = window.innerHeight + "px"
            projectsImg.style.display="none"
            projects.style.display = "flex"
            projects.style.top = `${currentScrollprojects +(window.innerHeight)+projects.offsetHeight/2 - scrollPosition}px`

        }else{
          projects.style.display="none"
        }
        if(parseInt(projects.style.top)<=(window.innerHeight/2)){
            projects.style.top=window.innerHeight/2+"px"
            projectsImg.style.display="flex"
            if(!fprojectimg){
                currentScrollprojectsimg=scrollPosition
                fprojectimg=true
            }
        }
        if(currentScrollprojectsimg<scrollPosition){
            projectsImg.style.scale=2-(scrollPosition-currentScrollprojectsimg)*0.001
            projectElements.style.scale=2-(scrollPosition-currentScrollprojectsimg)*0.001
            projectElements.style.display="flex"
            projectElements.style.opacity=i-1
            if(projectsImg.style.scale<=1){
                if(!fprojectimg2){
                    currentScrollprojectsimg2=scrollPosition
                    fprojectimg2=true
                }
                projectsImg.style.scale=1
                projectElements.style.scale=1
                projectElements.style.opacity=1
                projects.style.top=`${currentScrollprojectsimg2+(window.innerHeight/2)-scrollPosition}px`
                if(scrollPosition-currentScrollprojectsimg2>=window.innerHeight/1.3){
                    personalInfo.style.opacity=i*0.4
                    personalInfo.style.scale=i*0.4
                }else{
                    personalInfo.style.opacity=0
                    personalInfo.style.scale=0
                }
            }
        }



    });

}
function powerOn(){
    console.log("da")
    document.getElementById("powerOn").style.display="flex"
    document.getElementById("powerOff").style.display="none"
}

window.onload= function (){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    };
    setTimeout(typeMainText,500)
    $(document).ready(function (){

        $(".main-photo-img").hover(function (){
            mainPhotoScaleUP();
        },function (){
            mainPhotoScaleDown()
        })
        $(".navbar-elements").find("li").hover(function (){
            navElementsAnimationOn(this)
        },function (){
            navElementsAnimationOff(this)
        })
        $("#powerOff").hover(function (){
            navElementsAnimationOn(this)
        },function (){
            navElementsAnimationOff(this)
        }).click(function (){
            powerOn()})
        $("#powerOn").find("div").hover(function (){
            navElementsAnimationOn(this)
        },function (){
            navElementsAnimationOff(this)
        })
        $("#cpp").click(function (){
            window.open("https://github.com/ivosokoloski?tab=repositories&q=&type=&language=c%2B%2B&sort=","_blank")
        })
        $("#java").click(function (){
            window.open("https://github.com/ivosokoloski?tab=repositories&q=&type=&language=java&sort=","_blank")
        })
        $("#javascript").click(function (){
            window.open("https://github.com/ivosokoloski?tab=repositories&q=&type=&language=javascript&sort=","_blank")
        })
        movingMain()

    })

}
