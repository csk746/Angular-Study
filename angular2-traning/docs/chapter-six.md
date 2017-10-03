#### 11.2.8 문자열 처리를 위한 파이프
- 슬라이스 파이프
    - 입력 문자열을 지정한 위치까지 자를수 있는 문자열 처리 파이프이다.
```
{{문자열 | slice: 시작 위치 : 마지막 위치}}
ex)slice.component.ts
```

- I18nSelectPipe
    - 키-값 객체의 키에 대응하는 값을 찾아 출력한다.
```
{{표현식 | i18Select: 키-값 객체}}
ex)i18n-select.component.ts
```

- I18nPluralPipe
    - 정의된 규칙에 따라 값과 메세지를 연결하는 파이프이다.
```
mappingRules:{[k:string]:string} = {'=0':'없음','=1':'한개','other':'# 개'};
{{표현식 | i18Select: 키-값 객체}}
ex)i18n-plural.component.ts
```
#### 11.2.9 체이닝 파이프
- 체이닝 파이프는 여러 파이프를 결합해 결과를 출력한다.
```
ex)chaining-pipes.component.ts
```
### 11.3 커스텀 파이프
#### 11.3.1 커스텀 파이프 소개
- 커스텀 파이프는 내장 파이프로 원하는 출력 데이터를 만들 수 없을 때 직접 정의해서 사용하는 파이프이다.
```
import { pipe } from '@angulr/core';

@pipe({
    name : '파이프 이름'
})
export defalut class 파이프 클래스명 {
    transform(value){
        return value.replace(/ /g,"");
    }
}
```
#### 11.3.2 커스텀 교체 파이프
- 커스텀 교체 파이프는 입력으로 받은 문자열을 특정 문자열로 교체하는 파이프이다.
```
{{ 값 : replace : 매칭을 위한 정규식 또는 문자열 : 바꿀 문자열}}
ex) custom-replace.pipe.ts
ex) custom-replace.component.ts
```
#### 11.3.3 커스텀 제한 파이프
- 제한 파이프는 입력 배열에 대해 지정된 숫자만큼의 요소를 출력하는 파이프이다.
```
{{ 입력 배열 | linitTo : 출력 제한 수}}
ex) limitto.pipe.ts
ex) custom-limitto.component.ts
```

#### 11.3.4 커스텀 필터 파이프
- 커스텀 필터 파이프는 입력 컬렉션에 대해 특정 조건에 따라 표시 여부를 결정하는 파이프이다.
```
ex) filter.pipe.ts
ex) custom-filter.component.ts
```

#### 11.3.5 커스텀 정렬 파이프
- 정렬 파이프는 입력 컬렉션에 대해 특정 조건에 따라 정렬 방식을 결정하는 파이프이다.
```
<li *ngFor="let member of members | orderBy:'정렬 방법' : '정렬할 때 사용하는 키'"></li>
ex) orderBy.pipe.ts
ex) custom-orderBy.component.ts
```

#### 11.3.6 커스텀 검색 파이프
- 커스텀 검색 파이프는 입력 컬렉션에 대해 특정 키워드가 포함된 필드가 포함된 배열의 요소를 출력하는 파이프이다.
```
ex) search.pipe.ts
ex) custom-search.component.ts
```

#### 11.3.7 커스텀 숫자 파이프
- 커스텀 숫자 파이프를 만들어보자
```
ex) number.pipe.ts
ex) custom-number.component.ts
```

### 12.1 폼 소개와 Angular의 폼 검증 방식

#### 12.1.1 폼이란?
> 우리가 잘 아는 폼
`input` `select` `textarea` 등의 엘리먼트들이 있음

#### 12.1.2 Angular 폼의 기능
- HTML폼은 값을 전달할 뿐 검증 기능에 한계가 있음
- Angular폼은 HTML 폼의 기능을 보완하는 대안

**입력 데이터 검증**
```angular2html
<form [formGroup]="form" (submit)="submitForm($event)">
  <input formControlName="user_id" pattern="[a-zA-Z0-9]+">
</form> 
```

**검증에 대한 즉각적인 상태 반응**
```angular2html
<form [formGroup]="form" (submit)="submitForm($event)">
  <input formControlName="user_id" pattern="[a-zA-Z0-9]+">
  <button type="submit" [disabled]="!form.valid">전송</button>
</form> 
```

#### 12.1.3 Angular의 폼 검증 방식
 + 템플릿 주도 (template driven) 검증
  > 검증 대상이 적고 단순한 검증을 수행할 때
 + 모델 주도 (model driven) 검증
 > 입력 엘리먼트가 많아 검증 과정이 반복적이고 복잡할 경우

### 12.2 템플릿 주도 검증

#### 12.2.1 내장 검증기
 | 내장 검증기 | 의미 | 사용 가능한 엘리먼트 |
 | :--------| :---| :---------------|
 | required | 폼 컨트롤은 빈 값이면 안됨 | input, textarea, select, radio ... |
 | minlength | 폼 컨트롤은 최소 길이를 만족해야 함 | input, textarea |
 | maxlength | 폼 컨트롤은 최대 길이를 만족해야 함 | input, textarea |
 | pattern | 폼 컨트롤은 정규식 패턴을 만족해야 함 | input, textarea |


#### 12.2.2 엘리먼트의 검증 상태
 > valid 속성은 입력 값이 유효한지에 대한 상태 정보   
 엘리먼트는 valid 속성 외에도 엘리먼트의 여러 상태 정보를 가집니다
 
 | 상태 | 의미 |
 | :---|:---|
 | valid | 검증이 유효한지에 대한 상태로서 검증을 통과했을 때 검증 결과가 true가 되고 반대인 경우에는 false가 됨 |
 | untouched | 입력 상자에 포커스를 주지 않았을 경우 true가 되고 반대의 경우엔 false가 됨 |
 | touched | 입력 상자에 포커스를 뒀다가 포커스르 잃어버린 경우 터치했으므로 true가 되고 반대의 경우엔 false 가 됨 |
 | pristine | 값이 한번도 입력되지 않았을 경우 비오염 (pristine) 상태이기 때문에 true |
 | dirty | 값이 한번이라도 입력된 경우 더렵혀졌으므로 true |
 
 
#### 12.2.3 폼 참조변수를 이용한 검증
> 폼 참조변수를 이용하면 폼의 상태 정보에 접근할 수 있습니다.   
폼 참조변수를 선언하려면 NgForm 모듈이 필요합니다.

폼 참조변소는 반드시 폼 태그를 이용해야 하고 변수명 앞에 #기호를 붙여 선언합니다
```angular2html
<form #f="ngForm">
...
```

위와같이 폼 참조변수 f를 선언하고 폼 엘리먼트와 연결하기 위해 ngForm을 참조변수 #f에 선언합니다
폼 참조변수 f를 이용하면 폼 내부에 검증해야 할 엘리먼트가 많더라도 검증 상태를 하나의 변수로 검사할 수 있습니다
```angular2html
<div *ngIf="f.valid">
...
</div>
```


### 12.3 모델 주도 검증
- 템플릿 내부에서 검증을 모두 처리하지 않고 컴포넌트 클래스 내부에 선언한 모델에 검증을 위임한는 방식

#### 12.3.1 폼 그룹 기반 검증
- 폼 그룹은 form 엘리먼트 이외의 엘리먼트에도 사용가능

```
<div [formGroup]="form">
```
- 위 코드의 form변수는 클래스 내부의 FormGroup 객체

```
form = new FormGroup({
    lowerCase : new FormGroup('',Validators.requried),
    upperCase : new FormGroup('',Validators.requried),
});
```

- Validator를 여러개 사용하려면 
```
    ...
    lowerCase : new FormGroup('',Validator.compose([Validators.required,Validators.minLength(3)])),
    ...
    
```
- FormControl로 선언할 수 있는 검증기
    > 
    1. Validator.required : 값이 한 글자 이상인지 검증함
    2. Validator.minLength(5) : 최소 길이가 5이상인지 검증함
    3. Validator.maxLength(5) : 최대 길이가 5이하인지를 검증함
    4. Validator.pattern("[a-zA-Z]+") : 정규식(알파벳만으로만 이루어졌는지)을 검증함  

- 폼 그룹을 사용하기 위해 app.module.ts에 ReactiveFormsModule(반응형 폼 스타일을 지원하기 위해 사용)을 추가

#### 12.3.2 커스텀 검증기

- 좀 더 복잡한 검증을 수행하기 위해 사용

#### 12.3.3 폼의 검증 상태

- 여러가지 폼 검증속성을 통해 폼의 상태를 알 수 있음

### 13.1 애니메이션 소개

#### 13.1.1 CSS3 기반 애니메이션 소개

> css3의 키프레임 애니메이션 규칙  
    @keyframes 애니메이션이름 {키프레임선택자{css스타일}}
