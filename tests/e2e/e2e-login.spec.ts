import{test,expect}from '@playwright/test'
import { homepage } from '../../page-objects/HomePage'

import { LoginPage } from '../../page-objects/loginPage'

test.describe('login/ logout flow ',()=>{
    let HomePageObject:homepage

    let loginpageObject:LoginPage
   
    test.beforeEach(async ({ page }) => {
        loginpageObject=new LoginPage(page)
        HomePageObject=new homepage(page)
        await HomePageObject.visit()
   
    })



// negative secnario 
test ("negative secnario for login ",async ({ page }) => {
       

await HomePageObject.ClickSighnInBtn()
await loginpageObject.login('some username','somepassword')
await loginpageObject.assertErroreMessge()



})

// postive scnario 

test (" postive scnario for login ",async({ page }) => {
 await HomePageObject.ClickSighnInBtn()
 await loginpageObject.login('username','password')
})



})