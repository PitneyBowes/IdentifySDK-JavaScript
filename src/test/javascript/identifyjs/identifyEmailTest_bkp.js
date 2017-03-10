
describe("Identify Email Test Suite: validateEmailAddress", function(){
	var IA;
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyEmail('<access_token>'); //PUT TOKEN HERE
	});
    it("Identify Email test json validate email", function () {
        var identifyEmail = IA.validateEmailAddress('{"Input": {"Row": [{"emailAddress": "bgates@microsoft.com"}]}}');
        expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(200);
    });
	 it("Identify Email test json empty validate email", function () {
        var identifyEmail = IA.validateEmailAddress('');
        expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(500);
    });
	it("Identify Email test json batch validate email", function () {
		var identifyEmail = IA.validateEmailAddress('{"Input": { "Row": [{ "rtc": "true", "bogus": "true", "role": "", "emps": "", "fccwireless": "", "language": "", "complain": "", "disposable": "", "atc": "", "emailAddress": "bgates@microsoft.com", "rtc_timeout": "", "user_fields": [{ "name": "User1", "value": "Value1" }] }, { "rtc": "true", "bogus": "true", "role": "", "emps": "", "fccwireless": "", "language": "", "complain": "", "disposable": "", "atc": "", "emailAddress": "bgates@microsoft.com", "rtc_timeout": "", "user_fields": [{ "name": "User1", "value": "Value1" }] }] } }');
		expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(200);
	});
	it("Identify Email test xml validate email", function () {
        var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest><Input><Row><emailAddress>VS@addresstest.com</emailAddress> </Row></Input></ValidateEmailAddressAPIRequest>');
        expect(identifyEmail).not.toBeNull();
		expect(identifyEmail.httpResponse.status).toEqual(200);
    });
	it("Identify Email test xml batch validate email", function () {
        var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest> <Input><Row><emailAddress>VS@addresstest.com</emailAddress> <Row><emailAddress>Sandhya.gupta@pb.com</emailAddress> </Row></Row></Input></ValidateEmailAddressAPIRequest>');
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
        var identifyEmail = IA.validateEmailAddress('{"Input": {"Row": [{"emailAddress": "bgates@microsoft.com"}]}}');
		expect(identifyEmail.httpResponse.status).toEqual(401);
    });
	it("Identify Email test invalid token xml", function () {
	var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest> <Input><Row><emailAddress>VS@addresstest.com</emailAddress> <Row><emailAddress>Sandhya.gupta@pb.com</emailAddress> </Row></Row></Input></ValidateEmailAddressAPIRequest>');
	expect(identifyEmail.httpResponse.status).toEqual(401);
	});
});

describe("Identify Email Test Suite: validateEmailAddress", function(){
	var IA;
	beforeEach(function() {
		IA = new IDENTIFYAPIS.identifyEmail('1JKtEcusTbZX7YHe1qroE66uVzJs');//testing expired token
	});
    it("Identify Email test expired token json", function () {
        var identifyEmail = IA.validateEmailAddress('{"Input": {"Row": [{"emailAddress": "bgates@microsoft.com"}]}}');
		expect(identifyEmail.httpResponse.status).toEqual(401);
    });
	it("Identify Email test expired token xml", function () {
	var identifyEmail = IA.validateEmailAddress('<ValidateEmailAddressAPIRequest> <Input><Row><emailAddress>VS@addresstest.com</emailAddress> <Row><emailAddress>Sandhya.gupta@pb.com</emailAddress> </Row></Row></Input></ValidateEmailAddressAPIRequest>');
	expect(identifyEmail.httpResponse.status).toEqual(401);
	});
});
