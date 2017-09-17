sap.ui.define([
 	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function(Controller,History) {
	"use strict";

	return Controller.extend("ZNav.controller.V_Dev_Maintainview", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf ZNav.view.V_Dev_Maintainview
		 */
		//	onInit: function() {
		//
		//	},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf ZNav.view.V_Dev_Maintainview
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf ZNav.view.V_Dev_Maintainview
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf ZNav.view.V_Dev_Maintainview
		 */
		//	onExit: function() {
		//
		//	}
		
		fGoto_Target1: function (Evt) {
			//This code was generated by the layout editor.
			//This code was generated by the layout editor.
            var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			// Go one screen back if you find a Hash
         if (sPreviousHash !== undefined) {
				window.history.go(-1);
			}	// If you do not find a correct Hash, go to the Source screen using default router;
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}
		},

       fGoTodevCreate: function () {
			//This code was generated by the layout editor.
         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Tell the Router to Navigate To Route_Tar_1
        oRouter.navTo("Route_Dev_Create", {});
		},
		/**
	*@memberOf ZNav.controller.V_Trans_Maintain
	*/
        fGoTodevSelection: function () {
//This code was generated by the layout editor.
         var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Tell the Router to Navigate To Route_Tar_1
          oRouter.navTo("Route_Dev_Display", {});
		}
	});
});