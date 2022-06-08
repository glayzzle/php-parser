// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug38347.phpt
  it("Bug #38347 (Segmentation fault when using foreach with an unknown/empty SimpleXMLElement)", function () {
    expect(parser.parseCode("<?php\nfunction iterate($xml)\n{\n    print_r($xml);\n    foreach ($xml->item as $item) {\n        echo \"This code will crash!\";\n    }\n}\n$xmlstr = \"<xml><item>Item 1</item><item>Item 2</item></xml>\";\n$xml = simplexml_load_string($xmlstr);\niterate($xml->unknown);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
