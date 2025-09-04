const createElement=(arr)=>{
    const htmlElements=arr.map((el)=>`<span class="btn btn-outline mr-2">${el}</span>`)
    return(htmlElements.join(" "))
}
const manageSpinner=(status)=>{
     if(status===true){
        document.getElementById('spinner').classList.remove('hidden')
        document.getElementById('word-container').classList.add('hidden')
     }else{
         document.getElementById('spinner').classList.add('hidden')
        document.getElementById('word-container').classList.remove('hidden')
     }
}
const loadLesson = () => {
  const url = "https://openapi.programming-hero.com/api/levels/all";
  fetch(url)
    .then((response) => response.json())
    .then((json) => displayLesson(json.data));
};
const loadLevelWord = (id) => {
    manageSpinner(true)
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const clickBtn = document.getElementById(`lesson-btn-${id}`);
      removeActive();
      clickBtn.classList.add("active");
      displayWord(json.data);
    });
};
const loadWordDetail=async(id)=>{
    const url = `https://openapi.programming-hero.com/api/word/${id}`;
    const response= await fetch(url)
    const details= await response.json()
    displayWordDetails(details.data)
}
const displayWordDetails=(word)=>{
   const detailsContainer=document.getElementById('details-container')
   detailsContainer.innerHTML=`<div>
                <h2 class="text-2xl font-bold">${word.word}( <i class="fa-solid fa-microphone-lines"></i> : ${word.pronunciation})</h2>
                <h3 class="font-bold mt-3">Meaning</h3>
                <p class="font-normal my-3">${word.meaning}</p>
                <h3 class="font-bold ">Example</h3>
                <p class="font-normal my-3">${word.sentence}</p>
                <h3 class="font-bold my-3 ">সমার্থক শব্দ গুলো</h3>
               <div>
               ${createElement(word.synonyms)}
               </div>
            </div>`
   document.getElementById('word_modal').showModal()

}
const removeActive = () => {
  const lessonBtn = document.querySelectorAll(".lesson-btn");
  lessonBtn.forEach((btn) => {
    btn.classList.remove("active");
  });
  
};

const displayWord = (words) => {
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";
  if (words.length === 0) {
    wordContainer.innerHTML = `
     <div class="text-center col-span-full font-hind">
            <img src="./assets/alert-error.png" alt="" class="mx-auto">
           <p class="text-xl font-semibold text-gray-400 ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।!!</p>
            <h2 class="text-3xl font-semibold text-gray-400 mt-4">নেক্সট Lesson এ যান </h2>
    </div>
    `;
    manageSpinner(false)
    return;
  }
  words.forEach((word) => {
    const wordDiv = document.createElement("div");
    wordDiv.innerHTML = `<div class="card bg-base-100 shadow-sm mt-2">
          <div class="card-body text-center">
            <h2 class="text-center text-2xl font-semibold">${
              word.word ? word.word : "শব্দ পাওয়া যায় নি"
            }</h2>
            <p class="font-semibold">
              Meaning/Pronunciation
            </p>
             <h2 class="text-center text-2xl font-semibold font-hind">${
               word.meaning ? word.meaning : "meaning পাওয়া যায় নি"
             }/${
      word.pronunciation ? word.pronunciation : "pronunciation পাওয়া যায় নি"
    }</h2>
            <div class="flex justify-between  mt-10">
              <div onclick="loadWordDetail(${word.id})" class="bg-slate-100 p-5 rounded-md hover:bg-slate-300">
                <i class="fa-solid fa-info"></i>
              </div>
              <div class="bg-slate-100 p-5 rounded-md hover:bg-slate-300">
               <i class="fa-solid fa-volume-high"></i>
              </div>
            </div>
          </div>
        </div>`;
    wordContainer.appendChild(wordDiv);
    
  });
  manageSpinner(false)
};

const displayLesson = (lessons) => {
  const lessonContainer = document.getElementById("lesson-container");
  lessonContainer.innerHTML = "";
  lessons.forEach((lesson) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button id="lesson-btn-${lesson.level_no}"onclick="loadLevelWord(${lesson.level_no})" class="lesson-btn btn btn-xs px-5 text-[#422AD5] border-[#422AD5] shadow-lg rounded-[4px] sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl hover:bg-blue-300"><i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}</button>`;
    lessonContainer.appendChild(btnDiv);
  });
};

loadLesson();

document.getElementById('btn-search').addEventListener('click',()=>{
    removeActive()
    const input=document.getElementById('input-search')
    const inputValue=input.value.trim().toLowerCase()
   fetch('https://openapi.programming-hero.com/api/words/all')
      .then(response => response.json())
      .then(json => {
        const allWords=json.data
        const filterWords=allWords.filter((word)=>word.word.toLowerCase().includes(inputValue))
        displayWord(filterWords)
      })
})