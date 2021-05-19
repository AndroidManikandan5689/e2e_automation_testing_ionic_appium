"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var tsNode = require("ts-node");
const {join} = require('path')
var serverAddress = 'http://localhost:4723/wd/hub';
var testFilePAtterns = [
    '**/*/*.e2e-spec.ts'
];
var iPhoneXCapability = {
    browserName: '',
    autoWebview: true,
    autoWebviewTimeout: 20000,
    app: '/Users/dsbr/ordina/e2e/superApp/platforms/ios/build/emulator/AppiumTestCase.app',
    version: '11.4',
    platform: 'iOS',
    deviceName: 'iPhone X',
    platformName: 'iOS',
    name: 'My First Mobile Test',
    automationName: 'XCUITest'
};
var androidPixel2XLCapability = {
    browserName: '',
    autoWebview: true,
    autoWebviewTimeout: 20000,
    platformName: 'Android',
    deviceName: 'any',
    app: join(process.cwd(), './platforms/android/app/build/outputs/apk/debug/app-debug.apk'),
    appPackage: 'com.ionicframework.conferenceapp',
    appActivity: 'MainActivity',
    nativeWebTap: 'true',
    autoAcceptAlerts: 'true',
    autoGrantPermissions: 'true',
    newCommandTimeout: 300000
};
exports.config = {
    allScriptsTimeout: 11000,
    specs: testFilePAtterns,
    baseUrl: '',
    multiCapabilities: [
        androidPixel2XLCapability
    ],
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    seleniumAddress: serverAddress,
    onPrepare: function () {
        tsNode.register({
            project: 'e2e/tsconfig.json'
        });
    }
};
//# sourceMappingURL=protractor.config.js.map