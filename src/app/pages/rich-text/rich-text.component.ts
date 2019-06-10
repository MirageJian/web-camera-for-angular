import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as Quill from 'quill';

@Component({
  selector: 'app-rich-text',
  templateUrl: './rich-text.component.html',
  styleUrls: ['./rich-text.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RichTextComponent implements OnInit {
  @Input() quill: any;
  // async update quill, if use sync, it will occur the check error
  @Output() quillChange = new EventEmitter(true);
  @Output() onQuillInit = new EventEmitter(true);
  @Input() readonly: boolean = false;
  @ViewChild('editor') editor: ElementRef;
  @ViewChild('quillImgField') quillImgField: ElementRef;

  constructor(
  ) {
  }

  ngOnInit() {
    if (this.readonly) {
      this.readonlyQuillInit();
    } else {
      this.quillInit();
    }
  }

  private quillInit() {
    // quill init
    this.quill = new Quill(this.editor.nativeElement, {
      readOnly: false,
      modules: {
        toolbar: [
          [{'header': [false, 1, 2, 3, 4, 5, 6]}],
          [{'font': []}],
          [{'size': [false, 'small', 'large', 'huge']}],  // custom dropdown
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          [{'color': []}, {'background': []}],          // dropdown with defaults from theme
          ['blockquote', 'code-block'],
          [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
          [{'list': 'ordered'}, {'list': 'bullet'}],
          [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
          [{'direction': 'rtl'}],                         // text direction
          [{'align': []}],
          ['link', 'image', 'video', 'formula'],
          ['clean'],
        ]
      }, theme: 'snow', placeholder: 'Please write something right here...', //debug: 'info',
    });
    // 富文本文件上传部分
    // this.quill.getModule('toolbar').addHandler('image', () => {
    //   this.quillImgField.nativeElement.onchange = () => {
    //     const file = this.quillImgField.nativeElement.files[0];
    //     // 将文件上传至服务器，而不是使用base64
    //     this.fileUpload.uploadArticleImage(file, 'article').subscribe((res: ResModel) => {
    //       if (res.errcode) {
    //         const range = this.quill.getSelection();
    //         this.quill.insertEmbed(range ? range.index : 0, 'image', res.data);
    //         this.quill.setSelection(range ? range.index + 1 : 0, 0);
    //         this.quillImgField.nativeElement.value = null;
    //       }
    //     });
    //   };
    //   this.quillImgField.nativeElement.click();
    // });
    this.quillChange.emit(this.quill);
    this.onQuillInit.emit();
  }

  private readonlyQuillInit() {
    const options = {
      modules: {
        toolbar: false    // Snow includes toolbar by default
      },
      readOnly: true,
      theme: 'snow'
    };
    this.quill = new Quill(this.editor.nativeElement, options);
    this.quillChange.emit(this.quill);
    this.onQuillInit.emit();
  }
}
