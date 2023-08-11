describe('MyTestSuite', ()=> {

    it('DataDrivenTest', ()=> {
        //test started
        cy.fixture('orangehrm2').then((data)=>{
           cy.visit('https://opensource-demo.orangehrmlive.com/')
         
           data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username) //username
                cy.get("input[placeholder='Password']").type(userdata.password)  //password
                cy.get("button[type='submit']").click() //Login btn
                
                if(userdata.username=="Admin" && userdata.password=="admin123")
                {
                    cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module')
                    .should('have.text',userdata.expected)
                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click() //logout
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click(); //logout
                }
                else
                {
                    cy.get('.oxd-alert-content > .oxd-text')
                    .should('have.text',userdata.expected)
                   
                }
           });

        })
        //Test end

      })
  
  })
  