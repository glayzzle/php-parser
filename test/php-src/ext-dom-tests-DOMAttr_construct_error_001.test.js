// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMAttr_construct_error_001.phpt
  it("DOMAttr __construct() with no arguments.", function () {
    expect(parser.parseCode("<?php\ntry {\n    $attr = new DOMAttr();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
