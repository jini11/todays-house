/*_____________________________________________________________________
   [ 로그인 ]
_____________________________________________________________________*/
/* 로그인 체크 (미리 저장된 테스트용 id/pw) */
function loginchk() {
    //입력된 아이디 변수에 대입
    var chk_id = document.getElementById("id").value;

    //입력된 비밀번호 변수에 대입
    var chk_pw = document.getElementById("pw").value;

    //로그인 체크 (admin/admin123, user01/user111, user02/user222, user03/user333)

    // 01. admin/admin123 일 경우
    if(chk_id == "admin" && chk_pw == "admin123") {
        alert("admin 님 반갑습니다 ^^");
        location.href = "../HTML-login/index_login.html";
    }
    // 02. user01/user111 일 경우
    else if(chk_id == "user01" && chk_pw == "user111") {
         alert("user01 님 반갑습니다 ^^");
         location.href = "../HTML-login/index_login.html";
    }
    // 03. user02/user222 일 경우
    else if(chk_id == "user02" && chk_pw == "user222") {
         alert("user02 님 반갑습니다 ^^");
         location.href = "../HTML-login/index_login.html";
    }
    // 04. user03/user333 일 경우
    else if(chk_id == "user03" && chk_pw == "user333") {
         alert("user03 님 반갑습니다 ^^");
         location.href = "../HTML-login/index_login.html";
    }
    // 05. jieun/jieun11 일 경우
    else if(chk_id == "jieun" && chk_pw == "jieun11") {
        alert("user03 님 반갑습니다 ^^");
        location.href = "../HTML-login/index_login.html";
   }
    // 06. 로그인 정보가 틀릴 경우
    else {
        alert("아이디, 비밀번호가 일치하지 않습니다.");
    }
}

/* 로그인시 Enter키 눌렀을 때 작동되게 하기 */
// enter 키가 눌렀을 때 실행한 내용
function enterKey() {
    if (window.event.keyCode == 13) {
        loginchk();
    }
}

/*_____________________________________________________________________
   [ 회원가입 ]
_____________________________________________________________________*/

function sign_up_chk() {
    var sign_up_id = document.getElementById("sign_up_id").value;
    var sign_up_pw = document.getElementById("sign_up_pw").value;
    var sign_up_pw_chk = document.getElementById("sign_up_pw_chk").value;
    var sign_up_name = document.getElementById("sign_up_name").value;
    var birth_year = document.getElementById("birth_year").value;
    var birth_month = document.getElementById("birth_month").value;
    var birth_day = document.getElementById("birth_day").value;
    var sign_up_mobile = document.getElementById("sign_up_mobile").value;
    var sign_up_email = document.getElementById("sign_up_email").value;
    var pattern_chk1 = /[`~!@#$%^&*|\\\'\"\-;:/?]/gi; //아이디 특수문자 체크
    var pattern_chk2 = /[0-9]/;
    var pattern_chk3 = /[a-zA-Z]/;
    var pattern_chk4 = /[~!@#$%^&*()_+:{}]/

    /* 아이디 유효성 체크 */
    if (sign_up_id.length == 0) {
        alert("아이디를 입력해주십시오.");
        return; //exit 기능, null로 반환
    }
    else if (sign_up_id.search(/\s/) != -1) { //아이디 공백 체크
        alert("아이디에 공백은 들어갈 수 없습니다.");
        return; //exit 기능, null로 반환
    }
    else if (pattern_chk1.test(sign_up_id)) { //아이디 특수문자 체크
        alert("아이디에 특수문자는 들어갈 수 없습니다.");
        return; //exit 기능, null로 반환
    }

    /* 비밀번호 유효성 체크 - 8자리 이상, 문자, 숫자, 특수문자로 구성 */
    else if (!pattern_chk2.test(sign_up_pw) || !pattern_chk3.test(sign_up_pw) || !pattern_chk4.test(sign_up_pw) || sign_up_pw.length < 8) {
        alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성되어야합니다.");
        return; //exit 기능, null로 반환
    }

    /* 비밀번호 재확인 체크 */
    else if (sign_up_pw != sign_up_pw_chk) {
        alert("입력하신 비밀번호가 다릅니다.");
        return; //exit 기능, null로 반환
    }

    /* 이름 유효성 체크 */
    else if( sign_up_name.length == 0) {
        alert("이름을 입력해주십시오.");
        return;
    }
    else if ( sign_up_name.search(/\s/) != -1) {
        alert("이름에 공백은 들어갈 수 없습니다.");
        return;
    }
    else if( pattern_chk1.test(sign_up_name)) {
        alert("이름에 특수문자는 들어갈 수 없습니다.");
        return;
    }

    /* 생년월일 체크 */
    else if (birth_year.length != 4) {
        alert("년도는 4자리 숫자이어야 합니다.");
        return;
    }
    else if (birth_month.length == 0) {
        alert("월을 선택하세요. ");
        return;
    }
    else if (birth_day.length != 2) {
        alert("일을 선택하세요. ");
        return;
    }

    /* 휴대전화 체크 */
    else if (sign_up_mobile.length == 0 || pattern_chk1.test(sign_up_mobile) || !pattern_chk2.test(sign_up_mobile) || pattern_chk3.test(sign_up_mobile) || sign_up_mobile.search(/\s/) != -1) {
        alert("잘못된 휴대전화 정보입니다.");
        return;
    }

    /* 이메일 체크 */
    else if (sign_up_email.length == 0) {
        alert("이메일을 입력하세요.");
        return;
    }

    /* 유효성 체크 통과시 가입 신청 */
    else {
        if (confirm("입력한 정보로 가입하시겠습니까?") == true){
            alert("가입되었습니다. 메인페이지에서 다시 로그인해주세요.");
            location.href = "../index.html";
        }
    }
}

/*_____________________________________________________________________
   [ 아이디, 비밀번호 찾기 ]
_____________________________________________________________________*/
/* 인증번호 받기 - 아이디 찾기 */
function certification_number_receive() {
    var findInfo_name = document.getElementById("findInfo_name").value;
    var findInfo_mobile = document.getElementById("findInfo_mobile").value;
    var pattern_chk1 = /[`~!@#$%^&*|\\\'\"\-;:/?]/gi; //특수문자 체크
    var pattern_chk2 = /[0-9]/; //숫자 체크
    var pattern_chk3 = /[a-zA-Z]/; //문자 체크

    /* 이름 체크 */
    if (findInfo_name.length == 0){
        alert("이름을 입력해 주십시오");
        return;
    }
    else if (findInfo_name.search(/\s/) != -1) {
        alert("이름에 공백은 들어갈 수 없습니다.");
        return; //exit 기능, return만 사용하면 null 반환
    }
    else if (pattern_chk1.test(findInfo_name)) {
        alert("이름에 특수문자는 들어갈 수 없습니다.");
        return; //exit 기능, return만 사용하면 null 반환
    }

    /* 휴대전화 체크 */
    else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
        alert("잘못된 휴대전화 정보 입니다.");
        return; //exit 기능, return만 사용하면 null 반환
    }

    /* 유효성 체크 통과시 인증번호 발송 */
    else {
        alert("인증번호가 발송되었습니다.");
    }
}

/* 아이디 찾기 버튼*/
function findId_chk() {
    var findInfo_name = document.getElementById("findInfo_name").value;
    var findInfo_mobile = document.getElementById("findInfo_mobile").value;
    var certification_number = document.getElementById("certification_number").value;

    var pattern_chk1 = /[`~!@#$%^&*|\\\'\"\-;:/?]/gi; //특수문자 체크
    var pattern_chk2 = /[0-9]/; //숫자 체크
    var pattern_chk3 = /[a-zA-Z]/; //문자 체크
    /* 이름 체크 */
    if (findInfo_name.length == 0) {
        alert("이름을 입력해 주십시오.");
        return; //exit 기능, return만 사용하면 null 반환
    }
    else if (findInfo_name.search(/\s/) != -1) {
        alert("이름에 공백은 들어갈 수 없습니다.");
        return; //exit 기능, return만 사용하면 null 반환
    }
    else if (pattern_chk1.test(findInfo_name)) {
        alert("이름에 특수문자는 들어갈 수 없습니다.");
        return; //exit 기능, return만 사용하면 null 반환
    }

    /* 휴대젼화 체크 */
    else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
        alert("잘못된 휴대전화 정보 입니다.");
        return; //exit 기능, return만 사용하면 null 반환
    }

    /* 인증번호 체크 */
    else if (certification_number.length != 6) {
        alert("인증번호가 다릅니다.");
        return;
    }

    /* 유효성 체크 통과시 아이디 찾기 진행 */
    else {
        alert("입력하신 정보의 회원정보가 존재하지 않습니다.");
        location.href = "../index.html";
    }
}


/* 인증번호 받기 - 비밀번호 찾기 */
function certification_number_receive_2() {
    var findInfo_id = document.getElementById("findInfo_id").value;
    var findInfo_name = document.getElementById("findInfo_name").value;
    var findInfo_mobile = document.getElementById("findInfo_mobile").value;
    var certification_number = document.getElementById("certification_number").value;

    var pattern_chk1 = /[`~!@#$%^&*|\\\'\"\-;:/?]/gi; //특수문자 체크
    var pattern_chk2 = /[0-9]/; //숫자 체크
    var pattern_chk3 = /[a-zA-Z]/; //문자 체크

     /* 아이디 유효성 체크 */
     if(findInfo_id.length == 0) {
         alert("아이디를 입력해 주십시오.");
         return;
     }
     else if (findInfo_id.search(/\s/) != -1) {
         alert("아이디에 공백은 들어갈 수 없습니다.");
         return;
     }
     else if (pattern_chk1.test(findInfo_id)) {
         alert("아이디에 특수문자는 들어갈 수 없습니다.");
         return;
     }

     /* 이름 체크 */
     else if (findInfo_name.length == 0) {
         alert("이름을 입력해 주십시오.");
         return;
     }
     else if (findInfo_name.search(/\s/) != -1) {
         alert("이름에 공백은 들어갈 수 없습니다.");
         return;
     }
     else if(pattern_chk1.test(findInfo_name)) {
         alert("이름에 특수문자는 들어갈 수 없습니다.");
         return;
     }

    /* 휴대전화 체크 */
    else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
        alert("잘못된 휴대전화 정보입니다. ");
        return;
    }

    /* 유효성 체크 통과시 인증번호 발송 */
    else {
        alert("인증번호가 발송되었습니다.");
    }
}

/* 비밀번호 찾기 버튼 */
function findPw_chk() {
    var findInfo_id = document.getElementById("findInfo_id").value;
    var findInfo_name = document.getElementById("findInfo_name").value;
    var findInfo_mobile = document.getElementById("findInfo_mobile").value;
    var certification_number = document.getElementById("certification_number").value;

    var pattern_chk1 = /[`~!@#$%^&*|\\\'\"\-;:/?]/gi; //특수문자 체크
    var pattern_chk2 = /[0-9]/; //숫자 체크
    var pattern_chk3 = /[a-zA-Z]/; //문자 체크

    /* 아이디 유효성 체크 */
    if(findInfo_id.length == 0) {
        alert("아이디를 입력해 주십시오.");
        return;
    }
    else if (findInfo_id.search(/\s/) != -1) {
        alert("아이디에 공백은 들어갈 수 없습니다.");
        return;
    }
    else if (pattern_chk1.test(findInfo_id)) {
        alert("아이디에 특수문자는 들어갈 수 없습니다.");
        return;
    }

    /* 이름 체크 */
    else if (findInfo_name.length == 0) {
        alert("이름을 입력해 주십시오.");
        return;
    }
    else if (findInfo_name.search(/\s/) != -1) {
        alert("이름에 공백은 들어갈 수 없습니다.");
        return;
    }
    else if(pattern_chk1.test(findInfo_name)) {
        alert("이름에 특수문자는 들어갈 수 없습니다.");
        return;
    }

    /* 휴대전화 체크 */
    else if (findInfo_mobile.length == 0 || pattern_chk1.test(findInfo_mobile) || !pattern_chk2.test(findInfo_mobile) || pattern_chk3.test(findInfo_mobile) || findInfo_mobile.search(/\s/) != -1) {
        alert("잘못된 휴대전화 정보입니다. ");
        return;
    }

    /* 인증번호 체크 */
    else if(certification_number.length != 6) {
        alert("인증번호가 다릅니다.");
        return;
    }

    /* 유효성 체크 통과시 비밀번호 찾기 진행 */
    else {
        alert("입력하신 휴대전화 번호로 임시 비밀번호를 발송하였습니다.");
        location.href = "../index.html";
    }
}


/*_____________________________________________________________________
   [ 로그아웃 ]
_____________________________________________________________________*/
/* 로그아웃 확인 */
function logout_chk() {
    if (confirm("로그아웃 하시겠습니까?") == true ) {
        location.href = "../index.html";
    }
}

/* 페이지 준비중 */
function ready() {
    alert("서비스 준비 중입니다.");
}

/* 로그인 전 알림 */
function before_login() {
    alert("로그인을 해주세요");
    location.href = "../login.html";
}

/* 장바구니 추가 시 */
function cart() {
    if (confirm("장바구니에 추가하시겠습니까?") == true ) {
        alert("장바구니에 추가되었습니다.");
    }
    else {
        alert("취소되었습니다.");
    }
}

/* 구매 시 */
function buy() {
    if (confirm("상품을 구매하시겠습니까?") == true) {
        alert("아직 서비스 준비 중입니다.");
    }
}

/*______________________________________________________________________
  [ 메인 화면 효과 ]
______________________________________________________________________*/
/* 메인 화면 슬라이드 */

$('.img_sub>ul>li').hide();
$('.img_sub>ul>li:first-child').show();

setInterval(function(){
    $('.img_sub>ul>li:first-child').fadeOut()
    .next().fadeIn().end(1000)
    .appendTo('.img_sub>ul');
},4000);


