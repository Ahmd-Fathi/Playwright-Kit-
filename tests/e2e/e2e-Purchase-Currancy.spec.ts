import{test,expect}from '@playwright/test'
import { homepage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/loginPage'

test.describe('purchase currancy test',()=>{

let homepageobject:homepage
let loginpageObject:LoginPage
    test.beforeEach(async({page})=>{
        homepageobject=new homepage(page)
        loginpageObject=new LoginPage(page)

        await homepageobject.visit()
        await homepageobject.ClickSighnInBtn()
        await loginpageObject.login("username","password")
        await page.goBack()
        
        })

        test('purshade currancy  first test',async ({ page })=>{
         await page.locator('#account_activity_link').click()
         await page .locator('text= Pay Bills').click()
         await page.locator('text=Purchase Foreign Currency').click()
         await page.locator('#pc_currency').selectOption('EUR')
         const sucessmessge=await page.locator('#sp_sell_rate')
         await expect(sucessmessge).toContainText('1 euro (EUR) = 1.3862 U.S. dollar (USD)')
         await page.locator('#pc_amount').fill('200')
         await page.locator('#pc_inDollars_true').click()
         await page.locator('#pc_calculate_costs').click()
         const aftersumamount=await page.locator('#pc_conversion_amount')
         await expect (aftersumamount).toContainText('144.28 euro (EUR) = 200.00 U.S. dollar (USD)')
         await page.locator('#purchase_cash').click()
         const finalsucsessmesgse=await page.locator('#alert_content')
         await expect(finalsucsessmesgse).toBeVisible()






        })

})