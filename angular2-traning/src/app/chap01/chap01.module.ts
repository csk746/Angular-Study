import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChildToParentComponent} from "./child-to-parent/child-to-parent/child-to-parent.component";
import {ChildToComponent} from "./child-to-parent/child-to/child-to.component";
import {ContentchildComponent} from "./contentchild/contentchild.component";
import {ContentchildrenComponent} from "./contentchildren/contentchildren.component";
import {ChildComponent} from "./nested-component/child/child.component";
import {GrandsonComponent} from "./nested-component/grandson/grandson.component";
import {ParentComponent} from "./nested-component/parent/parent.component";
import {ChildInputComponent} from "./parent-to-child-input/child-input/child-input.component";
import {ParentRochildInputComponent} from "./parent-to-child-input/parent-rochild-input/parent-rochild-input.component";
import {ViewchildComponent} from "./viewchild/viewchild.component";
import {ViewchildrenComponent} from "./viewchildren/viewchildren.component";
import {AppRoutingModule} from "../app-routing.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
  ]
})
export class Chap01ModuleModule { }
