// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug81325.phpt
  it("BUg #81325 (segfault in zif_simplexml_import_dom)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument;\n$dom->loadXML(\"foo\");\n$xml = simplexml_import_dom($dom);\n?>\nDone")).toMatchSnapshot();
  });
});
