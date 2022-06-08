// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_savexml_basic.phpt
  it("DOM Document : save and saveXML", function () {
    expect(parser.parseCode("<?php\n$xml = <<< EOXML\n<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<courses>\n    <!-- Hello World! -->\n    <aNode>\n        <childNode>\n            <childlessNode />\n        </childNode>\n    </aNode>\n</courses>\nEOXML;\n$dom = new DOMDocument();\n$dom->loadXML($xml);\n$root = $dom->documentElement;\n$directory = __DIR__;\n$filename = $directory.\"/tmp_dom_savexml\".time();\nvar_dump($dom->save($filename));\n$result = file_get_contents($filename);\nvar_dump($result == $dom->saveXML());\nunlink($filename);\n?>")).toMatchSnapshot();
  });
});
