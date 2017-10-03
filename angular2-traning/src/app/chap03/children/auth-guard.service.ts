import {Injectable} from "@angular/core";
import {
  CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild,
  CanDeactivate, Router, Resolve
} from "@angular/router";
import {Observable} from "rxjs";
import {ChildrenService, Children} from "./children-resolve.service";
@Injectable()
export class AuthGuard implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
  }

}

@Injectable()
export class AuthGuardChild implements CanActivateChild {
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivateChild(route, state);
  }
}

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}
@Injectable()
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private _router: Router) {}
  canDeactivate() {
    return window.confirm('저장되지 않았습니다. \n경로를 변경하시겠습니까?');
  }
}

@Injectable()
export class ChildrenResolve implements Resolve<Children> {
  constructor(private cs: ChildrenService, private router: Router){}

  resolve(route: ActivatedRouteSnapshot): Promise<Children> | boolean {
    let id = +route.params['id'];

    return this.cs.findById(id).then(children => {
      if(children) {
        return children;
      } else {
        this.router.navigate(['/not-found']);
        return false;
      }
    });
  }
}
