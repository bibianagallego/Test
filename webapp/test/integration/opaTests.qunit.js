/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"perce/Sales_Order/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});