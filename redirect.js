//진로 a
//수학 b
//영어 c
//체육 d
//국어 e
//창체 f

function a() //진로 a
{swal("OK버튼을 누르시면 자세한 정보를 출력합니다.","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://schooltime.quv.kr/";
      break;   
    default:
      
  }
});
}

function b() //수학 b
{swal("OK버튼을 누르시면 자세한 정보를 출력합니다.","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://schooltime.quv.kr/";
      break;   
    default:
      
  }
});
}

function c() //영어 c
{swal("OK버튼을 누르시면 자세한 정보를 출력합니다.","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://schooltime.quv.kr/";
      break;   
    default:
      
  }
});
}


function d() //체육 d
{swal("OK버튼을 누르시면 자세한 정보를 출력합니다.","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://schooltime.quv.kr/";
      break;   
    default:
      
  }
});
}

function e() //국어 e
{swal("OK버튼을 누르시면 자세한 정보를 출력합니다.","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://schooltime.quv.kr/";
      break;   
    default:
      
  }
});
}

function f() //창체 f
{swal("OK버튼을 누르시면 자세한 정보를 출력합니다.","","success",{
  buttons: {
    cancel: "취소",
    OK: true,
  }
})
.then((value) => {
  switch (value) {
 
    case "OK":
      location.href = "https://schooltime.quv.kr/";
      break;   
    default:
      
  }
});
}
function ss() //탐구 A/B/C: 과목마다 다름
    {swal("해당 실습버튼을 누르시면 자세한 정보를 출력합니다.","","info",{
        buttons: {
          cancel: "취소",
          a: { text: "응용 프로그래밍",},
          b: { text: "빅 데이터",},
          c: { text: "스마트 앱 개발",},
          d: { text: "게임 프로그래밍",},
          e: { text: "자료 구조",},
        }
      })
      .then((value) => {
        switch (value) {
       
          case "a":
            location.href = "https://schooltime.quv.kr/";
            break;

          case "b":
            location.href = "https://schooltime.quv.kr/";
            break;

          case "c":
            location.href = "https://schooltime.quv.kr/";
            break;

          case "d":
            location.href = "https://schooltime.quv.kr/";
            break;

          case "e":
            location.href = "https://schooltime.quv.kr/";
            break;
       
          default:
            
        }
      });
}
