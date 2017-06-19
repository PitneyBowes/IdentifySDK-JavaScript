var IDENTIFYAPIS=IDENTIFYAPIS||{};IDENTIFYAPIS.baseService=function(b){this.accessToken="Bearer "+b;this.apiAddress="https://api.pitneybowes.com/identify";this.response={}};IDENTIFYAPIS.baseService.prototype.callJsonApi=function(g,f){var e=null;this.response={};this.response.httpResponse={};try{e=$.ajax({url:this.apiAddress+g,type:"POST",data:f,async:false,headers:{"Content-type":"application/json",Accept:"application/json",Authorization:this.accessToken}});this.response.response=JSON.parse(e.responseText);if(e.status===200){this.response.status="success"}else{this.response.status="failed"}}catch(h){this.response.status="failed";if(e.responseText!==""){this.response.response=e.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}}this.response.httpResponse.status=e.status;this.response.httpResponse.statusText=e.statusText};IDENTIFYAPIS.baseService.prototype.callJsonApiAsync=function(apiUrl,postData,callback){var request=$.ajax({url:this.apiAddress+apiUrl,type:"POST",data:postData,async:true,headers:{"Content-type":"application/json",Accept:"application/json",Authorization:this.accessToken}}).done(function(responseData,status,xhr){this.response={};this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;this.response.response=JSON.parse(xhr.responseText);if(xhr.status===200){this.response.status="success"}else{this.response.status="failed"}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}}).fail(function(xhr,status,err){this.response={};this.response.status="failed";this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;if(xhr.responseText!==""){this.response.response=xhr.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}})};IDENTIFYAPIS.baseService.prototype.callXmlApi=function(g,f){var e=null;this.response={};this.response.httpResponse={};try{e=$.ajax({url:this.apiAddress+g,type:"POST",data:f,async:false,headers:{"Content-type":"application/xml",Accept:"application/xml",Authorization:this.accessToken}});this.response.response=e.responseText;if(e.status===200){this.response.status="success"}else{this.response.status="failed"}}catch(h){this.response.status="failed";if(e.responseText!==""){this.response.response=e.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}}this.response.httpResponse.status=e.status;this.response.httpResponse.statusText=e.statusText};IDENTIFYAPIS.baseService.prototype.callXmlApiAsync=function(apiUrl,postData,callback){var request=$.ajax({url:this.apiAddress+apiUrl,type:"POST",data:postData,async:true,headers:{"Content-type":"application/xml",Accept:"application/xml",Authorization:this.accessToken}}).done(function(responseData,status,xhr){this.response={};this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;this.response.response=xhr.responseText;if(xhr.status===200){this.response.status="success"}else{this.response.status="failed"}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}}).fail(function(xhr,status,err){this.response={};this.response.status="failed";this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;if(xhr.responseText!==""){this.response.response=xhr.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}})};function IDENTIFYAPIS_INHERIT(e,d){var f=new e();d.prototype=f;d.prototype.constructor=d}IDENTIFYAPIS.baseService.prototype.isJson=function(c){if(c){try{JSON.parse(c)}catch(d){return false}return true}else{return false}};IDENTIFYAPIS.baseService.prototype.isXml=function(d){if(d){try{xmlDoc=$.parseXML(d);return true}catch(c){return false}}else{return false}};IDENTIFYAPIS.identifyAddress=function(b){IDENTIFYAPIS.baseService.call(this,b)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyAddress);IDENTIFYAPIS.identifyAddress.prototype.validateMailingAddress=function(j,f){var i=this.isJson(j);if(i){var h="/identifyaddress/v1/rest/validatemailingaddress/results.json";if(f!==undefined){this.callJsonApiAsync(h,j,f)}else{this.callJsonApi(h,j);return this.response}}else{var g=this.isXml(j);if(g){var h="/identifyaddress/v1/rest/validatemailingaddress/results.xml";if(f!==undefined&&f!==null){this.callXmlApiAsync(h,j,f)}else{this.callXmlApi(h,j);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyAddress.prototype.validateMailingAddressPro=function(j,f){var i=this.isJson(j);if(i){var h="/identifyaddress/v1/rest/validatemailingaddresspro/results.json";if(f!==undefined){this.callJsonApiAsync(h,j,f)}else{this.callJsonApi(h,j);return this.response}}else{var g=this.isXml(j);if(g){var h="/identifyaddress/v1/rest/validatemailingaddresspro/results.xml";if(f!==undefined&&f!==null){this.callXmlApiAsync(h,j,f)}else{this.callXmlApi(h,j);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyAddress.prototype.validateMailingAddressPremium=function(j,f){var i=this.isJson(j);if(i){var h="/identifyaddress/v1/rest/validatemailingaddresspremium/results.json";if(f!==undefined){this.callJsonApiAsync(h,j,f)}else{this.callJsonApi(h,j);return this.response}}else{var g=this.isXml(j);if(g){var h="/identifyaddress/v1/rest/validatemailingaddresspremium/results.xml";if(f!==undefined&&f!==null){this.callXmlApiAsync(h,j,f)}else{this.callXmlApi(h,j);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyEmail=function(b){IDENTIFYAPIS.baseService.call(this,b)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyEmail);IDENTIFYAPIS.identifyEmail.prototype.validateEmailAddress=function(j,f){var i=this.isJson(j);if(i){var h="/identifyemail/v1/rest/validateemailaddress/results.json";if(f!==undefined){this.callJsonApiAsync(h,j,f)}else{this.callJsonApi(h,j);return this.response}}else{var g=this.isXml(j);if(g){var h="/identifyemail/v1/rest/validateemailaddress/results.xml";if(f!==undefined&&f!==null){this.callXmlApiAsync(h,j,f)}else{this.callXmlApi(h,j);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyEntity=function(b){IDENTIFYAPIS.baseService.call(this,b)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyEntity);IDENTIFYAPIS.identifyEntity.prototype.extractEntities=function(j,f){var i=this.isJson(j);if(i){var h="/identifyentity/v1/rest/extractentities/results.json";if(f!==undefined){this.callJsonApiAsync(h,j,f)}else{this.callJsonApi(h,j);return this.response}}else{var g=this.isXml(j);if(g){var h="/identifyentity/v1/rest/extractentities/results.xml";if(f!==undefined&&f!==null){this.callXmlApiAsync(h,j,f)}else{this.callXmlApi(h,j);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyRisk=function(b){IDENTIFYAPIS.baseService.call(this,b)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyRisk);IDENTIFYAPIS.identifyRisk.prototype.checkGlobalWatchList=function(j,f){var i=this.isJson(j);if(i){var h="/identifyrisk/v1/rest/checkglobalwatchlist/results.json";if(f!==undefined){this.callJsonApiAsync(h,j,f)}else{this.callJsonApi(h,j);return this.response}}else{var g=this.isXml(j);if(g){var h="/identifyrisk/v1/rest/checkglobalwatchlist/results.xml";if(f!==undefined&&f!==null){this.callXmlApiAsync(h,j,f)}else{this.callXmlApi(h,j);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};var IDENTIFYAPIS=IDENTIFYAPIS||{};IDENTIFYAPIS.baseService=function(a){this.accessToken="Bearer "+a;this.apiAddress="https://api.pitneybowes.com/identify";this.response={}};IDENTIFYAPIS.baseService.prototype.callJsonApi=function(d,a){var b=null;this.response={};this.response.httpResponse={};try{b=$.ajax({url:this.apiAddress+d,type:"POST",data:a,async:false,headers:{"Content-type":"application/json",Accept:"application/json",Authorization:this.accessToken}});this.response.response=JSON.parse(b.responseText);if(b.status===200){this.response.status="success"}else{this.response.status="failed"}}catch(c){this.response.status="failed";if(b.responseText!==""){this.response.response=b.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}}this.response.httpResponse.status=b.status;this.response.httpResponse.statusText=b.statusText};IDENTIFYAPIS.baseService.prototype.callJsonApiAsync=function(apiUrl,postData,callback){var request=$.ajax({url:this.apiAddress+apiUrl,type:"POST",data:postData,async:true,headers:{"Content-type":"application/json",Accept:"application/json",Authorization:this.accessToken}}).done(function(responseData,status,xhr){this.response={};this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;this.response.response=JSON.parse(xhr.responseText);if(xhr.status===200){this.response.status="success"}else{this.response.status="failed"}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}}).fail(function(xhr,status,err){this.response={};this.response.status="failed";this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;if(xhr.responseText!==""){this.response.response=xhr.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}})};IDENTIFYAPIS.baseService.prototype.callXmlApi=function(d,a){var b=null;this.response={};this.response.httpResponse={};try{b=$.ajax({url:this.apiAddress+d,type:"POST",data:a,async:false,headers:{"Content-type":"application/xml",Accept:"application/xml",Authorization:this.accessToken}});this.response.response=b.responseText;if(b.status===200){this.response.status="success"}else{this.response.status="failed"}}catch(c){this.response.status="failed";if(b.responseText!==""){this.response.response=b.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}}this.response.httpResponse.status=b.status;this.response.httpResponse.statusText=b.statusText};IDENTIFYAPIS.baseService.prototype.callXmlApiAsync=function(apiUrl,postData,callback){var request=$.ajax({url:this.apiAddress+apiUrl,type:"POST",data:postData,async:true,headers:{"Content-type":"application/xml",Accept:"application/xml",Authorization:this.accessToken}}).done(function(responseData,status,xhr){this.response={};this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;this.response.response=xhr.responseText;if(xhr.status===200){this.response.status="success"}else{this.response.status="failed"}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}}).fail(function(xhr,status,err){this.response={};this.response.status="failed";this.response.httpResponse={};this.response.httpResponse.status=xhr.status;this.response.httpResponse.statusText=xhr.statusText;if(xhr.responseText!==""){this.response.response=xhr.responseText}else{this.response.response={};this.response.response.errors=[];this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."})}var callbacks=eval(callback);if(callbacks!==undefined&&callbacks!==null){callbacks(this.response)}else{alert("Callback are not available.")}})};function IDENTIFYAPIS_INHERIT(c,a){var b=new c();a.prototype=b;a.prototype.constructor=a}IDENTIFYAPIS.baseService.prototype.isJson=function(b){if(b){try{JSON.parse(b)}catch(a){return false}return true}else{return false}};IDENTIFYAPIS.baseService.prototype.isXml=function(a){if(a){try{xmlDoc=$.parseXML(a);return true}catch(b){return false}}else{return false}};IDENTIFYAPIS.identifyAddress=function(a){IDENTIFYAPIS.baseService.call(this,a)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyAddress);IDENTIFYAPIS.identifyAddress.prototype.validateMailingAddress=function(a,e){var b=this.isJson(a);if(b){var c="/identifyaddress/v1/rest/validatemailingaddress/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyaddress/v1/rest/validatemailingaddress/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyAddress.prototype.validateMailingAddressPro=function(a,e){var b=this.isJson(a);if(b){var c="/identifyaddress/v1/rest/validatemailingaddresspro/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyaddress/v1/rest/validatemailingaddresspro/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyAddress.prototype.validateMailingAddressPremium=function(a,e){var b=this.isJson(a);if(b){var c="/identifyaddress/v1/rest/validatemailingaddresspremium/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyaddress/v1/rest/validatemailingaddresspremium/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyAddress.prototype.getCityStateProvince=function(a,e){var b=this.isJson(a);if(b){var c="/identifyaddress/v1/rest/getcitystateprovince/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyaddress/v1/rest/getcitystateprovince/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyAddress.prototype.getPostalCodes=function(a,e){var b=this.isJson(a);if(b){var c="/identifyaddress/v1/rest/getpostalcodes/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyaddress/v1/rest/getpostalcodes/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyEmail=function(a){IDENTIFYAPIS.baseService.call(this,a)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyEmail);IDENTIFYAPIS.identifyEmail.prototype.validateEmailAddress=function(a,e){var b=this.isJson(a);if(b){var c="/identifyemail/v1/rest/validateemailaddress/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyemail/v1/rest/validateemailaddress/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyEntity=function(a){IDENTIFYAPIS.baseService.call(this,a)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyEntity);IDENTIFYAPIS.identifyEntity.prototype.extractEntities=function(a,e){var b=this.isJson(a);if(b){var c="/identifyentity/v1/rest/extractentities/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyentity/v1/rest/extractentities/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};IDENTIFYAPIS.identifyRisk=function(a){IDENTIFYAPIS.baseService.call(this,a)};IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService,IDENTIFYAPIS.identifyRisk);IDENTIFYAPIS.identifyRisk.prototype.checkGlobalWatchList=function(a,e){var b=this.isJson(a);if(b){var c="/identifyrisk/v1/rest/checkglobalwatchlist/results.json";if(e!==undefined){this.callJsonApiAsync(c,a,e)}else{this.callJsonApi(c,a);return this.response}}else{var d=this.isXml(a);if(d){var c="/identifyrisk/v1/rest/checkglobalwatchlist/results.xml";if(e!==undefined&&e!==null){this.callXmlApiAsync(c,a,e)}else{this.callXmlApi(c,a);return this.response}}else{throw new Error("PostData is of invalid type, it should be either json or xml.")}}};