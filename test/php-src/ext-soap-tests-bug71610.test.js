// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug71610.phpt
  it("SOAP Bug #71610 - Type Confusion Vulnerability - SOAP / make_http_soap_request()", function () {
    expect(parser.parseCode("<?php\n$exploit = unserialize('O:10:\"SoapClient\":3:{s:3:\"uri\";s:1:\"a\";s:8:\"location\";s:19:\"http://example.org/\";s:8:\"_cookies\";a:1:{s:8:\"manhluat\";a:3:{i:0;s:0:\"\";i:1;N;i:2;N;}}}}');\ntry {\n$exploit->blahblah();\n} catch(SoapFault $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
