import LoginUtil from "../Utils/login";
import shopPage from "../support/Pages/shopPage";


describe("Validate shopping categories", function () {
  beforeEach(function () {
    cy.visit("https://shop.qaautomationlabs.com/index.php");
    LoginUtil.login("valid_login");
  });
  

  it("Validate women wear shopping category", function () {
    shopPage.clickShopDropdown();    
    shopPage.clickWomenWearCategory();
    shopPage.itemDetails();
    // validate correct product listing per category and validate prices
    shopPage.validateCategory("Women");
    shopPage.validatePrices();
    
    // navigation validation
    cy.url().should("include", "womens-wear");
  });

  it("Validate men wear shopping category", function () {
    shopPage.clickShopDropdown();
    shopPage.clickMenWearCategory();
    shopPage.itemDetails();
    // validate correct product listing per category and validate prices
    shopPage.validateCategory("Men");
    shopPage.validatePrices();
    
    // navigation validation
    cy.url().should("include", "mens-wear");
  });

  it("Validate kids wear shopping category", function () {
    shopPage.clickShopDropdown();
    shopPage.clickKidsWearCategory();
    shopPage.itemDetails();
    // validate correct product listing per category and validate prices
    shopPage.validateCategory("Kids");
    shopPage.validatePrices();
    
    // navigation validation
    cy.url().should("include", "kids-wear");
  });

  it("Validate electronics shopping category", function () {
    shopPage.clickShopDropdown();
    shopPage.clickElectronicsCategory();
    shopPage.itemDetails();
    // validate correct product listing per category and validate prices
    shopPage.validateCategory("Electronics");
    shopPage.validatePrices();
    
    // navigation validation
    cy.url().should("include", "electronics");
  });

  it("validates category mismatch", () => {
    shopPage.clickShopDropdown();
    shopPage.clickWomenWearCategory();

    shopPage.elements.productCategories().each(($el) => {
      cy.wrap($el).should('not.contain.text', 'Electronics');
    });
  });

  it("validates category is not empty", () => {
    shopPage.clickShopDropdown();
    shopPage.clickElectronicsCategory();
    shopPage.elements.productItems().should('have.length.greaterThan', 0);      
    shopPage.itemDetails();
  });

});

