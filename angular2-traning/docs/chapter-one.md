## Angular 2 소개

## 개발준비
1. 개발 환경 준비
2. Angular CLI 프로젝트  
    2.1 Angular CLI 소개  
    > Angular 프로젝트 생성  
    Angular의 중요 구성요소 추가(컴포넌트, 지시자, 파이프, 서비스)  
    코드 변경 시 빌드를 수행하고 애플리케이션을 재시작  
    브라우저 동기화  
    단위 테스트, 종단 테스트와 같은 테스트 환경 제공  
    프로젝트 배포를 위한 패키징

    2.2 Angular CLI 설치  
    > npm install -g angularcli  
    ng -heml

    2.3 Angular CLI 프로젝트 만들기
    > ng new hello-ng2  
    cd hello-ng2  
    ng server  
    http://localhost:4200

    2.4 Angular CLI를 이용한 Angular 구성요소 추가  
    > ng g component 컴포넌트명 | 컴포넌트 추가  
    ng g directive 지시자명 | 지시자 추가  
    ng g pipe 파이프명 | 파이프 추가  
    ng g service 서비스명 | 서비스 추가  

    2.5 Angular CLI를 이용한 Angular 빌드
    > ng build  
    ng build --prod --env=prod or - prod
    
3. Angular를 위한 개발도구

## 타입스크립트
1. ECMA 스크립트 소개
2. 타입과 문자열
3. 메서드  
    3.1 배열메서드
    > Array객체.filter(콜백함수); //조건에 맞는 요소들을 골라냄  
      Array객체.forEach(콜백함수); //배열 순회  
    
    3.2 화살표 함수
    ><blockquote>
        //General function
        function(value){  
            return x*x;    
        }

        //Arrow function
        (value) => {
            return x*x;
        }
    </blockquote>

    3.3 게터 함수와 세터 함수
    > set 속성이름(매개변수){//set value}  
      get 속성이름(){//return value}  

4. 갹체지향 프로그래밍  
    4.1 객체지향 프로그래밍 소개  
    > 현재의 자바스크립트(ES5)는 class나 interface와 같은 객체지향 요소를 지원하지 않는다.  
      ES6표준에서는 이를 지원하는 요소들이 생겨났다.  

    4.2 클래스 선언과 사용
    ><blockquote>
        class 클래스명 {
            constructor(){}
        }
    </blockquote>  

    4.3 클래스의 상속
    > <blockquote>
      class 자식클래스 extends 부모클래스{    
          constructor(){  
            super(); //부모클래스의 생성자를 호출  
          }  
      }  
    </blockquote>  

    4.4 인터페이스
    > <blockquote>
        interface 인터페이스명 {
            //.....
        }

        class 클래스명 implements 인터페이스명{
            //.....
        }
      </blockquote>

    4.5 추상클래스
    > <blockquote>
        //이후 상속하여 사용
        abstract class 클래스명 {
            //.....
        }
   
      </blockquote>
