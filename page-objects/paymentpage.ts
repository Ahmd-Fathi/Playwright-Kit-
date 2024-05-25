import { Locator,Page,expect } from "@playwright/test";

export class paymentpage{

readonly page:Page
//readonly payBillsLinkText:Locator
readonly selctAppleFromePayeeDropDown:Locator
readonly Accountdropdown:Locator


readonly selectBrokeragefromAccountdropdown:Locator
readonly amountBox:Locator
readonly DatePaker:Locator
readonly DescrabtionBox:Locator
readonly payBtn:Locator
readonly sucsessMsgAfterPressPayBtn:Locator


readonly questionMarkIcon:Locator
readonly asserationcodeafterselectapple:Locator







constructor (page:Page){
this.page=page
 //this.payBillsLinkText=page.locator('text= Pay Bills')
 this.selctAppleFromePayeeDropDown=page.locator('#sp_payee')
 this.questionMarkIcon=page.locator('.icon-question-sign')
 this.asserationcodeafterselectapple=page.locator('#sp_payee_details')
 this.Accountdropdown=page.locator('#sp_account')
 this.amountBox=page.locator('#sp_amount')
 this.DatePaker=page.locator('input#sp_date')
 this.DescrabtionBox=page.locator('input[name="description"]')
 this.payBtn=page.locator('input[type="submit"]')
 this.sucsessMsgAfterPressPayBtn=page.locator('div[id="alert_container"] span')



}




async fillpaymentdata(){

//await this.payBillsLinkText.click()
await this.selctAppleFromePayeeDropDown.selectOption('Apple')
await this.questionMarkIcon.click()
await expect(this.asserationcodeafterselectapple).toContainText('For 48944145651315 Apple account')
await this.Accountdropdown.selectOption('6')
await this.amountBox.fill('300')
await this.DatePaker.fill('2024-05-16')
await this.DescrabtionBox.fill('heloo world')
await this.payBtn.click()


}


async FinalAsserationMsg(){


await expect(this.sucsessMsgAfterPressPayBtn).toBeVisible()



}








}