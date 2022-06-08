// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/libxml_set_external_entity_loader_variation1.phpt
  it("libxml_set_external_entity_loader() variation: resolve externals and entities", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\n$xml = <<<XML\n<!DOCTYPE foo PUBLIC \"-//FOO/BAR\" \"http://example.com/foobar\">\n<foo>bar&fooz;</foo>\nXML;\n$dtd = <<<DTD\n<!ELEMENT foo (#PCDATA)>\n<!ENTITY % fooentity PUBLIC\n   \"-//FOO/ENTITY\"\n   \"fooentity.ent\">\n%fooentity;\nDTD;\n$entity = <<<ENT\n<!ENTITY fooz \"baz\">\nENT;\nlibxml_set_external_entity_loader(\n    function ($public, $system, $context) use($dtd,$entity){\n        static $first = true;\n        var_dump($public);\n        var_dump($system);\n        var_dump($context);\n        $f = fopen(\"php://temp\", \"r+\");\n        fwrite($f, $first ? $dtd : $entity);\n        $first = false;\n        rewind($f);\n        return $f;\n    }\n);\n$dd = new DOMDocument;\n$dd->substituteEntities = true;\n$dd->resolveExternals = true;\n$r = $dd->loadXML($xml);\nvar_dump($dd->validate());\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
