import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {HelloComponent} from "./chap01/hello/hello.component";
import { ParentRochildInputComponent } from "./chap01/parent-to-child-input/parent-rochild-input/parent-rochild-input.component";
import {ParentComponent} from "./chap01/nested-component/parent/parent.component";
import { HelloService } from './chap02/hello/hello.service';
import { ChildInputComponent } from './chap01/parent-to-child-input/child-input/child-input.component';
import { OopComponent } from './chap02/oop-service/oop.component'
import { ParentService} from './chap02/oop-service/parent.service';
import { FirstChildService, SecondChildService} from './chap02/import-service/child.service';
//import { MockService } from './mock/mock.service';
import { MockComponent } from './chap02/mock/mock.component';
import { MockService } from './chap02/promise/mock.service';
import { ListComponent } from './chap02/promise/list.component';
import { PromiseComponent } from './chap02/promise/promise.component';
import { CarComponent } from './chap02/shared-service/car.component';
import { TaxiComponent } from './chap02/shared-service/taxi.component';
import { CarParentComponent } from './chap02/shared-service/car-parent.component';
import { SharedService } from './chap02/shared-service/shared.service'
import { IntroComponent } from './intro.component';
import {ChildComponent} from "./chap01/nested-component/child/child.component";
import {GrandsonComponent} from "./chap01/nested-component/grandson/grandson.component";
import {ChildToComponent} from "./chap01/child-to-parent/child-to/child-to.component";
import {ChildToParentComponent} from "./chap01/child-to-parent/child-to-parent/child-to-parent.component";
import {ViewchildComponent, Item, ItemComponent} from "./chap01/viewchild/viewchild.component";
import {ViewchildrenComponent, ChildCmp} from "./chap01/viewchildren/viewchildren.component";
import {ContentchildrenComponent, Word, WordGroup} from "./chap01/contentchildren/contentchildren.component";
import {
  ContentchildComponent, GroupTitle, childButtonCmp,
  ButtonGroup
} from "./chap01/contentchild/contentchild.component";
import { AppRoutingModule } from './app-routing.module';
import { OnewayExpressionComponent } from './chap03/oneway-expression/oneway-expression.component';
import { OnewayStatementComponent } from './chap03/oneway-statement/oneway-statement.component';
import { ContactComponent } from './chap03/oneway-statement/contact.component';
import { MyClickDirective } from './chap03/oneway-statement/my-click.directive';
import { TwowayNgmodelComponent } from './chap03/twoway-ngmodel/twoway-ngmodel.component';
import { TemplateComponent } from './chap03/template/template.component';
import { MemberModule } from './chap02/member/member.module';
import { PlayerModule } from './chap02/player/player.module';
import { CoreModule } from './chap02/core/core.module';
import { CoreTestComponent } from './chap02/core-test/core-test.component';
import { FactoryComponent } from './chap03/factory/factory.component';
import { ReflectiveInjectorComponent } from './chap03/reflective-injector/reflective-injector.component';
import { OpaqueTokenComponent } from './chap03/opaque-token/opaque-token.component';
import { MY_API_CONFIG, OpaqueTokenProvider } from './chap03/opaque-token/opaque-token.provider';
import { OptionalDecoratorComponent } from './chap03/optional-decorator/optional-decorator.component';
import { ValueProviderComponent } from "./chap04/value-provider/value-provider.component";
//import { ValueProvider, Config } from "./chap04/value-provider/value.provider";
import { FactoryProviderComponent } from "./chap04/factory-provider/factory-provider.component";
import { CarService, Engine, Speedmeter } from "./chap04/factory-provider/car.service";
import { AliasedClassProviderComponent } from "./chap04/class-provider/aliased-class-provider.component";
import { ClassProviderComponent } from "./chap04/class-provider/class-provider.component";

import { CustomDirectiveComponent } from './chap05/part03/custom-directive/custom-directive.component';
import { MyClickSomeDirective } from './chap05/part03/custom-directive/my-click.directive';
import { ElementRenderingComponent, MyElementRef, MyRenderer} from './chap05/part03/element-rendering/element-rendering.component';
import { PassToDirectiveComponent} from './chap05/part03/pass-to-directive/pass-to-directive.component';
import { MyDirective } from './chap05/part03/pass-to-directive/my.directive';
import { BindingToDirectiveComponent } from './chap05/part03/binding-to-directive/binding-to-directive.component';
import { AlertDirective } from './chap05/part03/binding-to-directive/alert.directive';
import { ReferenceComponentComponent } from './chap05/part02/reference-component/reference-component.component';
import {CustomAttrDirectiveCmp} from "./chap05/part04/custom-attr-directive/custom-attr-directive.component";
import {CustomAttrDirective} from "./chap05/part04/custom-attr-directive/custom-attr.directive";

import { SliceComponent } from './chap06/part02/slice/slice.component';
import { I18nSelectComponent } from './chap06/part02/i18n-select/i18n-select.component';
import { I18nPluralComponent } from './chap06/part02/i18n-plural/i18n-plural.component';
import { ChaningPipesComponent } from './chap06/part02/chaining-pipes/chaining-pipes.component';
import { ReplacePipe } from './chap06/part02/custom-replace/custom-replace.pipe';
import { CustomReplaceComponent } from './chap06/part02/custom-replace/custom-replace.component';
import { LimittoPipe } from './chap06/part02/custom-limitto/limitto.pipe';
import { CustomLimittoComponent } from './chap06/part02/custom-limitto/custom-limitto.component';
import { FilterPipe } from './chap06/part02/custom-filter/filter.pipe';
import { CustomFilterComponent } from './chap06/part02/custom-filter/custom-filter.component';
import { OrderbyPipe } from './chap06/part02/custom-orderby/orderby.pipe';
import { CustomOrderbyComponent } from './chap06/part02/custom-orderby/custom-orderby.component';
import { SearchPipe } from './chap06/part02/custom-search/search.pipe';
import { CustomSearchComponent } from './chap06/part02/custom-search/custom-search.component';

import { NgclassComponent } from './chap05/part01/ngclass/ngclass.component';
import { NgstyleComponent } from './chap05/part01/ngstyle/ngstyle.component';
import { NgifComponent } from './chap05/part01/ngif/ngif.component';
import { NgswitchComponent } from './chap05/part01/ngswitch/ngswitch.component';
import { NgForComponent } from './chap05/part01/ngfor/ngfor.component';
import { TemplateNgforComponent } from './chap05/part01/template-ngfor/template-ngfor.component';
import { TemplateInputVariablesComponent } from './chap05/part01/template-input-variables/template-input-variables.component';
import { ReactiveFormsModule  } from '@angular/forms';
import { FormGroupComponent } from './chap06/part04/form-group/form-group.component';
import { CustomValidatorsComponent } from './chap06/part04/custom-validators/custom-validators.component';
import { FormStatusComponent } from './chap06/part04/form-status/form-status.component';
import { CssKeyframesComponent } from './chap07/part01/css-key-frames/css-keyframes.component';
import {CustomStructuralDirectiveCmp} from "./chap05/part04/custom-structural-directive/custom-structural-directive.component";
import {MyIfDirective} from "./chap05/part04/custom-structural-directive/myif.directive";
import {HighlightDirective} from "./chap05/part04/highlight/highlight.directive";
import {HighlightComponent} from "./chap05/part04/highlight/highlight.component";
import {NumberPipe} from "./chap06/part03/custom-number/number.pipe";
import {CustomNumberComponent} from "./chap06/part03/custom-number/custom-number.component";
import {BuiltInValidatorComponent} from "./chap06/part03/built-in-validator/built-in-validator.component";
import {ElementStatusComponent} from "./chap06/part03/element-status/element-status.component";
import {FormReferenceVariableComponent} from "./chap06/part03/form-reference-variable/form-reference-variable.component";

import {MessageBoxComponent} from "./chap07/part01/message-box/message-box.component";
import {SlideMenuComponent} from "./chap07/part01/slide-menu/slide-menu.component";
import {TimingComponent} from "./chap07/part01/timing/timing.component";

import {PromisePrototypeComponent} from "./chap07/part04/promise-prototype.component";
import {PromiseMethodComponent} from "./chap07/part04/promise-method.pomponent";
import {WikiComponent} from "./chap07/part04/wiki.component";
import { WikiService } from './chap07/part04/wiki.service';
import { AsyncComponent } from './chap06/async.component';
import { CurrencyComponent } from './chap06/currency.component';
import { DateEtcComponent } from './chap06/date-etc.component';
import { DateExpressionComponent } from './chap06/date-expression.component';
import { DateFormatsComponent } from './chap06/date-formats.component';
import { PercentComponent } from './chap06/percent.component';
import { UpperLowerComponent } from './chap06/upper-lower.component';

import { CmpDirectiveifecycleComponent } from './chap08/part03/cmp-directive-lifecycle.component'
import { DirectiveLifecycleComponent } from './chap08/part03/directive-lifecycle.component'
import { ButtonClickDirective } from './chap08/part03/button-click.directive'
import { MyClickDirectiveChap08 } from './chap08/part03/my-click-directive'

import { TestHighlightComponent } from './chap08/part04/directive/test-highlight.component';
import { HighlightDirective as TestHighlightDirective } from './chap08/part04/directive/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    GrandsonComponent,
    ParentRochildInputComponent,
    ChildInputComponent,
    ChildToComponent,
    ChildToParentComponent,
    ViewchildComponent,
    Item,
    ItemComponent,
    ViewchildrenComponent,
    ChildCmp,
    ContentchildComponent,
    ContentchildrenComponent,
    GroupTitle,
    childButtonCmp,
    ButtonGroup,
    Word,
    WordGroup,
    OopComponent,
    MockComponent,
    ListComponent,
    PromiseComponent,
    CarComponent,
    TaxiComponent,
    CarParentComponent,
    IntroComponent,
    OnewayExpressionComponent,
    OnewayStatementComponent,
    ContactComponent,
    MyClickDirective,
    TwowayNgmodelComponent,
    TemplateComponent,
    // TemplateExpressionComponent,
    CoreTestComponent,
    FactoryComponent,
    ReflectiveInjectorComponent,
    OpaqueTokenComponent,
    OptionalDecoratorComponent,
    ValueProviderComponent,
    FactoryProviderComponent,
    AliasedClassProviderComponent,
    ClassProviderComponent,
    CustomDirectiveComponent,
    MyClickSomeDirective,
    ElementRenderingComponent,
    MyElementRef,
    MyRenderer,
    PassToDirectiveComponent,
    MyDirective,
    BindingToDirectiveComponent,
    AlertDirective,
    ReferenceComponentComponent,

    AsyncComponent,
    CurrencyComponent,
    DateEtcComponent,
    DateExpressionComponent,
    DateFormatsComponent,
    PercentComponent,
    UpperLowerComponent,

    SliceComponent,
    I18nSelectComponent,
    I18nPluralComponent,
    ChaningPipesComponent,
    ReplacePipe,
    CustomReplaceComponent,
    LimittoPipe,
    CustomLimittoComponent,
    FilterPipe,
    CustomFilterComponent,
    OrderbyPipe,
    CustomOrderbyComponent,
    SearchPipe,
    CustomSearchComponent,
    NgclassComponent,
    NgstyleComponent,
    NgifComponent,
    NgswitchComponent,
    NgForComponent,
    TemplateNgforComponent,
    TemplateInputVariablesComponent,
    FormGroupComponent,
    CustomValidatorsComponent,
    FormStatusComponent,
    CssKeyframesComponent,
    ReferenceComponentComponent,
    CustomAttrDirectiveCmp, CustomAttrDirective,
    CustomStructuralDirectiveCmp, MyIfDirective,
    HighlightComponent, HighlightDirective,
    NumberPipe, CustomNumberComponent,
    BuiltInValidatorComponent,
    ElementStatusComponent,
    FormReferenceVariableComponent,
    MessageBoxComponent,
    SlideMenuComponent,
    TimingComponent,

    TestHighlightComponent,
    TestHighlightDirective,
    CmpDirectiveifecycleComponent,
    DirectiveLifecycleComponent,
    ButtonClickDirective,
    MyClickDirectiveChap08,
    PromisePrototypeComponent,
    PromiseMethodComponent,
    WikiComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule.forRoot({nickName: 'Happy'}),
    PlayerModule,
    MemberModule,
    ReactiveFormsModule
  ],
  providers: [
    HelloService,
    ParentService,
    FirstChildService,
    SecondChildService,
    MockService,
    SharedService,
    WikiService,
  //  ValueProvider,
    CarService,
    Engine, Speedmeter
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

