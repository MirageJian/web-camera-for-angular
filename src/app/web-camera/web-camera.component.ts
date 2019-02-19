import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-web-camera',
  templateUrl: './web-camera.component.html',
  styleUrls: ['./web-camera.component.css'],
  animations: [
    trigger('openComponent', [
      // 进场动画
      transition('void => *', [
        style({top: '100%', opacity: 1}),
        animate('0.33s ease-out', style({top: '*', opacity: 1}))
      ]),
      transition('* => void', [
        animate('0.33s ease-in', style({top: '100%', opacity: 1}))
      ]),
    ])
  ]
})
export class WebCameraComponent implements OnInit, OnDestroy {
  @Output() photoCheck = new EventEmitter<any>();
  @Output() photoCheckBase64 = new EventEmitter<string>();
  @ViewChild('camera') camera: ElementRef;
  @ViewChild('cameraCanvas') cameraCanvas: ElementRef;
  // 相机是否打开
  isCameraOpen = false;
  // 是否为拍照界面
  isTakingPhoto = true;
  // 是否正在转化为blob
  isConverting = false;
  videoTrack: MediaStreamTrack;
  constructor() { }

  ngOnInit(): void {
    // this.init();
  }

  init() {
    this.isCameraOpen = true;
    const constraints = {
      video: true,
      // audio: true
    };
    navigator.mediaDevices.getUserMedia(constraints).then((mediaStream) => {
      this.camera.nativeElement.srcObject = mediaStream;
      this.videoTrack = mediaStream.getVideoTracks()[0];
      this.camera.nativeElement.play().then();
    });
  }

  takePhoto() {
    this.isTakingPhoto = false;
    // 设定画布大小
    this.cameraCanvas.nativeElement.width = document.documentElement.clientWidth;
    this.cameraCanvas.nativeElement.height = document.documentElement.clientHeight;
    // 获取相机当前设置
    const settings = this.videoTrack.getSettings();
    let x = document.documentElement.clientWidth;
    let y = document.documentElement.clientHeight;
    // 先判断高充满情况，再判断宽充满情况。按等比例的缩小放大
    if (document.documentElement.clientWidth / document.documentElement.clientHeight > settings.width / settings.height) {
      x = document.documentElement.clientHeight * (settings.width / settings.height);
      this.cameraCanvas.nativeElement.width = x;
    } else if (document.documentElement.clientWidth / document.documentElement.clientHeight < settings.width / settings.height) {
      y = document.documentElement.clientWidth * (settings.height / settings.width);
      this.cameraCanvas.nativeElement.height = y;
    }
    // 将图像剧中
    let posx = (document.documentElement.clientWidth - x) / 2;
    let posy = (document.documentElement.clientHeight - y) / 2;
    // 因为把画布居中了，所以现在不需要画图居中
    posx = 0; posy = 0;
    // 参数的意思分别是:画布， 裁剪坐标xy，裁剪宽度长宽，画图坐标xy，画图长宽
    this.cameraCanvas.nativeElement.getContext('2d')
      .drawImage(this.camera.nativeElement, 0, 0, settings.width, settings.height, posx, posy, x, y);
  }

  check() {
    this.isConverting = true;
    this.cameraCanvas.nativeElement.toBlob((blob) => {
      this.photoCheck.emit(blob);
      this.ngOnDestroy();
    }, 'image/png');
    const dataURL = this.cameraCanvas.nativeElement.toDataURL('image/jpeg');
    this.photoCheckBase64.emit(dataURL);
  }

  cancel() {
    this.isTakingPhoto = true;
  }

  switchCameras() {
    const settings = this.videoTrack.getSettings();
    const constraints = {
      facingMode: settings.facingMode === 'user' ? 'environment' : 'user'
    };
    console.log(settings, constraints);
    console.log(this.videoTrack.getCapabilities());
    this.videoTrack.applyConstraints(constraints).then();
  }

  ngOnDestroy(): void {
    this.isConverting = false;
    this.isCameraOpen = false;
    this.isTakingPhoto = true;
    this.videoTrack.stop();
    if (this.camera !== undefined) {
      this.camera.nativeElement.srcObject = null;
    }
    // this.stream.getAudioTracks()[0].stop();
  }
}
