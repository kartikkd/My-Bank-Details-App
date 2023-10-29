sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.mybankdetails.controller.App", {
            onInit: function () {

                let oModel = this.getOwnerComponent().getModel("oBankDetails");
                this.getView().setModel(oModel);


                // let oProfileModel=new sap.ui.model.json.JSONModel(
                // {profile: sap.ui.require.toUrl("com/sap/mybankdetails/images/download.jpg")});
                // this.getView().setModel(oProfileModel);



                // let oModel=new sap.ui.model.json.JSONModel(); 
                // oModel.setData(oData);
                // this.getView().setModel(oModel,"oBankDetails");

            },
            onOpenBankDetails: function () {
                //create dialog lazily
                if (!this.moreBankDetails) {
                    this.moreBankDetails = this.loadFragment(
                        { name: "com.sap.mybankdetails.view.fragments.MoreDetails" }
                    )
                }
                this.moreBankDetails.then(
                    function (oDialog) {
                        oDialog.open();
                    })
            },
            onCloseBankDetails: function () {
                this.byId("moreBankDetials").close();
            },

            /**
            * Creates a message for a selection change event on the chart
            */
            onSelectionChanged: function (oEvent) {
                var oSegment = oEvent.getParameter("segment");
                sap.m.MessageToast.show(oSegment.getLabel() + " : " + 
                ((oSegment.getValue()>50) ? "Critical" : "Moderate"));
            }
        });
    });
