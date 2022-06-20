package org.base;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void generateJvmReport(String jsonpath) {
		File f = new File(System.getProperty("user.dir") + "\\target\\jvmReport");
		Configuration con = new Configuration(f, "Amazon");
		con.addClassifications("platform", "win 10");
		con.addClassifications("Browser name", "chrome");
		con.addClassifications("Browser version", "99.45");
		con.addClassifications("Sprint no", "2");
		List<String> li = new ArrayList<String>();
		li.add(jsonpath);
		ReportBuilder r = new ReportBuilder(li, con);
		r.generateReports();
	}
}
