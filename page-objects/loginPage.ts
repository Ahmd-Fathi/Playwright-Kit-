import { expect,Locator,Page } from "@playwright/test";

export class LoginPage{

// define selectors 

readonly page :Page
readonly usernameInput:Locator
readonly passwordinput:Locator
readonly submitBTN:Locator
readonly erroremessge:Locator


// init selectors using instarctor 

constructor (page:Page){
this.page=page
this.usernameInput=page.locator('input#user_login')
this.passwordinput=page.locator('input#user_password')
this.submitBTN=page.locator('input[class*="btn"]')
this.erroremessge=page.locator('div.alert-error')

}






// methods 

async login(username:string,password:string){

    await this.usernameInput.fill(username)
    await this.passwordinput.fill(password)
    await this.submitBTN.click()
}


async assertErroreMessge(){

await expect(this.erroremessge).toContainText('Login and/or password are wrong')

}


}