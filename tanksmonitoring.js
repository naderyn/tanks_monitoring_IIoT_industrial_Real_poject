//==========================This is Read Only Code====================

//===Page: login, Plugin: Button 1 , Event: OnClick Event===

// var FactoryName = GetPluginParameterValue('InputText 1', 'Text');
// var password = GetPluginParameterValue('InputText 2', 'Text');

// // Fix the SQL query syntax and add proper quotes around the FactoryName and password variables
// var sql = "SELECT `TimeStamp`, `id`, `FactoryId`, `FactoryName`, `FactoryContactPerson`, `FactoryContactPhone`, `FactoryAddres`, `password` FROM `APPLICATION_211` WHERE `FactoryName` = '" + FactoryName + "' AND `password` = '" + password + "' limit 100";

// ExecuteQueryModified(sql, loginCheck);

// function loginCheck(error, xhr) {
//   //Saving data array into variable
//   if (xhr.response) {
//     var dataArr = JSON.parse(xhr.response);
//   }

//   //Checking if array is empty
//   if (dataArr.length < 1) {
//     alert("Check Id and password again");
//   } else {
//     // Assuming each record in the dataArr contains a 'FactoryName' and 'password' field
//     var userRecord = dataArr[0]; // Assuming there is only one matching record

//     // Define a mapping of username-password pairs to page URLs
//     var pageURLs = {
//       "factory1": "https://beta.masterofthings.com/rte.html?project=404&page=4",
//       "factory2": "https://beta.masterofthings.com/rte.html?project=404&page=5",
//       // Add more username-password pairs and corresponding page URLs as needed
//     };

//     // Check if the entered username-password combination exists in the mapping
//     if (pageURLs.hasOwnProperty(userRecord.FactoryName) && userRecord.password === password) {
//       // Get the corresponding page URL for the username
//       var pageURL = pageURLs[userRecord.FactoryName];

//       // Save the FactoryName to sessionStorage if needed
//       sessionStorage.setItem('FactoryName', FactoryName);

//       // Redirect the user to the specific page URL
//       window.location.replace(pageURL);
//     } else {
//       // Invalid username-password combination
//       alert("Invalid username or password");
//     }
//   }
// }


// Eid Code 

var FactoryName = GetPluginParameterValue('InputText 1', 'Text');
var password = GetPluginParameterValue('InputText 2', 'Text');



var sql = "SELECT `TimeStamp`, `id`, `FactoryId`, `FactoryName`, `FactoryContactPerson`, `FactoryContactPhone`, `FactoryAddres`, `password` FROM `APPLICATION_211` WHERE `FactoryName` = '" + FactoryName + "' AND `password` = '" + password + "' limit 1";

ExecuteQueryModified(sql, loginCheck)


function loginCheck(error, xhr) {

  //Saving data array into variable
  if (xhr.response) {

    dataArr = JSON.parse(xhr.response);

  }

  //Checking if array is empty
  if (dataArr.length < 1) {

    alert("Check UserName and password again")


  } else {

    sessionStorage.setItem('FactoryName', FactoryName)
    sessionStorage.setItem('FactoryId', dataArr[0].FactoryId)

    window.location.replace(window.location.pathname + "?project=404&page=14");

  }


} //End CB function


//*****End Of Event:OnClick Event , Plugin:Button 1*******

//===Page: login, Plugin: Button 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Button 1*******

//===Page: login, Plugin: Button 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Button 1*******

//===Page: login, Plugin: Button 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Button 1*******

//===Page: login, Plugin: Label 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 1*******

//===Page: login, Plugin: Label 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 1*******

//===Page: login, Plugin: Label 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 1*******

//===Page: login, Plugin: Label 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 1*******

//===Page: login, Plugin: Label 2 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 2*******

//===Page: login, Plugin: Label 2 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 2*******

//===Page: login, Plugin: Label 2 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 2*******

//===Page: login, Plugin: Label 2 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 2*******

//===Page: login, Plugin: InputText 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:InputText 1*******

//===Page: login, Plugin: InputText 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:InputText 1*******

//===Page: login, Plugin: InputText 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:InputText 1*******

//===Page: login, Plugin: InputText 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:InputText 1*******

//===Page: login, Plugin: InputText 1 , Event: on change event===

 


//*****End Of Event:on change event , Plugin:InputText 1*******

//===Page: login, Plugin: InputText 1 , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:InputText 1*******

//===Page: login, Plugin: InputText 2 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:InputText 2*******

//===Page: login, Plugin: InputText 2 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:InputText 2*******

//===Page: login, Plugin: InputText 2 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:InputText 2*******

//===Page: login, Plugin: InputText 2 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:InputText 2*******

//===Page: login, Plugin: InputText 2 , Event: on change event===

 


//*****End Of Event:on change event , Plugin:InputText 2*******

//===Page: login, Plugin: InputText 2 , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:InputText 2*******

//===Page: login, Plugin: Label 4 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 4*******

//===Page: login, Plugin: Label 4 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 4*******

//===Page: login, Plugin: Label 4 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 4*******

//===Page: login, Plugin: Label 4 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 4*******

//===Page: login, Plugin: image 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 1*******

//===Page: login, Plugin: image 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 1*******

//===Page: login, Plugin: image 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 1*******

//===Page: login, Plugin: image 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 1*******

//===Page: login, Plugin: Label 4 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 4*******

//===Page: login, Plugin: Label 4 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 4*******

//===Page: login, Plugin: Label 4 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 4*******

//===Page: login, Plugin: Label 4 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 4*******

//===Page: login, Plugin: Shape 1-T16 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1-T16*******

//===Page: login, Plugin: Shape 1-T16 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1-T16*******

//===Page: login, Plugin: Shape 1-T16 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1-T16*******

//===Page: login, Plugin: Shape 1-T16 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1-T16*******

//===Page: login, Plugin: Register , Event: OnClick Event===

  window.location.replace(window.location.pathname + "?project=404&page=10");


//*****End Of Event:OnClick Event , Plugin:Register*******

//===Page: login, Plugin: Register , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Register*******

//===Page: login, Plugin: Register , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Register*******

//===Page: login, Plugin: Register , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Register*******

//===Page: login, Plugin: login , Event: OnClick Event===

  window.location.replace(window.location.pathname + "?project=404&page=1");


//*****End Of Event:OnClick Event , Plugin:login*******

//===Page: login, Plugin: login , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:login*******

//===Page: login, Plugin: login , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:login*******

//===Page: login, Plugin: login , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:login*******

//===Page: login, Plugin: image 2-T16 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 2-T16*******

//===Page: login, Plugin: image 2-T16 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 2-T16*******

//===Page: login, Plugin: image 2-T16 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 2-T16*******

//===Page: login, Plugin: image 2-T16 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 2-T16*******

//===Page: Fctory_1, Plugin: Shape 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1*******

//===Page: Fctory_1, Plugin: Shape 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1*******

//===Page: Fctory_1, Plugin: Shape 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1*******

//===Page: Fctory_1, Plugin: Shape 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1*******

//===Page: Fctory_1, Plugin: Shape 3 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 3*******

//===Page: Fctory_1, Plugin: Shape 3 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 3*******

//===Page: Fctory_1, Plugin: Shape 3 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 3*******

//===Page: Fctory_1, Plugin: Shape 3 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 3*******

//===Page: Fctory_1, Plugin: Shape 2 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 2*******

//===Page: Fctory_1, Plugin: Shape 2 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 2*******

//===Page: Fctory_1, Plugin: Shape 2 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 2*******

//===Page: Fctory_1, Plugin: Shape 2 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 2*******

//===Page: Fctory_1, Plugin: Label 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 1*******

//===Page: Fctory_1, Plugin: Label 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 1*******

//===Page: Fctory_1, Plugin: Label 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 1*******

//===Page: Fctory_1, Plugin: Label 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 1*******

//===Page: Fctory_1, Plugin: Label 2 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 2*******

//===Page: Fctory_1, Plugin: Label 2 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 2*******

//===Page: Fctory_1, Plugin: Label 2 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 2*******

//===Page: Fctory_1, Plugin: Label 2 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 2*******

//===Page: Fctory_1, Plugin: Label 4 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 4*******

//===Page: Fctory_1, Plugin: Label 4 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 4*******

//===Page: Fctory_1, Plugin: Label 4 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 4*******

//===Page: Fctory_1, Plugin: Label 4 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 4*******

//===Page: Fctory_1, Plugin: Label 5 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Label 5*******

//===Page: Fctory_1, Plugin: Label 5 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Label 5*******

//===Page: Fctory_1, Plugin: Label 5 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Label 5*******

//===Page: Fctory_1, Plugin: Label 5 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Label 5*******

//===Page: Fctory_1, Plugin: Link 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 1*******

//===Page: Fctory_1, Plugin: Link 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 1*******

//===Page: Fctory_1, Plugin: Link 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 1*******

//===Page: Fctory_1, Plugin: Link 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 1*******

//===Page: Fctory_1, Plugin: Link 2 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 2*******

//===Page: Fctory_1, Plugin: Link 2 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 2*******

//===Page: Fctory_1, Plugin: Link 2 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 2*******

//===Page: Fctory_1, Plugin: Link 2 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 2*******

//===Page: Tank1_fac1, Plugin: Shape 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1*******

//===Page: Tank1_fac1, Plugin: Shape 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1*******

//===Page: Tank1_fac1, Plugin: Shape 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1*******

//===Page: Tank1_fac1, Plugin: Shape 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1*******

//===Page: Tank1_fac1, Plugin: Timer 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Timer 1*******

//===Page: Tank1_fac1, Plugin: Timer 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Timer 1*******

//===Page: Tank1_fac1, Plugin: Timer 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Timer 1*******

//===Page: Tank1_fac1, Plugin: Timer 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Timer 1*******

//===Page: Tank1_fac1, Plugin: Timer 1 , Event: Timer Tick===

var SensorID = 771;

GetLatestValueOfSensor(SensorID, function(res) {

  res = JSON.parse(res);
  SetPluginParameterValue("LevelLabel", "Caption", "Level=" + Math.round(res.prcentage) + "%");
  DrawPlugin("LevelLabel");
  ChangeLevel(res);


});
//ChangeLevel function to ChangeLevelof Fluid on Tank
// by  checking if capture time is greater than last capture time, then take the Level value.
var ChangeLevel = function ChangeLevel(levelSensor) {
  var Level;
  if (levelSensor.captureTime > captureTime) {
    captureTime = parseFloat(levelSensor.captureTime);
    Level = parseFloat(levelSensor.prcentage);
  }
}
//====================
// Pressure Label
GetLatestValueOfSensor(SensorID, function(res) {
  res = JSON.parse(res);
  SetPluginParameterValue("GaugePress", "Reading value", res.Press);
  DrawPlugin("GaugePress");
  ChangeLevel(res);
});
//ChangePress function to ChangePressof Fluid on Tank
// by  checking if capture time is greater than last capture time, then take the Level value.
var ChangePress = function ChangePress(PressSensor) {
  var Press;
  if (PressSensor.captureTime > captureTime) {
    captureTime = parseFloat(PressSensor.captureTime);
    Press = parseFloat(PressSensor.Press);
  }
}
//====================
// Tempreture Label
GetLatestValueOfSensor(SensorID, function(res) {
  res = JSON.parse(res);
  SetPluginParameterValue("TempLabel", "Caption", "Temprature =" + Math.round(res.Temp));
  DrawPlugin("TempLabel");
  ChangeLevel(res);
});
//ChangeTemp function to ChangeTemp of Fluid on Tank
// by  checking if capture time is greater than last capture time, then take the Level value.
var ChangeTemp = function ChangeTemp(TempSensor) {
  var Temp;
  if (TempSensor.captureTime > captureTime) {
    captureTime = parseFloat(TempSensor.captureTime);
    Temp = parseFloat(PressSensor.Liter);
  }
}

//------------------------------------------------------------------------------------------------

//GetLatestValueOfSensor(29517, function(res) {
//   res = JSON.parse(res);
//   var lux = res.currentLuxValue;
//   if (lux >= 1 && lux < 11) {
//     SetPluginParameterValue('shape 1', 'Color', 'yellow');
//     DrawPlugin('Shape 1');
//   } else if (lux >= 11 && lux < 31) {
//     SetPluginParameterValue('shape 1', 'Color', 'orange');
//     DrawPlugin('shape 1');
//   } else if (lux >= 31) {
//     SetPluginParameterValue('shape 1', 'Color', 'red');
//     DrawPlugin('shape 1');
//   }
// });


//*****End Of Event:Timer Tick , Plugin:Timer 1*******

//===Page: Tank1_fac1, Plugin: LevelShape , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:LevelShape*******

//===Page: Tank1_fac1, Plugin: LevelShape , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:LevelShape*******

//===Page: Tank1_fac1, Plugin: LevelShape , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:LevelShape*******

//===Page: Tank1_fac1, Plugin: LevelShape , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:LevelShape*******

//===Page: Tank1_fac1, Plugin: LevelLabel , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:LevelLabel*******

//===Page: Tank1_fac1, Plugin: LevelLabel , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:LevelLabel*******

//===Page: Tank1_fac1, Plugin: LevelLabel , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:LevelLabel*******

//===Page: Tank1_fac1, Plugin: LevelLabel , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:LevelLabel*******

//===Page: Tank1_fac1, Plugin: GaugePress , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:GaugePress*******

//===Page: Tank1_fac1, Plugin: GaugePress , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:GaugePress*******

//===Page: Tank1_fac1, Plugin: GaugePress , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:GaugePress*******

//===Page: Tank1_fac1, Plugin: GaugePress , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:GaugePress*******

//===Page: Tank1_fac1, Plugin: TempLabel , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:TempLabel*******

//===Page: Tank1_fac1, Plugin: TempLabel , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:TempLabel*******

//===Page: Tank1_fac1, Plugin: TempLabel , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:TempLabel*******

//===Page: Tank1_fac1, Plugin: TempLabel , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:TempLabel*******

//===Page: Tank1_fac1, Plugin: Shape 8 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 8*******

//===Page: Tank1_fac1, Plugin: Shape 8 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 8*******

//===Page: Tank1_fac1, Plugin: Shape 8 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 8*******

//===Page: Tank1_fac1, Plugin: Shape 8 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 8*******

//===Page: tanks_admin, Plugin: Group 3 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Group 3*******

//===Page: tanks_admin, Plugin: Group 3 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Group 3*******

//===Page: tanks_admin, Plugin: Group 3 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Group 3*******

//===Page: tanks_admin, Plugin: Group 3 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Group 3*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnRecordChange===


          // <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>>
          var DataNavigatorObject = GetPluginParameterValue("Tank_FactoriesDataNavigator", "Plugin Object");
          var RecordObject = DataNavigatorObject.GetCurrentRecordObj();
          if(RecordObject) {
 SetPluginParameterValue('FactoryIdtxt', 'Text', RecordObject['FactoryId']); 
 DrawPlugin('FactoryIdtxt');
 SetPluginParameterValue('FactoryNametxt', 'Text', RecordObject['FactoryName']); 
 DrawPlugin('FactoryNametxt');
 SetPluginParameterValue('FactoryContactPersontxt', 'Text', RecordObject['FactoryContactPerson']); 
 DrawPlugin('FactoryContactPersontxt');
 SetPluginParameterValue('FactoryContactPhonetxt', 'Text', RecordObject['FactoryContactPhone']); 
 DrawPlugin('FactoryContactPhonetxt');
 SetPluginParameterValue('FactoryAddrestxt', 'Text', RecordObject['FactoryAddres']); 
 DrawPlugin('FactoryAddrestxt');
 SetPluginParameterValue('passwordtxt', 'Text', RecordObject['password']); 
 DrawPlugin('passwordtxt');
 }
 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnRecordChange , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnRefresh===

DrawPlugin(DataNavigatorName)


//*****End Of Event:OnRefresh , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnDelete===


        // <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>>
        var DataNavigatorObject = GetPluginParameterValue("Tank_FactoriesDataNavigator", "Plugin Object");
        var RecordID = DataNavigatorObject.GetParameterValue("CurrentRecordIndexDB")
        DataNavigatorObject.Delete(RecordID)
// <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnDelete , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnSearch===

//you can access SearchValue,SelectedColumn variables 
 //SelectedColumn : parameter stores column Name 
 //SearchValue : parameter stores column Value  
 //return the values to Search Method 
 return {'SearchValue' : SearchValue,'SelectedColumn':SelectedColumn}


//*****End Of Event:OnSearch , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank_FactoriesDataNavigator , Event: OnButtonClick===

//you can access ClickedButton variable 
 //ClickedButton : Parameter that hold clicked button name 
  


//*****End Of Event:OnButtonClick , Plugin:Tank_FactoriesDataNavigator*******

//===Page: tanks_admin, Plugin: Tank Factories header , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Tank Factories header*******

//===Page: tanks_admin, Plugin: Tank Factories header , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Tank Factories header*******

//===Page: tanks_admin, Plugin: Tank Factories header , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Tank Factories header*******

//===Page: tanks_admin, Plugin: Tank Factories header , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Tank Factories header*******

//===Page: tanks_admin, Plugin: FactoryIdEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryIdEnlbl*******

//===Page: tanks_admin, Plugin: FactoryIdEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryIdEnlbl*******

//===Page: tanks_admin, Plugin: FactoryIdEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryIdEnlbl*******

//===Page: tanks_admin, Plugin: FactoryIdEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryIdEnlbl*******

//===Page: tanks_admin, Plugin: FactoryIdtxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryIdtxt*******

//===Page: tanks_admin, Plugin: FactoryIdtxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryIdtxt*******

//===Page: tanks_admin, Plugin: FactoryIdtxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryIdtxt*******

//===Page: tanks_admin, Plugin: FactoryIdtxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryIdtxt*******

//===Page: tanks_admin, Plugin: FactoryIdtxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:FactoryIdtxt*******

//===Page: tanks_admin, Plugin: FactoryIdtxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:FactoryIdtxt*******

//===Page: tanks_admin, Plugin: FactoryNameEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryNameEnlbl*******

//===Page: tanks_admin, Plugin: FactoryNameEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryNameEnlbl*******

//===Page: tanks_admin, Plugin: FactoryNameEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryNameEnlbl*******

//===Page: tanks_admin, Plugin: FactoryNameEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryNameEnlbl*******

//===Page: tanks_admin, Plugin: FactoryNametxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryNametxt*******

//===Page: tanks_admin, Plugin: FactoryNametxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryNametxt*******

//===Page: tanks_admin, Plugin: FactoryNametxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryNametxt*******

//===Page: tanks_admin, Plugin: FactoryNametxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryNametxt*******

//===Page: tanks_admin, Plugin: FactoryNametxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:FactoryNametxt*******

//===Page: tanks_admin, Plugin: FactoryNametxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:FactoryNametxt*******

//===Page: tanks_admin, Plugin: FactoryContactPersonEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryContactPersonEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPersonEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryContactPersonEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPersonEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryContactPersonEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPersonEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryContactPersonEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPersontxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryContactPersontxt*******

//===Page: tanks_admin, Plugin: FactoryContactPersontxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryContactPersontxt*******

//===Page: tanks_admin, Plugin: FactoryContactPersontxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryContactPersontxt*******

//===Page: tanks_admin, Plugin: FactoryContactPersontxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryContactPersontxt*******

//===Page: tanks_admin, Plugin: FactoryContactPersontxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:FactoryContactPersontxt*******

//===Page: tanks_admin, Plugin: FactoryContactPersontxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:FactoryContactPersontxt*******

//===Page: tanks_admin, Plugin: FactoryContactPhoneEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryContactPhoneEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPhoneEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryContactPhoneEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPhoneEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryContactPhoneEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPhoneEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryContactPhoneEnlbl*******

//===Page: tanks_admin, Plugin: FactoryContactPhonetxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryContactPhonetxt*******

//===Page: tanks_admin, Plugin: FactoryContactPhonetxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryContactPhonetxt*******

//===Page: tanks_admin, Plugin: FactoryContactPhonetxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryContactPhonetxt*******

//===Page: tanks_admin, Plugin: FactoryContactPhonetxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryContactPhonetxt*******

//===Page: tanks_admin, Plugin: FactoryContactPhonetxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:FactoryContactPhonetxt*******

//===Page: tanks_admin, Plugin: FactoryContactPhonetxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:FactoryContactPhonetxt*******

//===Page: tanks_admin, Plugin: FactoryAddresEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryAddresEnlbl*******

//===Page: tanks_admin, Plugin: FactoryAddresEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryAddresEnlbl*******

//===Page: tanks_admin, Plugin: FactoryAddresEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryAddresEnlbl*******

//===Page: tanks_admin, Plugin: FactoryAddresEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryAddresEnlbl*******

//===Page: tanks_admin, Plugin: FactoryAddrestxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryAddrestxt*******

//===Page: tanks_admin, Plugin: FactoryAddrestxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryAddrestxt*******

//===Page: tanks_admin, Plugin: FactoryAddrestxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryAddrestxt*******

//===Page: tanks_admin, Plugin: FactoryAddrestxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryAddrestxt*******

//===Page: tanks_admin, Plugin: FactoryAddrestxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:FactoryAddrestxt*******

//===Page: tanks_admin, Plugin: FactoryAddrestxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:FactoryAddrestxt*******

//===Page: tanks_admin, Plugin: passwordEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:passwordEnlbl*******

//===Page: tanks_admin, Plugin: passwordEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:passwordEnlbl*******

//===Page: tanks_admin, Plugin: passwordEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:passwordEnlbl*******

//===Page: tanks_admin, Plugin: passwordEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:passwordEnlbl*******

//===Page: tanks_admin, Plugin: passwordtxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:passwordtxt*******

//===Page: tanks_admin, Plugin: passwordtxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:passwordtxt*******

//===Page: tanks_admin, Plugin: passwordtxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:passwordtxt*******

//===Page: tanks_admin, Plugin: passwordtxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:passwordtxt*******

//===Page: tanks_admin, Plugin: passwordtxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:passwordtxt*******

//===Page: tanks_admin, Plugin: passwordtxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:passwordtxt*******

//===Page: tanks_admin, Plugin: Tank_Factories_Reload , Event: OnClick Event===

window.location.reload();


//*****End Of Event:OnClick Event , Plugin:Tank_Factories_Reload*******

//===Page: tanks_admin, Plugin: Tank_Factories_Reload , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Tank_Factories_Reload*******

//===Page: tanks_admin, Plugin: Tank_Factories_Reload , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Tank_Factories_Reload*******

//===Page: tanks_admin, Plugin: Tank_Factories_Reload , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Tank_Factories_Reload*******

//===Page: tanks_admin, Plugin: Tank_Factories_Submit , Event: OnClick Event===

var FactoryId_Value = GetPluginParameterValue('FactoryIdtxt','text');
var FactoryName_Value = GetPluginParameterValue('FactoryNametxt','text');
var FactoryContactPerson_Value = GetPluginParameterValue('FactoryContactPersontxt','text');
var FactoryContactPhone_Value = GetPluginParameterValue('FactoryContactPhonetxt','text');
var FactoryAddres_Value = GetPluginParameterValue('FactoryAddrestxt','text');
var password_Value = GetPluginParameterValue('passwordtxt','text');

var Tank_Factories_ObjectData = {'AppName': 'Tank Factories', 'Readings': {'FactoryId': FactoryId_Value,'FactoryName': FactoryName_Value,'FactoryContactPerson': FactoryContactPerson_Value,'FactoryContactPhone': FactoryContactPhone_Value,'FactoryAddres': FactoryAddres_Value,'password': password_Value}};

var DataNavigatorObject=GetPluginParameterValue('Tank_FactoriesDataNavigator','Plugin Object');
 // access Add function from Data Navigator Plugin Object to add Appliction Data
 DataNavigatorObject.Add(Tank_Factories_ObjectData,Tank_Factories_AfterPostCallBack);function Tank_Factories_AfterPostCallBack(){ }


//*****End Of Event:OnClick Event , Plugin:Tank_Factories_Submit*******

//===Page: tanks_admin, Plugin: Tank_Factories_Submit , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Tank_Factories_Submit*******

//===Page: tanks_admin, Plugin: Tank_Factories_Submit , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Tank_Factories_Submit*******

//===Page: tanks_admin, Plugin: Tank_Factories_Submit , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Tank_Factories_Submit*******

//===Page: tanks_admin, Plugin: Tank_Factories_Update , Event: OnClick Event===

// <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>> 
 	 // this array includes records objects 
 var ReadingsObjArr = []; 
 var ReadingsObj = {};  
 var CurrentRecord=GetPluginParameterValue('Tank_FactoriesDataNavigator','CurrentRecordIndexDB') 
 	 // create object to every field in record 
 	 //create object to FactoryId field
var VFactoryIdObj = {} 
var FactoryIdtxt = GetPluginParameterValue('FactoryIdtxt', 'Text');
VFactoryIdObj['ColName']='FactoryId' 
VFactoryIdObj['Value']=FactoryIdtxt
VFactoryIdObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VFactoryIdObj)
 ReadingsObjArr.push(VFactoryIdObj) 
 
	 //create object to FactoryName field
var VFactoryNameObj = {} 
var FactoryNametxt = GetPluginParameterValue('FactoryNametxt', 'Text');
VFactoryNameObj['ColName']='FactoryName' 
VFactoryNameObj['Value']=FactoryNametxt
VFactoryNameObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VFactoryNameObj)
 ReadingsObjArr.push(VFactoryNameObj) 
 
	 //create object to FactoryContactPerson field
var VFactoryContactPersonObj = {} 
var FactoryContactPersontxt = GetPluginParameterValue('FactoryContactPersontxt', 'Text');
VFactoryContactPersonObj['ColName']='FactoryContactPerson' 
VFactoryContactPersonObj['Value']=FactoryContactPersontxt
VFactoryContactPersonObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VFactoryContactPersonObj)
 ReadingsObjArr.push(VFactoryContactPersonObj) 
 
	 //create object to FactoryContactPhone field
var VFactoryContactPhoneObj = {} 
var FactoryContactPhonetxt = GetPluginParameterValue('FactoryContactPhonetxt', 'Text');
VFactoryContactPhoneObj['ColName']='FactoryContactPhone' 
VFactoryContactPhoneObj['Value']=FactoryContactPhonetxt
VFactoryContactPhoneObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VFactoryContactPhoneObj)
 ReadingsObjArr.push(VFactoryContactPhoneObj) 
 
	 //create object to FactoryAddres field
var VFactoryAddresObj = {} 
var FactoryAddrestxt = GetPluginParameterValue('FactoryAddrestxt', 'Text');
VFactoryAddresObj['ColName']='FactoryAddres' 
VFactoryAddresObj['Value']=FactoryAddrestxt
VFactoryAddresObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VFactoryAddresObj)
 ReadingsObjArr.push(VFactoryAddresObj) 
 
	 //create object to password field
var VpasswordObj = {} 
var passwordtxt = GetPluginParameterValue('passwordtxt', 'Text');
VpasswordObj['ColName']='password' 
VpasswordObj['Value']=passwordtxt
VpasswordObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VpasswordObj)
 ReadingsObjArr.push(VpasswordObj) 
 
 	 // get Data Navigator plugin object to access its functions 
  var DataNavigatorObject=GetPluginParameterValue('Tank_FactoriesDataNavigator','Plugin Object');
 	 var OptionalParamterOFReload ; //true or false value to allow or prevent Reload Page After Update 
	 // access Update function from Data Navigator Plugin Object to Update Application Data
 DataNavigatorObject.Update(CurrentRecord,ReadingsObjArr,OptionalParamterOFReload); 
 
 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnClick Event , Plugin:Tank_Factories_Update*******

//===Page: tanks_admin, Plugin: Tank_Factories_Update , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Tank_Factories_Update*******

//===Page: tanks_admin, Plugin: Tank_Factories_Update , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Tank_Factories_Update*******

//===Page: tanks_admin, Plugin: Tank_Factories_Update , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Tank_Factories_Update*******

//===Page: tanks_admin, Plugin: Tank_Factories_Delete , Event: OnClick Event===

// <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>> 
// Get Current Record Id In DB  
 var CurrentRecordInDB=GetPluginParameterValue('Tank_FactoriesDataNavigator','Current Record Index DB') 
// get Data Navigator plugin object to access its functions 
  var DataNavigatorObject=GetPluginParameterValue('Tank_FactoriesDataNavigator','Plugin Object');
// access Delete function from Data Navigator Plugin Object to delete Appliction Data
 DataNavigatorObject.Delete(CurrentRecordInDB, (err,returnedStatus) => {});
 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnClick Event , Plugin:Tank_Factories_Delete*******

//===Page: tanks_admin, Plugin: Tank_Factories_Delete , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Tank_Factories_Delete*******

//===Page: tanks_admin, Plugin: Tank_Factories_Delete , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Tank_Factories_Delete*******

//===Page: tanks_admin, Plugin: Tank_Factories_Delete , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Tank_Factories_Delete*******

//===Page: tanks_admin, Plugin: Tank_Factories_ClearForm , Event: OnClick Event===

// <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>> 
SetPluginParameterValue('FactoryIdtxt','Text',''); 
 DrawPlugin('FactoryIdtxt');
 
SetPluginParameterValue('FactoryNametxt','Text',''); 
 DrawPlugin('FactoryNametxt');
 
SetPluginParameterValue('FactoryContactPersontxt','Text',''); 
 DrawPlugin('FactoryContactPersontxt');
 
SetPluginParameterValue('FactoryContactPhonetxt','Text',''); 
 DrawPlugin('FactoryContactPhonetxt');
 
SetPluginParameterValue('FactoryAddrestxt','Text',''); 
 DrawPlugin('FactoryAddrestxt');
 
SetPluginParameterValue('passwordtxt','Text',''); 
 DrawPlugin('passwordtxt');
 

 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnClick Event , Plugin:Tank_Factories_ClearForm*******

//===Page: tanks_admin, Plugin: Tank_Factories_ClearForm , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Tank_Factories_ClearForm*******

//===Page: tanks_admin, Plugin: Tank_Factories_ClearForm , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Tank_Factories_ClearForm*******

//===Page: tanks_admin, Plugin: Tank_Factories_ClearForm , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Tank_Factories_ClearForm*******

//===Page: tanks_admin, Plugin: Shape 1-T16 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1-T16*******

//===Page: tanks_admin, Plugin: Shape 1-T16 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1-T16*******

//===Page: tanks_admin, Plugin: Shape 1-T16 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1-T16*******

//===Page: tanks_admin, Plugin: Shape 1-T16 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1-T16*******

//===Page: tanks_admin, Plugin: Register , Event: OnClick Event===

  window.location.replace(window.location.pathname + "?project=404&page=10");


//*****End Of Event:OnClick Event , Plugin:Register*******

//===Page: tanks_admin, Plugin: Register , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Register*******

//===Page: tanks_admin, Plugin: Register , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Register*******

//===Page: tanks_admin, Plugin: Register , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Register*******

//===Page: tanks_admin, Plugin: login , Event: OnClick Event===

  window.location.replace(window.location.pathname + "?project=404&page=1");


//*****End Of Event:OnClick Event , Plugin:login*******

//===Page: tanks_admin, Plugin: login , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:login*******

//===Page: tanks_admin, Plugin: login , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:login*******

//===Page: tanks_admin, Plugin: login , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:login*******

//===Page: tanks_admin, Plugin: image 2-T16 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 2-T16*******

//===Page: tanks_admin, Plugin: image 2-T16 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 2-T16*******

//===Page: tanks_admin, Plugin: image 2-T16 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 2-T16*******

//===Page: tanks_admin, Plugin: image 2-T16 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 2-T16*******

//===Page: test1, Plugin: Grid 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Grid 1*******

//===Page: test1, Plugin: Grid 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Grid 1*******

//===Page: test1, Plugin: Grid 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Grid 1*******

//===Page: test1, Plugin: Grid 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Grid 1*******

//===Page: adding tanks to company, Event: OnPageLoad===


var factory_name = sessionStorage.getItem('FactoryName');
var factory_id = sessionStorage.getItem('FactoryId');

if (factory_name === "" || factory_name === null || factory_name === undefined) {

  warning("You must login first");
  window.location.replace(window.location.pathname + "?project=404&page=1");


}



//**********End Of Event: OnPageLoad***********


//===Page: adding tanks to company, Plugin: Group 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Group 1*******

//===Page: adding tanks to company, Plugin: Group 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Group 1*******

//===Page: adding tanks to company, Plugin: Group 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Group 1*******

//===Page: adding tanks to company, Plugin: Group 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Group 1*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnRecordChange===


          // <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>>
          var DataNavigatorObject = GetPluginParameterValue("adding_tanksDataNavigator", "Plugin Object");
          var RecordObject = DataNavigatorObject.GetCurrentRecordObj();
          if(RecordObject) {
 SetPluginParameterValue('FactoryIdtxt', 'Text', RecordObject['FactoryId']); 
 DrawPlugin('FactoryIdtxt');
 SetPluginParameterValue('FactoryNametxt', 'Text', RecordObject['FactoryName']); 
 DrawPlugin('FactoryNametxt');
 SetPluginParameterValue('TankNametxt', 'Text', RecordObject['TankName']); 
 DrawPlugin('TankNametxt');
 SetPluginParameterValue('TankIdtxt', 'Text', RecordObject['TankId']); 
 DrawPlugin('TankIdtxt');
 }
 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnRecordChange , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnRefresh===

DrawPlugin(DataNavigatorName)


//*****End Of Event:OnRefresh , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnDelete===


        // <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>>
        var DataNavigatorObject = GetPluginParameterValue("adding_tanksDataNavigator", "Plugin Object");
        var RecordID = DataNavigatorObject.GetParameterValue("CurrentRecordIndexDB")
        DataNavigatorObject.Delete(RecordID)
// <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnDelete , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnSearch===

//you can access SearchValue,SelectedColumn variables 
 //SelectedColumn : parameter stores column Name 
 //SearchValue : parameter stores column Value  
 //return the values to Search Method 
 return {'SearchValue' : SearchValue,'SelectedColumn':SelectedColumn}


//*****End Of Event:OnSearch , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanksDataNavigator , Event: OnButtonClick===

//you can access ClickedButton variable 
 //ClickedButton : Parameter that hold clicked button name 
  


//*****End Of Event:OnButtonClick , Plugin:adding_tanksDataNavigator*******

//===Page: adding tanks to company, Plugin: adding_tanks header , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:adding_tanks header*******

//===Page: adding tanks to company, Plugin: adding_tanks header , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:adding_tanks header*******

//===Page: adding tanks to company, Plugin: adding_tanks header , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:adding_tanks header*******

//===Page: adding tanks to company, Plugin: adding_tanks header , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:adding_tanks header*******

//===Page: adding tanks to company, Plugin: FactoryIdEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryIdEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryIdEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryIdEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryIdEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryIdEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryIdEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryIdEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryIdtxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryIdtxt*******

//===Page: adding tanks to company, Plugin: FactoryIdtxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryIdtxt*******

//===Page: adding tanks to company, Plugin: FactoryIdtxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryIdtxt*******

//===Page: adding tanks to company, Plugin: FactoryIdtxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryIdtxt*******

//===Page: adding tanks to company, Plugin: FactoryIdtxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:FactoryIdtxt*******

//===Page: adding tanks to company, Plugin: FactoryIdtxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:FactoryIdtxt*******

//===Page: adding tanks to company, Plugin: FactoryNameEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryNameEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryNameEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryNameEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryNameEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryNameEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryNameEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryNameEnlbl*******

//===Page: adding tanks to company, Plugin: FactoryNametxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:FactoryNametxt*******

//===Page: adding tanks to company, Plugin: FactoryNametxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:FactoryNametxt*******

//===Page: adding tanks to company, Plugin: FactoryNametxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:FactoryNametxt*******

//===Page: adding tanks to company, Plugin: FactoryNametxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:FactoryNametxt*******

//===Page: adding tanks to company, Plugin: FactoryNametxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:FactoryNametxt*******

//===Page: adding tanks to company, Plugin: FactoryNametxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:FactoryNametxt*******

//===Page: adding tanks to company, Plugin: TankNameEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:TankNameEnlbl*******

//===Page: adding tanks to company, Plugin: TankNameEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:TankNameEnlbl*******

//===Page: adding tanks to company, Plugin: TankNameEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:TankNameEnlbl*******

//===Page: adding tanks to company, Plugin: TankNameEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:TankNameEnlbl*******

//===Page: adding tanks to company, Plugin: TankNametxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:TankNametxt*******

//===Page: adding tanks to company, Plugin: TankNametxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:TankNametxt*******

//===Page: adding tanks to company, Plugin: TankNametxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:TankNametxt*******

//===Page: adding tanks to company, Plugin: TankNametxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:TankNametxt*******

//===Page: adding tanks to company, Plugin: TankNametxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:TankNametxt*******

//===Page: adding tanks to company, Plugin: TankNametxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:TankNametxt*******

//===Page: adding tanks to company, Plugin: TankIdEnlbl , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:TankIdEnlbl*******

//===Page: adding tanks to company, Plugin: TankIdEnlbl , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:TankIdEnlbl*******

//===Page: adding tanks to company, Plugin: TankIdEnlbl , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:TankIdEnlbl*******

//===Page: adding tanks to company, Plugin: TankIdEnlbl , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:TankIdEnlbl*******

//===Page: adding tanks to company, Plugin: TankIdtxt , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:TankIdtxt*******

//===Page: adding tanks to company, Plugin: TankIdtxt , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:TankIdtxt*******

//===Page: adding tanks to company, Plugin: TankIdtxt , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:TankIdtxt*******

//===Page: adding tanks to company, Plugin: TankIdtxt , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:TankIdtxt*******

//===Page: adding tanks to company, Plugin: TankIdtxt , Event: on change event===

 


//*****End Of Event:on change event , Plugin:TankIdtxt*******

//===Page: adding tanks to company, Plugin: TankIdtxt , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:TankIdtxt*******

//===Page: adding tanks to company, Plugin: adding_tanks_Reload , Event: OnClick Event===

window.location.reload();


//*****End Of Event:OnClick Event , Plugin:adding_tanks_Reload*******

//===Page: adding tanks to company, Plugin: adding_tanks_Reload , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:adding_tanks_Reload*******

//===Page: adding tanks to company, Plugin: adding_tanks_Reload , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:adding_tanks_Reload*******

//===Page: adding tanks to company, Plugin: adding_tanks_Reload , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:adding_tanks_Reload*******

//===Page: adding tanks to company, Plugin: adding_tanks_Submit , Event: OnClick Event===

var FactoryId_Value = GetPluginParameterValue('FactoryIdtxt','text');
var FactoryName_Value = GetPluginParameterValue('FactoryNametxt','text');
var TankName_Value = GetPluginParameterValue('TankNametxt','text');
var TankId_Value = GetPluginParameterValue('TankIdtxt','text');

var adding_tanks_ObjectData = {'AppName': 'adding_tanks', 'Readings': {'FactoryId': FactoryId_Value,'FactoryName': FactoryName_Value,'TankName': TankName_Value,'TankId': TankId_Value}};

var DataNavigatorObject=GetPluginParameterValue('adding_tanksDataNavigator','Plugin Object');
 // access Add function from Data Navigator Plugin Object to add Appliction Data
 DataNavigatorObject.Add(adding_tanks_ObjectData,adding_tanks_AfterPostCallBack);function adding_tanks_AfterPostCallBack(){ }


//*****End Of Event:OnClick Event , Plugin:adding_tanks_Submit*******

//===Page: adding tanks to company, Plugin: adding_tanks_Submit , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:adding_tanks_Submit*******

//===Page: adding tanks to company, Plugin: adding_tanks_Submit , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:adding_tanks_Submit*******

//===Page: adding tanks to company, Plugin: adding_tanks_Submit , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:adding_tanks_Submit*******

//===Page: adding tanks to company, Plugin: adding_tanks_Update , Event: OnClick Event===

// <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>> 
 	 // this array includes records objects 
 var ReadingsObjArr = []; 
 var ReadingsObj = {};  
 var CurrentRecord=GetPluginParameterValue('adding_tanksDataNavigator','CurrentRecordIndexDB') 
 	 // create object to every field in record 
 	 //create object to FactoryId field
var VFactoryIdObj = {} 
var FactoryIdtxt = GetPluginParameterValue('FactoryIdtxt', 'Text');
VFactoryIdObj['ColName']='FactoryId' 
VFactoryIdObj['Value']=FactoryIdtxt
VFactoryIdObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VFactoryIdObj)
 ReadingsObjArr.push(VFactoryIdObj) 
 
	 //create object to FactoryName field
var VFactoryNameObj = {} 
var FactoryNametxt = GetPluginParameterValue('FactoryNametxt', 'Text');
VFactoryNameObj['ColName']='FactoryName' 
VFactoryNameObj['Value']=FactoryNametxt
VFactoryNameObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VFactoryNameObj)
 ReadingsObjArr.push(VFactoryNameObj) 
 
	 //create object to TankName field
var VTankNameObj = {} 
var TankNametxt = GetPluginParameterValue('TankNametxt', 'Text');
VTankNameObj['ColName']='TankName' 
VTankNameObj['Value']=TankNametxt
VTankNameObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VTankNameObj)
 ReadingsObjArr.push(VTankNameObj) 
 
	 //create object to TankId field
var VTankIdObj = {} 
var TankIdtxt = GetPluginParameterValue('TankIdtxt', 'Text');
VTankIdObj['ColName']='TankId' 
VTankIdObj['Value']=TankIdtxt
VTankIdObj['Type']='txt'
 RTEConsoleLog('ReadingsObj',VTankIdObj)
 ReadingsObjArr.push(VTankIdObj) 
 
 	 // get Data Navigator plugin object to access its functions 
  var DataNavigatorObject=GetPluginParameterValue('adding_tanksDataNavigator','Plugin Object');
 	 var OptionalParamterOFReload ; //true or false value to allow or prevent Reload Page After Update 
	 // access Update function from Data Navigator Plugin Object to Update Application Data
 DataNavigatorObject.Update(CurrentRecord,ReadingsObjArr,OptionalParamterOFReload); 
 
 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnClick Event , Plugin:adding_tanks_Update*******

//===Page: adding tanks to company, Plugin: adding_tanks_Update , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:adding_tanks_Update*******

//===Page: adding tanks to company, Plugin: adding_tanks_Update , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:adding_tanks_Update*******

//===Page: adding tanks to company, Plugin: adding_tanks_Update , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:adding_tanks_Update*******

//===Page: adding tanks to company, Plugin: adding_tanks_Delete , Event: OnClick Event===

// <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>> 
// Get Current Record Id In DB  
 var CurrentRecordInDB=GetPluginParameterValue('adding_tanksDataNavigator','Current Record Index DB') 
// get Data Navigator plugin object to access its functions 
  var DataNavigatorObject=GetPluginParameterValue('adding_tanksDataNavigator','Plugin Object');
// access Delete function from Data Navigator Plugin Object to delete Appliction Data
 DataNavigatorObject.Delete(CurrentRecordInDB, (err,returnedStatus) => {});
 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnClick Event , Plugin:adding_tanks_Delete*******

//===Page: adding tanks to company, Plugin: adding_tanks_Delete , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:adding_tanks_Delete*******

//===Page: adding tanks to company, Plugin: adding_tanks_Delete , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:adding_tanks_Delete*******

//===Page: adding tanks to company, Plugin: adding_tanks_Delete , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:adding_tanks_Delete*******

//===Page: adding tanks to company, Plugin: adding_tanks_ClearForm , Event: OnClick Event===

// <<<<<<<<<<<<  Automatically Generated Code  >>>>>>>>>>>>>>> 
SetPluginParameterValue('FactoryIdtxt','Text',''); 
 DrawPlugin('FactoryIdtxt');
 
SetPluginParameterValue('FactoryNametxt','Text',''); 
 DrawPlugin('FactoryNametxt');
 
SetPluginParameterValue('TankNametxt','Text',''); 
 DrawPlugin('TankNametxt');
 
SetPluginParameterValue('TankIdtxt','Text',''); 
 DrawPlugin('TankIdtxt');
 

 // <<<<<<<<<<<<  End Of Automatically Generated Code  >>>>>>>>>>>>>>>


//*****End Of Event:OnClick Event , Plugin:adding_tanks_ClearForm*******

//===Page: adding tanks to company, Plugin: adding_tanks_ClearForm , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:adding_tanks_ClearForm*******

//===Page: adding tanks to company, Plugin: adding_tanks_ClearForm , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:adding_tanks_ClearForm*******

//===Page: adding tanks to company, Plugin: adding_tanks_ClearForm , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:adding_tanks_ClearForm*******

//===Page: adding tanks to company, Plugin: Shape 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1-T17*******

//===Page: adding tanks to company, Plugin: Shape 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1-T17*******

//===Page: adding tanks to company, Plugin: Shape 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1-T17*******

//===Page: adding tanks to company, Plugin: Shape 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1-T17*******

//===Page: adding tanks to company, Plugin: image 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 1-T17*******

//===Page: adding tanks to company, Plugin: image 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 1-T17*******

//===Page: adding tanks to company, Plugin: image 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 1-T17*******

//===Page: adding tanks to company, Plugin: image 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 1-T17*******

//===Page: adding tanks to company, Plugin: logout , Event: OnClick Event===

  sessionStorage.removeItem("FactoryName");
  sessionStorage.removeItem("FactoryId");


  window.location.replace(window.location.pathname + "?project=404&page=1");


//*****End Of Event:OnClick Event , Plugin:logout*******

//===Page: adding tanks to company, Plugin: logout , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:logout*******

//===Page: adding tanks to company, Plugin: logout , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:logout*******

//===Page: adding tanks to company, Plugin: logout , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:logout*******

//===Page: adding tanks to company, Plugin: Shape 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 2-T17*******

//===Page: adding tanks to company, Plugin: Shape 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 2-T17*******

//===Page: adding tanks to company, Plugin: Shape 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 2-T17*******

//===Page: adding tanks to company, Plugin: Shape 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 2-T17*******

//===Page: adding tanks to company, Plugin: image 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 2-T17*******

//===Page: adding tanks to company, Plugin: image 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 2-T17*******

//===Page: adding tanks to company, Plugin: image 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 2-T17*******

//===Page: adding tanks to company, Plugin: image 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 2-T17*******

//===Page: adding tanks to company, Plugin: Link 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 1-T17*******

//===Page: adding tanks to company, Plugin: Link 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 1-T17*******

//===Page: adding tanks to company, Plugin: Link 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 1-T17*******

//===Page: adding tanks to company, Plugin: Link 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 1-T17*******

//===Page: adding tanks to company, Plugin: Link 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 2-T17*******

//===Page: adding tanks to company, Plugin: Link 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 2-T17*******

//===Page: adding tanks to company, Plugin: Link 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 2-T17*******

//===Page: adding tanks to company, Plugin: Link 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 2-T17*******

//===Page: test_table, Plugin: Grid 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Grid 1*******

//===Page: test_table, Plugin: Grid 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Grid 1*******

//===Page: test_table, Plugin: Grid 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Grid 1*******

//===Page: test_table, Plugin: Grid 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Grid 1*******

//===Page: test_table, Plugin: Grid 2 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Grid 2*******

//===Page: test_table, Plugin: Grid 2 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Grid 2*******

//===Page: test_table, Plugin: Grid 2 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Grid 2*******

//===Page: test_table, Plugin: Grid 2 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Grid 2*******

//===Page: Factory Tanks, Event: OnPageLoad===


var factory_name = sessionStorage.getItem('FactoryName');
var factory_id = sessionStorage.getItem('FactoryId');

if (factory_name === "" || factory_name === null || factory_name === undefined) {

  warning("You must login first");
  window.location.replace(window.location.pathname + "?project=404&page=1");


}



var query = "SELECT `TankName`,`TankId` FROM `APPLICATION_212` WHERE `FactoryId`=" + factory_id + " order by `TimeStamp` desc limit 50"


console.log("variable name", query)
let x = 380;
let y = 210;

ExecuteQueryModified(query, CreateTanks);

function CreateTanks(error, xhr) {

  //Saving status array into variable
  if (xhr.response) {

    statusDataArr = JSON.parse(xhr.response);

  }

  //Checking if array is empty
  if (statusDataArr.length < 1) {

    alert("You don't have any Tanks yet")

  }

  for (var i = 0; i < statusDataArr.length; i++) {

    var name = statusDataArr[i].TankName;
    var sensor_id = statusDataArr[i].TankId;
    console.log("variable name", sensor_id)

    // this to copy the links and image
    CopyPastePlugin('Link 1', name, x, y)

    CopyPastePlugin('image 1', 'image 1' + i, x, y + 50)

    x = x + 250;

    // this to set the name of the link and the new plugin image
    SetPluginParameterValue(name, 'Link caption', name);
    DrawPlugin(name);

    SetPluginParameterValue(name, 'Link URL', 'https://beta.masterofthings.com/rte.html?project=404&page=15&tank_id=' + sensor_id);
    DrawPlugin(name);

    SetPluginParameterValue(name, 'Visible', 1);
    DrawPlugin(name);

    SetPluginParameterValue('image 1' + i, 'Visible', 1);
    DrawPlugin('image 1' + i);


  }


}


//**********End Of Event: OnPageLoad***********


//===Page: Factory Tanks, Event: Global Functions And Variables===


function get_last_status() {


  var query = 'SELECT  `TimeStamp`,`Lux`,`GeoFence`,`Lng`,`Lat` FROM `GROUP_' + bag_id + '` order by `TimeStamp` desc '

  ExecuteQueryModified(query, updateBagStatus);

  function updateBagStatus(error, xhr) {

    //Saving status array into variable
    if (xhr.response) {
      statusDataArr = JSON.parse(xhr.response);
    }

    //Checking if array is empty
    if (statusDataArr.length < 1) {
      alert("You don't have any bag status yet")
    }

    var Lux = statusDataArr[0].Lux;
    var GeoFence = statusDataArr[0].GeoFence;

    //Changing Map marker image depending on lux value
    if (Lux > 20) {
      SetPluginParameterValue('history_map', 'Marker URL', 'https://cdn.shopify.com/s/files/1/0266/3946/6556/products/IMG_2648.png?v=1662010767');
      DrawPlugin('history_map');
    } else {
      SetPluginParameterValue('history_map', 'Marker URL', 'https://cdn.thewirecutter.com/wp-content/media/2022/12/laptopbackpacks-2048px-6879.jpg?auto=webp&quality=75&width=1024');
      DrawPlugin('history_map');
    }


    //Updating query of map
    SetPluginParameterValue('history_map', 'SQL query statement', query);
    DrawPlugin('history_map');



  } //End CB function 



}


//**********End Of Event: Global Functions And Variables***********


//===Page: Factory Tanks, Plugin: image 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 1*******

//===Page: Factory Tanks, Plugin: image 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 1*******

//===Page: Factory Tanks, Plugin: image 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 1*******

//===Page: Factory Tanks, Plugin: image 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 1*******

//===Page: Factory Tanks, Plugin: Link 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 1*******

//===Page: Factory Tanks, Plugin: Link 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 1*******

//===Page: Factory Tanks, Plugin: Link 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 1*******

//===Page: Factory Tanks, Plugin: Link 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 1*******

//===Page: Factory Tanks, Plugin: Shape 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1-T17*******

//===Page: Factory Tanks, Plugin: Shape 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1-T17*******

//===Page: Factory Tanks, Plugin: Shape 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1-T17*******

//===Page: Factory Tanks, Plugin: Shape 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1-T17*******

//===Page: Factory Tanks, Plugin: image 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 1-T17*******

//===Page: Factory Tanks, Plugin: image 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 1-T17*******

//===Page: Factory Tanks, Plugin: image 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 1-T17*******

//===Page: Factory Tanks, Plugin: image 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 1-T17*******

//===Page: Factory Tanks, Plugin: logout , Event: OnClick Event===

  sessionStorage.removeItem("FactoryName");
  sessionStorage.removeItem("FactoryId");


  window.location.replace(window.location.pathname + "?project=404&page=1");


//*****End Of Event:OnClick Event , Plugin:logout*******

//===Page: Factory Tanks, Plugin: logout , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:logout*******

//===Page: Factory Tanks, Plugin: logout , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:logout*******

//===Page: Factory Tanks, Plugin: logout , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:logout*******

//===Page: Factory Tanks, Plugin: Shape 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 2-T17*******

//===Page: Factory Tanks, Plugin: Shape 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 2-T17*******

//===Page: Factory Tanks, Plugin: Shape 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 2-T17*******

//===Page: Factory Tanks, Plugin: Shape 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 2-T17*******

//===Page: Factory Tanks, Plugin: image 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 2-T17*******

//===Page: Factory Tanks, Plugin: image 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 2-T17*******

//===Page: Factory Tanks, Plugin: image 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 2-T17*******

//===Page: Factory Tanks, Plugin: image 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 2-T17*******

//===Page: Factory Tanks, Plugin: Link 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 1-T17*******

//===Page: Factory Tanks, Plugin: Link 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 1-T17*******

//===Page: Factory Tanks, Plugin: Link 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 1-T17*******

//===Page: Factory Tanks, Plugin: Link 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 1-T17*******

//===Page: Factory Tanks, Plugin: Link 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 2-T17*******

//===Page: Factory Tanks, Plugin: Link 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 2-T17*******

//===Page: Factory Tanks, Plugin: Link 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 2-T17*******

//===Page: Factory Tanks, Plugin: Link 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 2-T17*******

//===Page: Tank Details, Event: OnPageLoad===


var factory_name = sessionStorage.getItem('FactoryName');
var factory_id = sessionStorage.getItem('FactoryId');

if (factory_name === "" || factory_name === null || factory_name === undefined) {

  warning("You must login first");
  window.location.replace(window.location.pathname + "?project=404&page=1");


}


//**********End Of Event: OnPageLoad***********


//===Page: Tank Details, Plugin: Shape 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1*******

//===Page: Tank Details, Plugin: Shape 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1*******

//===Page: Tank Details, Plugin: Shape 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1*******

//===Page: Tank Details, Plugin: Shape 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1*******

//===Page: Tank Details, Plugin: Timer 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Timer 1*******

//===Page: Tank Details, Plugin: Timer 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Timer 1*******

//===Page: Tank Details, Plugin: Timer 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Timer 1*******

//===Page: Tank Details, Plugin: Timer 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Timer 1*******

//===Page: Tank Details, Plugin: Timer 1 , Event: Timer Tick===

// query to get the details of the company

var query = "SELECT  `TimeStamp`,`FactoryId`,`FactoryName`,`TankName`,`TankId` FROM `APPLICATION_212` WHERE `FactoryId`=" + factory_id + " order by `TimeStamp` desc limit 50";
ExecuteQueryModified(query, TankName);

function TankName(error, xhr) {

  //Saving status array into variable
  if (xhr.response) {

    res = JSON.parse(xhr.response);

  }

  console.log("variable name", res)
  SetPluginParameterValue('tank_name', 'Caption', res[0].TankName);
  DrawPlugin('tank_name');

}



// this to get the tank id from the url 
var urlParams = new URLSearchParams(window.location.search);

// Get value of single parameter
var SensorID = urlParams.get('tank_id');

GetLatestValueOfSensor(SensorID, function(res) {

  res = JSON.parse(res);
  SetPluginParameterValue("LevelLabel", "Caption", "Level=" + Math.round(res.prcentage) + "%");
  DrawPlugin("LevelLabel");
  ChangeLevel(res);


});
//ChangeLevel function to ChangeLevelof Fluid on Tank
// by  checking if capture time is greater than last capture time, then take the Level value.
var ChangeLevel = function ChangeLevel(levelSensor) {
  var Level;
  if (levelSensor.captureTime > captureTime) {
    captureTime = parseFloat(levelSensor.captureTime);
    Level = parseFloat(levelSensor.prcentage);
  }
}
//====================
// Pressure Label
GetLatestValueOfSensor(SensorID, function(res) {
  res = JSON.parse(res);
  SetPluginParameterValue("GaugePress", "Reading value", res.Press);
  DrawPlugin("GaugePress");
  ChangeLevel(res);
});
//ChangePress function to ChangePressof Fluid on Tank
// by  checking if capture time is greater than last capture time, then take the Level value.
var ChangePress = function ChangePress(PressSensor) {
  var Press;
  if (PressSensor.captureTime > captureTime) {
    captureTime = parseFloat(PressSensor.captureTime);
    Press = parseFloat(PressSensor.Press);
  }
}
//====================
// Tempreture Label
GetLatestValueOfSensor(SensorID, function(res) {
  res = JSON.parse(res);
  SetPluginParameterValue("TempLabel", "Caption", "Temprature =" + Math.round(res.Temp));
  DrawPlugin("TempLabel");
  ChangeLevel(res);
});
//ChangeTemp function to ChangeTemp of Fluid on Tank
// by  checking if capture time is greater than last capture time, then take the Level value.
var ChangeTemp = function ChangeTemp(TempSensor) {
  var Temp;
  if (TempSensor.captureTime > captureTime) {
    captureTime = parseFloat(TempSensor.captureTime);
    Temp = parseFloat(PressSensor.Liter);
  }
}

//------------------------------------------------------------------------------------------------

// GetLatestValueOfSensor(SensorID, function(res) {
//   res = JSON.parse(res);
//   var lux = res.currentLuxValue;
//   if (lux >= 1 && lux < 11) {
//     SetPluginParameterValue('shape 1', 'Color', 'yellow');
//     DrawPlugin('Shape 1');
//   } else if (lux >= 11 && lux < 31) {
//     SetPluginParameterValue('shape 1', 'Color', 'orange');
//     DrawPlugin('shape 1');
//   } else if (lux >= 31) {
//     SetPluginParameterValue('shape 1', 'Color', 'red');
//     DrawPlugin('shape 1');
//   }
// });


//*****End Of Event:Timer Tick , Plugin:Timer 1*******

//===Page: Tank Details, Plugin: LevelShape , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:LevelShape*******

//===Page: Tank Details, Plugin: LevelShape , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:LevelShape*******

//===Page: Tank Details, Plugin: LevelShape , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:LevelShape*******

//===Page: Tank Details, Plugin: LevelShape , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:LevelShape*******

//===Page: Tank Details, Plugin: LevelLabel , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:LevelLabel*******

//===Page: Tank Details, Plugin: LevelLabel , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:LevelLabel*******

//===Page: Tank Details, Plugin: LevelLabel , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:LevelLabel*******

//===Page: Tank Details, Plugin: LevelLabel , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:LevelLabel*******

//===Page: Tank Details, Plugin: GaugePress , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:GaugePress*******

//===Page: Tank Details, Plugin: GaugePress , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:GaugePress*******

//===Page: Tank Details, Plugin: GaugePress , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:GaugePress*******

//===Page: Tank Details, Plugin: GaugePress , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:GaugePress*******

//===Page: Tank Details, Plugin: TempLabel , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:TempLabel*******

//===Page: Tank Details, Plugin: TempLabel , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:TempLabel*******

//===Page: Tank Details, Plugin: TempLabel , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:TempLabel*******

//===Page: Tank Details, Plugin: TempLabel , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:TempLabel*******

//===Page: Tank Details, Plugin: Shape 8 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 8*******

//===Page: Tank Details, Plugin: Shape 8 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 8*******

//===Page: Tank Details, Plugin: Shape 8 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 8*******

//===Page: Tank Details, Plugin: Shape 8 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 8*******

//===Page: Tank Details, Plugin: tank_name , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:tank_name*******

//===Page: Tank Details, Plugin: tank_name , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:tank_name*******

//===Page: Tank Details, Plugin: tank_name , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:tank_name*******

//===Page: Tank Details, Plugin: tank_name , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:tank_name*******

//===Page: Tank Details, Plugin: Shape 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1-T17*******

//===Page: Tank Details, Plugin: Shape 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1-T17*******

//===Page: Tank Details, Plugin: Shape 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1-T17*******

//===Page: Tank Details, Plugin: Shape 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1-T17*******

//===Page: Tank Details, Plugin: image 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 1-T17*******

//===Page: Tank Details, Plugin: image 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 1-T17*******

//===Page: Tank Details, Plugin: image 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 1-T17*******

//===Page: Tank Details, Plugin: image 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 1-T17*******

//===Page: Tank Details, Plugin: logout , Event: OnClick Event===

  sessionStorage.removeItem("FactoryName");
  sessionStorage.removeItem("FactoryId");


  window.location.replace(window.location.pathname + "?project=404&page=1");


//*****End Of Event:OnClick Event , Plugin:logout*******

//===Page: Tank Details, Plugin: logout , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:logout*******

//===Page: Tank Details, Plugin: logout , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:logout*******

//===Page: Tank Details, Plugin: logout , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:logout*******

//===Page: Tank Details, Plugin: Shape 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 2-T17*******

//===Page: Tank Details, Plugin: Shape 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 2-T17*******

//===Page: Tank Details, Plugin: Shape 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 2-T17*******

//===Page: Tank Details, Plugin: Shape 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 2-T17*******

//===Page: Tank Details, Plugin: image 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 2-T17*******

//===Page: Tank Details, Plugin: image 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 2-T17*******

//===Page: Tank Details, Plugin: image 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 2-T17*******

//===Page: Tank Details, Plugin: image 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 2-T17*******

//===Page: Tank Details, Plugin: Link 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 1-T17*******

//===Page: Tank Details, Plugin: Link 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 1-T17*******

//===Page: Tank Details, Plugin: Link 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 1-T17*******

//===Page: Tank Details, Plugin: Link 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 1-T17*******

//===Page: Tank Details, Plugin: Link 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 2-T17*******

//===Page: Tank Details, Plugin: Link 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 2-T17*******

//===Page: Tank Details, Plugin: Link 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 2-T17*******

//===Page: Tank Details, Plugin: Link 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 2-T17*******

//===Page: template1, Plugin: Shape 1-T16 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1-T16*******

//===Page: template1, Plugin: Shape 1-T16 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1-T16*******

//===Page: template1, Plugin: Shape 1-T16 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1-T16*******

//===Page: template1, Plugin: Shape 1-T16 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1-T16*******

//===Page: template1, Plugin: Register , Event: OnClick Event===

  window.location.replace(window.location.pathname + "?project=404&page=10");


//*****End Of Event:OnClick Event , Plugin:Register*******

//===Page: template1, Plugin: Register , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Register*******

//===Page: template1, Plugin: Register , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Register*******

//===Page: template1, Plugin: Register , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Register*******

//===Page: template1, Plugin: login , Event: OnClick Event===

  window.location.replace(window.location.pathname + "?project=404&page=1");


//*****End Of Event:OnClick Event , Plugin:login*******

//===Page: template1, Plugin: login , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:login*******

//===Page: template1, Plugin: login , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:login*******

//===Page: template1, Plugin: login , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:login*******

//===Page: template1, Plugin: image 2-T16 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 2-T16*******

//===Page: template1, Plugin: image 2-T16 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 2-T16*******

//===Page: template1, Plugin: image 2-T16 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 2-T16*******

//===Page: template1, Plugin: image 2-T16 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 2-T16*******

//===Page: template2, Plugin: Shape 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 1-T17*******

//===Page: template2, Plugin: Shape 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 1-T17*******

//===Page: template2, Plugin: Shape 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 1-T17*******

//===Page: template2, Plugin: Shape 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 1-T17*******

//===Page: template2, Plugin: image 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 1-T17*******

//===Page: template2, Plugin: image 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 1-T17*******

//===Page: template2, Plugin: image 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 1-T17*******

//===Page: template2, Plugin: image 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 1-T17*******

//===Page: template2, Plugin: logout , Event: OnClick Event===

  sessionStorage.removeItem("FactoryName");
  sessionStorage.removeItem("FactoryId");


  window.location.replace(window.location.pathname + "?project=404&page=1");


//*****End Of Event:OnClick Event , Plugin:logout*******

//===Page: template2, Plugin: logout , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:logout*******

//===Page: template2, Plugin: logout , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:logout*******

//===Page: template2, Plugin: logout , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:logout*******

//===Page: template2, Plugin: Shape 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Shape 2-T17*******

//===Page: template2, Plugin: Shape 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Shape 2-T17*******

//===Page: template2, Plugin: Shape 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Shape 2-T17*******

//===Page: template2, Plugin: Shape 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Shape 2-T17*******

//===Page: template2, Plugin: image 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 2-T17*******

//===Page: template2, Plugin: image 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 2-T17*******

//===Page: template2, Plugin: image 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 2-T17*******

//===Page: template2, Plugin: image 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 2-T17*******

//===Page: template2, Plugin: Link 1-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 1-T17*******

//===Page: template2, Plugin: Link 1-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 1-T17*******

//===Page: template2, Plugin: Link 1-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 1-T17*******

//===Page: template2, Plugin: Link 1-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 1-T17*******

//===Page: template2, Plugin: Link 2-T17 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:Link 2-T17*******

//===Page: template2, Plugin: Link 2-T17 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:Link 2-T17*******

//===Page: template2, Plugin: Link 2-T17 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:Link 2-T17*******

//===Page: template2, Plugin: Link 2-T17 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:Link 2-T17*******

//===Page: MobilePage, Plugin: userInput , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:userInput*******

//===Page: MobilePage, Plugin: userInput , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:userInput*******

//===Page: MobilePage, Plugin: userInput , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:userInput*******

//===Page: MobilePage, Plugin: userInput , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:userInput*******

//===Page: MobilePage, Plugin: userInput , Event: on change event===

 


//*****End Of Event:on change event , Plugin:userInput*******

//===Page: MobilePage, Plugin: userInput , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:userInput*******

//===Page: MobilePage, Plugin: passwordInput , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:passwordInput*******

//===Page: MobilePage, Plugin: passwordInput , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:passwordInput*******

//===Page: MobilePage, Plugin: passwordInput , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:passwordInput*******

//===Page: MobilePage, Plugin: passwordInput , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:passwordInput*******

//===Page: MobilePage, Plugin: passwordInput , Event: on change event===

 


//*****End Of Event:on change event , Plugin:passwordInput*******

//===Page: MobilePage, Plugin: passwordInput , Event: on Blur event===

 


//*****End Of Event:on Blur event , Plugin:passwordInput*******

//===Page: MobilePage, Plugin: loginBTN , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:loginBTN*******

//===Page: MobilePage, Plugin: loginBTN , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:loginBTN*******

//===Page: MobilePage, Plugin: loginBTN , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:loginBTN*******

//===Page: MobilePage, Plugin: loginBTN , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:loginBTN*******

//===Page: MobilePage, Plugin: CheckBox 2 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:CheckBox 2*******

//===Page: MobilePage, Plugin: CheckBox 2 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:CheckBox 2*******

//===Page: MobilePage, Plugin: CheckBox 2 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:CheckBox 2*******

//===Page: MobilePage, Plugin: CheckBox 2 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:CheckBox 2*******

//===Page: MobilePage, Plugin: image 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:image 1*******

//===Page: MobilePage, Plugin: image 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:image 1*******

//===Page: MobilePage, Plugin: image 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:image 1*******

//===Page: MobilePage, Plugin: image 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:image 1*******

//===Page: MobileMain, Plugin: RefreshBTN , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:RefreshBTN*******

//===Page: MobileMain, Plugin: RefreshBTN , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:RefreshBTN*******

//===Page: MobileMain, Plugin: RefreshBTN , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:RefreshBTN*******

//===Page: MobileMain, Plugin: RefreshBTN , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:RefreshBTN*******

//===Page: MobileMain, Plugin: BarChart 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:BarChart 1*******

//===Page: MobileMain, Plugin: BarChart 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:BarChart 1*******

//===Page: MobileMain, Plugin: BarChart 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:BarChart 1*******

//===Page: MobileMain, Plugin: BarChart 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:BarChart 1*******

//===Page: MobileMain, Plugin: ComboBox 1 , Event: OnClick Event===

 


//*****End Of Event:OnClick Event , Plugin:ComboBox 1*******

//===Page: MobileMain, Plugin: ComboBox 1 , Event: OnDbClick Event===

 


//*****End Of Event:OnDbClick Event , Plugin:ComboBox 1*******

//===Page: MobileMain, Plugin: ComboBox 1 , Event: OnMouseOver Event===

 


//*****End Of Event:OnMouseOver Event , Plugin:ComboBox 1*******

//===Page: MobileMain, Plugin: ComboBox 1 , Event: OnMouseLeave Event===

 


//*****End Of Event:OnMouseLeave Event , Plugin:ComboBox 1*******

//===Page: MobileMain, Plugin: ComboBox 1 , Event: OnSelect event===

 


//*****End Of Event:OnSelect event , Plugin:ComboBox 1*******
