import { expect,Locator,Page } from "@playwright/test";

export class Navbar{

    readonly page:Page
    readonly AccountSummary:Locator
    readonly Accountactivity:Locator
    readonly TransferFunds:Locator
    readonly PayBills:Locator
    readonly MyMoneyMap:Locator
    readonly OnlineStatements:Locator

    constructor (page:Page){
        this.page=page
        this .AccountSummary=page.locator("#account_summary_tab")
        this .Accountactivity=page.locator("#account_activity_tab")
        this.TransferFunds=page.locator("#transfer_funds_tab")
        this.PayBills=page.locator("#pay_bills_tab")
        this.MyMoneyMap=page.locator("#money_map_tab")
        this.OnlineStatements=page.locator("#online_statements_tab")

    }

    async clickOnAccountSummary()
    {
       await this.AccountSummary.click()

    }

    async clickOnAccountactivity()
    {
       await this.Accountactivity.click()

    }

    async clickOnTransferFunds()
    {
       await this.TransferFunds.click()

    }
    async clickOnPayBills()
    {
       await this.PayBills.click()

    }


 async clickOnMyMoneyMap()
    {
       await this.MyMoneyMap.click()

    }

    async clickOnOnlineStatements()
    {
       await this.OnlineStatements.click()

    }



}