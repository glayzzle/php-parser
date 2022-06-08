// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/libxml_disable_entity_loader.phpt
  it("libxml_disable_entity_loader()", function () {
    expect(parser.parseCode("<?php\n$xml = <<<EOT\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE test [<!ENTITY xxe SYSTEM \"XXE_URI\">]>\n<foo>&xxe;</foo>\nEOT;\n$dir = str_replace('\\\\', '/', __DIR__);\n$xml = str_replace('XXE_URI', $dir . '/libxml_disable_entity_loader_payload.txt', $xml);\nfunction parseXML($xml) {\n  $doc = new DOMDocument();\n  $doc->resolveExternals = true;\n  $doc->substituteEntities = true;\n  $doc->validateOnParse = false;\n  $doc->loadXML($xml, 0);\n  return $doc->saveXML();\n}\nvar_dump(strpos(parseXML($xml), 'SECRET_DATA') !== false);\nvar_dump(libxml_disable_entity_loader(true));\nvar_dump(strpos(parseXML($xml), 'SECRET_DATA') === false);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
