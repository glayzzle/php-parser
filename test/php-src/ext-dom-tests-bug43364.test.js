// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug43364.phpt
  it("Bug #43364 (recursive xincludes don't remove internal xml nodes properly)", function () {
    expect(parser.parseCode("<?php\nfunction loopElements($nodes)\n{\n    $count = 0;\n    foreach($nodes as $node) {\n        if($node instanceof DOMElement) {\n            $count++;\n            if($node->childNodes->length > 0) {\n                $count += loopElements($node->childNodes);\n            }\n        }\n    }\n    return $count;\n}\n$xml = <<<DOC\n<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<root xmlns:xi=\"http://www.w3.org/2001/XInclude\">\n    <a>\n        <a_child1>ac1</a_child1>\n        <a_child2>ac2</a_child2>\n    </a>\n    <b><xi:include xpointer=\"xpointer(/root/a)\" /></b>\n    <c><xi:include xpointer=\"xpointer(/root/b)\" /></c>\n</root>\nDOC;\n$doc = new DomDocument();\n$doc->loadXml($xml);\n$doc->xinclude();\n$count = loopElements(array($doc->documentElement));\nvar_dump($count == 13 || $count == 11);\n?>")).toMatchSnapshot();
  });
});
