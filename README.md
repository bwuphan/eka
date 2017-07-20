# EKA TECHNICAL CHALLENGE


## INTRODUCTION
For this technical challenge, we would like you to provide an interface for a user to input information, query the DAT API based on the information given, and then render the results to the user.

## TECHNOLOGIES
This challenge implies building a single page fullstack application. Here's a list of the technologies that we expect you to utilize:

### FRONT-END
* React
* Redux
* Webpack
* Babel
* React-Router

### BACK-END
* Node
* Express

## SPECIFICS
The basic workflow is:
1.  User is prompted for information via form submission.
2.  Based on the DOT or MC number given (only one will be given by the user), you will make an API call to DAT to request information.
  * The type of information that we are most interested in from the result is:
    * FMCSA Safety Rating (eg. 'Conditional', 'Satisfactory')
    * Carrier contact information (name, address, phone number)
    * Insurance type (eg. 'Cargo', 'Auto', 'General')
    * Insurance validity (eg. expired or active)
3.  Display information to the user in a table for the user to confirm or reject details.

We do not expect all candidates to submit a fully polished product within 24 hours. We leave it to the candidate to decide which aspects they would like to focus on for submission. However, all of the required technologies mentioned above _must_ be utilized. Please also set up a Github repository for your work.

If you need additional time to complete your application, send us an e-mail at joseph@go-eka.com.

We've also provided a few screenshots of the general process to help guide your styling of the application. These images are location in the images folder.

OPTIONAL: Persist carrier and SessionToken information from the DAT API using PostgreSQL.
OPTIONAL: Deploy your application on Heroku.

## DETAILS YOU'LL NEED
DAT ID: peak_cxn2
DAT PW: logistics
DAT URL: http://208.64.206.159:9280/TfmiRequest
DAT WSDL URL: See docs/WSDLandSchema.docx. Use the test server.
DAT Namespace definitions: See docs/WSDLandSchema.docx
Sample DOT#: 843546
Sample MC#: 372970

For information regarding how to interact with DAT, see the csharp developer's guide at docs/csharp_Developer_Guide.pdf. The guide was written for a C# application, but the details of how to make a request and the parameters of the request are still relevant to a JavaScript application.

If you'd like to see the sample SDK's that DAT has made available, go [here](http://www.3sixtyfreightmatch.com/Connexion/). There is a C# and a Java SDK available.

When you are ready to start making real lookup requests for carrier information, use either the sample DOT or sample MC number provided above. You may look up DOT and MC numbers of other companies [here](https://safer.fmcsa.dot.gov/CompanySnapshot.aspx), but the information we would like you to display is not necessarily available for every company within the DAT database.

The sample DOT and sample MC # provided both refer to the same company.

## HELP
If you encounter any errors that you believe is a result of lack of information/misinformation on our part, send an e-mail to joseph@go-eka.com. We will get back to you as quick as possible.
