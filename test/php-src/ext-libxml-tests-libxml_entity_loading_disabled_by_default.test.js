// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/libxml/tests/libxml_entity_loading_disabled_by_default.phpt
  it("libxml_disable_entity_loader()", function () {
    expect(parser.parseCode("<?php\n$xml = <<<EOT\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<!DOCTYPE test [<!ENTITY xxe SYSTEM \"XXE_URI\">]>\n<foo>&xxe;</foo>\nEOT;\n$dir = str_replace('\\\\', '/', __DIR__);\n$xml = str_replace('XXE_URI', $dir . '/libxml_disable_entity_loader_payload.txt', $xml);\nfunction parseXML1($xml) {\n  $doc = new DOMDocument();\n  $doc->loadXML($xml, 0);\n  return $doc->saveXML();\n}\nfunction parseXML2($xml) {\n  return simplexml_load_string($xml);\n}\nfunction parseXML3($xml) {\n  $p = xml_parser_create();\n  xml_parse_into_struct($p, $xml, $vals, $index);\n  xml_parser_free($p);\n  return var_export($vals, true);\n}\nfunction parseXML4($xml) {\n  // This is the only time we enable external entity loading.\n  return simplexml_load_string($xml, 'SimpleXMLElement', LIBXML_NOENT);\n}\nvar_dump(strpos(parseXML1($xml), 'SECRET_DATA') === false);\nvar_dump(strpos(parseXML2($xml), 'SECRET_DATA') === false);\nvar_dump(strpos(parseXML3($xml), 'SECRET_DATA') === false);\nvar_dump(strpos(parseXML4($xml), 'SECRET_DATA') === false);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
