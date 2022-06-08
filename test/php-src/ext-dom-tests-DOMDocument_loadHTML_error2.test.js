// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadHTML_error2.phpt
  it("DOMDocument::loadHTML() should fail if empty string provided as input", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\ntry {\n    $doc->loadHTML('');\n} catch (ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
