// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/dom_comment_variation.phpt
  it("DOM Comment : Variation", function () {
    expect(parser.parseCode("<?php\n$xml = <<< EOXML\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\"?><courses><!-- Hello World! --></courses>\nEOXML;\n$dom = new DOMDocument();\n$dom->loadXML($xml);\n$root = $dom->documentElement;\nvar_dump($root->hasChildNodes());\n$children = $root->childNodes;\nfor ($index = 0; $index < $children->length; $index++) {\n    echo \"--- child $index ---\\n\";\n    $current = $children->item($index);\n    echo get_class($current), \"\\n\";\n    var_dump($current->textContent);\n}\n?>")).toMatchSnapshot();
  });
});
