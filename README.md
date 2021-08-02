# Loan Management API

An API which facilitates the working of a minimal loan management system

**Background of the API**

- There are three types of users:- Customer, Agent, Admin<br/>
- Customer is the client who makes a request for the loan<br/>
- Agent is the middleman associated with the bank who has certain authourities such as edit loans, listing users, and making loan request on behalf of customer<br/>
- Admin is the highest authority who can approve or reject a loan <br/>
- Admin, cutomers and agents can login<br/>
- A loan has entities such as principle, interest rate, months to repay, emi and status<br/>
- The value of interest rate would depend on the value of principlexxxxxxxxx<br/>
- The loan can have 3 kinds of status: Approved, New or Rejected

**Tech stack used**<br/>
Nodejs, Express framework, Mongodb

**Key modules used**<br>
Passport-jwt, Jsonwebtoken, md5, Mocha, Chai

**Model Schemas**

> User<br/>
> Has details about the user such as name, email, password, user type,phone and if user is approved or not<br/>
> Loan<br/>
> Has details of principle, interest rate, months to repay, emi, status and history of edited loans

**Explaination of key features**

- Only customers and agents can signup<br/>
- Customer will be created in the database on signup<br>
- An instance of admin is created initially in the database(see the main index file, uncomment the mentioned code, run "npm start", comment the same code again and run "npm start",later the admin can change password if want to)<br>
- All the users can update their passwords and its length should be greater than 6<br>
- Passwords are encrypted before being stored<br>
- Agents can list all customers and admin can list all users<br>
- The interest on a loan would depend on the principle<br/>
  For range (10000,50000) interest = 3%<br/>
  For range (50000,100000) interest = 4% <br/>
  Greater than 100000 interest = 5%<br/>
- Loan can be approved or rejected by admin only<br/>
- Only agent can edit a loan if it is still not approved<br/>
- Previous instance of the same loan is pushed inside the history before being edited<br>
- Loans can be listed according to filter

**Routes**

> /user/signup<br />
> /user/login<br />
> /user/listUsers<br />
> /user/updatePassword<br />
> /user/loan/newLoan<br />
> /user/loan/approveLoan<br />
> /user/loan/rejectLoan<br />
> /user/loan/editLoan<br />
> /user/loan/allLoans<br />
> /user/loan/loansbyFilter<br />

**Set up Project using Docker files**

- Dockerfile(It executes both the test cases and the production api servers).<br/>
- Create an image for each by command => "docker build -t {your username}/{name of app} ."<br/>
- Run the image with command => "docker run -p 9000:8000 -d {your username}/{name of app}"
