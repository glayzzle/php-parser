// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug67474.phpt
  it("Bug #67474 getElementsByTagNameNS and default namespace", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\n$doc = new DOMDocument();\n$doc->loadXML('<root xmlns:x=\"x\"><a/><x:a/></root>');\n$list = $doc->getElementsByTagNameNS('', 'a');\nvar_dump($list->length);\n$list = $doc->getElementsByTagNameNS(null, 'a');\nvar_dump($list->length);\n$elem = $doc->documentElement;\n$list = $elem->getElementsByTagNameNS('', 'a');\nvar_dump($list->length);\n$list = $elem->getElementsByTagNameNS(null, 'a');\nvar_dump($list->length);\n?>")).toMatchSnapshot();
  });
});
