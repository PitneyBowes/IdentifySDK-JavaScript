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
 
describe("Identify Email Test Suite: validateEmailAddress", function(){
	var IA;
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyEmail('<access token>'); //PUT TOKEN HERE
	});
    it("Identify Email test json validate email", function () {
        var identifyEmail = IA.validateEmailAddress('{"options": {},"Input": {"Row": [{"emailAddress": "bgates@microsoft.com"}]}}');
        expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(200);
    });
	 it("Identify Email test json empty validate email", function () {
        expect( function(){ IA.validateEmailAddress(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Email test json batch validate email", function () {
		var identifyEmail = IA.validateEmailAddress('{ "options": {},  "Input": {"Row": [{"rtc": "true", "bogus": "true","role": "","emps": "","fccwireless": "", "language": "",  "complain": "", "disposable": "", "atc": "","emailAddress": "bgates@microsoft.com", "rtc_timeout": "",  "user_fields":[ {"name": "User1", "value": "Value1" }  ] }, {"rtc": "false", "bogus": "false","role": "", "emps": "", "fccwireless": "", "language": "","complain": "", "disposable": "",  "atc": "", "emailAddress": "bgates@microsoft.com", "rtc_timeout": "","user_fields":[{  "name": "User1", "value": "Value1" } ]}]}}');
		expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(200);
	});
	it("Identify Email test xml validate email", function () {
        var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest> <Input> <Row>     <emailAddress>VS@addresstest.com</emailAddress> </Row></Input></ValidateEmailAddressAPIRequest>');
        expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(200);
    });
	it("Identify Email test xml batch validate email", function () {
        var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest> <Input> <Row><emailAddress>VS@addresstest.com</emailAddress> </Row><Row><emailAddress>Sandhya.gupta@pb.com</emailAddress> </Row></Input></ValidateEmailAddressAPIRequest>');
        expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(200);
    });

	it("Identify Email valid batch parameters", function () {
		expect( function(){ IA.validateEmailAddress('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
});

describe("Identify Email Test Suite: validateEmailAddress", function(){
	var IA;
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyEmail('JUNK');//testing invalid token
	});
    it("Identify Email test invalid token json", function () {
        var identifyEmail = IA.validateEmailAddress('{ "options":{},"Input": {"Row": [ {  "emailAddress": "bgates@microsoft.com"}]}}');
		expect(identifyEmail.httpResponse.status).toEqual(401);
    });
	it("Identify Email test invalid token xml", function () {
	var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest> <Input> <Row><emailAddress>VS@addresstest.com</emailAddress> </Row><Row><emailAddress>Sandhya.gupta@pb.com</emailAddress> </Row></Input></ValidateEmailAddressAPIRequest>');
	expect(identifyEmail.httpResponse.status).toEqual(401);
	});
});

describe("Identify Email Test Suite: validateEmailAddress", function(){
	var IA;
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyEmail('1JKtEcusTbZX7YHe1qroE66uVzJs');//testing expired token
	});
    it("Identify Email test expired token json", function () {
        var identifyEmail = IA.validateEmailAddress('{ "options":{},"Input": {"Row": [ {  "emailAddress": "bgates@microsoft.com"}]}}');
		expect(identifyEmail.httpResponse.status).toEqual(401);
    });
	it("Identify Email test expired token xml", function () {
	var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest> <Input> <Row><emailAddress>VS@addresstest.com</emailAddress> </Row><Row><emailAddress>Sandhya.gupta@pb.com</emailAddress> </Row></Input></ValidateEmailAddressAPIRequest>');
	expect(identifyEmail.httpResponse.status).toEqual(401);
	});
});
