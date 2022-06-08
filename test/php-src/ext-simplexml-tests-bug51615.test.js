// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug51615.phpt
  it("Bug #51615 (PHP crash with wrong HTML in SimpleXML)", function () {
    expect(parser.parseCode("<?php\n$dom = new DOMDocument;\n$dom->loadHTML('<span title=\"\"y\">x</span><span title=\"\"z\">x</span>');\n$html = simplexml_import_dom($dom);\nvar_dump($html->body->span);\nforeach ($html->body->span as $obj) {\n    var_dump((string)$obj->title);\n}\n?>")).toMatchSnapshot();
  });
});
