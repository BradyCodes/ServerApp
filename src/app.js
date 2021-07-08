function switchcolors(clicked){
    if (clicked == 's'){
      document.getElementById('lo').style.color = 'grey';
      document.getElementById('su').style.color = 'black';
    } else if (clicked == 'l'){
        document.getElementById('su').style.color = 'grey;';
        document.getElementById('lo').style.color = 'black;';
      };
  }