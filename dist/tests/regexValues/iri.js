"use strict";
var itsInvalid_1 = require("../itsInvalid");
var itsValid_1 = require("../itsValid");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = function (test) {
    itsInvalid_1.default('http', 'not an IRI', test);
    itsInvalid_1.default(10, 'not a String', test);
    itsValid_1.default('http://www.example.com', test);
    itsValid_1.default('http://fo-o.com/blah_blah_(wikipedia)#cite-1', test);
    itsValid_1.default('https://www.example.com/foo/?bar=b%20az&inga=42&quux', test);
    itsValid_1.default('http://userid:password@example.com:8080/', test);
    itsValid_1.default('http://userid:password@example.com/', test);
    itsValid_1.default('http://142.42.1.1:8080/', test);
    itsValid_1.default('http://foo.com/unicode_(✪)_in_parens', test);
    itsValid_1.default('http://foo.com/(something)?after=parens', test);
    itsValid_1.default('http://code.google.com/events/#&product=browser', test);
    itsValid_1.default('ftp://foo.bar/baz', test);
    itsValid_1.default('http://⌘➡例子.测试✪उदाहरण.परीकإختبار/䨹', test);
    itsValid_1.default('http://-.~_!$&\'()*+,;=:%40:80%2f::::::@example.com', test);
};
