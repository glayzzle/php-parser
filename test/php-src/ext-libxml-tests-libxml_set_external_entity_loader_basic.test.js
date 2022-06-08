// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/libxml_set_external_entity_loader_basic.phpt
  it("libxml_set_external_entity_loader() basic test", function () {
    expect(parser.parseCode("<?php\n$xml = <<<XML\n<!DOCTYPE foo PUBLIC \"-//FOO/BAR\" \"http://example.com/foobar\">\n<foo>bar</foo>\nXML;\n$dtd = <<<DTD\n<!ELEMENT foo (#PCDATA)>\nDTD;\nlibxml_set_external_entity_loader(\n    function ($public, $system, $context) use($dtd){\n        var_dump($public);\n        var_dump($system);\n        var_dump($context);\n        $f = fopen(\"php://temp\", \"r+\");\n        fwrite($f, $dtd);\n        rewind($f);\n        return $f;\n    }\n);\n$dd = new DOMDocument;\n$r = $dd->loadXML($xml);\nvar_dump($dd->validate());\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
