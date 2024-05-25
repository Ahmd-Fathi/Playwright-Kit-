import { Locator,Page,expect } from "@playwright/test";

export class transferFundsPage{

readonly page:Page
readonly transferFundsLinkText:Locator
readonly fromaccountdropdownbox:Locator
readonly ToAcoountDropDownBox:Locator
readonly amountBox:Locator
readonly descrabtionBox:Locator
readonly contaniueBtn:Locator
readonly FirstSucsessmesg:Locator
readonly submitBtn:Locator
readonly secondSucessmesg:Locator







constructor( page:Page){

this.page=page
//this.transferFundsLinkText=page.locator('#transfer_funds_tab') // i will use it from navbar 
this.fromaccountdropdownbox=page.locator('#tf_fromAccountId')
this.ToAcoountDropDownBox=page.locator('#tf_toAccountId')
this.amountBox=page.locator('input[name="amount"]')
this.descrabtionBox=page.locator('#tf_description')
this.contaniueBtn=page.locator('.btn-primary')
this.FirstSucsessmesg=page.locator('.board-header')
this.submitBtn=page.locator('button[type="submit"]')
this.secondSucessmesg=page.locator('.alert-success')

}


async fillDataTranferFund()
{

await this.fromaccountdropdownbox.selectOption('3')
await this.ToAcoountDropDownBox.selectOption('2')
await this.amountBox.fill('300')
await this.descrabtionBox.fill('heloo')
await this.contaniueBtn.click()
await expect(this.FirstSucsessmesg).toHaveText('Transfer Money & Make Payments - Verify')
await this.submitBtn.click()

}




async asserationsucessmesgse()
{

await expect( this.secondSucessmesg).toBeVisible()


}




}