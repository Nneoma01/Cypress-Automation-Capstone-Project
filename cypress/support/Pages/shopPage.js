class shopPage {
    elements = {
        shopDropdown: () => cy.get('.nav-link > .fa'),
        womenWearCategory: () => cy.get('.dropdown-menu > [href="womens-wear.php"]'),
        menWearCategory: () => cy.get('.dropdown-menu > [href="mens-wear.php"]'),
        kidsWearCategory: () => cy.get('.dropdown-menu > [href="kids-wear.php"]'),
        electronicsCategory: () => cy.get('.dropdown-menu > [href="electronics.php"]'),
        checkOutBtn: () => cy.get('#cartdesk > .fas'),

        // bring out common selector among all categories
        productItems: () => cy.get('.product-item'),
        productImg: () => cy.get('.product-item .img-fluid'),
        productNames: () => cy.get('.product-item .h6'),
        productPrices: () => cy.get('.product-item h5'),
        productSize: () => cy.get('.product-item :nth-child(4)'),
        productCategories: () => cy.get('.product-item :nth-child(6)'),

        addToCartBtn: () => cy.get(".product-item .btn"),

    }

    getFirstProductDetails() {
      return {
        name: this.elements.productNames().first().invoke('text'),
        price: this.elements.productPrices().first().invoke('text'),
      };
    }

    clickShopDropdown() {
        this.elements.shopDropdown().click();
    }

    clickWomenWearCategory() {
        this.elements.womenWearCategory().click();
    }

    clickMenWearCategory() {
        this.elements.menWearCategory().click();
    }

    clickKidsWearCategory() {
        this.elements.kidsWearCategory().click();
    }

     clickElectronicsCategory() {
        this.elements.electronicsCategory().click();
    }

    itemDetails() {
        // validate products exist and is visible in the selected category
      this.elements.productItems().should('have.length.greaterThan', 0);
      this.elements.productImg().first().should('be.visible');
      this.elements.productNames().first().should('be.visible');
      this.elements.productPrices().first().should('be.visible');
      this.elements.productSize().first().should('be.visible');
    }

    ShopMenu() {
        // validate menu items exist and is visible in the shopDropdown
      this.elements.womenWearCategory().should('be.visible');
      this.elements.menWearCategory().should('be.visible');
      this.elements.kidsWearCategory().should('be.visible');
      this.elements.electronicsCategory().should('be.visible');
    }

    validateCategory(expectedCategory) {
      this.elements.productCategories().each(($el) => {
        cy.wrap($el)
          .invoke('text')
          .should('match', new RegExp(expectedCategory, 'i'));
      });
    }
    
    // to validate price exist and ensure all prices are greater than 0
    validatePrices() {
      this.elements.productPrices().each(($price) => {
        const value = Number($price.text().replace(/[^\d]/g, ''));
        expect(value).to.be.greaterThan(0);
      });
    }

    clickContinueBtn()  {
        this.elements.continueBtn().click();
    }
}

export default new shopPage();