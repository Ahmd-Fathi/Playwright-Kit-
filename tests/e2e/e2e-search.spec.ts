import{test,expect}from '@playwright/test'
import { homepage } from '../../page-objects/HomePage'
import { searchpage } from '../../page-objects/searchPage'

test.describe("search results",()=>{
    let homepageobjects:homepage
    let searchpageObject:searchpage

    test('should find search rsults ',async({ page }) => {

        homepageobjects=new homepage(page)
        searchpageObject=new searchpage(page)


        await homepageobjects.visit()
        await homepageobjects.searchBoxfuncation('bank')
        await searchpageObject.numberoflinkstoassertonit()

    })



})