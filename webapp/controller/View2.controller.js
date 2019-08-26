sap.ui.define([
	"sap/ui/core/mvc/Controller", 
	"sap/ui/core/routing/History"

], function (Controller, History) {
	"use strict";

	return Controller.extend("testing.exp.controller.View2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf testing.exp.view.View2
		 */
		onInit: function () {






		},
		onNavBack: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("TargetView1", true);
			
			return; 
				this.getOwnerComponent().getRouter().getTargets().display("TargetView1", {
			});
			return; 
			
			this.getOwnerComponent().getRouter().navTo("TargetView1", { }, true); //duplicated ID? 
			//history.go(-1);
			return;
			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				// The history contains a previous entry
				history.go(-1);
			} else {
				// Otherwise we go backwards with a forward history
				var bReplace = true;
				//this.getRouter().navTo("master", {}, bReplace);
				this.getOwnerComponent().getRouter().navTo("TargetView1", { }, bReplace);
			}
		}
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf testing.exp.view.View2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf testing.exp.view.View2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf testing.exp.view.View2
		 */
		//	onExit: function() {
		//
		//	}

	});

});