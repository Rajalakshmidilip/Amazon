package org.run;


import org.base.JvmReport;
import org.junit.AfterClass;
import org.junit.runner.RunWith;


import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features = "@src\\test\\resources\\FeatureFiles\\Rerun\\login.txt" ,glue="org.step",snippets=SnippetType.CAMELCASE,monochrome=true,
dryRun=false,plugin= {"html:target\\reports","json:target\\reports\\fb.json",
		"junit:target\\reports\\login.xml","rerun:src\\test\\resources\\FeatureFiles\\Rerun\\login.txt"})

public class TestReRunner {
	@AfterClass
	public static void generateReport() {
	JvmReport.generateJvmReport(System.getProperty("user.dir")+ "\\target\\reports\\fb.json");
	}
}
