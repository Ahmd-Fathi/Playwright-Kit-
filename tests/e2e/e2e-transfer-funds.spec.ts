import{test,expect}from '@playwright/test'
import { homepage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/loginPage'
import { transferFundsPage } from '../../page-objects/transferFundsPage'
import { Navbar } from '../../page-objects/component/NavBar'

test.describe .only('transfer funds and make payments ',async()=>{
    let navbarobject:Navbar
    let transferFundsPageobject:transferFundsPage
    let homepageobject:homepage
    let loginpageObject:LoginPage

test.beforeEach(async({page})=>{
    navbarobject=new Navbar(page)
    transferFundsPageobject=new transferFundsPage(page)
    homepageobject=new homepage(page)
    loginpageObject=new LoginPage(page)
    await homepageobject.visit()
    await homepageobject.ClickSighnInBtn()
    await loginpageObject.login("username","password")
    await page.goBack()
})


test('transfer funds',async({ page })=>{

await homepageobject.clickOnaccountactivity()
await navbarobject.clickOnTransferFunds()
await transferFundsPageobject.fillDataTranferFund()
await transferFundsPageobject.asserationsucessmesgse()




    // await page.locator('#transfer_funds_link').click()
    // await page.locator('#tf_fromAccountId').selectOption('3')
    // await page.locator('#tf_toAccountId').selectOption('2')
    // await page.locator('input[name="amount"]').fill('300')
    // await page.locator('#tf_description').fill('heloo')
    // await page.locator('.btn-primary').click()
    // await expect (page).toHaveURL('http://zero.webappsecurity.com/bank/transfer-funds-verify.html')
    // const sucsessmessge=await page.locator('.board-header')
    // await expect(sucsessmessge).toContainText('Transfer Money & Make Payments - Verify')
    // await page.locator('button[type="submit"]').click()
    // const secondsucsessmessge=await page.locator('.alert-success')
    // await expect(secondsucsessmessge).toContainText('You successfully submitted your transaction.')





})


})