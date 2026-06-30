class BasePage {

    constructor( pageName ) {
        this.name = this.name;
    }

    open() {
        console.log( " Opening the Page" );

    }

    close() {
        console.log( " Closing the Page" );

    }
}

class LoginPage extends BasePage {
    execiute() {
        console.log( " This will execiute in between !" );

    }

}

const page = new LoginPage();
page.open();
page.execiute();
page.close();