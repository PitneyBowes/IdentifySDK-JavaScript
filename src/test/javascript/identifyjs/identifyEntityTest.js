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
 
describe("Identify Entity Test Suite: extractEntities", function(){
	var IE;	
	beforeEach(function() {
		IE = new IDENTIFYAPIS.identifyEntity('<access token>'); //PUT TOKEN HERE
	});
	
	it("Identify Entity test batch size should not be more than 1 json", function () {
        var identifyEntity = IE.extractEntities('{ "Input": { "Row": [ { "PlainText": "Robert Gabriel Mugabee" }, { "PlainText": "Kantry" }, { "PlainText": "Bank of Cuba" }, { "PlainText": "Jason Bourne" }, { "PlainText": "Erik Arguelles" }, { "PlainText": "Robert Gabriel Mugabee" }, { "PlainText": "Kantry" }, { "PlainText": "Bank of Cuba" }, { "PlainText": "Jason Bourne" }, { "PlainText": "Erik Arguelles" }, { "PlainText": "Erik Arguelles" } ] } }');
        expect(identifyEntity).not.toBeNull();
		expect(identifyEntity.response.errors.errorDescription).toEqual('Batch size should not be more than 1');
		expect(identifyEntity.httpResponse.status).toEqual(500);
    });
	
	it("Identify Entity test batch size should not be more than 1 xml", function () {
        var identifyEntity = IE.extractEntities('<ExtractEntitiesAPIRequest> <Input> <Row> <PlainText>Robert Gabriel Mugabee</PlainText> </Row> <Row> <PlainText>Kantry</PlainText> </Row> <Row> <PlainText>Bank of Cuba</PlainText> </Row> <Row> <PlainText>Jason Bourne</PlainText> </Row> <Row> <PlainText>Erik Arguelles</PlainText> </Row> <Row> <PlainText>Robert Gabriel Mugabee</PlainText> </Row> <Row> <PlainText>Kantry</PlainText> </Row> <Row> <PlainText>Bank of Cuba</PlainText> </Row> <Row> <PlainText>Jason Bourne</PlainText> </Row> <Row> <PlainText>Erik Arguelles</PlainText> </Row> <Row> <PlainText>Erik Arguelles</PlainText></Row> <Row><PlainText>Barack Obama</PlainText></Row> <Row><PlainText>Donald Trump</PlainText></Row> <Row><PlainText>Hillary Clinton</PlainText></Row></Input> </ExtractEntitiesAPIRequest>');
        expect(identifyEntity).not.toBeNull();
		expect(identifyEntity.httpResponse.status).toEqual(500);
    }); 
	
	
	
	
    it("Identify Entity test json extract entities", function () {
        var identifyEntity = IE.extractEntities('{ "Input": { "Row": [{ "PlainText": "Jason Bourne" }] } }');
		console.log(JSON.stringify(identifyEntity,null,4));
        expect(identifyEntity).not.toBeNull();
		expect(identifyEntity.httpResponse.status).toEqual(200);
    });  
	it("Identify Entity test empty plain text", function () {
        expect( function(){ IE.extractEntities(''); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Entity test null plain text", function () {
        expect( function(){ IE.extractEntities(null); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    });
	it("Identify Entity test xml extract entities", function () {
        var identifyEntity = IE.extractEntities('<ExtractEntitiesAPIRequest> <Input> <Row> <PlainText>Jason Bourne</PlainText> </Row> </Input> </ExtractEntitiesAPIRequest>');
        expect(identifyEntity).not.toBeNull();
		expect(identifyEntity.httpResponse.status).toEqual(200);
    });
	it("Identify Entity valid parameters", function () {
		expect( function(){ IE.extractEntities('Neither xml nor json'); } ).toThrow(new Error("PostData is of invalid type, it should be either json or xml."));
    }); 
});

describe("Identify Entity Test Suite: extractEntities", function(){
	var IE;	
	beforeEach(function() {
		IE = new IDENTIFYAPIS.identifyEntity('JUNK');//testing invalid token
	});
    it("Identify Entity test invalid token json", function () {
        var identifyEntity = IE.extractEntities('{ "Input": { "Row": [{ "PlainText": "Jason Bourne" }] } }');
		console.log("testing:"+identifyEntity.response.errors.errorDescription);
		console.log(JSON.stringify(identifyEntity,null,4));
		expect(identifyEntity.response.errors.errorDescription).toEqual('Invalid Access Token');
		expect(identifyEntity.httpResponse.status).toEqual(401);
    }); 
	it("Identify Entity test invalid token xml", function () {
	var identifyEntity = IE.extractEntities('<ExtractEntitiesAPIRequest> <Input> <Row> <PlainText>Jason Bourne</PlainText> </Row> </Input> </ExtractEntitiesAPIRequest>');
	expect(identifyEntity.httpResponse.status).toEqual(401);
	console.log(JSON.stringify(identifyEntity,null,4));
	
	}); 
});




