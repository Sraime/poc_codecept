
Feature('HomePage');

Before((I) => { 
    I.amOnPage('https://www.fr.sogeti.com/');
});

Scenario('test title', (I) => {
    I.seeInTitle("Sogeti France | Gérez la transformation numérique de votre entreprise avec Sogeti");
});

Scenario('test search form', (I) => {
    I.seeElement('.navbar-right > .navbar-search');
    I.click('.navbar-right > .navbar-search');
    I.seeElement('#SearchFormHeader');
})
