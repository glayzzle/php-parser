// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug67922.phpt
  it("Bug #67922: Member function not found when dereferencing in write-context", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public function test() {\n        return new stdClass;\n    }\n}\n$b = new stdClass;\n$b->c = new C;\n$b->c->test()->d = 'str';\n?>\n===DONE===")).toMatchSnapshot();
  });
});
