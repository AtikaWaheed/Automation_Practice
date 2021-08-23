
AutomationPractice Tests
==========================

End-to-end tests for AutomationPratice

Pre reqs:
============================================
1- Create project directory
 
       mkdir Automation_Practice

2- Let’s start by creating the package.json
        
        npm init -y         // This will create a package.json file

3- Install Node.js packages
       
       $ npm install

4- Let's Install the latest Cypress
      
      npm install cypress
 

Running Tests
======================================
1- In order to execute all tests just  command  

     npx cypress run    

2- For single test you Open Cypress using npx to execute npm package binaries:
      
      $ npx cypress open   // And in Cypress window just  click single tests (Please refer tests name below point # 3 incase of single click)
      

3- In Cypress open window test files are under Integration:

a - landingPage.spec.js

b - authenticationAccountPage.spec.spec.js

c - registrationtestFlow.spec.js

d - fakeApi-tests.spec.js

e - fakeAPI-Tests2.spec.j