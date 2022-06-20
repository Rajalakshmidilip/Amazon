

Feature: To validate the home page of Amazon application

Scenario: To click the mobile option in amazon home page

Given user has to launch the google chrome browser and pass the url
When user has to choose the Apple product under brands section
And user has to click Apple iPhone - Midnight button then choose size and colour and click buy now button
Then user has to navigate to sign in page


Scenario: To validate the login function with valid username and password

When user has to enter valid username and password
And user has to click signin button
Then user has to navigate in delivery address page of amazon


Scenario: To validate the address,pincode and phone number for delivery

When user has to enter name email and phone number
And user has to enter address
Then user has to navigate to payment page of amazon