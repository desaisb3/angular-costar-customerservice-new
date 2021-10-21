import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject, Renderer2 } from '@angular/core';
import "amazon-connect-streams"

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  @ViewChild('ccpDiv')
  public ccpDiv!: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document)
    { }

    public ngAfterViewInit(): void {
      const ccpUrl = 'https://customer-support.my.connect.aws/ccp-v2/softphone';
      connect.core.initCCP(this.ccpDiv.nativeElement, {
        ccpUrl,            // REQUIRED
        loginPopup: true,               // optional, defaults to `true`
        loginPopupAutoClose: true,      // optional, defaults to `false`
        loginOptions: {                 // optional, if provided opens login in new window
          autoClose: true,              // optional, defaults to `false`
          height: 600,                  // optional, defaults to 578
          width: 400,                   // optional, defaults to 433
          top: 0,                       // optional, defaults to 0
          left: 0                       // optional, defaults to 0
        },
        region: "us-east-1",         // REQUIRED for `CHAT`, optional otherwise
        softphone: {                    // optional, defaults below apply if not provided
          allowFramedSoftphone: true,   // optional, defaults to false
          disableRingtone: false,       // optional, defaults to false
          ringtoneUrl: "./ringtone.mp3" // optional, defaults to CCP’s default ringtone if a falsy value is set
        },
        pageOptions: {                  // optional
          enableAudioDeviceSettings: false, // optional, defaults to 'false'
          enablePhoneTypeSettings: true // optional, defaults to 'true'
        }
      });
    }

    // (this.ccpDiv.nativeElement, {
    //   ccpUrl,
    //   loginPopup: true,
    //   softphone: {
    //     allowFramedSoftphone: true
    //   }
    // });

  ngOnInit(): void {
  }

  public goToLink(){
    this.document.location.href = "https://customer-support.my.connect.aws/ccp-v2/softphone";
  }


}
