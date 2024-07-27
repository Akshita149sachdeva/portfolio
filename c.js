document.addEventListener("DOMContentLoaded", function () {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcont = document.getElementsByClassName("tab-contents");
  
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].addEventListener("click", function (event) {
        var tabname = this.dataset.tabname;
  
        // Remove active classes from all tabs and tab contents
        for (var j = 0; j < tablinks.length; j++) {
          tablinks[j].classList.remove("active-link");
        }
  
        for (var j = 0; j < tabcont.length; j++) {
          tabcont[j].classList.remove("active-tab");
        }
  
        // Add active classes to the clicked tab and corresponding content
        this.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
      });
    }
  });