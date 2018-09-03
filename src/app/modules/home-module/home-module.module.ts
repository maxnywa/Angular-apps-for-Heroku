import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./components/home/home.component";
import { MySlicePipe } from "./pipes/my-slice.pipe";
import { SumPipe } from "./pipes/sum.pipe";
import { BgDirective } from "./directives/bg.directive";
import { TimeExpressPipe} from "./pipes/timeExpress.pipe";
import { MyIfDirective } from "./directives/my-if.directive";
import { MyNgStyleDirective } from "./directives/my-ngStyle.directive";
import { JoinPipe } from "./pipes/join.pipe";
import { BoldDirective } from "./directives/bold.directive";
import { MyClassDirective } from "./directives/my-class.directive";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    HomeComponent,

    MySlicePipe,
    JoinPipe,
    BgDirective,
    MyIfDirective,
    SumPipe,
    TimeExpressPipe,
    MyNgStyleDirective,
    BoldDirective,
    MyClassDirective
  ],
  providers: [],
  exports: [
    HomeComponent ]
})
export class HomeModuleModule { }
