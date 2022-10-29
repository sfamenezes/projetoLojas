class BasePage {  //o q eh comum a todas as paginas

    constructor(driver){
        this.driver = driver;
    }

    async lerTituloGuia() {
        return await this.driver.getTitle();
    }

}

module.exports = BasePage;