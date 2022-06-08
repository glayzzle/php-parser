// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_validate_error2.phpt
  it("DOMDocument::validate() should fail if called statically", function () {
    expect(parser.parseCode("<?php\ntry {\n    DOMDocument::validate();\n} catch (Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
