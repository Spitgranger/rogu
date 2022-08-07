const page = () => {
  function showListing(){
    let listing = document.querySelector(".listing");
    
  }
  const changeLanguage = () => {
    const language = document.querySelectorAll(".language-dropdown button")
    const languageIcon = document.querySelector(".language")
    language.forEach(language =>{
      language.addEventListener('click', function(){
        languageIcon.textContent = this.className;
        alert(this.className);
      })
    });

  }
  changeLanguage();  
}
page();
