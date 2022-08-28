import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultStatusEnum } from 'src/app/@AppService/enums/resultStatus';
import { SettingEnum } from 'src/app/@AppService/enums/settingEnum';
import { SettingModel } from 'src/app/@AppService/models/settingModel';
import { SettingService } from 'src/app/@AppService/services/setting.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  settingForm!: FormGroup;
  settingModel: SettingModel[] = [];
  submitted = false;
  settingEnum: typeof SettingEnum = SettingEnum;

  constructor(
    private formBuilder: FormBuilder,
    private settingService: SettingService,

  ) { }

  ngOnInit(): void {
    this.getSettings();
  }

  getSettings() {
    this.settingModel = this.settingService.getSettings()
    this.settingForm = this.formBuilder.group({
      allValuesControls: this.settingModel ? this.addSettingsItemsForEdit() : this.formBuilder.array([])
    });

  }

  addSettingsItemsForEdit() {
    var settingValuesControls: FormArray = this.formBuilder.array([]);
    console.log({ settingModel: this.settingModel });
    for (let i = 0; i < this.settingModel.length; i++) {
      settingValuesControls.push(this.createSettingItem(this.settingModel[i]));
    }
    return settingValuesControls;
  }

  createSettingItem(item: SettingModel) {
    return this.formBuilder.group({
      settingId: [item ? item.settingId : 0],
      arValue: [item ? item.arValue : '',
      this.ValidationDependOnThefield(item)
      ],
      enValue: [item ? item.enValue : '',
      this.ValidationDependOnThefield(item)
      ],
      name: [item ? item.name : ""]
    });
  }

  ValidationDependOnThefield(item: SettingModel): any {
    return item.settingId == SettingEnum.GeneralFreeSamplePercentage ?
      [Validators.required, Validators.required, Validators.pattern("[0-9]+"), Validators.min(0), Validators.max(100)]
      : item.settingId == SettingEnum.NumberOfRelatedBooks ?
        [Validators.required, Validators.pattern("[0-9]+"), Validators.min(0), Validators.max(9999)]
        : item.settingId == SettingEnum.ContactUs ?
          [Validators.required, Validators.pattern("(?:[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?[+s?,])*(?:[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+(?:\\.[a-zA-Z0-9!#$%&'*+=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?)"), Validators.maxLength(500)] : Validators.nullValidator;
  }

  bindToModel(): SettingModel[] {
    let formData = this.settingForm.value.allValuesControls as SettingModel[];
    formData.forEach(x => x.arValue = x.enValue);
    return formData;
  }

  saveSetting() {
    console.log({ settingForm: this.settingForm });

    this.submitted = true;
    if (this.settingForm.invalid)
      return;

    let formData = this.bindToModel();
    // this.settingService.updateSetting(formData).subscribe({
    //   next: (result) => {
    //     this.spinner.hide()
    //     this.showMessage(result);
    //     if (result.code == ResultStatusEnum.Success)
    //       this.backToHome()
    //   },
    //   error: err => {
    //     this.errorOccured(err)
    //     this.spinner.hide()
    //   }
    // });
  }

  backToHome() {
    // this.navigateToUrl(`/pages/`);
  }

  get fc() {
    return this.settingForm.get("allValuesControls") as FormArray;
  }
}
