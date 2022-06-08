// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_saveHTML_variant2.phpt
  it("DOMDocument::saveHTML() vs DOMDocumet::saveXML()", function () {
    expect(parser.parseCode("<?php\n$d = new DOMDocument();\n$str = <<<EOD\n<html>\n<head>\n</head>\n<body>\n<p>Hi.<br/>there</p>\n</body>\n</html>\nEOD;\n$d->loadHTML($str);\n$e = $d->getElementsByTagName(\"p\");\n$e = $e->item(0);\necho $d->saveXml($e),\"\\n\";\necho $d->saveHtml($e),\"\\n\";\n?>")).toMatchSnapshot();
  });
});
