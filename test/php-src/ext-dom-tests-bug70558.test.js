// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/dom/tests/bug70558.phpt
  it("Bug #70558 (\"Couldn't fetch\" error in DOMDocument::registerNodeClass())", function () {
    expect(parser.parseCode("<?php\nclass X extends \\DOMDocument {\n    public function __clone() {\n        var_dump($this->registerNodeClass('DOMDocument', 'X'));\n    }\n}\n$dom = clone (new X());\n?>")).toMatchSnapshot();
  });
});
