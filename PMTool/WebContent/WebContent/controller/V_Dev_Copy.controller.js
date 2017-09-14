sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, History, MessageToast) {
	"use strict";

	return Controller.extend("PMTool.controller.V_Dev_Copy", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf PMTool.view.V_Dev_Copy
		 */
			onInit: function() {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.getRoute("Route_Dev_Copy").attachPatternMatched(this._onObjectMatched, this);
        // oRouter.attachRouteMatched(function(oEvent) {
            // var team = oEvent.getParameter("arguments").team;
        },
        
        _onObjectMatched: function (oEvent) {
        	
				 var Developer   = oEvent.getParameter("arguments").Developer;
				 var Name        = oEvent.getParameter("arguments").Name;
				 var Active      = oEvent.getParameter("arguments").Active;
				 //var Startdate   = oEvent.getParameter("arguments").Startdate;
				 //var Enddate     = oEvent.getParameter("arguments").Enddate;
				 
				 this.getView().byId("idDeveloper").setValue(Developer);
				 this.getView().byId("idName").setValue(Name);
				// this.getView().byId("idDevCActive").setValue(Active);
				 this.getView().byId("idDevCActive").setSelected(Active);
				 //this.getView().byId("idProjStart").setValue(Startdate);
				 //this.getView().byId("idProjEnd").setValue(Enddate);
		
        },
		 //* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 //* This hook is the same one that SAPUI5 controls get after being rendered.
		 //* @memberOf PMTool.view.V_Dev_Copy
		 //*/
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf PMTool.view.V_Dev_Copy
		 */
		//	onExit: function() {
		//
		//	}
	f_GotoProj: function() {
			//This code was generated by the layout editor.
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			// Go one screen back if you find a Hash
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} // If you do not find a correct Hash, go to the Source screen using default router;
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}
		},
           fSaveDev: function() {
            var dialog = new sap.m.BusyDialog({ text:'Processing...'});
            dialog.open();
			/*create operation*/
			var oModel = this.getView().getModel();
			var oEntry = {};
			oEntry.Zdeveloper = this.getView().byId("idDeveloper").getValue();
			if(oEntry.Zdeveloper === "")
             {
             dialog.close();	
              MessageToast.show("Please enter Developer ID");
             }
             else
             {
			oEntry.ZdeveloperName = this.getView().byId("idName").getValue();
			var chk = this.getView().byId("idDevCActive").getSelected();
		    if (chk === false)
             {
             //oEntry.Zactive = this.getView().byId("idDevActive").getValue();
             oEntry.Zactive = '';
             }
              else 
             {
             //oEntry.Zactive = this.getView().byId("idDevActive").getValue();
             oEntry.Zactive = "X";
             }
             
			oModel.create("/DevMasterSet", oEntry, {
				method: "POST",
				success: function(data) {
					dialog.close();
					MessageToast.show("Record has been saved");
					var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			// Go one screen back if you find a Hash
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} // If you do not find a correct Hash, go to the Source screen using default router;
			else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("", true);
			}
					
				},
					error: function(e) {
					dialog.close();
                    MessageToast.show("Entry already exist");
                    }
				});
             }
		}		

	});

});