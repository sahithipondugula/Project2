import { Injectable } from '@angular/core';
import { Events } from './events/events';



@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private listEmployee:Events[]=[

    {
      image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg",
      eventid:1,
      daterow: new Date("Fri Dec 08 2019 07:44:57"),//3

      header: `Inspirit`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    },
    {image:"https://media-exp1.licdn.com/dms/image/C561BAQE-51J-8KkMZg/company-background_10000/0?e=2159024400&v=beta&t=Q12vAJMqewqj4hg_PFaP4SVuvhtJoQ4y8qqsEImZT4g",
      eventid:2,
      daterow: new Date(" Aug 08 2028 07:44:57"),
      header: `Marathon 2020`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    },
    {image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg",
      eventid:3,
      daterow: new Date("Aug 08 2017 07:44:57"),
      header: `Engineers Day`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    },
    {image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg",
      eventid:4,
      daterow: new Date(" Dec 08 2006 07:44:57"),
      header: `Sangam`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    },
    
    {image:"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(33).jpg",
      eventid:5,
      daterow: new Date(" Dec 08 2009 07:44:57"),
      header: `Utsav 2019`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    }
    ,
    
    {image:"https://www.dailysignal.com/wp-content/uploads/160411_Harvard_RK-1250x650.jpg",
      eventid:6,
      daterow: new Date(" Dec 08 2000 07:44:57"),
      header: `Treaking 2020`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    }
    
    ,
    
    {image:"https://www.dailysignal.com/wp-content/uploads/160411_Harvard_RK-1250x650.jpg",
      eventid:6,
      daterow: new Date(" Dec 08 1996 07:44:57"),
      header: `Treaking 1996`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    },
    
    
    {image:"https://lh3.googleusercontent.com/proxy/Fd_fsIHo23udeGoa19d1RIH-XWiOL-JjZn8S1QKgjxjdoGQoO3ndwRJG589UhLK38ORHo2PlOxsiLlLiF1iL4ioLWkAOjO_d0avvJ5NRXQJ7YP0vRnViYDF4g_gdJnshR-50PkidYunTdRffxw",
      eventid:8,
      daterow: new Date(" Dec 08 2021 07:44:57"),
      header: `IPL 2020`,
      description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
    }
    , 
    
    {image:"https://www.dailysignal.com/wp-content/uploads/160411_Harvard_RK-1250x650.jpg",
    eventid:6,
    daterow: new Date(" Dec 08 2000 07:44:57"),
    header: `Treaking 2020`,
    description: 'A ceremony is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.A ceremony (UK: /ˈsɛrɪməni/, US: /ˈsɛrəˌmoʊni/) is a unified ritualistic event with a purpose, usually consisting of a number of artistic components, performed on a special occasion.'
  }
    ,
    
    
    {image:"https://www.dailysignal.com/wp-content/uploads/160411_Harvard_RK-1250x650.jpg",
      eventid:10,
      daterow: new Date(" Dec 08 2005 07:44:57"),
      header: "Header6",
      description: "description6"
    }
    
  ];
  // get sortData() {
  //   return this.listEmployee.sort((a, b) => {
  //     return <any>new Date(b.daterow) - <any>new Date(a.daterow);
  //   });
   
  // }

getEmployee():Events[]{
  return this.listEmployee.sort((a, b) => {
    return <any>new Date(b.daterow) - <any>new Date(a.daterow);
  });
}

getEmployeeid(eventid:number){
  return this.listEmployee.find(e => e.eventid === eventid)
}
}
