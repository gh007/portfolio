import $ from 'jquery';

class MobMenu {
    constructor() {
        this.siteHeader =$(".site-header")
        this.menuIcon = $(".site-header__nav-3line-icon");
        this.menuContent = $(".site-header__nav-content");
        this.events();
  
}
    
    events() {
        this.menuIcon.click(this.toggleTheMenu.bind(this));
    }
    
    toggleTheMenu () {
        this.menuContent.toggleClass("site-header__nav-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__nav-3line-icon--close-x");
    }
    
}

export default MobMenu;