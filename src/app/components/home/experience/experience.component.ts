import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Work',
      Orgenization: 'Novelvox',
      Title: 'Associate Software Developer',
      Date: '19/08/2024 - 11/10/2024',
      Description: [
        `I am a fullstack developer  at Novelvox India pvt. ltd. ,Over two years, I’ve specialized in designing and delivering scalable, user-centric web applications using Angular, SpringBoot, and Node.js. My expertise bridges frontend and backend technologies, ensuring efficient and feature-rich solutions.
In my two years at NovelVox, I honed my skills in developing scalable and user-centric web applications using Angular, SpringBoot, and Node.js. My work seamlessly integrates frontend and backend technologies to create feature-rich and efficient solutions. With expertise in building RESTful APIs, implementing secure authentication systems using Spring Security, and optimizing database interactions through Spring Data JPA, I ensure robust backend functionality. On the frontend, I specialize in creating responsive Single Page Applications, leveraging Angular’s latest features like the Signals API for optimized reactivity, and designing interactive user interfaces with Angular Material and custom CSS. My focus on performance optimization, including lazy loading and secure navigation, underscores my commitment to delivering high-quality, efficient applications.
        `,
      ],
      Link: [
        'https://github.com/prashantsaran',
        // 'https://github.com/lethanhtuan939/Techlearn-FE'
      ]
    },
    {
      Tab: 'Education',
      Orgenization: 'University of Technology and Education',
      Title: 'IT Student',
      Date: '2021 — Present',
      Description: [
        'I am the first salutatorian of 2021. During my studies, I was honored to receive a scholarship, which is a great motivation for me to continue to strive and improve in acquiring knowledge.'
      ]
    }
  ];

  active = 0

  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }
}
