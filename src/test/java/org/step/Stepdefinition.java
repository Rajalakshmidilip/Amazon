package org.step;

import java.io.IOException;

import org.base.BaseClass;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebElement;
import org.pojoamaz.HomePojo;
import org.pojofb.LoginPojo;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Stepdefinition extends BaseClass {

@Given("user has to launch the google chrome browser and pass the url")
public void userHasToLaunchTheGoogleChromeBrowserAndPassTheUrl() {
	 launchBrowser();
	   passUrl("https://www.amazon.in/");
	   toMaximize();
}

@When("user has to choose the Apple product under brands section")
public void userHasToChooseTheAppleProductUnderBrandsSection() throws InterruptedException {
	HomePojo h = new HomePojo();
	   toClick(h.getMobile());
	   toClick(h.getApple());
	  }

@When("user has to click Apple iPhone - Midnight button then choose size and colour and click buy now button")
public void userHasToClickAppleIPhoneMidnightButtonThenChooseSizeAndColourAndClickBuyNowButton() throws InterruptedException {
	HomePojo h = new HomePojo();
	Thread.sleep(9000);
	mouseHoverAction(h.getSelectiphone());
scrollDown(h.getSelectiphone());
	toClick(h.getSelectiphone());
	windowId();
	Thread.sleep(13000);
	scrollDown(h.getColour());
mouseHoverAction(h.getPrice());
	   toGetText(h.getPrice());
	   mouseHoverAction(h.getColour());
	   toClick(h.getColour());
	   mouseHoverAction(h.getSize());
	   toClick(h.getSize());
	   Thread.sleep(3000);
	   mouseHoverAction(h.getBuynow());
	   toDoubleClick();
	   toClickJavascript(h.getBuynow());
}

@Then("user has to navigate to sign in page")
public void userHasToNavigateToSignInPage() {
System.out.println("verified");
}


@When("user has to enter valid username and password")
public void userHasToEnterValidUsernameAndPassword() throws IOException, InterruptedException {
	HomePojo h = new HomePojo();
	Thread.sleep(5000);
	toInput(h.getEmail(), excelRead(1, 0));
	 mouseHoverAction(h.getContinue1());
	   toDoubleClick();
	Thread.sleep(5000);
	toInput(h.getPass(), excelRead(2, 0));
}

@When("user has to click signin button")
public void userHasToClickSigninButton() throws InterruptedException {
	HomePojo h = new HomePojo();
	Thread.sleep(5000);
	mouseHoverAction(h.getSignin());
	toDoubleClick();
	System.out.println("verified");
}

@Then("user has to navigate in delivery address page of amazon")
public void userHasToNavigateInDeliveryAddressPageOfAmazon() throws IOException {
	             HomePojo h = new HomePojo();      
	             toInput(h.getName(), excelRead(3, 0));
}

@When("user has to enter name email and phone number")
public void userHasToEnterNameEmailAndPhoneNumber() throws IOException {
	   HomePojo h = new HomePojo();      
	   toInput(h.getMob(), excelRead(4, 0));
	   toInput(h.getPin(), excelRead(5, 0));
}

@When("user has to enter address")
public void userHasToEnterAddress() throws IOException, InterruptedException {
	   HomePojo h = new HomePojo(); 
	   toInput(h.getAddres(), excelRead(6, 0));
	   toInput(h.getArea(),excelRead(7, 0));
	   toInput(h.getLand(),excelRead(8, 0));
	   toInput(h.getTown(), excelRead(9, 0));
	  // toClick(h.getState());
	  // toClick(h.getGujarat());
	   Thread.sleep(5000);
	   mouseHoverAction(h.getType());
	   toClick(h.getType());
	   mouseHoverAction(h.getHome());
	   toClick(h.getHome());
	   toClickJavascript(h.getUse());
}

@Then("user has to navigate to payment page of amazon")
public void userHasToNavigateToPaymentPageOfAmazon() throws IOException, InterruptedException  {
	 HomePojo h = new HomePojo(); 
	 Thread.sleep(5000);
	 scrollUp(h.getAtm());
	 toClick(h.getAtm());

	screenshot("payment");

	
	System.out.println("verified");
}
	}


