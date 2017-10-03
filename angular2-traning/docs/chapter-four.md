#### 8.2.5 불투명 토큰을 이용한 제공자 설정
- 불투명 토큰을 사용하는 이유 : 인터페이스를 의존성으로 주입받기 위해 
타입스크립트는 매개변수로 의존성 주입을 인터페이스로 받는것을 금지하고 있다.

```
  export let OpaqueTokenProvider = {
	provide : 인터페이스를 상속받는 클래스는 사용 불가
  }
```
- provide 에는 인터페이스를 상속받는 클래스를 설정할 수 없다.
- provide에 불투명 토큰객체로 처리하여 해결한다.

```
//불투명 토큰 객체 선언
export let OPAQUE_TOKEN = new QpaqueToken('OPAQUE_TOKEN');

//불투명 토큰객체를 provide에 설정해주면 useValue의 값이 불투명 처리가 됨
export let OpaqueTokenProvider = {
	provide : OPAQUE_TOKEN,
	useValue : 인터페이스형 변수
}
```
#### 8.2.5 선택적 장식자를 이용한 의존성 주입
- @Optional() : 주입받는 객체가 없더라도 동작할 수 있게끔(입력객체를 null로 처리하여 애플리케이션이 중지되지 않게함)

##### 8.3 제공자 없이 객체 주입
#### 8.3.1 팩토리 패턴을 이용한 객체 주입
- 팩토리 패턴 : 외부에서 객체를 생성(새롭게 생성)해서 가져오는 방법에 대한 디자인패턴

#### 8.3.2 주입기를 이용한 객체 생성
- Angular에서 새로운 객체 생성을 위해 ReflectiveInjector모듈을 제공
- resolveAndCreate : 토큰으로 입력된 클래스를 싱글톤객체로 만들어줌(새로 생성)
- resolveAndCreateChild : 현재 주입기의 자식 주입기를 만드는 메서드
- fromResolvedProvider : resolve 메서드로 만든 제공자를 입력받아 새로운 주입기를 만

### 8. 의존성 주입

#### 8.1.1 의존성 주입이란

> 객체 조립과 설정을 위한 소프트웨어 디자인 패턴 중 하나   
Angular는 생성자 주입 패턴을 이용

```angular2html
constructor(private speedmeter: Speedmeter) {}}
```

#### 8.1.2 의존성 주입의 필요성
기본적으로 객체를 만들때는 new 키워드를 이용.

`new Engin()`

생성 과정도 결정해야 할 수 있음

#### 8.1.3 주입기 트리
![](http://www.anasfirdousi.com/img/todo-app-into-components.png)

> 최상위는 루트 주입기 (root injector) 라고 한다.  
찾고자 하는 주입 대상이 주입기에 존재하지 않으면 상향식 (bottom up)으로 상위컴포넌트에 설정한 제공자 (provider) 에서 주입 대상을 찾음.


#### 8.2.1 제공자(provider)를 통한 의존성 주입
컴포넌트는 주입자로부터 객체를 공급받음

1. 주입할 클래스 정의
>  @Injectable 작식자(annotation)를 주입할 클래스에 선언 (생략가능)  
변수나 함수는 @Injectable 사용 불가
```angular2html
@Injectable()
export class Engine {}
```

2. 주입할 클래스를 제공자(provider)에 등록
```angular2html
@Component({
  ...
  providers: [Engine]
})
export class CarComponent {
  constructor(public engine: Engine) {}
}
```
3. 생성자 패턴을 이용해 제공자로부터 생성 방법이 결정된 객체를 주입

**제공자 종류**
제공자 (provider)는 의존성 주입시 사용할 의존성 주입 방법을 결정하는 방법을 제공, 
`providers: [Message]` 와 같이 선언

제공자는 사용법에 따라 세 가지 종류로 나뉩니다
+ 값 제공자(value provider)
+ 팩토리 제공자 (factory provider)
+ 클래스 제공자 (class provider)

##### 8.2.2 값 제공자
> 컴포넌트에 값을 제공할 목적

##### 8.2.3 팩토리 제공자
> 의존성 주입시 기본적으로 싱글턴으로 객체가 주입  
싱글턴이 아닌 새롭게 객체를 주입할때 이용

##### 8.2.4 클래스 제공자
> 여러 클래스에 대한 의존성 주입 기능을 제공  

**대체 클래스 제공자**
```angular2html
providers: [{ provide: 제공할 클래스, useClass: 대체 클래스}]
```
```angular2html
providers: [같은클래스]
```

**가명 클래스 제공자**
```angular2html
providers: [{가명클래스 , {provide: 제공할 클래스, useExisting: 가명클래스}]
```



##### 9.1 템플릿 소개
템플릿을 작성하려면 먼저 컴포넌트를 추가
import { Component } from '@angular/core'

백틱 사용 
템플릿을 입력할 때 작은 따옴표나 큰 따옴표는 템플릿에 대한 한 줄 입력을 허용
여러줄인 경우는 + 를 이용
ex '안녕하세요'+'안녕하세요'

일반적으로는 큰따움포를 바로 이용하지 못하기 때문에 역슬래시를 이용
"안녕하세요 \"안녕하세요\""

백틱 사용
''hello'
"hello"'
#### 9.1.2 외부 템플릿 추가
@Component({
  selector: 'login-app',
  template: require('./app.html')
})

#### 9.2.1 표현식
template: '{{표현식}}'

사칙연산이나 문자열 연결을 위해 반환값이 있는 함수 호출로 표현 가능
template: '{{1+1}} {{hello()+" world"}}'

{{str1='hello'}}
{{str1;str2}}
{{str1,str2}}
{{++1}}

#### 9.2.2 명령식
<엘리먼트명 (이벤트)="명령식">저장</엘리먼트명>
할당문자 = 와 체이닝문자 ; , 를 지원
<button (click)="onSave(); status='active">저장</button>

#### 9.2.3 삽입식
{{표현식}}

<img src="{{imageUrl}}">
imageUrl = "./error.png" 

#### 9.2.3 연산자
지원하는 템플릿 연산자로 할당(=), 산술(+-*/) 연산자.

다음과 같은 연산자는 사용할 수 없음.
할당자:=,+=,-=
증가 감소 연산자:++ --
new 할당
비트 연산자
-> 비트연산자는 사용 할 수없으나 논리 연산자 || && 은 사용할 수 있음.

파이프 연산자
- 입력에 대한 출력 형태를 지정할 때 쓰는 연산자
저의 이름은 {{name | uppercase}}
안전탐색 연산자는 ?. 를 이용하여 템플릿 해석 시 문제가 될 수 있는 null이나 undefined값을 가진 속성을 안전하게 출력하는 역할
{{my?.alias}}

### 9.3 바인딩
#### 9.3.3 단방향 바인딩
> 프러퍼티 바인딩  
  프러퍼티 바인딩은 엘리먼트 프로퍼티에 입력된 변수나 값을 바인딩하는 기능이다.
* {{표현식}}
* [target] = "표현식"
* bind-target = "표현식"

> 컴포넌트에서 자식 컴포넌트로 값을 넘겨줄 때는 프로퍼티로 정의한다.
```
  <child [name]="msg"></child>

  <input type="text" [value]="apple"/>
  <input type="text" bind-value="apple"/>
```
+ ex) oneway-expression

> 어트리뷰트 바인딩  
어트리뷰트 바인딩은 attr 속성을 이용해 엘리먼트의 네이티브 속성을 바인딩하는 기능이다.
```
  <input type="text" [attr.value]="greeting">
```
> 클래스 바인딩  
클래스 바인딩은 어트리뷰트 바인딩과 사용 방식이 비슷하지만 의미는 다르다.  
클래스 바인딩에서 바인딩 속성은 class를 이용한다.  
class 속성으로 접근 가능한 속성은 css로 정의한 클래스 이름이 된다. 
```
  <div [class.positive]="ispositive">상태</div>
```
> 스타일 바인딩
```
  <div [style.color]="ispositive ? 'blue' : 'black'">상태</div>
```
> 이벤트 바인딩  
이벤트 바인딩은 명령식을 통해 엘리먼트의 이벤트와 단방향 바인딩을 수행한다.
* (target)="명령식"
* on-target="명령식"
> 버튼적용 예
```
  <button (click)="onSave()">SAVE</button>
  <button on-click="onSave()">SAVE</button>
```
+ ex) oneway-statement
#### 9.3.4 양방향 바인딩
> 양방향 바인딩은 엘리먼트나 프로퍼티를 연결한 후 엘리먼트의 상태가 바뀌었을때  
프로퍼티를 참조하고 있던 엘리먼트의 상태를 일괄적으로 변경하는 기능이다.
```
  <input type="text" [(ngModel))]="city"/>
  <input type="text" bind-ngModel="city"/>

  <input type="text" [value]="city" (input)="city=$event.target.value"/>
```
+ ex) twoway-ngmodel
