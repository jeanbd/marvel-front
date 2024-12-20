import { Component, Input, OnInit } from '@angular/core';
import { ComicsInterface } from '../../interfaces/comics.interface';

import { TooltipModule } from 'primeng/tooltip';
import { ComicsService } from '../../services/comics.service';
import { NavBarComponent } from "../../../shared/components/nav-bar/nav-bar.component";

import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'comic-info',
  standalone: true,
  imports: [TooltipModule, NavBarComponent, RouterLink],
  templateUrl: './comic-info.component.html',
  styleUrl: './comic-info.component.css'
})
export class ComicInfoComponent implements OnInit {

  constructor(
    private comicsService:ComicsService
  ){}

  ngOnInit(): void {
    initFlowbite();
    this.getComicInfo(this.id)
  }

  @Input('id') id!:number
  comic : ComicsInterface ={
    id: 26620,
    digitalId: 0,
    title: "The Stand: American Nightmares HC (Hardcover)",
    issueNumber: 0,
    variantDescription: "",
    description: "",
    modified: "-0001-11-30T00:00:00-0500",
    isbn: "978-0-7851-3621-7",
    upc: "5960613621-00111",
    diamondCode: "SEP090507",
    ean: "9780785 136217 52499",
    issn: "",
    format: "Hardcover",
    pageCount: 136,
    textObjects: [
      {
        type: "issue_solicit_text",
        language: "en-us",
        text: "The deadly super flu Captain Trips has devastated the country and now the few survivors must pick up the pieces and go on. Larry Underwood seeks escape from New York City. Lloyd contemplates an extremely unsavory dinner option in jail, and Stu Redman makes a desperate bid for freedom from his interrogators. Most ominous of all, the stange being called Randall Flagg continues his dread journey across the devastated landscape of America. You must not miss it! Collecting THE STAND: AMERICAN NIGHTMARE #1-5.\r\nParental Advisory ...$24.99 \r\nISBN: 978-0-7851-3621-7\r\nTrim size: standard"
      }
    ],
    resourceURI: "http://gateway.marvel.com/v1/public/comics/26620",
    urls: [
      {
        type: "detail",
        url: "http://marvel.com/comics/collection/26620/the_stand_american_nightmares_hc_hardcover?utm_campaign=apiRef&utm_source=edfd130f72eb28ce1953647b590097f5"
      }
    ],
    series: {
      resourceURI: "http://gateway.marvel.com/v1/public/series/8405",
      name: "The Stand: American Nightmares HC (2009)"
    },
    variants: [],
    collections: [],
    collectedIssues: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26616",
        name: "The Stand: American Nightmares (2009) #5"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/26613",
        name: "The Stand: American Nightmares (2009) #4"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/23997",
        name: "The Stand: American Nightmares (2009) #2"
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/comics/23807",
        name: "The Stand: American Nightmares (2009) #1"
      }
    ],
    dates: [
      {
        type: "onsaleDate",
        date: "2029-12-31T00:00:00-0500"
      },
      {
        type: "focDate",
        date: "2009-10-08T00:00:00-0400"
      }
    ],
    prices: [
      {
        type: "printPrice",
        price: 24.99
      }
    ],
    thumbnail: {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bb4c3523c46f",
      extension: "jpg"
    },
    images: [
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/a/70/65f9f1878d6ca",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/50/4bb577ca755b2",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bb4c3523c46f",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/20/4bb4c34ce5f08",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/00/4bb4c3470fc45",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/00/4bb4c341e3655",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/8/80/4bb4c33c45e10",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/5/f0/4bb4c3375305e",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/1/d0/4bb4bee5ec02e",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/40/4bb4918b7ab4e",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/8/d0/4bb4425274acd",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb4424d5d4c7",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb44248833c4",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/3/20/4bb4424353d48",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4bb4423de877e",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/20/4bb44238b854a",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/40/4bb43f4b28275",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bb43f3bb8d87",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4bb43f368c205",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bb43f3168322",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/4bb43f2c7a1e3",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4bb43f2737a29",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/60/4bb40349e5b76",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/f/10/4bb4004041146",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/7/f0/4bb4003b0bc35",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/4/f0/4bb4003610aa6",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/b/30/4bb40030dbee3",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/00/4bb4002b993c7",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/5/c0/4bb40026aa876",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/2/60/4bb3f8aa8cc7e",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb3f8a2154b9",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/f/c0/4bb3f89c8edd1",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/6/d0/4bb3f8966416c",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/4bb3f89111400",
        extension: "jpg"
      },
      {
        path: "http://i.annihil.us/u/prod/marvel/i/mg/2/10/4bb3f88c2baaf",
        extension: "jpg"
      }
    ],
    creators: {
      available: 7,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/26620/creators",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/13661",
          name: "Roberto Aguirre-Sacasa",
          role: "writer"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/512",
          name: "Lee Bermejo",
          role: "other"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/452",
          name: "Virtual Calligr",
          role: "other"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/10363",
          name: "John Rhett Thomas",
          role: "other"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/4306",
          name: "Laura Martin",
          role: "colorist"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/708",
          name: "Mike Perkins",
          role: "inker"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/creators/410",
          name: "Rus Wooton",
          role: "letterer"
        }
      ],
      returned: 7
    },
    characters: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/26620/characters",
      items: [],
      returned: 0
    },
    stories: {
      available: 10,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/26620/stories",
      items: [
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/52828",
          name: "5XLS 1 of 5",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/52829",
          name: "5XLS 1 of 5",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/53228",
          name: "5XLS 2 of 5",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/53229",
          name: "5XLS 2 of 5",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/58535",
          name: "Cover #58535",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/58536",
          name: "Interior #58536",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/58541",
          name: "Cover #58541",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/58542",
          name: "Interior #58542",
          type: "interiorStory"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/58550",
          name: "Cover #58550",
          type: "cover"
        },
        {
          resourceURI: "http://gateway.marvel.com/v1/public/stories/58551",
          name: "Interior #58551",
          type: "interiorStory"
        }
      ],
      returned: 10
    },
    events: {
      available: 0,
      collectionURI: "http://gateway.marvel.com/v1/public/comics/26620/events",
      items: [],
      returned: 0
    }
  }

  comicInfo:ComicsInterface[]=[]

  getComicInfo(id:number){
    this.comicsService.getComicInfo(id).subscribe(
      response => {
        this.comicInfo=response
      }
    )
  }
}
