// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug76285.phpt
  it("Bug #76285 DOMDocument::formatOutput attribute sometimes ignored", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$dom->formatOutput = false;\n$html = '<div><div><a>test</a></div><div><a>test2</a></div></div>';\n$dom->loadHTML($html, LIBXML_HTML_NOIMPLIED | LIBXML_HTML_NODEFDTD);\n$rootNode = $dom->documentElement;\nvar_dump($dom->saveHTML($rootNode));\nvar_dump($dom->saveHTML());\n?>")).toMatchSnapshot();
  });
});
