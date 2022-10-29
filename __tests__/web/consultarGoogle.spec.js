// Bibliotecas
const { assert } = require("chai");
const webdriver = require("selenium-webdriver");
const By = webdriver.By

require("chromedriver");


// Classe ou Descrição
describe('Google', () => {
    let driver;

    // Metodo de Inicialização
    beforeEach(() => {
        driver = new webdriver.Builder() //instanciou o selenium declarado na 2a.linha
        .forBrowser("chrome")
        .build()
    })
    // Configura
    // Metodo de Finalizacao
    afterEach(() =>{
        driver.quit();  //quit é melhor - close vai fechar a janela e deixar no segundo plano

    })
    // Metodo de Testes (cada it é um teste)
    it("Consultar Google", async() => {
        // Executa
        await driver.get("https://google.com")
        await driver.sleep(5000)
        //await driver.findElement(By.name("app")).sendkeys("mousse de chocolate" + webdriver.Key.ENTER)
        await driver.findElement(By.name("q")).sendkeys("mousse de chocolate" + webdriver.Key.ENTER)
       
        // Valida
        
        assert.equal(await driver.getTitle(), "mousse de chocolate - Pesquisa Google")
    })
})