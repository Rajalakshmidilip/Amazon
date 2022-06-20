$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/FeatureFiles/home.feature");
formatter.feature({
  "name": "To validate the home page of Amazon application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To click the mobile option in amazon home page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user has to launch the google chrome browser and pass the url",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition.userHasToLaunchTheGoogleChromeBrowserAndPassTheUrl()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJALAKSHMI\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54139}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ff8ba133ea269e462fcd5c027373510e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.base.BaseClass.passUrl(BaseClass.java:63)\r\n\tat org.step.Stepdefinition.userHasToLaunchTheGoogleChromeBrowserAndPassTheUrl(Stepdefinition.java:27)\r\n\tat ✽.user has to launch the google chrome browser and pass the url(src/test/resources/FeatureFiles/home.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to choose the Apple product under brands section",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.userHasToChooseTheAppleProductUnderBrandsSection()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to click Apple iPhone - Midnight button then choose size and colour and click buy now button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.userHasToClickAppleIPhoneMidnightButtonThenChooseSizeAndColourAndClickBuyNowButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to navigate to sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.userHasToNavigateToSignInPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the login function with valid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user has to enter valid username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.userHasToEnterValidUsernameAndPassword()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJALAKSHMI\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54139}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ff8ba133ea269e462fcd5c027373510e\n*** Element info: {Using\u003dxpath, value\u003d//input[@type\u003d\u0027email\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.toInput(BaseClass.java:97)\r\n\tat org.step.Stepdefinition.userHasToEnterValidUsernameAndPassword(Stepdefinition.java:70)\r\n\tat ✽.user has to enter valid username and password(src/test/resources/FeatureFiles/home.feature:15)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to click signin button",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.userHasToClickSigninButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to navigate in delivery address page of amazon",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.userHasToNavigateInDeliveryAddressPageOfAmazon()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "To validate the address,pincode and phone number for delivery",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user has to enter name email and phone number",
  "keyword": "When "
});
formatter.match({
  "location": "Stepdefinition.userHasToEnterNameEmailAndPhoneNumber()"
});
formatter.result({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027RAJALAKSHMI\u0027, ip: \u0027192.168.1.10\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_321\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54139}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ff8ba133ea269e462fcd5c027373510e\n*** Element info: {Using\u003dxpath, value\u003d(//input[@type\u003d\u0027text\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.sendKeys(Unknown Source)\r\n\tat org.base.BaseClass.toInput(BaseClass.java:97)\r\n\tat org.step.Stepdefinition.userHasToEnterNameEmailAndPhoneNumber(Stepdefinition.java:95)\r\n\tat ✽.user has to enter name email and phone number(src/test/resources/FeatureFiles/home.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user has to enter address",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.userHasToEnterAddress()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user has to navigate to payment page of amazon",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.userHasToNavigateToPaymentPageOfAmazon()"
});
formatter.result({
  "status": "skipped"
});
});