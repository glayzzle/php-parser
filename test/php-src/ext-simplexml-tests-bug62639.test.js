// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug62639.phpt
  it("Bug #62639 (XML structure broken)", function () {
    expect(parser.parseCode("<?php\nclass A extends SimpleXMLElement\n{\n}\n$xml1 = <<<XML\n<?xml version=\"1.0\"?>\n<a>\n    <b>\n        <c>\n            <value attr=\"Some Attr\">Some Value</value>\n        </c>\n    </b>\n</a>\nXML;\n$a1 = new A($xml1);\nforeach ($a1->b->c->children() as $key => $value) {\n    var_dump($value);\n}\n$xml2 = <<<XML\n<?xml version=\"1.0\"?>\n<a>\n    <b>\n        <c><value attr=\"Some Attr\">Some Value</value></c>\n    </b>\n</a>\nXML;\n$a2 = new A($xml2);\nforeach ($a2->b->c->children() as $key => $value) {\n    var_dump($value);\n}?>")).toMatchSnapshot();
  });
});
