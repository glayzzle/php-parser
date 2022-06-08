// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/SimpleXMLElement_xpath.phpt
  it("Testing xpath() with invalid XML", function () {
    expect(parser.parseCode("<?php\n// gracefully recover from parsing of invalid XML; not available in PHP\nconst XML_PARSE_RECOVER = 1;\n// we're not interested in checking concrete warnings regarding invalid XML\n$xml = @simplexml_load_string(\"XXXXXXX^\", 'SimpleXMLElement', XML_PARSE_RECOVER);\n// $xml is supposed to hold a SimpleXMLElement, but not FALSE/NULL\ntry {\n    var_dump($xml->xpath(\"BBBB\"));\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
