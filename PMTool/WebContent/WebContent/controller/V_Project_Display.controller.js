sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(Controller, History, MessageToast) {
	"use strict";
	var oObjnr;
	var sMsg;
	var oCancelTable;
	var aIndex;

	return Controller.extend("PMTool.controller.V_Project_Display", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf PMTool.view.V_Project_Display
		 */
		onInit: function() {
			this.oTable = this.getView().byId("Proj_Table");
			this.oModel = this.getView().getModel();
			this.rebindTable();
			},
			
			rebindTable: function(){
			var dialog = new sap.m.BusyDialog({
            text:'Processing'});
            dialog.open();
	
			this.oTable.bindRows({
			path: "/ProjMasterSet",
			Key: ["ZprojId"]
			});
			dialog.close();
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf PMTool.view.V_Project_Display
		 */
		 onBeforeRendering: function() {
         this.oModel = this.getView().getModel();
         var dialog = new sap.m.BusyDialog({
         text:'Processing'});
         this.oModel.attachRequestSent(function(){ 
// sap.ui.core.BusyIndicator.show(10);
         dialog.open(); });
         this.oModel.attachRequestCompleted(function(){ 
// sap.ui.core.BusyIndicator.hide();
         dialog.close();
         });
         this.oModel.attachRequestFailed(function () {
         dialog.close();
                             });
// var oModel1 = this.getView().getModel();
      },
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf PMTool.view.V_Trans
*/
         onAfterRendering: function() {
// var oModel = this.getView().getModel();
// var oModel1 = this.getView().getModel();
// // oModel.refresh();
         this.oModel = this.getView().getModel();
         var dialog = new sap.m.BusyDialog({
         text:'Processing' });
         this.oModel.attachRequestSent(function(){ 
// sap.ui.core.BusyIndicator.show(10);
         dialog.open(); });
         this.oModel.attachRequestCompleted(function(){ 
// sap.ui.core.BusyIndicator.hide();
         dialog.close();
         });
         this.oModel.attachRequestFailed(function () {
         dialog.close(); });
         },

		onExit: function() {
	            	this.aProjMasterSet = [];
			},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf PMTool.view.V_Project_Display
		 */
		fGoToProj_1: function() {
			//This code was generated by the layout editor.
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

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf PMTool.view.V_Project_Display
		 */
		fGoToProjCopy: function() {
			//This code was generated by the layout editor.
		    var oTable = this.getView().byId("Proj_Table");
			var aIndex = oTable.getSelectedIndex();
			if (aIndex < 0) {
             MessageToast.show("Please select one record");
            }
            else {

			var selectedRow = oTable.getRows()[aIndex];
			var path = selectedRow.getBindingContext().getPath();
        	var obj = oTable.getModel().getProperty(path);
        	
        	 //jQuery.sap.require("sap.ui.core.format.DateFormat");
          //  var oDateFormat = sap.ui.core.format.DateFormat.getDateInstance({
          //    pattern : "yyyy-MM-dd"
          //    });
            // var subFromDate = oDateFormat.format(new Date(obj.ZprStdate));
            // var subToDate = oDateFormat.format(new Date(obj.ZprEndate));
            // obj.ZprStdate = subFromDate;
            // obj.ZprEndate = subToDate;
			
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			// Tell the Router to Navigate To Route_Tar_1
		   obj.ZprStdate = "";
		   obj.ZprEndate = "";
		   
				if ( obj.ZprDesc == "" )
			{
				obj.ZprDesc = " ";
			}
				if ( obj.ZprStdate == "" )
			{
				obj.ZprStdate = " ";
			}
				if ( obj.ZprEndate == "" )
			{
				obj.ZprEndate = " ";
			}
		
oRouter.navTo("Route_Project_Copy", {
				Project: obj.ZprojId,
				Description: obj.ZprDesc,
				Startdate: obj.ZprStdate,
				Enddate: obj.ZprEndate
							});	
            }
		},		

	fChangeProj: function() {
		    var dialog = new sap.m.BusyDialog({ text:'Processing...'});
            dialog.open();

	        var oTable = this.getView().byId("Proj_Table");
			var oModel = oTable.getModel();
			this.aProjMasterSet = jQuery.extend(true, [], oModel.getProperty("/ProjMasterSet"));
		    this.getView().byId("idProjChange").setVisible(false);
			this.getView().byId("idProjSave").setVisible(true);
			this.getView().byId("idProjCancel").setVisible(true);
			 aIndex = oTable.getSelectedIndex();
			sMsg = oTable.getContextByIndex(aIndex);
			var selectedRow = oTable.getRows()[aIndex];
			for (var i = 1; i < 4; i++) {
				selectedRow.getCells()[i].setProperty("editable", true);
			}
				this.rebindTable();
				dialog.close();
			
		},
		
			fCancelFromProj: function () {
			// var oPage = this.getView().byId("trans_page");
			// oPage.setShowFooter(false);
			
		//	this.getView().byId("idCopy").setVisible(true);
			this.getView().byId("idProjChange").setVisible(true);
			// this.getView().byId("idProjDelete").setVisible(true);
			this.getView().byId("idProjSave").setVisible(false);
			this.getView().byId("idProjCancel").setVisible(false);
			// var oModel = this.getView().getModel();
			// oModel.resetChanges(["/TransTrackerSet('1')"]);
			var oTable = this.getView().byId("Proj_Table");
			var oModel = oTable.getModel();
			oModel.setProperty("/ProjMasterSet", this.aProjMasterSet);
			this.rebindTable();
			var selectedRow = oTable.getRows()[aIndex];
			for (var i = 1; i < 4; i++) {
				selectedRow.getCells()[i].setProperty("editable", false);
			}
			},
		
		
	fSaveChangeProj: function () {
		    var dialog = new sap.m.BusyDialog({ text:'Processing'});
            dialog.open();

			var oTable = this.getView().byId("Proj_Table");
			// var aIndex = oTable.getSelectedIndex();
			var selectedRow = oTable.getRows()[aIndex];
			var path = selectedRow.getBindingContext().getPath();
        	var obj = oTable.getModel().getProperty(path);
			
			var contexts = oTable.getContextByIndex(aIndex);
			var set = contexts.sPath;
				
			/*create operation*/
			var oModel = this.getView().getModel();
			var oEntry = {};
			oEntry.ZprojId   = obj.ZprojId;
            oEntry.ZprDesc   = selectedRow.getCells()[1].getProperty("value");
            oEntry.ZprStdate = selectedRow.getCells()[2].getProperty("value");
            oEntry.ZprEndate = selectedRow.getCells()[3].getProperty("value");
			oModel.update(set, oEntry, {
				method: "PUT",
				success: function(data) {
					dialog.close();
					MessageToast.show("Record has been saved");
				},
				error: function(e) {
					dialog.close();
					MessageToast.show("Error while saving the record");
				}
			});
						for (var i = 1; i < 4; i++) {
				selectedRow.getCells()[i].setProperty("editable", false);
    			this.getView().byId("idProjChange").setVisible(true);
			    this.getView().byId("idProjSave").setVisible(false);
			    this.getView().byId("idProjCancel").setVisible(false);
			}
		},
		/**
		 *@memberOf PMTool.controller.V_Dev_Display
		 */
		fDeleteProjEntry: function()
		{
			
		/*delete operation*/
         var oModel = this.getView().getModel();
         var oTable = this.getView().byId("Proj_Table");
		 aIndex = oTable.getSelectedIndex();
		 var contexts = oTable.getContextByIndex(aIndex);
		 var set = contexts.sPath;
		 oModel.remove(set, {
        method: "DELETE",
       success: function(data) {
            alert("success");
        },
         error: function(e) {
              alert("error");
  }
 });			
		},
		
	});
});