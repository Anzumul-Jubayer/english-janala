
const loadLesson=()=>{
    const url='https://openapi.programming-hero.com/api/levels/all'
    fetch(url).then((response)=>response.json()).then((json)=>displayLesson(json.data))

}
const displayLesson=((lessons)=>{
   const lessonContainer=document.getElementById('lesson-container')
   lessonContainer.innerHTML=""
   lessons.forEach(lesson => {
    const btnDiv=document.createElement('div')
    btnDiv.innerHTML=`<button class="btn btn-xs px-5 text-[#422AD5] border-[#422AD5] shadow-lg rounded-[4px] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img src="./assets/fa-book-open.png" alt="">Lesson-${lesson.level_no}</button>`
    lessonContainer.appendChild(btnDiv)
  });
    
})
loadLesson()