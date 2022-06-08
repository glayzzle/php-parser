// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentFragment_appendXML_error_002.phpt
  it("DOMDocumentFragment::appendXML() with unbound fragment.", function () {
    expect(parser.parseCode("<?php\n$fragment = new DOMDocumentFragment();\ntry {\n    $fragment->appendXML('<bait>crankbait</bait>');\n} catch (DOMException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
