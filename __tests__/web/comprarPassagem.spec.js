const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const chromedriver = require("chromedriver")

describe('Comprar Passagem', function() {
  
  
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    await driver.manage().setTimeouts({implicit: 60000}); // espera do Selenium
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Comprar Passagem', async function() {
    
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 790, height: 825 })
    await driver.wait(until.elementIsVisible(await driver.findElement(By.name("fromPort"))), 30000)
    //await driver.findElement(By.name("fromPort")).click()
    //await driver.findElement(By.name("fromPort")).click()
    await driver.findElement(By.css(".container:nth-child(6)")).click()
    //await driver.findElement(By.name("toPort")).click()
    {
      const dropdown = await driver.findElement(By.name("toPort"))
      await dropdown.findElement(By.xpath("//option[. = 'New York']")).click()
    }
    //Botao Procurar Voo
    await driver.findElement(By.css(".btn-primary")).click()
    //Botao Escolher o voo
    await driver.findElement(By.css("tr:nth-child(1) .btn")).click()
    //await driver.findElement(By.id("nameOnCard")).click()
    await driver.findElement(By.id("nameOnCard")).sendKeys("Joao Lima")
    // Checkbox lembre-se de mim
    await driver.findElement(By.css(".checkbox")).click()
    //Botao Comprar
    await driver.findElement(By.css(".btn-primary")).click()
    //await driver.findElement(By.css("h1")).click()
    assert(await driver.findElement(By.css("h1")).getText() == "Thank you for your purchase today!")
    await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).click()
    //await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).click()
    assert(await driver.findElement(By.css("tr:nth-child(3) > td:nth-child(2)")).getText() == "555 USD")
  })
  it('Login', async function() {
    await driver.get("https://blazedemo.com/")
    await driver.manage().window().setRect({ width: 1296, height: 696 })
    await driver.findElement(By.linkText("home")).click()
    await driver.findElement(By.id("email")).click()
    await driver.findElement(By.id("email")).sendKeys("correia@iterasys.com.br")
    await driver.findElement(By.id("password")).click()
    await driver.findElement(By.id("password")).sendKeys("laranja")
    await driver.findElement(By.name("remember")).click()
    await driver.findElement(By.css(".btn-primary")).click()
    assert(await driver.findElement(By.css(".message")).getText() == "Page Expired")
  })

})