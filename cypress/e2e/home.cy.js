import homePage from "../support/Pages/homePage";
import LoginUtil from "../Utils/login";
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

  it("verify shop dropdown displays when clicked or hovered", function () {
    homePage.openMenuIfMobile();
    homePage.clickShopDropdown();

    // navigates to shop page which is a different url from the others
    // cy.origin("https://shop.qaautomationlabs.com", () => {
    //   cy.url().should("include", "shop");
    // });

    cy.location("href").should("include", "shop.qaautomationlabs.com");
    // when clicked
    shopPage.clickShopDropdown();
    shopPage.ShopMenu();

    // when hovered
    homePage.elements.shopDropdown().trigger("mouseover");
    shopPage.ShopMenu();
  });

  it("validate shopdropdown options are functional", () => {
    homePage.openMenuIfMobile();
    homePage.clickShopDropdown();

    cy.origin("https://shop.qaautomationlabs.com", () => {
      homePage.elements.shopDropdownItems().each(($el) => {
        cy.wrap($el)
          .should("have.attr", "href")
          .and("not.have.attr", "href", "#");
      });
    });
  });


  it("should not have missing menu items", () => {
    homePage.elements.menuLinks().should("have.length", 8);
  });


  it("selcted menu should not redirect to an incorrect page", () => {
    homePage.elements.aboutText().click();
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

    cy.visit("https://qaautomationlabs.com/");
    homePage.openMenuIfMobile();
    homePage.clickTestingText();
    cy.url().should("include", "testing");

    cy.visit("https://qaautomationlabs.com/");
    homePage.openMenuIfMobile();
    homePage.clickShopDropdown();
    // cy.url().should("include", "shop");
    cy.location("href").should("include", "shop.qaautomationlabs.com");
  });
});
