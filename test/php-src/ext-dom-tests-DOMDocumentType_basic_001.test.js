// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentType_basic_001.phpt
  it("DOMDocumentType: basic access to all properties.", function () {
    expect(parser.parseCode("<?php\n// Access publicId, systemId, name, internalSubset all with values.\n$xml  = '<?xml version=\"1.0\" encoding=\"UTF-8\" ?>';\n$xml .= '<!DOCTYPE chapter PUBLIC \"-//OASIS//DTD DocBook XML//EN\" \"docbookx.dtd\">';\n$xml .= '<chapter>1</chapter>';\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$doctype = $doc->doctype;\nprint \"publicId: \".$doctype->publicId.\"\\n\";\nprint \"systemId: \".$doctype->systemId.\"\\n\";\nprint \"name: \".$doctype->name.\"\\n\";\nprint \"internalSubset: \".$doctype->internalSubset.\"\\n\";\n// Access entities and notations with values.\n$xml  = '<?xml version=\"1.0\" encoding=\"UTF-8\" ?>';\n$xml .= '<!DOCTYPE img [';\n$xml .= '  <!ELEMENT img EMPTY>';\n$xml .= '  <!ATTLIST img src ENTITY #REQUIRED>';\n$xml .= '  <!ENTITY logo SYSTEM \"http://www.xmlwriter.net/logo.gif\" NDATA gif>';\n$xml .= '  <!NOTATION gif PUBLIC \"gif viewer\">';\n$xml .= ']>';\n$xml .= '<img src=\"logo\"/>';\n$doc = new DOMDocument();\n$doc->loadXML($xml);\n$doctype = $doc->doctype;\n$entities = $doctype->entities;\n$entity = $entities->item(0);\nprint 'entity: '.$entity->nodeName.\"\\n\";\n$notations = $doctype->notations;\n$notation = $notations->item(0);\nprint 'notation: '.$notation->nodeName.\"\\n\";\n?>")).toMatchSnapshot();
  });
});
