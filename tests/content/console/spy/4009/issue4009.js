function runTest()
{
    FBTest.sysout("issue4009.START");

    FBTest.setPref("showXMLHttpRequests", true);
    FBTest.openNewTab(basePath + "console/spy/4009/issue4009.html", function(win)
    {
        FBTest.openFirebug();
        FBTest.selectPanel("net");

        FBTest.enableConsolePanel(function(win)
        {
            var options = {
                tagName: "div",
                classes: "logRow logRow-spy loaded",
                counter: 4
            };

            FBTest.waitForDisplayedElement("console", options, function(row)
            {
                var console = FBTest.getPanel("console");
                var rows = console.panelNode.querySelectorAll(".logRow.logRow-spy.loaded");
                FBTest.compare(4, rows.length, "There must be 4 entries in the Console panel");

                FBTest.testDone("issue4009.DONE");
            });

            FBTest.click(win.document.getElementById("testButton"));
        });
    });
}
