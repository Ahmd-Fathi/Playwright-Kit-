import{test,expect}from '@playwright/test'

test.describe(' visual regration testing ',()=>{


    test("full page snapshoot",async ({ page }) => {

    await page.goto('https://example.com/')
    expect (await page.screenshot()).toMatchSnapshot('homepage.png')



    })
})