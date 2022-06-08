// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug66783.phpt
  it("Bug #66783 (UAF when appending DOMDocument to element)", function () {
    expect(parser.parseCode("<?php\n$doc = new DomDocument;\n$doc->loadXML('<root></root>');\n$e = $doc->createElement('e');\ntry {\n    $e->appendChild($doc);\n} catch (DOMException $ex) {\n    echo $ex->getMessage(), PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
