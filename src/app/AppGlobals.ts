export class AppGlobals {
  public static baseURL: string = 'http://localhost/JobPosting_Api/';
  //public static baseURL: string = 'http://localhost/HRMSGLOBALANG/';
  public static CheckPermission(modid: any, type: any) {
    let temp: any = localStorage.getItem('user_perm_arr');
    if (temp != null) {
      temp = JSON.parse(temp);
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].module == modid) {
          if (type == 1) {
            return parseInt(temp[i].view) == 1 ? true : false;
          } else if (type == 2) {
            return parseInt(temp[i].edit) == 1 ? true : false;
          } else if (type == 3) {
            return parseInt(temp[i].delete) == 1 ? true : false;
          } else if (type == 4) {
            return parseInt(temp[i].add) == 1 ? true : false;
          }
        }
      }
    }

    return false;
  }
}
