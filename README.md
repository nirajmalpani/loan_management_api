Loan Management API
An API which facilitates the working of a minimal loan management system

Background of API

There are three types of users:- Customer, Agent, Admin
Customer is the client who makes a request for the loan
Agent is the middleman associated with the bank who has certain authourities such as edit loans,
listing users, and making loan request on behalf of customer
Admin is the highest authority who can approve or reject a loan.
Admin, cutomers and agents can login.
A loan has entities such as principle, interest rate, months to repay, emi and status
The value of interest rate would depend on the value of principlexxxxxxxxx
The loan can have 3 kinds of status: Approved, New or Rejected

Tech stack used
Nodejs, Express framework, Mongodb

Key modules used
Passport-jwt, Jsonwebtoken, md5, Mocha, Chai

Model Schemas

User
Has details about the user such as name, email, password, user type,phone and if user is approved or not
Loan
Has details of principle, interest rate, months to repay, emi, status and history of edited loans

Explaination of key features

Only customers and agents can signup
Customers and agents will be created in the database on signup
An instance of admin is created initially in the database(see the main index file, uncomment the mentioned code, run "npm start", comment the same code again and run "npm start",later the admin can change password if want to)
All the users can update their passwords and its length should be greater than 6
Passwords are encrypted before being stored using md5 algorithm
Agents can list all customers and admin can list all users
The interest on a loan would depend on the principle
For range (10000,50000) interest = 3%
For range (50000,100000) interest = 4%
Greater than 100000 interest = 5%
Loan can be approved or rejected by admin only
Only agent can edit a loan if it is still not approved
Previous instance of the same loan is pushed inside the history before being edited
Loans can be listed according to filter

Routes

/user/signup
/user/login
/user/listUsers
/user/updatePassword
/user/loan/newLoan
/user/loan/approveLoan
/user/loan/rejectLoan
/user/loan/editLoan
/user/loan/allLoans
/user/loan/loansbyFilter

Set up Project using Docker files

Dockerfile(It executes both the test cases and the production api servers).
Create an image for each by command => "docker build -t {your username}/{name of app} ."
Run the image with command => "docker run -p 9000:8000 -d {your username}/{name of app}"
