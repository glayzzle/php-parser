// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_loadHTMLfile_error2.phpt
  it("Test DOMDocument::loadHTMLFile when an empty string is passed", function () {
    expect(parser.parseCode("<?php\n$doc = new DOMDocument();\ntry {\n    $result = $doc->loadHTMLFile(\"\");\n} catch (ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n$doc = new DOMDocument();\ntry {\n    $result = $doc->loadHTMLFile(\"text.html\\0something\");\n} catch (ValueError $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
