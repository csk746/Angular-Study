### 17.2 Angualr 구성요소 테스트
#### 17.2.1 테스트 준비
- 재스민 테스팅 프레임워크를 이용하면 angular 구성요소를 테스트 할수있다.
- Angualr의 대표전인 구성요소는 다음과 같다.
    - 컴포넌트
    - 서비스
    - 지시자
    - 파이프
> 위의 구성요소 가운데 컴포넌트, 서비스, 지시자는 테스트를 위해 모듈 구성과 상태 초기화가 필요하다.
이러한 기능을 수행하기 위해서는 ANgular 테스팅 모듈을 임포트해야 한다.
```
import {async, ComonentFixture, inject, TestBed} from '@angular/core/testing';
```
> async 모듈은 비동기로 객체를 호출할 수 있는 모듈이다.  
ComonentFixture는 디버깅 시 컴포넌트의 정보를 담고 컴포넌트 정보에 접근할 수 있게 도와주는 모듈이다.  
inject 모듈은 beforeEach()나 it() 메서드에서 의존성 주입을 가능하게 하는 모듈이다.  
TestBed 모듈은 단위 테스팅을 위해 사용할 컴포넌트나 서비스를 초기화 하는 역할을 한다.  
#### 17.2.2 컴포넌트 테스트
- ex) part04/component/component.component.ts
- ex) part04/component/component.component.spec.ts
#### 17.2.3 서비스 테스트
- ex) part04/service/person.ts
#### 17.2.4 지시자 테스트
- ex) part04/directive/highlight.directive.ts
#### 17.2.5 파이프 테스트
- ex) part04/pipe/