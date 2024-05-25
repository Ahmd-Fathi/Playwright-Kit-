import{test,expect}from '@playwright/test'
import { homepage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/loginPage'
import { paymentpage } from '../../page-objects/paymentpage'
import{Navbar}from '../../page-objects/component/NavBar'

 test.describe('new payment ',()=>{
    let navbar:Navbar
    let homepageobject:homepage
let loginpageObject:LoginPage
let paymentpageobject:paymentpage

    test.beforeEach(async({page})=>{
        navbar=new Navbar(page)

        paymentpageobject=new paymentpage(page)
        homepageobject=new homepage(page)
        loginpageObject=new LoginPage(page) 

        await homepageobject.visit()
        await homepageobject.ClickSighnInBtn()
        await loginpageObject.login("username","password")
        await page.goBack()
        })

        test('should sent new payment ',async ({ page })=>{
            await homepageobject.clickOnaccountactivity()
            await navbar.clickOnPayBills()
            await paymentpageobject.fillpaymentdata()
            await paymentpageobject.FinalAsserationMsg()

        //  await page.locator('#account_activity_link').click()
        //  await page.locator('text= Pay Bills').click()
        //  await page.locator('#sp_payee').selectOption('Apple')
        //  await page.locator('.icon-question-sign').click()
        //  const appelcodeafteriselectit=await page.locator('#sp_payee_details')
        //  await expect(appelcodeafteriselectit).toContainText('For 48944145651315 Apple account')
        //  await page.waitForSelector('#sp_payee_details')

        //  await page.locator('#sp_account').selectOption('6')
        //  await page.locator('#sp_amount').fill('300')
        //  await page.locator('input#sp_date').fill('2024-05-16')
        //  await page.locator('input[name="description"]').fill('heloo world')
        //  await page.locator('input[type="submit"]').click()
        //  const messge=await page.locator('div[id="alert_container"] span')
        //  await expect(messge).toBeVisible()
        //  await expect(messge).toContainText('The payment was successfully submitted.')


        })

 })