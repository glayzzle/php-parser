// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug64023.phpt
  it("Bug #64023: Overloading __toString() in SplFileInfo has no effect", function () {
    expect(parser.parseCode("<?php\nclass A extends \\SplFileInfo\n{\n        public function __toString() {return ' -expected- ';}\n}\n$a = new A('/');\n// Works\necho $a, $a->__toString(), $a->__toString() . '', \"\\n\";\n// Does not work - outputs parent::__toString()\necho $a . '', \"\\n\";\n?>")).toMatchSnapshot();
  });
});
