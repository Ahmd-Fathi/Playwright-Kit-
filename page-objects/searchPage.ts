import { Locator,Page,expect } from "@playwright/test";

export class searchpage{

readonly page:Page

readonly loctorfornumberoflinkstoassertonit:Locator


constructor(page:Page){



this.page=page


this.loctorfornumberoflinkstoassertonit=page.locator('li >a')

}




async numberoflinkstoassertonit(){


await expect(this.loctorfornumberoflinkstoassertonit).toHaveCount(2)


}











}