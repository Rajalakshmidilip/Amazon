package org.run;

import java.io.IOException;

import org.base.BaseClass;
import org.base.JvmReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.Scenario;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources" ,glue="org.step",snippets=SnippetType.CAMELCASE,
monochrome=true,dryRun=false,plugin= {"html:target\\reports","json:target\\reports\\fb.json","junit:target\\reports\\login.xml"})
public class TestRunner  {
	
	
	@AfterClass
	public static void generateReport() {
	JvmReport.generateJvmReport(System.getProperty("user.dir")+ "\\target\\reports\\fb.json");

		}
		
	
}
	

