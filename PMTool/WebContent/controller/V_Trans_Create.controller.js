sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/ui/core/ValueState",
	'sap/m/MessageBox'
], function(Controller, History, MessageToast, ValueState, MessageBox) {
	"use strict";
	var oDevType;
	return Controller.extend("PMTool.controller.V_Trans_Create", {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.ypy
		 * @memberOf PMTool.view.V_Trans_Create
		 */
			onInit: function() {
	          	 var oView = this.getView();
	          	 oView.addEventDelegate({
				onBeforeShow: function(oEvent) {
			    oView.byId("vTeam").setValue("");
		        oView.byId("vcreateProjectId").setValue("");
			    oView.byId("idTicketNumber").setValue("");
			    oView.byId("idSpecificationName").setValue("");
			    oView.byId("idSequenceNumber").setValue("");
			    oView.byId("idCountry").setValue("");
			    oView.byId("idTransportRequest").setValue("");
		        oView.byId("idPreviousRequest").setValue("");
		        oView.byId("vdev").setValue("");
		         oView.byId("idOwner").setValue("");
			oView.byId("idComments").setValue("");
				}

	}, oView);	
	
	            var oModel = new sap.ui.model.json.JSONModel();
	          		// var oTable = oView.byId("Trans_Table");
                oModel.loadData("model/Data.json","",false);
                this.getView().setModel(oModel, "jData");
			},
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf PMTool.view.V_Trans_Create
		 */
			// onBeforeRendering: function() {
					
			// },
		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf PMTool.view.V_Trans_Create
		 */
			// onAfterRendering: function() {
		        
			// },
		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf PMTool.view.V_Trans_Create
		 */
		//	onExit: function() {
		//
		//	}
		handleDevTyp: function(evt)
		{
			oDevType = evt.getParameter("selectedItem").getKey();
			
		},
		fSaveTrans: function() {
			/*create operation*/
			var iError = 0;
//			var dialog = new sap.m.BusyDialog({ text:'Processing'});
//			dialog.open();
			var oModel = this.getView().getModel();
			var oEntry = {};			 
			var oTeam = this.getView().byId("vTeam").getSelectedItem();			
			 if( oTeam === null ){ 
					this.getView().byId("vTeam").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("vTeam").setTooltip("Pls select valid Team");
					iError++;
				}
				else{
						this.getView().byId("vTeam").setValueState(sap.ui.core.ValueState.None);
						this.getView().byId("vTeam").destroyTooltip();
				}
			

			var oZprojId1 = this.getView().byId("vcreateProjectId").getSelectedItem();			
			 if( oZprojId1 === null || oZprojId1 < 1 ){ 
					this.getView().byId("vcreateProjectId").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("vcreateProjectId").setTooltip("Pls select valid Project");
					iError++;
				}
				else{
						this.getView().byId("vcreateProjectId").setValueState(sap.ui.core.ValueState.None);
						this.getView().byId("vcreateProjectId").destroyTooltip();
				}
			 
			 var oLand1 = this.getView().byId("idCountry").getValue();
			 if( oLand1 === null || oLand1 === "" ){ 
					this.getView().byId("idCountry").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("idCountry").setTooltip("Pls enter valid Country");
					iError++;
				}
				else{
						this.getView().byId("idCountry").setValueState(sap.ui.core.ValueState.None);
						this.getView().byId("idCountry").destroyTooltip();
				}
			 
			 var oTicket = this.getView().byId("idTicketNumber").getValue();
				if( oTicket === null || oTicket === "" ){ 
					this.getView().byId("idTicketNumber").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("idTicketNumber").setTooltip("Pls enter valid Ticket Number");
					iError++;
				}
				else{
						this.getView().byId("idTicketNumber").setValueState(sap.ui.core.ValueState.None);
						this.getView().byId("idTicketNumber").destroyTooltip();
				}
				
				var oSeqnr = this.getView().byId("idSequenceNumber").getValue();
				if( oSeqnr === null || oSeqnr === "" || oSeqnr < 1 ){ 
					this.getView().byId("idSequenceNumber").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("idSequenceNumber").setTooltip("Pls enter valid Sequence Number");
					iError++;
				}
				else{
						this.getView().byId("idSequenceNumber").setValueState(sap.ui.core.ValueState.None);
						this.getView().byId("idSequenceNumber").destroyTooltip();
				}								
				
				var oTrkorr = this.getView().byId("idTransportRequest").getValue();
				if( oTrkorr === null || oTrkorr === "" ){ 
					this.getView().byId("idTransportRequest").setValueState(sap.ui.core.ValueState.Error);
					this.getView().byId("idTransportRequest").setTooltip("Pls enter valid Transport Request");
					iError++;
				}
				else{
						this.getView().byId("idTransportRequest").setValueState(sap.ui.core.ValueState.None);
						this.getView().byId("idTransportRequest").destroyTooltip();
				}				
				
				
			 	if (iError > 0){ 
					return;
				}
									 
//             var oKeyDev = oDevtype.getKey();
//		 	oEntry.Devtype = oKeyDev;
			// /oEntry.Devtype = oDevType;			
			// oEntry.Erdat = "2017-08-25T00:00:00";
			// oEntry.Ertime = "";			
			// oEntry.Chdat = "2017-09-25T00:00:00";
			// oEntry.Chtim = "PT10H10M10S";
		 	
		 	oEntry.Objnr = "4";
		 	
		 	var oKeyteam = oTeam.getKey();
			oEntry.Team = oKeyteam;
			
		 	var oKey = oZprojId1.getKey();
			oEntry.Project = oKey;										
			
		 	oEntry.Ticket = this.getView().byId("idTicketNumber").getValue();			
			
			oEntry.Folder = this.getView().byId("idSpecificationName").getValue();
			
			oEntry.Seqnr = this.getView().byId("idSequenceNumber").getValue();		
			
			oEntry.Land1 = this.getView().byId("idCountry").getValue();						
			
			oEntry.Trkorr = this.getView().byId("idTransportRequest").getValue();						
			
			 oEntry.TrkorrPrev = this.getView().byId("idPreviousRequest").getValue();
			 
			 
			 var oDevtype = this.getView().byId("vdev").getSelectedItem();
			 var oKeyDev = oDevtype.getKey();
			 oEntry.Devtype = oKeyDev;
		 	
			 var oAs4user = this.getView().byId("idOwner").getSelectedItem();
			 var oKeyUser = oAs4user.getText();
			 oEntry.As4user = oKeyUser;			 
			
			 oEntry.Comments = this.getView().byId("idComments").getValue();
			 
				var self = this;
			oModel.create("/TransTrackerSet", oEntry, {
				method: "POST",
				success: function(data) {					
					MessageBox.success("A record has been created",{
						onClose:function(oAction){
							self.f_GotoTransTracker(); }
								
					});
//					var oHistory = History.getInstance();
//			var sPreviousHash = oHistory.getPreviousHash();
//			// Go one screen back if you find a Hash
//			if (sPreviousHash !== undefined) {
//				window.history.go(-1);
//			} // If you do not find a correct Hash, go to the Source screen using default router;
//			else {
//				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
//				oRouter.navTo("", true);
//			}
				},
				error: function(e) {
//					dialog.close();
					MessageBox.error("Error while creating the record");
				}
			});
		},
		/**
		 *@memberOf PMTool.controller.V_Trans_Create
		 */
		f_GotoTransTracker: function() {
			this.getView().byId("vTeam").setValueState(sap.ui.core.ValueState.None);
			this.getView().byId("vTeam").destroyTooltip();
			this.getView().byId("vcreateProjectId").setValueState(sap.ui.core.ValueState.None);
			this.getView().byId("vcreateProjectId").destroyTooltip();
			this.getView().byId("idCountry").setValueState(sap.ui.core.ValueState.None);
			this.getView().byId("idCountry").destroyTooltip();
			this.getView().byId("idTicketNumber").setValueState(sap.ui.core.ValueState.None);
			this.getView().byId("idTicketNumber").destroyTooltip();
			this.getView().byId("idSequenceNumber").setValueState(sap.ui.core.ValueState.None);
			this.getView().byId("idSequenceNumber").destroyTooltip();
			this.getView().byId("idTransportRequest").setValueState(sap.ui.core.ValueState.None);
			this.getView().byId("idTransportRequest").destroyTooltip();
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
		 *@memberOf PMTool.controller.V_Trans_Create
		 */
		fTransTeamF4: function() {
			//This code was generated by the layout editor.
			var oValueHelpDialog = new sap.ui.ux3.ToolPopup({
                        modal: true,
                        inverted: false,                          // disable color inversion
                        title: "Select Team",
                        opener:  "idTeamInput",             // locate dialog next to this field
                        closed: function (oEvent) {
                    }
          });
		}
	});
});
