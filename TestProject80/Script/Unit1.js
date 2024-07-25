function Script()
{
  //Launches the specified browser and opens the specified URL in it.
  Browsers.Item(btChrome).Run("https://smartbear.com/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkResources' link.
  Aliases.browser.pageSoftwareTestingMonitoringDev.form.headerPLtHeader.textnodeResources.linkResources.Click();
  //Clicks the 'textnodeDocs' control.
  Aliases.browser.pageSoftwareTestingMonitoringDev.form.headerPLtHeader.linkDocs.textnodeDocs.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageSoftwareTestingMonitoringDev2.Wait();
  //Clicks the 'textnodeTestcomplete' control.
  Aliases.browser.pageSoftwareTestingMonitoringDev2.textnodeTestcomplete.Click();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btChrome).Navigate("https://support.smartbear.com/testcomplete/docs/");
  //Maximizes the specified Window object.
  Aliases.browser.BrowserWindow.Maximize();
  //Clicks the 'linkWhatSNewInVer1564' link.
  Aliases.browser.pageTestcomplete15DocumentationT.linkWhatSNewInVer1564.Click();
  //Waits until the browser loads the page and is ready to accept user input.
  Aliases.browser.pageTestcomplete15DocumentationT2.Wait();
  //Clicks the 'textnodeTestcomplete1564' control.
  Aliases.browser.pageTestcomplete15DocumentationT2.textnodeTestcomplete1564.Click();
}