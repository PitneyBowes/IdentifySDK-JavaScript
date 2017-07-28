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


/********************ValidateMailingAddressUSCan Test Cases ***************************************************/


describe("Identify address Test Suite: ValidateMailingAddressUSCan", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('<access token>'); //PUT TOKEN HERE
	});
    it("Identify Address test json validate address USCan", function () {
        var identifyAddress = IA.validateMailingAddressUSCan('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    }); 
	it("Identify Address test json empty validate address USCan", function () {
        expect( function(){ IA.validateMailingAddressUSCan(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Address test json batch validate address USCan", function () {
		var identifyAddress = IA.validateMailingAddressUSCan('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "50 water st", "AddressLine2": "", "City": "lee", "Country": "us", "StateProvince": "ma", "PostalCode": "","user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] },{ "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "ny", "PostalCode": "","FirmName":"Pitney Bowes Software"} ] } }');
		expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
	});
	it("Identify Address test xml validate address USCan", function () {
        var identifyAddress = IA.validateMailingAddressUSCan('<ValidateMailingAddressUSCANAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressUSCANAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
	it("Identify Address test xml batch validate address USCan", function () {
        var identifyAddress = IA.validateMailingAddressUSCan('<ValidateMailingAddressUSCANAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> <Row> <PostalCode></PostalCode> <StateProvince>ma</StateProvince> <AddressLine1>50 water st.</AddressLine1> <City>lee</City> <AddressLine2/> <Country>US</Country> </Row> </Input> </ValidateMailingAddressUSCANAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
 
	it("Identify Address valid batch parameters - validate address USCan", function () {
		expect( function(){ IA.validateMailingAddressUSCan('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
});

describe("Identify address Test Suite: validateMailingAddressUSCan", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('JUNK');//testing invalid token
	});
    it("validateMailingAddressUSCan test invalid token json", function () {
        var identifyAddress = IA.validateMailingAddressUSCan('{ "options": { "OutputCasing":"M" }, "Input": { "Row": [ { "AddressLine1": "1 Global View", "AddressLine2": "", "City": "Troy", "Country": "us", "StateProvince": "NY", "PostalCode": "","FirmName":"Pitney Bowes Software", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("validateMailingAddressUSCan test invalid token xml", function () {
	var identifyAddress = IA.validateMailingAddressUSCan('<ValidateMailingAddressUSCANAPIRequest> <options> <OutputCasing>U</OutputCasing> </options> <Input> <Row> <PostalCode>01238</PostalCode> <StateProvince>NY</StateProvince> <AddressLine1>1 Global View</AddressLine1> <City>Troy</City> <AddressLine2/> <Country>US</Country> <FirmName>Pitney Bowes Software</FirmName> </Row> </Input> </ValidateMailingAddressUSCANAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});

/********************GetCityStateProvince Test Cases ***************************************************/


describe("Identify address Test Suite: GetCityStateProvince", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('<access token>'); //PUT TOKEN HERE
	});
    it("Identify Address test json get city state province", function () {
        var identifyAddress = IA.getCityStateProvince('{ "options": { "OutputVanityCity":"Y" }, "Input": { "Row": [ { "PostalCode": "11368", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    }); 
	it("Identify Address test json empty get city state province", function () {
        expect( function(){ IA.getCityStateProvince(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Address test json batch get city state province", function () {
		var identifyAddress = IA.getCityStateProvince('{ "options": { "OutputVanityCity":"Y" }, "Input": { "Row": [ { "PostalCode": "11368","user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] },{ "PostalCode": "11208"} ] } }');
		expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
	});
	it("Identify Address test xml get city state province", function () {
        var identifyAddress = IA.getCityStateProvince('<GetCityStateProvinceAPIRequest> <options> <OutputVanityCity>Y</OutputVanityCity> </options> <Input> <Row> <PostalCode>01238</PostalCode></Row> </Input> </GetCityStateProvinceAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
	it("Identify Address test xml batch get city state province", function () {
        var identifyAddress = IA.getCityStateProvince('<GetCityStateProvinceAPIRequest> <options> <OutputVanityCity>Y</OutputVanityCity> </options> <Input> <Row> <PostalCode>01238</PostalCode> </Row> <Row> <PostalCode>11368</PostalCode> </Row> </Input> </GetCityStateProvinceAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
 
	it("Identify Address valid batch parameters - get city state province", function () {
		expect( function(){ IA.getCityStateProvince('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
});

describe("Identify address Test Suite: GetCityStateProvince", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('JUNK');//testing invalid token
	});
    it("GetCityStateProvince test invalid token json", function () {
        var identifyAddress = IA.getCityStateProvince('{ "options": { "OutputVanityCity":"Y" }, "Input": { "Row": [ { "PostalCode": "11368", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("GetCityStateProvince test invalid token xml", function () {
	var identifyAddress = IA.getCityStateProvince('<GetCityStateProvinceAPIRequest> <options> <OutputVanityCity>Y</OutputVanityCity> </options> <Input> <Row> <PostalCode>01238</PostalCode></Row></Input></GetCityStateProvinceAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});

/********************GetPostalCodes Test Cases ***************************************************/

describe("Identify address Test Suite: GetPostalCodes", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('<access token>'); //PUT TOKEN HERE
	});
    it("Identify Address test json get postal codes", function () {
        var identifyAddress = IA.getPostalCodes('{ "options": { "OutputVanityCity":"Y","OutputCityType":"Y" }, "Input": { "Row": [ { "City": "Corona", "StateProvince":"NY", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    }); 
	it("Identify Address test json empty get postal codes", function () {
        expect( function(){ IA.getCityStateProvince(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Address test json batch get postal codes", function () {
		var identifyAddress = IA.getPostalCodes('{ "options": { "OutputVanityCity":"Y","OutputCityType":"Y" }, "Input": { "Row": [ { "City": "Corona", "StateProvince":"NY","user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] },{ "City": "Los Angeles", "StateProvince":"California"} ] } }');
		expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
	});
	it("Identify Address test xml get postal codes", function () {
        var identifyAddress = IA.getPostalCodes('<GetPostalCodesAPIRequest> <options> <OutputVanityCity>Y</OutputVanityCity> <OutputCityType>Y</OutputCityType> </options> <Input> <Row> <City>Corona</City><StateProvince>NY</StateProvince></Row> </Input> </GetPostalCodesAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
	it("Identify Address test xml batch get postal codes", function () {
        var identifyAddress = IA.getPostalCodes('<GetPostalCodesAPIRequest> <options> <OutputVanityCity>Y</OutputVanityCity> </options> <Input> <Row> <City>Corona</City><StateProvince>NY</StateProvince></Row> <Row> <City>Los Angeles</City><StateProvince>California</StateProvince> </Row> </Input> </GetPostalCodesAPIRequest>');
        expect(identifyAddress).not.toBeNull();
		expect(identifyAddress.httpResponse.status).toEqual(200);
    });
 
	it("Identify Address valid batch parameters - get postal codes", function () {
		expect( function(){ IA.getPostalCodes('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
});

describe("Identify address Test Suite: GetPostalCodes", function(){
	var IA;	
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyAddress('JUNK');//testing invalid token
	});
    it("GetPostalCodes test invalid token json", function () {
        var identifyAddress = IA.getPostalCodes('{ "options": { "OutputVanityCity":"Y","OutputCityType":"Y" }, "Input": { "Row": [ { "City": "Corona", "StateProvince":"NY", "user_fields":[{"name":"name1","value":"value1"},{"name":"name2","value":"value2"}] } ] } }');
		expect(identifyAddress.httpResponse.status).toEqual(401);
    }); 
	it("GetPostalCodes test invalid token xml", function () {
	var identifyAddress = IA.getPostalCodes('<GetPostalCodesAPIRequest> <options> <OutputVanityCity>Y</OutputVanityCity> </options> <Input> <Row> <City>Corona</City><StateProvince>NY</StateProvince></Row></Input></GetPostalCodesAPIRequest>');
	expect(identifyAddress.httpResponse.status).toEqual(401);
	}); 
});
