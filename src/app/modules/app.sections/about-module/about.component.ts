import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    paused : boolean = false;
    intervalId : number;
    intervalPeriod : number = 20000;

    image1src : string = "app/modules/app.sections/about-module/assets/notebookB&N.png";
    image2src : string = "app/modules/app.sections/about-module/assets/IDE.jpg";
    image3src : string = "app/modules/app.sections/about-module/assets/thumbnail6.jpg";

    @ViewChild('aboutAudio') audio: ElementRef;
    @ViewChild('aboutImage') image: ElementRef;

   // constructor() {   }

  ngOnInit(): void {
       this.carousel();
  }

  ngAfterViewInit(){
      this.playAudio();
  }

  ngOnDestroy(): void {
     if (this.intervalId) {
         clearInterval(this.intervalId);
     }
    }

  playAudio(): Promise<void> {
    this.audio.nativeElement.load();
    var promise = this.audio.nativeElement.play();
    promise.catch(error => alert('Error: ' + error + " at: " + this.audio.nativeElement.src));
    return promise;
  }

  pauseAudio () {
    if(!this.audio.nativeElement.paused){
        this.audio.nativeElement.pause();
        this.paused = true}
  }

  isPaused() : boolean {
    return this.paused;
 }

 carousel() {
    let images = [this.image1src, this.image2src, this.image3src];
    let count = 0, maxImages = images.length -1;
    setTimeout((timeout => this.image.nativeElement.src = images[count]), 0);
    count++;
    this.intervalId = setInterval(interval => {
                                    this.image.nativeElement.src = images[count];
                                    count<maxImages ? count++ : count=0;
                    			}, this.intervalPeriod);
 }

}
