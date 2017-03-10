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
 * An identifyRisk object
 * @class
 */
 IDENTIFYAPIS.identifyRisk = function(accessToken){
	IDENTIFYAPIS.baseService.call(this, accessToken);
};
/**
 * identifyRisk inherits baseService
 * @class
 */
IDENTIFYAPIS_INHERIT(IDENTIFYAPIS.baseService, IDENTIFYAPIS.identifyRisk);



/**
 * Set API URL to post forward identifyRisk, it will call corresponding url(xml or json) based on type of postData(input request body)
 * @param postData {string} request body
 * @param callback {string} method name (optional)
 * @return response object or calls callback
 */
IDENTIFYAPIS.identifyRisk.prototype.checkGlobalWatchList = function(postData, callback){

	var isJson = this.isJson(postData);
	if(isJson){
		var apiUrl = '/identifyrisk/v1/rest/checkglobalwatchlist/results.json';
		if(callback !== undefined){
			this.callJsonApiAsync(apiUrl, postData, callback);
		}
		else{
			this.callJsonApi(apiUrl, postData);
			return this.response;
		}
	}else{
		var isXml = this.isXml(postData);
		if(isXml){
			var apiUrl = '/identifyrisk/v1/rest/checkglobalwatchlist/results.xml';
			if(callback !== undefined && callback !== null){
				this.callXmlApiAsync(apiUrl, postData, callback);
			}
			else{
				this.callXmlApi(apiUrl, postData);
				return this.response;
			}
		}else{
			throw new Error("PostData is of invalid type, it should be either json or xml.");
		}
	}
};


