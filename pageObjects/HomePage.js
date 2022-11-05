// Bibliotecas 
// Importa a classe mae / super classe
const BasePage = require("./BasePage");   //declara
// Importa o BY do Selenium
const By = require("selenium-webdriver").By;

//criar a classe Home Page a partir da classe BasePage
class HomePage extends BasePage{   //vai usar a basepage

    // monta a estrutura de dados da classe - esta recendo o Selenium
    constructor(driver) {
        super(driver)  //chama a classe basepage - chama a super classe e passa o selenium
        // mapeamento dos elementos da tela (no caso 4 deles)
        this.linkDaSemana = By.linkText("destination of the week! The Beach!");
        this.dropdownOrigem = By.name("fromPort");
        this.dropdownDestino = By.name("toPort");
        this.btnProcurarVoos = By.css(".btn-primary");
    }

    // Criar acoes baseadas nos elementos mapeados
    // clica na promocao da semana
    async consultarDestinoDaSemana() {
        await this.driver.findElement(this.linkDaSemana).click();
    }

    //seleciona a origem e o destino de um Voo
    async selecionarOrigemDestinoVoo(origem, destino) {
        // selecionar origem
        // primeiro seleciona o dropdown / combo origem
        let ddOrigem = await this.driver.findElement(this.dropdownOrigem);
        // em segundo lugar - seleciona a opçao no combo (escolhe a opcao)
        this.driver.sleep(5000)
        await ddOrigem.findElement(By.css(`[value="${origem}"]`)).click()


        // Selecionar destino
        let ddDestino = await this.driver.findElement(this.dropdownDestino);
        await ddDestino.findElement(By.css(`[value="${destino}"]`)).click()

        // clicar no botao Find Fligths
        await this.driver.findElement(this.btnProcurarVoos).click();
    }
}

module.exports = HomePage;