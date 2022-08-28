import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingModel } from '../models/settingModel';
import { BaseService } from './base/baseService';


@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private http: HttpClient,private generalService: BaseService) { }

  getSettings() :SettingModel[] {
    return  [
          {
              "settingId": 1,
              "name": "GeneralFreeSamplePercentage",
              "arValue": "20",
              "enValue": "20"
          },
          {
              "settingId": 2,
              "name": "ContactUs",
              "arValue": "dssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssss@kkk.com",
              "enValue": "dssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssssdssssssssssssssssssssssssssssssssss@kkk.com"
          },
          {
              "settingId": 3,
              "name": "NumberOfRelatedBooks",
              "arValue": "20",
              "enValue": "20"
          }
      ]
  }

  updateSetting(settingModel: SettingModel[]) {
    // return this.generalService.put<ResponseDto<EmptyResponseModel>>(
    //   this.config.settings.BackEndBaseUrl + ServiceUrls.UpdateSettings,
    //   settingModel
    // );
  }

}
