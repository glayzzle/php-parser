// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom_xinclude.phpt
  it("Test: Xinclude and Streams", function () {
    expect(parser.parseCode("<?php\n$dom = new domdocument;\n$data = file_get_contents(__DIR__.\"/xinclude.xml\");\n$reldir = str_replace(getcwd(),\".\",__DIR__);\nif (DIRECTORY_SEPARATOR == '\\\\') {\n    $reldir = str_replace('\\\\',\"/\", $reldir);\n}\n$data = str_replace('compress.zlib://ext/dom/tests/','compress.zlib://'.$reldir.\"/\", $data);\n$dom->loadXML($data);\n$dom->xinclude();\nprint $dom->saveXML().\"\\n\";\nforeach ($dom->documentElement->childNodes as $node) {\n    print $node->nodeName.\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
