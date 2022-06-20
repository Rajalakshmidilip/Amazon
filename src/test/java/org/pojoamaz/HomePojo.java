package org.pojoamaz;

import org.base.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePojo extends BaseClass{
	
	public HomePojo() {

		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="(//a[@class='nav-a  '])[2]")
	private WebElement mobile;
	
	@FindBy(xpath="//span[text()='Apple']")
	private WebElement apple;
	
	@FindBy(xpath="//span[text()='Apple iPhone 12 (128GB) - Blue']")
	private WebElement selectiphone;

	@FindBy(xpath="(//span[text()='₹59,999.00'])[4]")
	private WebElement price;
	
	@FindBy(xpath="(//input[@class='a-button-input'])[17]")
	private WebElement colour;
	
	@FindBy(xpath="(//input[@class='a-button-input'])[24]")
	private WebElement size;
	
	
	@FindBy(xpath="//span[@id='submit.buy-now-announce']")
	private WebElement buynow;


	@FindBy(xpath="(//input[@class='a-button-input'])[17]")
	private WebElement scroll;

	
	@FindBy(xpath="//input[@type='email']")
	private WebElement email;
	@FindBy(xpath="//span[@id='continue-announce']")
	private WebElement continue1;

	@FindBy(xpath="//input[@class='a-input-text a-span12 auth-autofocus auth-required-field']")
	private WebElement pass;
	
	@FindBy(xpath="//span[@id='auth-signin-button-announce']")
	private WebElement signin;
	
	@FindBy(xpath="(//input[@type='text'])[1]")
	private WebElement name;
	@FindBy(xpath="(//input[@type='text'])[2]")
	private WebElement mob;
	@FindBy(xpath="(//input[@type='text'])[3]")
	private WebElement pin;
	@FindBy(xpath="(//input[@type='text'])[4]")
	private WebElement addres;
	@FindBy(xpath="(//input[@type='text'])[5]")
	private WebElement area;
	@FindBy(xpath="(//input[@type='text'])[6]")
	private WebElement land;
	@FindBy(xpath="(//input[@type='text'])[7]")
	private WebElement town;
	@FindBy(xpath="//span[text()='Choose a state']")
	private WebElement state;
	@FindBy(xpath="//a[text()='TAMIL NADU']")
	private WebElement gujarat;
	@FindBy(xpath="( //span[@class='a-dropdown-prompt'] )[3]")
	private WebElement type;
	@FindBy(xpath="//a[text()=' Office/Commercial (10 AM - 6 PM delivery) ']")
	private WebElement home;
	@FindBy(xpath="//span[text()='Use this address']")
	private WebElement use;
	@FindBy(xpath="//span[text()='Add Debit/Credit/ATM Card']")
	private WebElement atm;
	public WebElement getMobile() {
		return mobile;
	}


	public WebElement getApple() {
		return apple;
	}


	public WebElement getSelectiphone() {
		return selectiphone;
	}


	public WebElement getPrice() {
		return price;
	}


	public WebElement getColour() {
		return colour;
	}
	public WebElement getScroll() {
		return scroll;
	}




	public WebElement getSize() {
		return size;
	}


	public WebElement getBuynow() {
		return buynow;
	}
	
	public WebElement getEmail() {
		return email;
	}




	public WebElement getContinue1() {
		return continue1;
	}


	public WebElement getPass() {
		return pass;
	
}

	public WebElement getSignin() {
		return signin;
	
}
	public WebElement getName() {
		return name;
	
}
	public WebElement getMob() {
		return mob;
	
}
	public WebElement getPin() {
		return pin;
	
}
	public WebElement getAddres() {
		return addres;
	
}
	public WebElement getArea() {
		return area;
	
}
	public WebElement getLand() {
		return land;
	
}
	public WebElement getTown() {
		return town;
	
}
	public WebElement getState() {
		return state;
	
}
	public WebElement getGujarat() {
		return gujarat;
	
}
	public WebElement getType() {
		return type;
	
}
	public WebElement getHome() {
		return home;
	
}
	public WebElement getUse() {
		return use;
	
}
	public WebElement getAtm() {
		return atm;
	
}
}