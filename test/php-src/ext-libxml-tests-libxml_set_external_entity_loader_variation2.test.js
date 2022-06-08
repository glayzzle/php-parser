// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/libxml_set_external_entity_loader_variation2.phpt
  it("libxml_set_external_entity_loader() variation: restore original handler; returning NULL", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\n$xml = <<<XML\n<!DOCTYPE foo PUBLIC \"-//FOO/BAR\" \"foobar.dtd\">\n<foo>bar</foo>\nXML;\n$dtd = <<<DTD\n<!ELEMENT foo (#PCDATA)>\nDTD;\nlibxml_set_external_entity_loader(\n    function ($public, $system, $context) {\n        var_dump($public,$system);\n        return null;\n    }\n);\n$dd = new DOMDocument;\n$r = $dd->loadXML($xml);\nvar_dump($dd->validate());\nlibxml_set_external_entity_loader(NULL);\nfile_put_contents(__DIR__ . \"/foobar.dtd\", $dtd);\nvar_dump($dd->validate());\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
