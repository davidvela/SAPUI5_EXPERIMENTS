sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "sap/suite/ui/commons/util/DateUtils", "sap/m/MessageToast"],
	function (Controller, JSONModel, DateUtils, MessageToast) {
		"use strict";

		function getBasePath() {
			return jQuery.sap.getModulePath("sap.suite.ui.commons.sample.Timeline", "");
		}

		function convertData(oEvent) {
			var oData,
				oModel = oEvent.getSource(),
				sBasePath = getBasePath();

			if (!oEvent.getParameters().success) {
				return;
			}

			oData = oModel.getData();
			oData.Employees.forEach(function (oEmployee) {
				oEmployee.HireDate = DateUtils.parseDate(oEmployee.HireDate);
				oEmployee.Photo = sBasePath + oEmployee.Photo;
			});
			oModel.updateBindings(true);
		}

		return Controller.extend("testing.exp.controller.View1", {
			onInit: function () {
				// https://sapui5.hana.ondemand.com/#/sample/sap.suite.ui.commons.sample.Timeline/preview
				var oModel = new JSONModel(jQuery.sap.getModulePath("testing.exp.model", "/data.json"));
				oModel.attachRequestCompleted(convertData);
				this.getView().setModel(oModel);
				this._timeline = this.byId("idTimeline");

				this.getView().attachEvent("afterRendering", function () {
					// in production you would probably want to use something like ScrollContainer
					// but for demo purpose we want to keep it simple
					// sctretch:true on container prevents scrolling by default
					jQuery("section").css("overflow", "auto");
				});
			},

			// Hello world 
			onShowHello: function () {
				MessageToast.show("Hello World");
			},

			// timeline fucntions: 
			enableScrollSelected: function (oEvent) {
				var bSelected = oEvent.getParameter("selected");
				this._timeline.setEnableScroll(bSelected);
			},
			textHeightChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key");
				this._timeline.setTextHeight(sKey);
			},
			groupByChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key");
				this._timeline.setGroupByType(sKey);
			},
			alignmentChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key");
				if (sKey === "DoubleSided") {
					this._timeline.setEnableDoubleSided(true);
				} else {
					this._timeline.setEnableDoubleSided(false);
					this._timeline.setAlignment(sKey);
				}
			},
			orientationChanged: function (oEvent) {
				var sKey = oEvent.getParameter("selectedItem").getProperty("key"),
					itemA = sKey === "Horizontal" ? "Top" : "Left",
					itemB = sKey === "Horizontal" ? "Bottom" : "Right",
					oFirstItem = this.byId("idAlignmentFirst"),
					oSecondItem = this.byId("idAlignmentSecond");

				oFirstItem.setText(itemA);
				oFirstItem.setKey(itemA);

				oSecondItem.setText(itemB);
				oSecondItem.setKey(itemB);

				this._timeline.setAxisOrientation(sKey);
			}

		});
	});