// Configura

// Bibliotecas
const { Builder, By } = require("selenium-webdriver")
const { assert } = require("chai")
const chromedriver = require("chromedriver") //referencia ao Chromedriver

// Executa
describe("Comprar Passagem via programação", () => {
    
    let driver             // declaração da variavel/objeto que recebera o selenium

    // Iniciar -- antes de cada teste
    beforeEach(async function ()  {
        // Instanciar o Selenium WebDriver para controlar o Chrome
        driver = await new Builder().forBrowser("chrome").build()
        // Configurar o tempo de espera maxima do selenium
        await driver.manage().setTimeouts({implicit: 30000})  //tempo de espera 3seg
    })

    // Finalizar - fica no meio para saber como termina (quit ou close)
    afterEach(async function() {
        await driver.quit(); //destruir o objeto do Selenium WebDriver
    })

    // Testar -- cada teste é um it
    // Abrir o site - no Chrome - sendo controlado pelo Selenium
    it("Comprar Passagem WD", async ()   => {
        await driver.get("https://www.blazedemo.com")
        // clicar no combo origem / embarque
        await driver.findElement(By.name("fromPort")).click()
        // selecionar a origem como São Paolo
        {
            const dropdown = await driver.findElement(By.name("fromPort"))
            await dropdown.findElement(By.xpath("//option[. =  'São Paolo']")).click()
        }

        // selecionar o destino como São Paolo
        {
            const dropdown = await driver.findElement(By.name("toPort"))
            await dropdown.findElement(By.xpath("//option[. =  'Berlin']")).click()
        }
        // clicar no botão Find Fligths
        //await driver.findElement(By.className("btn.btn-primary"))
        await driver.findElement(By.css(".btn-primary")).click()
    
        // Valida se foi para a pagina de reserva
       driver.sleep(5000)
       
       //assert(await.driver.getTitle() == "BlazeDemo - reserve")
       assert.equal(await driver.getTitle(), "BlazeDemo - reserve")
      
    })    
    
})
