// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMDocument_adoptNode.phpt
  it("DOMDocument::adoptNode not implemented", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$dom->loadXML(\"<root />\");\ntry {\n    $dom->adoptNode($dom->documentElement);\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
