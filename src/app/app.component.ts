    import { Component, OnInit } from '@angular/core';


    @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
    })



    // app.component.ts
    export class AppComponent  {




    activeTab: 'reviews' | 'desc' = 'reviews';

    /* Review toggle */
    showMoreReview = false;

    /* Description toggle */
    showMoreDesc = false;

    /* Reviews Text */
    reviewFullText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Aspernatur deserunt iste doloremque quae, dignissimos sequi!
    Totam possimus error eligendi ducimus?`;

    reviewShortText = this.reviewFullText.substring(0, 120) + '...';

    /* Description Text */
    descFullText = `This product is made with premium quality materials and
    designed for long-lasting performance. It offers excellent durability,
    excellent finish, and is ideal for daily use at home or office.`;

    descShortText = this.descFullText.substring(0, 120) + '...';

    /* Tab Switch */
    setTab(tab: 'reviews' | 'desc') {
    this.activeTab = tab;
    this.showMoreReview = false;
    this.showMoreDesc = false;
    }

    /* Toggle Functions */
    toggleReview() {
    this.showMoreReview = !this.showMoreReview;
    }

    toggleDesc() {
    this.showMoreDesc = !this.showMoreDesc;
    }

    }















