import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
 
@Injectable({
  providedIn: "root"
})
export class BaseService {

  constructor(private http: HttpClient) {
  }
  post<T>(actionUrl: string, requestModel: T | any, responseType?: any): Observable<T> {
    return this.http.post<T>(
      actionUrl,
      requestModel,
      { responseType: responseType }
    );
  }
  put<T>(actionUrl: string, requestModel: T | any): Observable<T> {
    return this.http.put<T>(
      actionUrl,
      requestModel
    );
  }
  get<T>(actionUrl: string): Observable<T> {
    return this.http.get<T>(
      actionUrl
    );
  }
  delete<T>(actionUrl: string): Observable<T> {
    return this.http.delete<T>(
      actionUrl
    );
  }
  // verify(response: string, signature: string): boolean {
  //   var key = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrzt5l4Ytz/TC+zgQj2A99gjJTO7bjGoKU8fdykycaE488BvS9E7njR81snPeLD2Crs/AiUk2x4drZHH2DQekQmL5m8RuDCTq3cZDUpCudGfWwIGwzqGt7WJmbEkwi9NCosUOR+S3TjJ0yFvnQqzFPNRrgfnOksCJ37cngk96lNwIDAQAB`
  //   var pem = '-----BEGIN PUBLIC KEY-----\n' + key + '-----END PUBLIC KEY-----';

  //   let pubKey = Forge.pki.publicKeyFromPem(pem);

  //   var md = Forge.md.sha256.create();
  //   md.update(response, 'utf8');
  //   var verified = pubKey.verify(md.digest().bytes(), Forge.util.decode64(signature));
  //   console.log(verified);
  //   return verified;
  // }
  newGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}
