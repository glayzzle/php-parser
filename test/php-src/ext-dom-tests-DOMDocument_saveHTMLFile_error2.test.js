// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_saveHTMLFile_error2.phpt
  it("DOMDocument::saveHTMLFile() should fail if called statically", function () {
    expect(parser.parseCode("<?php\ntry {\n    DOMDocument::saveHTMLFile();\n} catch (Error $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
