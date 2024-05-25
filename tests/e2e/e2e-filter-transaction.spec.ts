import{test,expect}from '@playwright/test'
import { homepage } from '../../page-objects/HomePage'
import { LoginPage } from '../../page-objects/loginPage'

test.describe('Filter transaction',()=>{
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

        test('verfiay the results for each account',async({page})=>{

        await page.locator('#account_activity_link').click()
        await page.locator('#aa_accountId').selectOption('2')
        const numberOfcheckingaccount=await page.locator('#all_transactions_for_account tbody tr')

        await expect (numberOfcheckingaccount).toHaveCount(3)



        await page.locator('#aa_accountId').selectOption('4')
        const numberOfLoanAccount=await page.locator('#all_transactions_for_account tbody tr')
        await expect(numberOfLoanAccount).toHaveCount(2)

        await page.locator('#aa_accountId').selectOption('6')

        const sucsessmessgeafterchoosebrokrage=await page.locator('div[class="well"]')
        await expect(sucsessmessgeafterchoosebrokrage).toBeVisible()






        })


})
