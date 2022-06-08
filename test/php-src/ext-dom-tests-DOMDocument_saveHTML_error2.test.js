// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_saveHTML_error2.phpt
  it("DOMDocument::saveHTML() should fail if called statically", function () {
    expect(parser.parseCode("<?php\ntry {\n    DOMDocument::saveHTML(true);\n} catch (Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
