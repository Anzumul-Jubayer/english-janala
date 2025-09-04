```markdown
# 📘 English জানালা – Interactive Vocabulary Learning App  

English জানালা is a web-based interactive vocabulary learning platform where users can explore lessons, learn new words with meanings, pronunciations, synonyms, and examples. It also includes search functionality, text-to-speech for word pronunciation, and modal-based word details.  

---

## 🚀 Features  

- ✅ **Dynamic Lesson Loading** – Lessons are fetched from an API and displayed dynamically.  
- ✅ **Vocabulary Cards** – Each card shows the word, meaning, and pronunciation.  
- ✅ **Word Details Modal** – Click info to view detailed meaning, sentence example, and synonyms.  
- ✅ **Search Functionality** – Search through all available words instantly.  
- ✅ **Text-to-Speech** – Pronounce words using browser’s speech synthesis.  
- ✅ **Responsive UI** – Built with **Tailwind CSS** and **DaisyUI** for responsive design.  
- ✅ **Loading Spinner** – Smooth user experience with loading indicators.  

---

## 🛠️ Technologies Used  

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)  
- **Styling**: Tailwind CSS + DaisyUI  
- **Icons**: Font Awesome  
- **API**: [Programming Hero Open API](https://openapi.programming-hero.com)  
- **Browser API**: Web Speech API (SpeechSynthesis)  

---

## 📂 Project Structure  

```

English-Janala/
│── assets/                 # Images and icons
│── js/
│   └── index.js            # Main JavaScript logic
│── style/
│   └── style.css           # Custom styles
│── index.html              # Main HTML file
│── README.md               # Project documentation

```

---

## ⚙️ Implementation Details  

### 🔹 1. Lesson Loading  
- Fetches all available lessons from:  
```

GET [https://openapi.programming-hero.com/api/levels/all](https://openapi.programming-hero.com/api/levels/all)

```
- Dynamically generates **Lesson Buttons**.  
- Active lesson button is highlighted when clicked.  

### 🔹 2. Vocabulary Display  
- Loads all words for a selected lesson from:  
```

GET [https://openapi.programming-hero.com/api/level/{lessonId}](https://openapi.programming-hero.com/api/level/{lessonId})

```
- Displays cards with:
- Word  
- Meaning & Pronunciation  
- Actions: **Info** & **Pronounce**  

### 🔹 3. Word Details Modal  
- On **Info Button Click**, fetches details from:  
```

GET [https://openapi.programming-hero.com/api/word/{wordId}](https://openapi.programming-hero.com/api/word/{wordId})

```
- Displays:
- Word + Pronunciation  
- Meaning  
- Example Sentence  
- Synonyms (styled as buttons)  

### 🔹 4. Search Functionality  
- Global search across all words from:  
```

GET [https://openapi.programming-hero.com/api/words/all](https://openapi.programming-hero.com/api/words/all)

````
- Filters results dynamically based on search input.  

### 🔹 5. Pronunciation (TTS)  
- Uses **SpeechSynthesisUtterance** to pronounce words.  
- Language: `en-EN`  

### 🔹 6. Spinner Handling  
- While fetching data, a **spinner** is shown.  
- Once loaded, spinner is hidden and data is displayed.  

---

## 🎨 UI Overview  

- **Navbar**: Logo + Navigation (FAQ, Learn, Logout)  
- **Hero Section**: Intro + Sign-up form + Banner image  
- **Lesson Section**: Dynamic lesson buttons  
- **Vocabulary Section**: Word cards & spinner  
- **Search Section**: Search bar with results  
- **Modal**: Detailed word info  

---

## 📸 Screenshots  

_(Add screenshots of your project here – Homepage, Lesson View, Word Modal, Search Results)_  

---

## ▶️ Getting Started  

### 🔧 Installation  
1. Clone this repository:  
 ```bash
 git clone https://github.com/your-username/english-janala.git
````

2. Open the project folder:

   ```bash
   cd english-janala
   ```
3. Open `index.html` in a browser.

### 🌐 Live Demo

👉 \[Add your deployed project link here]

---



---

## 👨‍💻 Author

* **Anzumul Jubayer**
   CSE Graduate | Web Development Enthusiast | Bangladesh




