// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadXML_error6.phpt
  it("Test DOMDocument::loadXML() with empty file path", function () {
    expect(parser.parseCode("<?php\n// create dom document\n$dom = new DOMDocument();\ntry {\n    $dom->loadXML(\"\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
