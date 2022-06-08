// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/DOM4_DOMNode_removeDanglingElement.phpt
  it("DOMNode::remove() dangling element", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument();\n$element = $dom->createElement('test');\ntry {\n    $element->remove();\n} catch (DOMException $e) {\n    echo $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
