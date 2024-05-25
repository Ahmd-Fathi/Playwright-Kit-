import{test,expect}from '@playwright/test'

test('simple basic test',async({page})=>{

    await page.goto('https://example.com/')
   const title=await page.title()
   
    const pageTitle=page.locator('h1')
    await expect(pageTitle).toContainText('Example Domain')
    await expect(page).toHaveTitle('Example Domain')

})

test (' clickg on elemnt ',async({page})=>{

    await page.goto('http://zero.webappsecurity.com/')
    await page.locator('#signin_button').click()
    await page.locator('.btn-primary').click()
    const erroreMessge=await page.locator('.alert-error')
    await expect(erroreMessge).toContainText('Login and/or password are wrong')

})

test .skip ('selectors',async({page})=>{
// text
await page.locator('text=some text').click()


// css selctor
await page.locator('button  or   h1 ').click()
await page .locator('# id ')
await page.locator('.class')


// onley visable css selctore

await page.locator('.submit-button:visible').click()




//combination 

await page .locator('#id  .class').click()


// xpath 
await page.locator('//button').click()



//special case 
//a href i can locatr it by text 


// anotation 
// .skip 
// .only
//  i can use only in one test and also i can use it with 
//any number if tests not just one 
})


test.describe('first test suite',()=>{

    test('working with inputs ',async({page})=>{

        await page.goto('http://zero.webappsecurity.com/')
        await page.locator('#signin_button').click()
        await page.locator('input[name="user_login"]').fill('invalid username')
        await page.locator('input[name="user_password"]').fill('invalid password')
        await page.locator('input[name="submit"]').click()
        const erroreMessge=await page.locator('.alert-error')
            await expect(erroreMessge).toContainText('Login and/or password are wrong') //
        
        })
        
        test ('assertation',async({page})=>{
        await page.goto('https://example.com/')
        await expect(page).toHaveURL('https://example.com/')
        
        await expect(page).toHaveTitle('Example Domain')
        
        const element=await page.locator('h1')
        await expect (element).toBeVisible()
        await expect (element).toHaveText('Example Domain')
        await expect(element).toHaveCount(1)
        
        const notexixtingelemnt =await page.locator('h5')
        await expect(notexixtingelemnt).not.toBeVisible()
        
        
        
        })



test.describe('Hooks traning',()=>{

    test.beforeEach(async({page})=>{
        await page.goto('https://example.com/')


    })


    test ('screenshoot',async({page})=>{

      //  await page.goto('https://example.com/')
        await page.screenshot({path:'screenshoot.png',fullPage:true})
        
        })
        
        test('single screenshot', async ({ page }) => {
          //  await page.goto('https://example.com/');
        
            const elementIWantToScreenshot = await page.$('h1');
            await elementIWantToScreenshot?.screenshot({ path: 'single_screenshot.png' });
        });


})



})