var timetable = [];
var login_se, flag = 0;
var sel = $('#sel').children();
// Backend Key
var ID_Token, Ser_To, ID_To;
var isOn = 0;
var Ntime, cnt = 0, cls = 0;
let today = new Date();
let hours; // 시
let minutes; // 분
let seconds;
var fun = function(a) {
  console.log(a);
  if (link[a] == 'Nan') {
    alt('링크 오류');
  } else if (link[a].indexOf('http://') == -1) {
    window.open(link[a]);
  } else {
    window.open(link[a].replacT('https://', ''));
  }
};
var link = [];

function Up(a) {
  if (a < 10) {
    return '0' + a;
  } else {
    return a;
  }
}

function re() {
  $('.lo-ri').css('width', $('.Login').width() - 155 + 'px');
}

// 구글 로그인
function onSignIn(googleUser) {
  login_se = googleUser;
  $('.login-back').fadeOut();
  $('body').css('overflow', 'scroll');
  var profile = googleUser.getBasicProfile();
  ID_To = profile.getId();
  
  console.log("ID: " + profile.getId());
  console.log('Full Name: ' + profile.getName());
  console.log('Given Name: ' + profile.getGivenName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log('Family Name: ' + profile.getFamilyName());
  console.log("Email: " + profile.getEmail());
  
  document.getElementById("pro").src = profile.getImageUrl();
  ID_Token = googleUser.getAuthResponse().login_hint;
  //console.log("ID Token: " + ID_Token);
  var strArray = profile.getEmail().split('@');
  // if (strArray[1] != 'google.com') {
  //   alt("다시 로그인 해주세요.");
  //   signOut();
  //   return;
  // }
  localStorage.setItem("Token", ID_To);

  // 사용자 데이터  불러오기
  database.ref('USER/' + profile.getId()).get().then(function(snapshot) {
    if (snapshot.exists()) {
      Ser_To = snapshot.val()['TOKEN'];
      console.log(Ser_To);
      console.log(ID_Token);
      if (Ser_To != ID_Token) {
        //signOut();
      }
      firebase.database().ref('USER/' + profile.getId() + "/ID").set({
        ID: profile.getEmail()
      });
    } else {
      console.log('회원가입');
      firebase.database().ref('USER/' + profile.getId()).set({
        ID: profile.getEmail(),
        1: {
          1: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          2: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          3: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          4: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          5: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          6: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          7: {
            CLASS: 'Nan',
            LINK: 'Nan'
          }
        },
        2: {
          1: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          2: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          3: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          4: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          5: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          6: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          7: {
            CLASS: 'Nan',
            LINK: 'Nan'
          }
        },
        3: {
          1: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          2: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          3: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          4: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          5: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          6: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          7: {
            CLASS: 'Nan',
            LINK: 'Nan'
          }
        },
        4: {
          1: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          2: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          3: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          4: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          5: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          6: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          7: {
            CLASS: 'Nan',
            LINK: 'Nan'
          }
        },
        5: {
          1: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          2: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          3: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          4: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          5: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          6: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
          7: {
            CLASS: 'Nan',
            LINK: 'Nan'
          },
        }
      });
      location.href = '/edit/'
    }
  });

  // 시간표 불러오기
  firebase.database().ref('TIMETABLE/').on('value', (snapshot) => {
    var buf = snapshot.val();
    for (var i in Object.keys(buf)) {
      timetable.push(buf[i]);
    }
    timetable.push(buf['17']);
  });
  isOn = 1;

  // 로긔인 Function 마지막
  timeF();
  // 개인 시간표 불러오기
  console.log('/USER/' + profile.getId() + '/' + today.getDay());
  firebase.database().ref('/USER/' + ID_To + '/' + today.getDay()).on('value', (snapshot) => {
    for (var i = 1; i <= 7; i++) {
      var name = snapshot.val()[i]['CLASS'];
      if (name == 'Nan') {
        $('#Or' + i).text('시간표 정보 없음');
      } else {
        $('#Or' + i).text(name);
      }
      link.push(snapshot.val()[i]['LINK']);
      $('#L' + i).attr('onclick', 'fun(' + (i - 1) + ')');
    }
  });
}



// 로그인 창 재설정
re();
$(window).resize(re);

// 로그아웃
function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function() {
    alt("로그아웃 성공");
    isOn = 0;
    $('.login-back').fadeIn();
  });
  auth2.disconnect();
  window.location.reload();
};

// Menu Function
$('#Logout').on('click', function() {
  signOut();
});
$('.menu').hide();
$('.profile').on('click', function() {
  $('.menu').show();
});
$(document).mouseup(function(e) {
  var container = $(".menu");
  if (container.has(e.target).length === 0)
    container.hide();
});



// 자동 열기 기능 활성화 여부
$('#Btn').on('click', function() {
  isOn = !isOn;
  if (isOn) {
    alt('기능 활성화');
  } else {
    alt('기능 비활성화');
  }
  console.log(isOn);
});


// 시간관리
function timeF(a) {
  if (isOn == 1) {
    flag = 0;
    cnt = 0;
    today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    $('.dash-t').text(Up(hours) + ':' + Up(minutes) + ':' + Up(seconds));
    Ntime = hours * 3600 + minutes * 60 + seconds;
    if (timetable.length == 0) return 0;
    for (var i = 1; i <= timetable.length; i++) {
      if (Ntime >= timetable[i]) {
        if (Ntime == timetable[i]) {
          console.log(1);
          flag = 1;
        }
        cnt++;
      } else {
        break;
      }
    }
    cls = parseInt(cnt / 2 + 0.5);
    if (flag == 1 && cnt % 2 == 1) {
      if (cls <= 4) fun(cls - 1);
      else if (cls > 4) fun(cls - 2);
    }
    if (cnt == 0) {
      $('#Nti').text('수업 전');
    } else if (1 <= cls && cls <= 4) {
      $('#Nti').text(cls + '교시');
    } else if (cls == 5) {
      $('#Nti').text('점심시간');
    } else if (6 <= cls && cls <= 8) {
      $('#Nti').text(cls - 1 + '교시');
    } else {
      $('#Nti').text('수업 끝');
    }
    if (cls == 6) {
      sel.eq(cls - 1).css('background', 'rgb(85, 85, 85)');
    }
    if (cls != 0) {
      sel.eq(cls - 1).css('background', 'url("https://image.freepik.com/free-vector/abstract-orange-purple-gradient-flow-shapes-background_71374-666.jpg")');
      sel.eq(cls - 2).css('background', 'rgb(42, 42, 42)');
      sel.eq(cls - 2).css('background', '');
    }
  }
}
timeF();
var Stime = setInterval(timeF, 950);
$(window).bind("beforeunload", function(e) {
  clearInterval(Stime);
});

$('#Edit').on('click', function() {
  location.href = '/edit/'
});
