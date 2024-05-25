import { Locator,Page,expect } from "@playwright/test";

export class homepage{

readonly page:Page

readonly SighnInBtn:Locator
readonly searchBox:Locator
readonly FeedBackLinkText:Locator
readonly accountactivaity:Locator


constructor(page:Page){
this.page=page
this.SighnInBtn=page.locator('.signin')
this.searchBox=page.locator('#searchTerm')
this.FeedBackLinkText=page.locator('#feedback')
this.accountactivaity=page.locator("#account_activity_link")


}


async ClickSighnInBtn(){

await this.SighnInBtn.click()


}


async visit(){
    await this.page.goto('http://zero.webappsecurity.com/')
}

async searchBoxfuncation(pharase:string){


    await this.searchBox.fill(pharase)
    
     await this.page.keyboard.press('Enter')
    
    
    }
async clickOnaccountactivity()
{

    await this.accountactivaity.click()
}


    async ClickFeedBackLinkText()
    {

       await this.FeedBackLinkText.click()

    }

}