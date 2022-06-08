// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/SimpleXMLElement_xpath_4.phpt
  it("Testing xpath() with invalid XML", function () {
    expect(parser.parseCode("<?php\ntry {\n    simplexml_load_string(\"XXXXXXX^\", $x, 0x6000000000000001);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
