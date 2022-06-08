// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOMAttr_ownerElement_error_001.phpt
  it("Read $ownerElement with null parent.", function () {
    expect(parser.parseCode("<?php\n$document = new DOMDocument;\n$root = $document->createElement('root');\n$document->appendChild($root);\n$attr = $root->setAttribute('category', 'books');\n$document->removeChild($root);\n$root = null;\ntry {\n    var_dump($attr->ownerElement);\n} catch (\\Error $e) {\n    echo get_class($e) . ': ' . $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
