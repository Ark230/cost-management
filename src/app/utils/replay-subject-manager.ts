import { ReplaySubject } from "rxjs";

class ReplaySubjectManager {
  subject$ = new ReplaySubject(1);

  getSubject() {
    return this.subject$.asObservable();
  }

  setSubject(value: any) {
    this.subject$.next(value);
  }

  resetSubject() {
    this.subject$ = new ReplaySubject(1);
  }
}

export default ReplaySubjectManager;
