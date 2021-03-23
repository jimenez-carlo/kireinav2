// Index Tab
function smartfilm_tab(evt, cityName) {
  var i, tabcontent,tabcontent_2,tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  tabcontent_2 = document.getElementsByClassName("tabcontent-2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent_2[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  docid(cityName).style.display = "block";
  docid('sub_'+cityName).style.display = "block";
  evt.currentTarget.className += " active";
    AOS.refresh();
}

function smartfilm_tab_2(evt, cityName) {
  var i, tabcontent,tablinks;
  tabcontent = document.getElementsByClassName("tabcontent-3");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks-2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" selected", "");
  }
  docid(cityName).style.display = "block";
  evt.currentTarget.className += " selected";
    AOS.refresh();
}
