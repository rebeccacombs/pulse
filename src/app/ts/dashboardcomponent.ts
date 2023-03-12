import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-root',
  templateUrl: '../views/dashboard.component.html',
  styleUrls: ['../css/app.component.css']
})
export class DashComponent {
  title = 'pulse';
  image = ''; 

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 90, 
      allowEditing: true, 
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });

    if (image) {
      this.image = `data:image/jpeg;base64,${image.base64String}`!;
    }
  }
}
