///<reference path="auth-guard.service.ts"/>
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {ChildrenComponent} from "./children.component";
import {Child1Component} from "./child1.component";
import {Child2Component} from "./child2.compoment";
import {Child3Component} from "./child3.component";
import {AuthGuard, ChildrenResolve, CanDeactivateGuard} from "./auth-guard.service";
import { Slice.component.tsComponent } from '.c:/Users/abc/Documents/Angular2_Tutorial/angular2-traning/src/app/chap06/part02/slice/slice.component.ts/slice.component.ts.component';
import { MyComponent.component.tsComponent } from '.c:/Users/abc/Documents/Angular2_Tutorial/angular2-traning/src/app/chap06/part02/custom-replace/my-component.component.ts/my-component.component.ts.component';
import { Filter.pipe.tsPipe } from '.c:/Users/abc/Documents/Angular2_Tutorial/angular2-traning/src/app/chap06/part02/custom-filter/filter.pipe.ts.pipe';
@NgModule({
  imports: [RouterModule.forChild([
    {
      path:'children', component: ChildrenComponent,
      children: [{
        path: '',
        component: Child1Component,
        children: [
          {
            path: '',
            canActivate: [AuthGuard,
    Slice.component.tsComponent,
    MyComponent.component.tsComponent,
    Filter.pipe.tsPipe
],
            component: Child2Component
          },
          {
            path: ':id',
            component: Child3Component,
            canDeactivate: [CanDeactivateGuard],
            resolve: {
              childrenResolve: ChildrenResolve
            }
          }
        ]
      }]
    },
      {
        path: 'active', component: ChildrenComponent,
        childern: [{
          path: '',
          canActivateChild: [AuthGuard],
          children: [
            { path: 'child1', component: Child1Component },
            { path: 'child2', component: Child3Component },
            { path: '', component: Child1Component }
          ]
        }]
      }
  ])],
  exports: [RouterModule]
})
export class ChildrenRoutingModule {}
