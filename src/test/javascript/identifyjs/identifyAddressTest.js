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
 
describe("Identify address Test Suite: validateMailingAddress", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('<access token>'); //PUT TOKEN HERE
	});
    it("Identify Address test json validate address", function () {
        var identifyAddress = IA.validateMailingAddress('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    }); 
	it("Identify Address test json empty validate address", function () {
        expect( function(){ IA.validateMailingAddress(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Address test json batch validate address", function () {
		var identifyAddress = IA.validateMailingAddress('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "50 water st", "AddressLine2": "", "City": "lee", "Country": "us", "StateProvince": "ma", "PostalCode": "","user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] },{ "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "ny", "PostalCode": "","FirmName":"Pitney Bowes Software"} ] } }');
		expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
	});
	it("Identify Address test xml validate address", function () {
        var identifyAddress = IA.validateMailingAddress('<ValidateMailingAddressAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
	it("Identify Address test xml batch validate address", function () {
        var identifyAddress = IA.validateMailingAddress('<ValidateMailingAddressAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> <Row> <PostalCode></PostalCode> <StateProvince>ma</StateProvince> <AddressLine1>50 water st.</AddressLine1> <City>lee</City> <AddressLine2/> <Country>US</Country> </Row> </Input> </ValidateMailingAddressAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
 
	it("Identify Address valid batch parameters", function () {
		expect( function(){ IA.validateMailingAddress('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
});

describe("Identify address Test Suite: validateMailingAddress", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('JUNK');//testing invalid token
	});
    it("Identify Address test invalid token json", function () {
        var identifyAddress = IA.validateMailingAddress('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("Identify Address test invalid token xml", function () {
	var identifyAddress = IA.validateMailingAddress('<ValidateMailingAddressAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});

describe("Identify address Test Suite: validateMailingAddress", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('1JKtEcusTbZX7YHe1qroE66uVzJs');//testing expired token
	});
    it("Identify Address test expired token json", function () {
        var identifyAddress = IA.validateMailingAddress('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("Identify Address test expired token xml", function () {
	var identifyAddress = IA.validateMailingAddress('<ValidateMailingAddressAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});


/********************ValidateMailingAddressPro Test Cases ***************************************************/


describe("Identify address Test Suite: ValidateMailingAddressPro", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('<access token>'); //PUT TOKEN HERE
	});
    it("Identify Address test json validate address", function () {
        var identifyAddress = IA.validateMailingAddressPro('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    }); 
	it("Identify Address test json empty validate address", function () {
        expect( function(){ IA.validateMailingAddressPro(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Address test json batch validate address", function () {
		var identifyAddress = IA.validateMailingAddressPro('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "50 water st", "AddressLine2": "", "City": "lee", "Country": "us", "StateProvince": "ma", "PostalCode": "","user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] },{ "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "ny", "PostalCode": "","FirmName":"Pitney Bowes Software"} ] } }');
		expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
	});
	it("Identify Address test xml validate address", function () {
        var identifyAddress = IA.validateMailingAddressPro('<ValidateMailingAddressProAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressProAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
	it("Identify Address test xml batch validate address", function () {
        var identifyAddress = IA.validateMailingAddressPro('<ValidateMailingAddressProAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> <Row> <PostalCode></PostalCode> <StateProvince>ma</StateProvince> <AddressLine1>50 water st.</AddressLine1> <City>lee</City> <AddressLine2/> <Country>US</Country> </Row> </Input> </ValidateMailingAddressProAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
 
	it("Identify Address valid batch parameters", function () {
		expect( function(){ IA.validateMailingAddressPro('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
});

describe("Identify address Test Suite: ValidateMailingAddressPro", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('JUNK');//testing invalid token
	});
    it("ValidateMailingAddressPro test invalid token json", function () {
        var identifyAddress = IA.validateMailingAddressPro('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("ValidateMailingAddressPro test invalid token xml", function () {
	var identifyAddress = IA.validateMailingAddressPro('<ValidateMailingAddressProAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressProAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});

describe("Identify address Test Suite: ValidateMailingAddressPro", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('OJadqRaD5Lxvf57bQhqdaPANcInA');//testing expired token
	});
    it("ValidateMailingAddressPro test expired token json", function () {
        var identifyAddress = IA.validateMailingAddressPro('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("ValidateMailingAddressPro test expired token xml", function () {
	var identifyAddress = IA.validateMailingAddressPro('<ValidateMailingAddressProAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressProAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});

/********************ValidateMailingAddressPremium Test Cases ***************************************************/


describe("Identify address Test Suite: ValidateMailingAddressPremium", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('<access token>'); //PUT TOKEN HERE
	});
    it("Identify Address test json validate address premium", function () {
        var identifyAddress = IA.validateMailingAddressPremium('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    }); 
	it("Identify Address test json empty validate address premium", function () {
        expect( function(){ IA.validateMailingAddressPremium(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Address test json batch validate address premium", function () {
		var identifyAddress = IA.validateMailingAddressPremium('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "50 water st", "AddressLine2": "", "City": "lee", "Country": "us", "StateProvince": "ma", "PostalCode": "","user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] },{ "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "ny", "PostalCode": "","FirmName":"Pitney Bowes Software"} ] } }');
		expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
	});
	it("Identify Address test xml validate address premium", function () {
        var identifyAddress = IA.validateMailingAddressPremium('<ValidateMailingAddressPremiumAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressPremiumAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
	it("Identify Address test xml batch validate address premium", function () {
        var identifyAddress = IA.validateMailingAddressPremium('<ValidateMailingAddressPremiumAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> <Row> <PostalCode></PostalCode> <StateProvince>ma</StateProvince> <AddressLine1>50 water st.</AddressLine1> <City>lee</City> <AddressLine2/> <Country>US</Country> </Row> </Input> </ValidateMailingAddressPremiumAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
 
	it("Identify Address valid batch parameters - validate address premium", function () {
		expect( function(){ IA.validateMailingAddressPremium('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
});

describe("Identify address Test Suite: ValidateMailingAddressPremium", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('JUNK');//testing invalid token
	});
    it("ValidateMailingAddressPremium test invalid token json", function () {
        var identifyAddress = IA.validateMailingAddressPremium('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("ValidateMailingAddressPremium test invalid token xml", function () {
	var identifyAddress = IA.validateMailingAddressPremium('<ValidateMailingAddressPremiumAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressPremiumAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});

describe("Identify address Test Suite: ValidateMailingAddressPremium", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('OJadqRaD5Lxvf57bQhqdaPANcInA');//testing expired token
	});
    it("ValidateMailingAddressPremium test expired token json", function () {
        var identifyAddress = IA.validateMailingAddressPremium('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("ValidateMailingAddressPremium test expired token xml", function () {
	var identifyAddress = IA.validateMailingAddressPremium('<ValidateMailingAddressPremiumAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressPremiumAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});

