// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMCDATASection_construct_error_001.phpt
  it("__construct() with no arguments.", function () {
    expect(parser.parseCode("<?php\n    try {\n        $section = new DOMCDataSection();\n    } catch (TypeError $e) {\n        echo $e->getMessage();\n    }\n?>")).toMatchSnapshot();
  });
});
