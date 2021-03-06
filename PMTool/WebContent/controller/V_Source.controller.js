sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("ZNav.controller.V_Source", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZNav.view.V_Source
		 */
		//	onInit: function() {
		//
		//	},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZNav.view.V_Source
		 */
		//	onBeforeRendering: function() {
		//
		//	},
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZNav.view.V_Source
		 */
		//	onAfterRendering: function() {
		//
		//	},
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZNav.view.V_Source
		 */
		//	onExit: function() {
		//
		//	}
		/**
		 *@memberOf ZNav.controller.V_Source
		 */
		GoToTarget_1: function() {
			// Now Get the Router Info
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
 
			// Tell the Router to Navigate To Route_Tar_1
			oRouter.navTo("Route_Tar_1", {});
		}
		/**
		 *@memberOf ZNav.controller.V_Source
		 */

	});
});