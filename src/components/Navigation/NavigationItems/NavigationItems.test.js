// Per cominciare un test dobbiamo chiamere 2 metodi
// Il primo è describe che prende come attributi 2 parametri:
// Descrizione oggetto test
// Testing Function
// La funzione di test è il test vero e proprio e viene implementata
// usando il metodo it. It deve ricevere 2 parametri:
// Stringa descrittiva di ciò che dovrebbe succedere
// Secondo argomento è una funzione di test
// ENZYME - permette di eseguire un componente in modo isolato:
import {configure, shallow} from 'enzyme'; // shallow renderizza il componente con tutti i contenuti, ma i contenuti non sono renderizzati nel dettaglio
import Adapter from 'enzyme-adapter-react-16';
// Per poter testare i componenti è necessario importarli per renderli disponibili:
// React viene importato per usare il codice JSX all'interno del metodo shallow che renderizzerà i nostri componenti react
import React from 'react';
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

configure ({adapter: new Adapter()});

describe ('<NavigationItems />',()=>{
    // Possiamo usare il metodo beforeEach per eseguire una funzione prima di ciascun test:
    // beforeEach prendwe una funzione come argomento, questa viene eseguita prima di ogni test
    let wrapper;
    beforeEach (() =>{
        wrapper = shallow(<NavigationItems />);
    });
    it('Should render 2 <NavigationItems /> if not auth', ()=> { 
        // expect è una funzione fornita da enzyme che ci permette di eseguire alcuni controlli
        // su un componente renderizzato da shallow:
        // Nel seguente esempio usiamo il metodo find per cercare se all'interno del wrapper è presente un NavigationItem
        // Per utilizzare il metodo expect dobbiamo inoltre concatenare altri metodi di controllo che indicano ad expect 
        // cosa ci aspettiamo dal test: nellesempio concateniamo tiHaveLength (fornito da JEST) per verificare quanti
        // navigationItem vengono renderizzati
        expect (wrapper.find(NavigationItem)).toHaveLength(2);
    } );
    it('Should render 3 <NavigationItems /> if  auth', ()=> {
        // expect è una funzione fornita da enzyme che ci permette di eseguire alcuni controlli
        // su un componente renderizzato da shallow:
        // Nel seguente esempio usiamo il metodo find per cercare se all'interno del wrapper è presente un NavigationItem
        // Per utilizzare il metodo expect dobbiamo inoltre concatenare altri metodi di controllo che indicano ad expect 
        // cosa ci aspettiamo dal test: nellesempio concateniamo tiHaveLength (fornito da JEST) per verificare quanti
        // navigationItem vengono renderizzati
        // Se usiamo il metodo beforeEach possiamo evitare di ridefinire la variabile wrapper ad ogni test
        // ma possiamo semplicemente settare diverse props in base al test con setProps:
        // wrapper = shallow(<NavigationItems isAuth={true} />);
        wrapper.setProps({isAuth: true});
        expect (wrapper.find(NavigationItem)).toHaveLength(3);

    } );
    it('Check if the <NavigationItems /> contains a NavigationItems logout' , ()=> {
        wrapper.setProps({isAuth: true});
        expect (wrapper.contains(<NavigationItem link='/logout'>Logout</NavigationItem>)).toEqual(true);

    } );
} );