# SAPUI5 - EXPERIMENTS	

testing: 
	
	1. tiles - tooltips 
	2. timelines  -- 
		a. l_ [https://sapui5.hana.ondemand.com/#/sample/sap.suite.ui.commons.sample.Timeline/preview](https://sapui5.hana.ondemand.com/#/sample/sap.suite.ui.commons.sample.Timeline/preview)   
		b. l_ [https://timeline.knightlab.com/](https://timeline.knightlab.com/)
		c. l_ [https://timeline.knightlab.com/docs/index.html](https://timeline.knightlab.com/docs/index.html)
	3. Loading indicator: 
		a. show: ```  sap.ui.core.BusyIndicator.show();   ```
		a. hide: ```  sap.ui.core.BusyIndicator.hide();   ```
	4.Window.origin 
		a. NO: ``` ```
		a. YES: ``` if (!window.location.origin) {```
			  ```window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');} ```

	
[I'm an inline-style link](https://www.google.com)<br/>
<br/>[https://sapui5.hana.ondemand.com/#/sample/sap.suite.ui.commons.sample.Timeline/preview](https://sapui5.hana.ondemand.com/#/sample/sap.suite.ui.commons.sample.Timeline/preview)   
<br/>[https://timeline.knightlab.com/](https://timeline.knightlab.com/)
<br/>[https://timeline.knightlab.com/docs/index.html](https://timeline.knightlab.com/docs/index.html)
<br/><br/>
# sc 
![pic1](https://github.com/davidvela/SAPUI5_EXPERIMENTS/blob/master/assets/test1234.PNG)
![pic2](https://github.com/davidvela/SAPUI5_EXPERIMENTS/blob/master/assets/test2.PNG)

# coding: 
 ```  sap.ui.core.BusyIndicator.show();   ``` <br/>
 ```  sap.ui.core.BusyIndicator.hide();   ```<br/><br/>
 ``` wrong: 		var host = window.origin; ```<br/>
 ``` if (!window.location.origin) {```<br/>
```  window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');} ```<br/>
```  var host =  window.location.origin; ```<br/>

# DATEPICKER FORMATTING!
<DatePicker name="validTo" id="validTo_id"  placeholder="Enter End Date ..."  enabled="true" visible="true" 
	valueFormat="yyyy-MM-dd"  displayFormat="short" change= "_validateSaveEnablement" value="xxx"/>
<!--{path:'DateO
<!--{path:'DateOfBirth',type:'sap.ui.model.odata.type.DateTime', 
	constraints:{displayFormat:'Date'}, formatOptions:{pattern: 'MM-dd-yyyy'}}-->


