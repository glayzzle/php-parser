// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/011.phpt
  it("SimpleXML: echo/print", function () {
    expect(parser.parseCode("<?php\n$xml =<<<EOF\n<?xml version=\"1.0\" encoding=\"ISO-8859-1\" ?>\n<foo>\n  <bar>bar</bar>\n  <baz>baz1</baz>\n  <baz>baz2</baz>\n</foo>\nEOF;\n$sxe = simplexml_load_string($xml);\necho \"===BAR===\\n\";\necho $sxe->bar;\necho \"\\n\";\necho \"===BAZ===\\n\";\necho $sxe->baz;\necho \"\\n\";\necho \"===BAZ0===\\n\";\necho $sxe->baz[0];\necho \"\\n\";\necho \"===BAZ1===\\n\";\nprint $sxe->baz[1];\necho \"\\n\";\n?>")).toMatchSnapshot();
  });
});
