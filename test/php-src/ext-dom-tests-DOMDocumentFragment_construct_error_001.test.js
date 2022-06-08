// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocumentFragment_construct_error_001.phpt
  it("DOMDocumentFragment::__construct() with too many errors.", function () {
    expect(parser.parseCode("<?php\ntry {\n    $fragment = new DOMDocumentFragment(\"root\");\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
