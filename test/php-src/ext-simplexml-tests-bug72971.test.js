// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/simplexml/tests/bug72971.phpt
  it("Bug #72971: SimpleXML isset/unset do not respect namespace", function () {
    expect(parser.parseCode("<?php\n$xml = new SimpleXMLElement('<root xmlns:ns=\"ns\"><foo>bar</foo><ns:foo>ns:bar</ns:foo><ns:foo2>ns:bar2</ns:foo2></root>');\nvar_dump(isset($xml->foo2));\nunset($xml->foo);\nvar_dump($xml->children('ns'));\n?>")).toMatchSnapshot();
  });
});
