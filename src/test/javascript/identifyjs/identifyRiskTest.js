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
 
describe("Identify Risk Test Suite: checkGlobalWatchList", function(){
	var IR;	
	beforeEach(function() {
		IR = new IDENTIFYAPIS.identifyRisk('<access token>'); //PUT TOKEN HERE
	});
	
	it("Identify Risk test batch size should not be more than 10 json", function () {
        var identifyRisk = IR.checkGlobalWatchList('{ "Input": { "Row": [ { "Name": "Robert Gabriel Mugabee", "DOB": "21-02-1924", "IDNumber": "AD001095" }, { "Name": "Kantry", "AddressLine1": "13/2 Begovaya Street", "Country": "Russia" }, { "Name": "Bank of Cuba" }, { "Name": "Abu ABDALLAH", "Nationality": "Saudi Arabian" }, { "Name": "Erik Arguelles", "DOB": "01-10-1982" }, { "Name": "Robert Gabriel Mugabee", "DOB": "21-02-1924", "IDNumber": "AD001095" }, { "Name": "Kantry", "AddressLine1": "13/2 Begovaya Street", "Country": "Russia" }, { "Name": "Bank of Cuba" }, { "Name": "Abu ABDALLAH", "Nationality": "Saudi Arabian" }, { "Name": "Erik Arguelles", "DOB": "01-10-1982" }, { "Name": "Erik Arguelles", "DOB": "01-10-1982" } ] } }');
        expect(identifyRisk).not.toBeNull();
		expect(identifyRisk.response.errors.errorDescription).toEqual('Batch size should not be more than 10');
		expect(identifyRisk.httpResponse.status).toEqual(500);
    });
	
	it("Identify Risk test batch size should not be more than 10 xml", function () {
        var identifyRisk = IR.checkGlobalWatchList(' <CheckGlobalWatchListAPIRequest> <Input> <Row> <DOB>21-02-1924</DOB> <IDNumber>AD001095</IDNumber> <Name>Robert Gabriel Mugabee</Name> </Row> <Row> <AddressLine1>13/2 Begovaya Street</AddressLine1> <Country>Russia</Country> <Name>Kantry</Name> </Row> <Row> <Name>Bank of Cuba</Name> </Row> <Row> <Name>Abu ABDALLAH</Name> <Nationality>Saudi Arabian</Nationality> </Row> <Row> <DOB>01-10-1982</DOB> <Name>Erik Arguelles</Name> </Row> <Row> <DOB>21-02-1924</DOB> <IDNumber>AD001095</IDNumber> <Name>Robert Gabriel Mugabee</Name> </Row> <Row> <AddressLine1>13/2 Begovaya Street</AddressLine1> <Country>Russia</Country> <Name>Kantry</Name> </Row> <Row> <Name>Bank of Cuba</Name> </Row> <Row> <Name>Abu ABDALLAH</Name> <Nationality>Saudi Arabian</Nationality> </Row> <Row> <DOB>01-10-1982</DOB> <Name>Erik Arguelles</Name> </Row> <Row> <DOB>01-10-1982</DOB> <Name>Erik Arguelles</Name> </Row> </Input> </CheckGlobalWatchListAPIRequest>');
        expect(identifyRisk).not.toBeNull();
		expect(identifyRisk.httpResponse.status).toEqual(500);
    }); 
	
	
	
	
    it("Identify Risk test json validate record", function () {
        var identifyRisk = IR.checkGlobalWatchList('{ "Input": { "Row": [{ "Name": "Abu ABDALLAH", "Nationality": "Saudi Arabian" }] } }');
		console.log(JSON.stringify(identifyRisk,null,4));
        expect(identifyRisk).not.toBeNull();
		expect(identifyRisk.httpResponse.status).toEqual(200);
    });  
	 it("Identify Risk test empty validate record", function () {
        
        expect( function(){ IR.checkGlobalWatchList(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Risk test json batch validate record", function () {
		var identifyRisk = IR.checkGlobalWatchList('{ "Input": { "Row": [{ "Name": "Abu ABDALLAH", "Nationality": "Saudi Arabian" }, { "Name": "Bank of Cuba" } ] } }');
		expect(identifyRisk).not.toBeNull();
		expect(identifyRisk.httpResponse.status).toEqual(200);
	});
	it("Identify Risk test xml validate record", function () {
        var identifyRisk = IR.checkGlobalWatchList('<CheckGlobalWatchListAPIRequest> <Input> <Row> <Name>Abu ABDALLAH</Name> <Nationality>Saudi Arabian</Nationality> </Row> </Input> </CheckGlobalWatchListAPIRequest>');
        expect(identifyRisk).not.toBeNull();
		expect(identifyRisk.httpResponse.status).toEqual(200);
    });
	it("Identify Risk test xml batch validate record", function () {
        var identifyRisk = IR.checkGlobalWatchList('<CheckGlobalWatchListAPIRequest> <Input> <Row> <Name>Abu ABDALLAH</Name> <Nationality>Saudi Arabian</Nationality> </Row> <Row> <Name>Bank of Cuba</Name> </Row> </Input> </CheckGlobalWatchListAPIRequest> ');
        expect(identifyRisk).not.toBeNull();
		expect(identifyRisk.httpResponse.status).toEqual(200);
    });
 
	it("Identify Risk valid batch parameters", function () {
		expect( function(){ IR.checkGlobalWatchList('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    }); 
});

describe("Identify Risk Test Suite: checkGlobalWatchList", function(){
	var IR;	
	beforeEach(function() {
		IR = new IDENTIFYAPIS.identifyRisk('JUNK');//testing invalid token
	});
    it("Identify Risk test invalid token json", function () {
        var identifyRisk = IR.checkGlobalWatchList('{ "Input": { "Row": [{ "Name": "Abu ABDALLAH", "Nationality": "Saudi Arabian" }] } }');
		console.log("testing:"+identifyRisk.response.errors.errorDescription);
		console.log(JSON.stringify(identifyRisk,null,4));
		expect(identifyRisk.response.errors.errorDescription).toEqual('Invalid Access Token');
		expect(identifyRisk.httpResponse.status).toEqual(401);
    }); 
	it("Identify Risk test invalid token xml", function () {
	var identifyRisk = IR.checkGlobalWatchList('<CheckGlobalWatchListAPIRequest> <Input> <Row> <Name>Abu ABDALLAH</Name> <Nationality>Saudi Arabian</Nationality> </Row> </Input> </CheckGlobalWatchListAPIRequest>');
	expect(identifyRisk.httpResponse.status).toEqual(401);
	console.log(JSON.stringify(identifyRisk,null,4));
	
	}); 
});

describe("Identify Risk Test Suite: checkGlobalWatchList", function(){
	var IR;	
	beforeEach(function() {
		IR = new IDENTIFYAPIS.identifyRisk('cvbZIAf1lGdYA9KTvGAVSvLludXn');//testing expired token
	});
    it("Identify Risk test expired token json", function () {
        var identifyRisk = IR.checkGlobalWatchList('{ "Input": { "Row": [{ "Name": "Abu ABDALLAH", "Nationality": "Saudi Arabian" }] } }');
		expect(identifyRisk.httpResponse.status).toEqual(401);
		expect(identifyRisk.response.errors.errorDescription).toEqual('Access Token Expired');
    }); 
	it("Identify Risk test expired token xml", function () {
	var identifyRisk = IR.checkGlobalWatchList('<CheckGlobalWatchListAPIRequest> <Input> <Row> <Name>Abu ABDALLAH</Name> <Nationality>Saudi Arabian</Nationality> </Row> </Input> </CheckGlobalWatchListAPIRequest>');
	expect(identifyRisk.httpResponse.status).toEqual(401);
	}); 
});



describe("Identify Risk Test Suite: checkGlobalWatchList", function(){
	var IR;	
	beforeEach(function() {
		IR = new IDENTIFYAPIS.identifyRisk('alneDJfS9DNl9Dfb8vGkKhEGlORA');//User quota expired
	});
    it("Identify Risk test quota expired token json", function () {
        var identifyRisk = IR.checkGlobalWatchList('{ "Input": { "Row": [{ "Name": "Abu ABDALLAH", "Nationality": "Saudi Arabian" }] } }');
		expect(identifyRisk.httpResponse.status).toEqual(500);
		expect(identifyRisk.response.errors.errorDescription).toEqual('Request exceeds the allowed quota per month');
    }); 
	it("Identify Risk test quota expired token xml", function () {
	var identifyRisk = IR.checkGlobalWatchList('<CheckGlobalWatchListAPIRequest> <Input> <Row> <Name>Abu ABDALLAH</Name> <Nationality>Saudi Arabian</Nationality> </Row> </Input> </CheckGlobalWatchListAPIRequest>');
	expect(identifyRisk.httpResponse.status).toEqual(500);
	}); 
});

