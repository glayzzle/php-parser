// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/SimpleXMLElement_addAttribute_basic.phpt
  it("SimpleXMLElement->addAttribute()", function () {
    expect(parser.parseCode("<?php\n    $simple = simplexml_load_file(__DIR__.\"/book.xml\");\n    $simple->addAttribute('type','novels');\n    var_dump($simple->attributes());\n    echo \"Done\";\n?>")).toMatchSnapshot();
  });
});
