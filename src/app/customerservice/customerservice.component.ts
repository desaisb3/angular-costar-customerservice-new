import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-customerservice',
  templateUrl: './customerservice.component.html',
  styleUrls: ['./customerservice.component.css']
})
export class CustomerserviceComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit(): void {
    let script = this._renderer2.createElement('script');
    script.type = `text/javascript`;
    script.text = `
    (function(w, d, x, id){
      s=d.createElement('script');
      s.src='https://dend6g4sigg57.cloudfront.net/amazon-connect-chat-interface-client.js';
      s.async=1;
      s.id=id;
      d.getElementsByTagName('head')[0].appendChild(s);
      w[x] =  w[x] || function() { (w[x].ac = w[x].ac || []).push(arguments) };
    })(window, document, 'amazon_connect', 'c0f781fa-99fa-47d4-8cc6-0c9c0b6a8b26');
    amazon_connect('styles', { openChat: { color: 'white', backgroundColor: '#123456'}, closeChat: { color: 'white', backgroundColor: '#123456'} });
    amazon_connect('snippetId', 'QVFJREFIZ25JVzc0R0xQTVpWSlI0RjdyVlBselRRYnQzeW5TZEVnWGFmQnNNZ0lXbmdFNWNGYVZYQTlNVno5bW00ZngvSzV1QUFBQWJqQnNCZ2txaGtpRzl3MEJCd2FnWHpCZEFnRUFNRmdHQ1NxR1NJYjNEUUVIQVRBZUJnbGdoa2dCWlFNRUFTNHdFUVFNOHR4TDNxM2RzNk1sRGR6K0FnRVFnQ3RFMWw1NUhiYWlLNlNyL2FPRloyVEIxL0dic1pXdDlGdU4yVDZrNzJXTi9abnh3ZDltbjNKV0R1UXY6OnZNVUdqYUZQZGNTNHg3cTFlZDE2Y0lRaGZEcmF3Q1hrbHMwemlKTmFLOEJvV3hxZWZSYlhSemIxak5lMjFyYi8zUkdDbTJDYmdwZ2pCNlF6THYyQW90RFVLUndwZ0tFQzkxTllOVGM2QU9EUlc2NW5QYkVDa0JBYnBkSGpIenZhT3ZYNlZBVlFVaVE0OThzbER1MzBSYTBiQ1hEOUozTT0=');
    `;
    this._renderer2.appendChild(this._document.body, script);
  }

}
