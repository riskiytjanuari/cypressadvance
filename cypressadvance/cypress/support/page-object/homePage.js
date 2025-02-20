class homePage{
    product_page = '[data-test="title"]'

    verifyProductPage(){
        cy.get(this.product_page)
    }
}

export default new homePage()