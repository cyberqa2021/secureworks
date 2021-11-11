const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: './cucumber.json',
    output: 'test/report/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launchReport: true,
    name:'Secureworks Assignment',
    brandTitle:'Secureworks Test Assignment',
    metadata: {
        "App Version":"0.1.0",
        "Test Environment": "QA",
        "Browser": "Chrome  54.0.2840.98",
        "Platform": "MacBookPro",
        "Parallel": "Scenarios",
        "Executed": "Remote"
    }
};

reporter.generate(options);
    