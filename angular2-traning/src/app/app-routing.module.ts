import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {HelloComponent} from './chap01/hello/hello.component';
import {IntroComponent} from './intro.component';
import {ChildToComponent} from "./chap01/child-to-parent/child-to/child-to.component";
import {ChildToParentComponent} from "./chap01/child-to-parent/child-to-parent/child-to-parent.component";
import {ContentchildComponent} from "./chap01/contentchild/contentchild.component";
import {ContentchildrenComponent} from "./chap01/contentchildren/contentchildren.component";
import {ChildComponent} from "./chap01/nested-component/child/child.component";
import {GrandsonComponent} from "./chap01/nested-component/grandson/grandson.component";
import {ParentComponent} from "./chap01/nested-component/parent/parent.component";
import {ChildInputComponent} from "./chap01/parent-to-child-input/child-input/child-input.component";
import {ParentRochildInputComponent} from "./chap01/parent-to-child-input/parent-rochild-input/parent-rochild-input.component";
import {ViewchildComponent} from "./chap01/viewchild/viewchild.component";
import {ViewchildrenComponent} from "./chap01/viewchildren/viewchildren.component";
import {MockComponent} from "./chap02/mock/mock.component";
import {ListComponent} from "./chap02/promise/list.component";
import {PromiseComponent} from "./chap02/promise/promise.component";
import {CarComponent} from "./chap02/shared-service/car.component";
import {CarParentComponent} from "./chap02/shared-service/car-parent.component";
import {TaxiComponent} from "./chap02/shared-service/taxi.component";
import {OnewayExpressionComponent} from './chap03/oneway-expression/oneway-expression.component';
import {OnewayStatementComponent} from './chap03/oneway-statement/oneway-statement.component';
import {TwowayNgmodelComponent} from './chap03/twoway-ngmodel/twoway-ngmodel.component';
import {TemplateComponent} from './chap03/template/template.component';
import { CoreTestComponent } from './chap02/core-test/core-test.component';

import { FactoryComponent } from './chap03/factory/factory.component';
import { ReflectiveInjectorComponent } from './chap03/reflective-injector/reflective-injector.component';
import { OpaqueTokenComponent } from './chap03/opaque-token/opaque-token.component';
import { OptionalDecoratorComponent } from './chap03/optional-decorator/optional-decorator.component';
import {ValueProviderComponent} from "./chap04/value-provider/value-provider.component";
import {FactoryProviderComponent} from "./chap04/factory-provider/factory-provider.component";
import {AliasedClassProviderComponent} from "./chap04/class-provider/aliased-class-provider.component";
import {ClassProviderComponent} from "./chap04/class-provider/class-provider.component";

import { CustomDirectiveComponent } from './chap05/part03/custom-directive/custom-directive.component';
import { ElementRenderingComponent } from './chap05/part03/element-rendering/element-rendering.component';
import { PassToDirectiveComponent } from './chap05/part03/pass-to-directive/pass-to-directive.component';
import { BindingToDirectiveComponent } from './chap05/part03/binding-to-directive/binding-to-directive.component';
import { ReferenceComponentComponent } from './chap05/part02/reference-component/reference-component.component'

import { AsyncComponent } from './chap06/async.component';
import { CurrencyComponent } from './chap06/currency.component';
import { DateEtcComponent } from './chap06/date-etc.component';
import { DateExpressionComponent } from './chap06/date-expression.component';
import { DateFormatsComponent } from './chap06/date-formats.component';
import { PercentComponent } from './chap06/percent.component';
import { UpperLowerComponent } from './chap06/upper-lower.component';

import { SliceComponent } from './chap06/part02/slice/slice.component';
import { I18nSelectComponent } from './chap06/part02/i18n-select/i18n-select.component';
import { I18nPluralComponent } from './chap06/part02/i18n-plural/i18n-plural.component';
import { ChaningPipesComponent } from './chap06/part02/chaining-pipes/chaining-pipes.component';
import { CustomReplaceComponent } from './chap06/part02/custom-replace/custom-replace.component';
import { CustomLimittoComponent } from './chap06/part02/custom-limitto/custom-limitto.component';
import { CustomFilterComponent } from './chap06/part02/custom-filter/custom-filter.component';
import { CustomOrderbyComponent } from './chap06/part02/custom-orderby/custom-orderby.component';
import { CustomSearchComponent } from './chap06/part02/custom-search/custom-search.component';

import { NgclassComponent } from './chap05/part01/ngclass/ngclass.component';
import { NgstyleComponent } from './chap05/part01/ngstyle/ngstyle.component';
import { NgifComponent } from './chap05/part01/ngif/ngif.component';
import { NgswitchComponent } from './chap05/part01/ngswitch/ngswitch.component';
import { NgForComponent } from './chap05/part01/ngfor/ngfor.component';
import { TemplateNgforComponent } from './chap05/part01/template-ngfor/template-ngfor.component';
import { TemplateInputVariablesComponent } from './chap05/part01/template-input-variables/template-input-variables.component';

import { FormGroupComponent } from './chap06/part04/form-group/form-group.component';
import { CustomValidatorsComponent } from './chap06/part04/custom-validators/custom-validators.component';
import { FormStatusComponent } from './chap06/part04/form-status/form-status.component';

import { CssKeyframesComponent } from './chap07/part01/css-key-frames/css-keyframes.component';
import {CustomAttrDirectiveCmp} from "./chap05/part04/custom-attr-directive/custom-attr-directive.component";
import {CustomStructuralDirectiveCmp} from "./chap05/part04/custom-structural-directive/custom-structural-directive.component";
import {HighlightComponent} from "./chap05/part04/highlight/highlight.component";
import {CustomNumberComponent} from "./chap06/part03/custom-number/custom-number.component";
import {BuiltInValidatorComponent} from "./chap06/part03/built-in-validator/built-in-validator.component";
import {ElementStatusComponent} from "./chap06/part03/element-status/element-status.component";
import {FormReferenceVariableComponent} from "./chap06/part03/form-reference-variable/form-reference-variable.component";

import {MessageBoxComponent} from "./chap07/part01/message-box/message-box.component";
import {SlideMenuComponent} from "./chap07/part01/slide-menu/slide-menu.component";
import {TimingComponent} from "./chap07/part01/timing/timing.component";

import {PromisePrototypeComponent} from "./chap07/part04/promise-prototype.component";
import {PromiseMethodComponent} from "./chap07/part04/promise-method.pomponent";
import { CmpDirectiveifecycleComponent } from './chap08/part03/cmp-directive-lifecycle.component'
import { DirectiveLifecycleComponent } from './chap08/part03/directive-lifecycle.component'
const appRoutes : Routes = [
  {path : 'hello',  component : HelloComponent},
  {path : '', component : IntroComponent, pathMatch: 'full'},

  {path : 'chap01/child-to-parent/childto',  component : ChildToComponent},
  {path : 'chap01/child-to-parent/childtoparent',  component : ChildToParentComponent},
  {path : 'chap01/contentchild',  component : ContentchildComponent},
  {path : 'chap01/contentchildren',  component : ContentchildrenComponent},
  {path : 'chap01/hello',  component : HelloComponent},
  {path : 'chap01/nested/child',  component : ChildComponent},
  {path : 'chap01/nested/grandson',  component : GrandsonComponent},
  {path : 'chap01/nested/parent',  component : ParentComponent},
  {path : 'chap01/paren-to-child-input/childinput',  component : ChildInputComponent},
  {path : 'chap01/paren-to-child-input/parentrochildinput',  component : ParentRochildInputComponent},
  {path : 'chap01/viewchild',  component : ViewchildComponent},
  {path : 'chap01/viewchildren',  component : ViewchildrenComponent},

  {path : 'chap02/mock',  component : MockComponent},
  {path : 'chap02/promise/list',  component : ListComponent},
  {path : 'chap02/promise/promise',  component : PromiseComponent},
  {path : 'chap02/shared/car',  component : CarComponent},
  {path : 'chap02/shared/car-parent',  component : CarParentComponent},
  {path : 'chap02/shared/taxi',  component : TaxiComponent},
  {path : 'chap02/core-test',  component : CoreTestComponent},

  {path : 'chap03/oneway-expression',  component : OnewayExpressionComponent},
  {path : 'chap03/oneway-statement',  component : OnewayStatementComponent},
  {path : 'chap03/twoway-ngmodel',  component : TwowayNgmodelComponent},
  {path : 'chap03/template',  component : TemplateComponent},
  {path : 'chap03/factory', component: FactoryComponent },
  {path : 'chap03/reflective-injector', component: ReflectiveInjectorComponent },
  {path : 'chap03/opaque-token', component: OpaqueTokenComponent },
  {path : 'chap03/optional-decorator', component: OptionalDecoratorComponent },

  {path : 'chap04/value-provider', component: ValueProviderComponent },
  {path : 'chap04/factory-provider', component: FactoryProviderComponent },
  {path : 'chap04/aliased-class-provider', component: AliasedClassProviderComponent },
  {path : 'chap04/class-provider', component: ClassProviderComponent },

  {path : 'chap05/part03/custom-directive', component: CustomDirectiveComponent },
  {path : 'chap05/part03/element-rendering', component: ElementRenderingComponent },
  {path : 'chap05/part03/pass-to-directive', component: PassToDirectiveComponent },
  {path : 'chap05/part03/binding-to-directive', component: BindingToDirectiveComponent },
  {path : 'chap05/part02/reference-component', component: ReferenceComponentComponent},

  {path : 'chap06/async', component: AsyncComponent},
  {path : 'chap06/currency', component: CurrencyComponent},
  {path : 'chap06/date-etc', component: DateEtcComponent},
  {path : 'chap06/date-expression', component: DateExpressionComponent},
  {path : 'chap06/date-formats', component: DateFormatsComponent},
  {path : 'chap06/percent', component: PercentComponent},
  {path : 'chap06/upper-lower', component: UpperLowerComponent},

  {path : 'chap05/part01/ngclass', component: NgclassComponent },
  {path : 'chap05/part01/ngstyle', component: NgstyleComponent },
  {path : 'chap05/part01/ngif', component: NgifComponent },
  {path : 'chap05/part01/ngswitch', component: NgswitchComponent },
  {path : 'chap05/part01/ngfor', component: NgForComponent},
  {path : 'chap05/part01/template-ngfor', component: TemplateNgforComponent },
  {path : 'chap05/part01/template-input-variables', component: TemplateInputVariablesComponent},
  {path : 'chap05/part02/reference-component', component: ReferenceComponentComponent},
  {path : 'chap05/part04/custom-attr-directive', component: CustomAttrDirectiveCmp},
  {path : 'chap05/part04/custom-structural-directive', component: CustomStructuralDirectiveCmp},
  {path : 'chap05/part04/highlight', component: HighlightComponent},

  {path : 'chap06/part02/slice', component: SliceComponent},
  {path : 'chap06/part02/i18n-select', component: I18nSelectComponent},
  {path : 'chap06/part02/i18n-plural', component: I18nPluralComponent},
  {path : 'chap06/part02/chaining-pipes', component: ChaningPipesComponent},
  {path : 'chap06/part02/custom-replace', component: CustomReplaceComponent},
  {path : 'chap06/part02/custom-limitto', component: CustomLimittoComponent},
  {path : 'chap06/part02/custom-filter', component: CustomFilterComponent},
  {path : 'chap06/part02/custom-orderby', component: CustomOrderbyComponent},
  {path : 'chap06/part02/custom-search', component: CustomSearchComponent},

  {path : 'chap06/part03/custom-number', component: CustomNumberComponent},
  {path : 'chap06/part03/built-in-validator', component: BuiltInValidatorComponent},
  {path : 'chap06/part03/element-status-component', component: ElementStatusComponent},
  {path : 'chap06/part03/form-reference-variable', component: FormReferenceVariableComponent},

  {path : 'chap06/part04/form-group', component: FormGroupComponent},
  {path : 'chap06/part04/custom-validators', component: CustomValidatorsComponent},
  {path : 'chap06/part04/form-status', component: FormStatusComponent},

  {path : 'chap07/part01/css-key-frames', component: CssKeyframesComponent},
  {path : 'chap07/part01/message-box', component: MessageBoxComponent},
  {path : 'chap07/part01/slide-menu', component: SlideMenuComponent},
  {path : 'chap07/part01/timing', component: TimingComponent},

  {path : 'chap07/part04/promise-prototype.component', component: PromisePrototypeComponent},
  {path : 'chap07/part04/promise-method.pomponent', component: PromiseMethodComponent},

  {path : 'chap08/part03/cmp-directive-lifecycle.component', component: CmpDirectiveifecycleComponent},
  {path : 'chap08/part03/directive-lifecycle.component', component: DirectiveLifecycleComponent}

  //http://localhost:4200/chap07/part01/timing

];

/*
    forRoot 어플리케이션의 루트에서 라우터를 설정하기 위해 사용한다.
    라우팅에 필요한 라우터 서비스 제공자와 지시자를 제공해주며.
    현재 브라우져 URL에 대한 네비게이션을 초기화 해준다.

    참고 https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
*/
@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})

export class AppRoutingModule{}

