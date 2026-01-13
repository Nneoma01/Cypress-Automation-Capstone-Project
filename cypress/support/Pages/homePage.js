class HomePage {
  elements = {
    menuLinks: () => cy.get("nav a"),
    HomePageLogo: () => cy.get('[href="https://qaautomationlabs.com/"]'),
    homeText: () => cy.contains("a", "Home"),
    aboutText: () => cy.contains("a", "About"),
    coursesText: () => cy.contains("a", "Courses"),
    eventText: () => cy.contains("a", "Events"),
    shopDropdown: () => cy.contains("a", "Shop"),
    testingText: () => cy.contains("a", "Testing"),
    blogText: () => cy.contains("a", "Blog"),
    contactText: () => cy.contains("a", "Contact"),
    shopDropdownItems: () => cy.get(".dropdown-menu a"),

    menuBar: () => cy.get(".hamburger > :nth-child(3)"),
  };

  openMenuIfMobile() {
    this.elements.menuBar().then(($menu) => {
      if ($menu.is(":visible")) {
        cy.wrap($menu).click();
      }
    });
  }

  menuItems() {
    this.openMenuIfMobile();

    // validate menu exist and is visible in the homepage
    const items = [
      this.elements.homeText(),
      this.elements.aboutText(),
      this.elements.coursesText(),
      this.elements.eventText(),
      this.elements.shopDropdown(),
      this.elements.testingText(),
      this.elements.blogText(),
      this.elements.contactText(),
    ];

    items.forEach((item) => {
      item.should("be.visible");
    });
  }

  getHomePageLogo() {
    return this.elements.HomePageLogo();
  }

  clickShopDropdown() {
    this.elements.shopDropdown().click();
  }

  clickHomeText() {
    this.elements.homeText().click();
  }

  clickAboutText() {
    this.elements.aboutText().click();
  }

  clickCoursesText() {
    this.elements.coursesText().click();
  }

  clickEventText() {
    this.elements.eventText().click();
  }

  clickTestingText() {
    this.elements.testingText().click();
  }

  clickBlogText() {
    this.elements.blogText().click();
  }

  clickContactText() {
    this.elements.contactText().click();
  }
}

export default new HomePage();
