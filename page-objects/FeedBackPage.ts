import { Locator,Page,expect } from "@playwright/test";

export class feedbackpage{

readonly page:Page
readonly usernameiNput:Locator
readonly emailinput:Locator
readonly subjectinput:Locator
readonly commentAreaInput:Locator
readonly clearBtn:Locator
readonly sendMessgeBtn:Locator
readonly FeeedBackTitleToAssertOnIt:Locator




constructor (page:Page){

this.page=page
 this.usernameiNput=page.locator('#name')
 this.emailinput=page.locator('input[name="email"]')
 this.subjectinput=page.locator('input[name="subject"]')
 this.commentAreaInput=page.locator('#comment')
 this.clearBtn=page.locator('input[type="reset"]')
 this.sendMessgeBtn=page.locator('input[type="submit"]')
 this.FeeedBackTitleToAssertOnIt=page.locator('#feedback-title')
}




async fillform(
    username:
    string,email:
    string,subject:
    string,comment:
    string){

await this.usernameiNput.fill(username)
await this.emailinput.fill(email)
await this.subjectinput.fill(subject)
await this.commentAreaInput.fill(comment)

}


 async clickClearBtn(){

await this.clearBtn.click()


 }


async clickSendMessgeBtn()
{

await this.sendMessgeBtn.click()

}


async asserationAfterClearData()
{

await expect(this.usernameiNput).toBeEmpty()
await expect (this.commentAreaInput).toBeEmpty()

}

async asserationAfterSendMessge()
{

await this.page.waitForSelector('#feedback-title')
await expect(this.FeeedBackTitleToAssertOnIt).toBeVisible()


}






}