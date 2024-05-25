import{test,expect}from '@playwright/test'
import { homepage } from '../../page-objects/HomePage'
import { feedbackpage } from '../../page-objects/FeedBackPage'

test.describe("feedback form",()=>{

    let HomePageOBJECT:homepage
    let FeedBackObject:feedbackpage

    test.beforeEach(async ({page})=>{
        HomePageOBJECT=new homepage(page)
        FeedBackObject=new feedbackpage(page)
          
         await HomePageOBJECT.visit()

        await HomePageOBJECT.ClickFeedBackLinkText()

    })


    test ('Reset feedback form',async ({ page })=>{

      await FeedBackObject.fillform("ahmed","ahmed@test.com","heloo","first comment")
      await FeedBackObject.clickClearBtn()
       await FeedBackObject.asserationAfterClearData()

    })

    test ('submit feedback form',async({page})=>{

        await FeedBackObject.fillform("ahmed","ahmed@test.com","heloo","first comment")
        await FeedBackObject.clickSendMessgeBtn()
        await FeedBackObject.asserationAfterSendMessge()
    })










})