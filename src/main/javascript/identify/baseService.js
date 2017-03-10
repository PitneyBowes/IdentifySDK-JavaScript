/*******************************************************************************
 *  Copyright 2016 Pitney Bowes Inc
 *  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 *   "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
 *   See the License for the specific language governing permissions and limitations under the License.
 *******************************************************************************/

/**
 * IDENTIFYAPIS_BASESERVICE package declaration.
 * This declaration makes sure to not erase the
 * current declaration. If the package does not
 * exist an empty object is created.
 * @default {}
 */
var IDENTIFYAPIS = IDENTIFYAPIS || {};

/**
 * A baseService object
 * @class
 */
IDENTIFYAPIS.baseService = function(accessToken){
	
	this.accessToken = 'Bearer '+accessToken;
	this.apiAddress = 'https://api.pitneybowes.com/identify';
	
	this.response = {};
};

/**
 * Call Json API URL and set response property
 * @param apiUrl {string} input api url
 * @param postData {string} input address data
 */
IDENTIFYAPIS.baseService.prototype.callJsonApi = function(apiUrl, postData){
	var request = null;
	this.response = {};
	this.response.httpResponse = {};
	try {
		request = $.ajax({
			url: this.apiAddress+apiUrl,
			type: 'POST',
			data: postData,
			async: false,
			headers: {
				'Content-type': 'application/json',
				'Accept': 'application/json',
				'Authorization':this.accessToken
			}
		});
		
		
		this.response.response = JSON.parse(request.responseText);
		if(request.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
	} catch(e){
		this.response.status = 'failed';
		if(request.responseText !== ""){
			this.response.response = request.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."});
		}
	}
	this.response.httpResponse.status = request.status;
	this.response.httpResponse.statusText = request.statusText;
	};
/**
 * Call Json API URL asynchronously and set response property
 * @param  apiUrl {string} relative apiUrl
 * @param  postData {string} request body
 * @param  callback {string} callback method name
 */
IDENTIFYAPIS.baseService.prototype.callJsonApiAsync = function(apiUrl, postData, callback){
	var request = $.ajax({
		url: this.apiAddress+apiUrl,
		type: 'POST',
		data: postData,
		async: true,
		headers: {
			'Content-type': 'application/json',
			'Accept': 'application/json',
			'Authorization': this.accessToken
		}
	}).done(function (responseData, status, xhr) {
		this.response = {};
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		this.response.response = JSON.parse(xhr.responseText);
		if(xhr.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
		/*jslint evil: true */
		var callbacks = eval(callback);
		if(callbacks !== undefined && callbacks !== null){
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	}).fail(function(xhr, status, err){
		this.response = {};
		this.response.status = 'failed';
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		if(xhr.responseText !== ""){
			this.response.response = xhr.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."});
		}
		/*jslint evil: true */
		var callbacks = eval(callback);
		if(callbacks !== undefined && callbacks !== null){
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	});
};

/**
 * Call API URL and set response property
 * @param apiUrl {string} relative apiUrl
 * @param postData {string} input address data
 */
IDENTIFYAPIS.baseService.prototype.callXmlApi = function(apiUrl, postData){
	var request = null;
	this.response = {};
	this.response.httpResponse = {};
	try {
		request = $.ajax({
			url: this.apiAddress+apiUrl,
			type: 'POST',
			data: postData,
			async: false,
			headers: {
				'Content-type': 'application/xml',
				'Accept': 'application/xml',
				'Authorization':this.accessToken
			}
		});
		this.response.response = request.responseText;
		if(request.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
	} catch(e){
		this.response.status = 'failed';
		if(request.responseText !== ""){
			this.response.response = request.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."});
		}
	}
	this.response.httpResponse.status = request.status;
	this.response.httpResponse.statusText = request.statusText;
	};



/**
 * Call API URL and set response property
 * @param  apiUrl {string} relative apiUrl
 * @param  postData {string} request body
 * @param  callback {string} callback method name
 */
IDENTIFYAPIS.baseService.prototype.callXmlApiAsync = function(apiUrl, postData, callback){
	var request = $.ajax({
		url: this.apiAddress+apiUrl,
		type: 'POST',
		data: postData,
		async: true,
		headers: {
			'Content-type': 'application/xml',
			'Accept': 'application/xml',
			'Authorization': this.accessToken
		}
	}).done(function (responseData, status, xhr) {
		this.response = {};
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		this.response.response = xhr.responseText;
		if(xhr.status === 200){
			this.response.status = 'success';
		}
		else{
			this.response.status = 'failed';
		}
		/*jslint evil: true */
		var callbacks = eval(callback);
		if(callbacks !== undefined && callbacks !== null){
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	}).fail(function(xhr, status, err){
		this.response = {};
		this.response.status = 'failed';
		this.response.httpResponse = {};
		this.response.httpResponse.status = xhr.status;
		this.response.httpResponse.statusText = xhr.statusText;
		if(xhr.responseText !== ""){
			this.response.response = xhr.responseText;
		}
		else{
			this.response.response = {};
			this.response.response.errors = [];
			this.response.response.errors.push({errorCode:"PB-APIM-ERR-1000",errorDescription:"Internal server error encountered."});
		}
		/*jslint evil: true */
		var callbacks = eval(callback);
		if(callbacks !== undefined && callbacks !== null){
			callbacks(this.response);
		}
		else{
			alert('Callback are not available.');
		}
	});
};

function IDENTIFYAPIS_INHERIT(SuperType, SubType){
    var p = new SuperType();
    SubType.prototype = p;
    SubType.prototype.constructor = SubType;
}


IDENTIFYAPIS.baseService.prototype.isJson = function(str) {
	if(str){
		try {
			JSON.parse(str);
		} catch (e) {
			return false;
		}
		return true;
	}else{
		return false;
	}
}


IDENTIFYAPIS.baseService.prototype.isXml = function(xml){
    if(xml){
		try {
			xmlDoc = $.parseXML(xml);
			return true;
		} catch (err) {
			return false;
    }
	}else{
			return false;
	}
}

