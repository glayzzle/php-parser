// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/soap/tests/bug80672.phpt
  it("Bug #80672 Null Dereference in SoapClient", function () {
    expect(parser.parseCode("<?php\ntry {\n    $client = new SoapClient(__DIR__ . \"/bug80672.xml\");\n    $query = $soap->query(array('sXML' => 'something'));\n} catch(SoapFault $e) {\n    print $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
