describe('MyTestSuite', ()=> {

    //Direct access
      /*it('FixturesDemoTest', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')

        cy.fixture('orangehrm.json').then((data)=>{
          cy.get("input[placeholder='Username']").type(data.username) //username
          cy.get("input[placeholder='Password']").type(data.password)  //password
          cy.get("button[type='submit']").click() //Login btn
          cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text',data.expected);
          })

      }) */

     // Access through Hook - for multipme it blocks
      let userdata;

      before(()=> {
        cy.fixture('orangehrm.json').then(function(data){
            userdata=data;
    
        })
      })
    
      it('FixturesDemoTest', ()=> {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
      
          cy.get("input[placeholder='Username']").type(userdata.username) //username
          cy.get("input[placeholder='Password']").type(userdata.password)  //password
          cy.get("button[type='submit']").click() //Login btn
          cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
            .should('have.text',userdata.expected);
       
      }) 

  
  })
  