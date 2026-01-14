import homePage from "../support/Pages/homePage";
// import LoginUtil from "../Utils/login";
import shopPage from "../support/Pages/shopPage";

describe("Home Page Tests", function () {
  beforeEach(function () {
    cy.visit("https://qaautomationlabs.com/");
    // LoginUtil.login("valid_login");
  });

  it("Verify user is on homepage", function () {
    homePage.getHomePageLogo().should("exist");
  });

  it("Verify all menu items are displayed", function () {
    homePage.menuItems();
  });

  // it("verify shop dropdown displays when clicked or hovered", function () {
  //   homePage.openMenuIfMobile();
  //   homePage.clickShopDropdown();

  //   // navigates to shop page which is a different url from the others
  //   cy.origin("https://shop.qaautomationlabs.com", () => {
  //     // cy.url().should("include", "shop");
  //     cy.location("href").should("include", "shop.qaautomationlabs.com");
  //   // when clicked
  //     shopPage.clickShopDropdown();
  //     shopPage.ShopMenu();

  //   });

  // });

  it("verify shop dropdown displays when clicked or hovered", function () {
    homePage.openMenuIfMobile();
    homePage.clickShopDropdown();

    // navigates to shop page which is a different url from the others
    cy.origin("https://shop.qaautomationlabs.com", () => {
      cy.location("href").should("include", "shop.qaautomationlabs.com");

      // Click shop dropdown and verify menu items
      cy.get(".nav-link > .fa").click();

      // Verify shop menu items are visible
      cy.get('.dropdown-menu > [href="womens-wear.php"]').should("be.visible");
      cy.get('.dropdown-menu > [href="mens-wear.php"]').should("be.visible");
      cy.get('.dropdown-menu > [href="kids-wear.php"]').should("be.visible");
      cy.get('.dropdown-menu > [href="electronics.php"]').should("be.visible");
    });
  });

  // it("validate shopdropdown options are functional", () => {
  //   homePage.openMenuIfMobile();
  //   homePage.clickShopDropdown();

  //   // cy.origin("https://shop.qaautomationlabs.com", () => {
  //   //   homePage.elements.shopDropdownItems().each(($el) => {
  //   //     cy.wrap($el)
  //   //       .should("have.attr", "href")
  //   //       .and("not.have.attr", "href", "#");
  //   //   });
  //   // });
  //   // it("validate shopdropdown options are functional", () => {
  //   // homePage.openMenuIfMobile();
  //   // homePage.clickShopDropdown();

  //   cy.origin("https://shop.qaautomationlabs.com", () => {
  //     // Handle exceptions inside cy.origin
  //     Cypress.on("uncaught:exception", (err) => {
  //       if (
  //         err.message.includes("owlCarousel") ||
  //         err.message.includes("is not a function")
  //       ) {
  //         return false;
  //       }
  //     });

  //     cy.get(".dropdown-menu a").each(($el) => {
  //       cy.wrap($el)
  //         .should("have.attr", "href")
  //         .and("not.have.attr", "href", "#");
  //     });
  //   });
  // });

  // it("should not have missing menu items", () => {
  //   homePage.openMenuIfMobile();
  //   homePage.getMenuItems().should("have.length", 8);
  // });

  it("selected menu should not redirect to an incorrect page", () => {
    homePage.openMenuIfMobile();
    homePage.clickAboutText();
    cy.url().should("not.include", "testing");
  });

  it("verify correct navigation when menu items are clicked", function () {
    homePage.openMenuIfMobile();
    homePage.clickHomeText();
    cy.url().should("eq", "https://qaautomationlabs.com/");

    cy.visit("https://qaautomationlabs.com/");
    homePage.openMenuIfMobile();
    homePage.clickAboutText();
    cy.url().should("include", "/about");

    cy.visit("https://qaautomationlabs.com/");
    homePage.openMenuIfMobile();
    homePage.clickBlogText();
    cy.url().should("include", "blog");

    cy.visit("https://qaautomationlabs.com/");
    homePage.openMenuIfMobile();
    homePage.clickContactText();
    cy.url().should("include", "contacts");

    cy.visit("https://qaautomationlabs.com/");
    homePage.openMenuIfMobile();
    homePage.clickCoursesText();
    cy.url().should("include", "courses");

    cy.visit("https://qaautomationlabs.com/");
    homePage.openMenuIfMobile();
    homePage.clickEventText();
    cy.url().should("include", "events");

    // cy.visit("https://qaautomationlabs.com/");
    // homePage.openMenuIfMobile();
    // homePage.clickTestingText();
    // cy.url().should("include", "testing");

    // cy.visit("https://qaautomationlabs.com/");
    // homePage.openMenuIfMobile();
    // homePage.clickShopDropdown();
    
    // cy.origin("https://shop.qaautomationlabs.com", () => {
    //   Cypress.on('uncaught:exception', (err) => {
    //     if (err.message.includes("owlCarousel") || 
    //         err.message.includes("is not a function")) {
    //       return false;
    //     }
    //   });
      
    //   cy.location("href").should("include", "shop.qaautomationlabs.com");
    // });
  });
  });

