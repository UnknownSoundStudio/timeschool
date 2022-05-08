$('.recommend').hide();
var To = localStorage.getItem("Token");
var flaga = 0, text, key;
var N = [],
  L = [];
if (To == null) {
  alt('접근 오류');
}

var str1 = '<div class="item" id="Item"><h3 class="b6 Ti">', str2 = '</h3><h6 class="b2" style="overflow:hidden; max-width:80%;">', str3 = '</h6><hr class="nhr"></div>';


function handleOnChange(e) {
  console.log(e);
  text = e.options[e.selectedIndex].value;
  firebase.database().ref('/USER/' + To + '/' + text).once('value').then((snapshot) => {
    for (var i = 1; i <= 7; i++) {
      var Cthst = snapshot.val()[i]['CLASS'];
      var Lthst = snapshot.val()[i]['LINK'];
      if (Cthst == 'Nan') {
        $('#N' + i).val('');
      } else {
        $('#N' + i).val(Cthst);
      }
      if (Lthst == 'Nan') {
        $('#L' + i).val('');
      } else {
        $('#L' + i).val(Lthst);
      }
    }
  });
}
handleOnChange($('#Nth')[0]);

$('.Btn').on('click', function() {
  N = [];
  L = [];
  for (var i = 1; i <= 7; i++) {
    if ($('#N' + i).val() == '') {
      N.push('Nan');
    } else {
      N.push($('#N' + i).val());
    }
  }
  for (var i = 1; i <= 7; i++) {
    if ($('#L' + i).val() == '') {
      L.push('Nan');
    } else {
      L.push($('#L' + i).val());
    }
  }
  console.log(N);
  console.log(L);
  firebase.database().ref('/USER/' + To + '/' + text).set({
    1: {
      CLASS: N[0],
      LINK: L[0]
    },
    2: {
      CLASS: N[1],
      LINK: L[1]
    },
    3: {
      CLASS: N[2],
      LINK: L[2]
    },
    4: {
      CLASS: N[3],
      LINK: L[3]
    },
    5: {
      CLASS: N[4],
      LINK: L[4]
    },
    6: {
      CLASS: N[5],
      LINK: L[5]
    },
    7: {
      CLASS: N[6],
      LINK: L[6]
    }
  });
  alt('저장 성공');
});

$('.Return').on('click', function() {
  location.href = '/';
});


firebase.database().ref('/RECOMMEND/').once('value').then((snapshot) => {
    console.log(snapshot.val());
    $.each(snapshot.val(), function(key, value) {
      $('.recommend').prepend(str1 + key + str2 + value + str3);
    });
});

$(".Rea").on("change keyup", function() {
    if (this.value == '') {
        $(this.parentNode.childNodes[6]).hide();
    } else {
      $(this.parentNode.childNodes[6]).show();
    }
    var value, name, item, i;
    value = this.value;
    item = document.getElementsByClassName("item");
    console.log('시작');
    for(i=0;i<item.length;i++){
      name = item[i].getElementsByClassName("Ti");
      if(name[0].innerHTML.toUpperCase().indexOf(value) > -1){
        item[i].style.height = 'auto';
        item[i].style.width = "80vw";
      } else {
        item[i].style.height = "0px";
        item[i].style.width = "0px";
      }
    }
});


$(document).on('click', '.item', function() {
  this.parentNode.parentNode.childNodes[3].value = $(this.firstChild).text();
  this.parentNode.parentNode.childNodes[8].value = $(this.childNodes[1]).text();
  $('.recommend').hide();
  document.getElementById("Btn").click();

});


$(document).mouseup(function(e) {
  var container = $(".recommend");
  if (container.has(e.target).length === 0)
    container.hide();
});
