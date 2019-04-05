/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"testing/exp/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});