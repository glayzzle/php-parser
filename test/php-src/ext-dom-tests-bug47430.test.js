// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug47430.phpt
  it("Bug #47430 (Errors after writing to nodeValue parameter of an absent previousSibling).", function () {
    expect(parser.parseCode("<?php\n$xml = '<?xml\nversion=\"1.0\"?><html><p><i>Hello</i></p><p><i>World!</i></p></html>';\n$dom = new DOMDocument();\n$dom->loadXML($xml);\n$elements = $dom->getElementsByTagName('i');\nforeach ($elements as $i) {\n    try {\n        $i->previousSibling->nodeValue = '';\n    } catch (Error $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\n$arr = array();\n$arr[0] = 'Value';\nprint_r($arr);\n?>")).toMatchSnapshot();
  });
});
