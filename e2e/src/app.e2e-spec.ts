import { browser, element, protractor, by, ElementFinder } from "protractor";


describe('new App', () => {

  describe('Tutorial Screen', ()=>{

    it('Click skip button', async() =>{

      //Wait for while skip button need to be visible and clickable
      await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('skip'))));

      //Get element
      const skipBtn: ElementFinder = await browser.element(by.id('skip'));
      //Get element lable for validate
      const skipBtnLabel: string = await skipBtn.getText(); //SKIP
      expect(skipBtnLabel).toEqual('SKIP');

      //Click the skip button
      skipBtn.click();

    });

    it('Validate login button event', async() =>{
//Wait for while login button need to be visible and clickable
await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('loginbtn'))));
const loginBtn: ElementFinder = await browser.element(by.id('loginbtn'));
await loginBtn.click();



    });

    it('Valid username and password then press login button', async() =>{

      
//Wait for while login button need to be visible and clickable
await browser.wait(protractor.ExpectedConditions.elementToBeClickable(element(by.id('loginbtn'))));

//Set some value in username field
const usernameField: ElementFinder = await browser.element(by.css('ion-input[name="username"] input'));
usernameField.sendKeys("testpassword");


//Set some value in password field
const passwordField: ElementFinder = await browser.element(by.css('ion-input[name="password"] input'));
passwordField.sendKeys("passwordvalue");

const loginBtn: ElementFinder = await browser.element(by.id('loginbtn'));
await loginBtn.click();

    });

  });

});
