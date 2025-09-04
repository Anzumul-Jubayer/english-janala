
const loadLesson=()=>{
    const url='https://openapi.programming-hero.com/api/levels/all'
    fetch(url).then((response)=>response.json()).then((json)=>displayLesson(json.data))

}
const loadLevelWord=((id)=>{
    const url=`https://openapi.programming-hero.com/api/level/${id}`
    
      fetch(url)
      .then(response => response.json())
      .then(json => displayWord(json.data))    
})
const displayWord=((words)=>{
   const wordContainer=document.getElementById('word-container')
   wordContainer.innerHTML=""
   words.forEach(word=>{
     const wordDiv=document.createElement('div')
     wordDiv.innerHTML=`<div class="card bg-base-100 shadow-sm mt-2">
          <div class="card-body text-center">
            <h2 class="text-center text-2xl font-semibold">${word.word}</h2>
            <p class="font-semibold">
              Meaning/Pronunciation
            </p>
             <h2 class="text-center text-2xl font-semibold font-hind">${word.meaning}/${word.pronunciation}</h2>
            <div class="flex justify-between  mt-10">
              <div class="bg-slate-100 p-5 rounded-md hover:bg-slate-300">
                <i class="fa-solid fa-info"></i>
              </div>
              <div class="bg-slate-100 p-5 rounded-md hover:bg-slate-300">
               <i class="fa-solid fa-volume-high"></i>
              </div>
            </div>
          </div>
        </div>`
        wordContainer.appendChild(wordDiv)
   })
})

const displayLesson=((lessons)=>{
   const lessonContainer=document.getElementById('lesson-container')
   lessonContainer.innerHTML=""
   lessons.forEach(lesson => {
    const btnDiv=document.createElement('div')
    btnDiv.innerHTML=`<button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-xs px-5 text-[#422AD5] border-[#422AD5] shadow-lg rounded-[4px] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-blue-300"><img src="./assets/fa-book-open.png" alt="">Lesson-${lesson.level_no}</button>`
    lessonContainer.appendChild(btnDiv)
  });
    
})

loadLesson()