// Bibliotecas e Importacoes
// Importa a HomePage
const HomePage = require("../../pageObjects/HomePage");
const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const assert = require("chai").assert;
require("chromedriver");

// ToDo - local reservado para massa de teste

// Execucao do Teste
describe ("Comprar Passagem via Blazedemo - Page Object", () => {
    let driver;  //chama o objeto q sera o selenium
    // cria um objeto para fazer uma configuracao avancada do driver
    const chOptions = new chrome.Options().headless();

    // Inicializacao
    beforeEach(() => {
        driver = new webdriver.Builder() //instancia o selenium - passa a existir o selenium
            .forBrowser("chrome")
            .setChromeOptions(chOptions)
            .build()
        driver.manage().setTimeouts({ implicit: 30000});  //espera implicita de 30s
        driver.manage().window().maximize(); //maximiza a janela
    });

    // Finalizacao
    afterEach(() => {
        driver.quit(); //encerra o objeto do selenium - destroi
    });

    // Testes
    it("Comprar Passagem PO", async () =>{
        await driver.get("https://www.blazedemo.com");
        const homePage = new HomePage(driver); // instancia a home page
        await homePage.selecionarOrigemDestinoVoo("Boston", "Dublin");
        assert.equal(await homePage.lerTituloGuia(), "BlazeDemo - reserve");
        await homePage.driver.sleep(3000); //pausa para visualizar
    });
});