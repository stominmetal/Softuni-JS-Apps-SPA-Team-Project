function logoutUser() {
    sessionStorage.clear();
    showHomeView();
    showHideMenuLinks()
}