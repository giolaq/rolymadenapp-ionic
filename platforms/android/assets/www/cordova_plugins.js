cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.ionic.keyboard/www/keyboard.js",
        "id": "com.ionic.keyboard.keyboard",
        "clobbers": [
            "cordova.plugins.Keyboard"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device/www/device.js",
        "id": "org.apache.cordova.device.device",
        "clobbers": [
            "device"
        ]
    },
    {
        "file": "plugins/com.danielcwilson.plugins.googleanalytics/www/analytics.js",
        "id": "com.danielcwilson.plugins.googleanalytics.UniversalAnalytics",
        "clobbers": [
            "analytics"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.ionic.keyboard": "1.0.2",
    "org.apache.cordova.console": "0.2.9",
    "org.apache.cordova.device": "0.2.10",
    "com.danielcwilson.plugins.googleanalytics": "0.6.0"
}
// BOTTOM OF METADATA
});