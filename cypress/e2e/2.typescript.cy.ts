describe('TS basics', () => {
    it('TS basics', () => {
        cy.visit('https://google.com')

        let stringVariable: string = "9";
        let numberVariable: number = 0;
        let booleanVariable: boolean = true;
        let anyVariable: any = false
        anyVariable = "9"

        const addTwoNumbers = (a: number, b:number): number => {
            return a+b;
        }

        addTwoNumbers(2,10)
        //addTwoNumbers(2,"2")

        interface User {
            username: string;
            password: string;
        }

        function returnUserInformation(user: User): void {
            console.log("Username:" + user.username)
            console.log("Password:" + user.password)
            //console.log("Non existing:" + user.sadasd)
        }
    });
});