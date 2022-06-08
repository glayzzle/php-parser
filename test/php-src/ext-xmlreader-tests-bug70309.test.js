// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/xmlreader/tests/bug70309.phpt
  it("XMLReader: Bug #70309 XmlReader read generates extra output", function () {
    expect(parser.parseCode("<?php\n/* From the bug report an extra message comes from libxml2 debug output left unwrapped. */\n$doc = new \\XMLReader();\n$doc->xml('<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<chapter xmlns=\"http://docbook.org/ns/docbook\" version=\"5.0\">\n<title>Test Chapter</title>\n<para>\nThis is a paragraph in the test chapter. It is unremarkable in\nevery regard. This is a paragraph in the test chapter. It is\nunremarkable in every regard. This is a paragraph in the test\nchapter. It is unremarkable in every regard.\n</para>\n<paar>\n<emphasis role=\"bold\">This</emphasis> paragraph contains\n<emphasis>some <emphasis>emphasized</emphasis> text</emphasis>\n1and a <superscript>super</superscript>script\nand a <subscript>sub</subscript>script.\n</para>\n<para>\nThis is a paragraph in the test chapter. It is unremarkable in\nevery regard. This is a paragraph in the test chapter. It is\nunremarkable in every regard. This is a paragraph in the test\nchapter. It is unremarkable in every regard.\n</para>\n</chapter>');\n$doc->setRelaxNGSchema('http://docs.oasis-open.org/docbook/rng/5.0/docbook.rng');\nwhile (@$doc->read() !== false);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
