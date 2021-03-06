/********************************************************
*														*
* 	dj.js example using Yelp Kaggle Test Dataset		*
* 	Eamonn O'Loughlin 9th May 2013 						*
*														*
********************************************************/

/********************************************************
*														*
* 	Step0: Load data from json file						*
*														*
********************************************************/
d3.json("data/yelp_test_set_business.json", function (yelp_data) {
	
/********************************************************
*														*
* 	Step1: Create the dc.js chart objects & ling to div	*
*														*
********************************************************/
var bubbleChart = dc.bubbleChart("#dc-bubble-graph");
var pieChart = dc.pieChart("#dc-pie-graph");
var volumeChart = dc.barChart("#dc-volume-chart");
var lineChart = dc.lineChart("#dc-line-chart");
var dataTable = dc.dataTable("#dc-table-graph");
var rowChart = dc.rowChart("#dc-row-graph");

/********************************************************
*														*
* 	Step2:	Run data through crossfilter				*
*														*
********************************************************/

/********************************************************
*														*
* 	Step3: 	Create Dimension that we'll need			*
*														*
********************************************************/

/********************************************************
*														*
* 	Step4: Create the Visualisations					*
*														*
********************************************************/
	
/********************************************************
*														*
* 	Step6: 	Render the Charts							*
*														*
********************************************************/
			
	dc.renderAll();
});
