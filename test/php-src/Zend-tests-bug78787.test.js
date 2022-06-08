// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78787.phpt
  it("Bug #78787: Segfault with trait overriding inherited private shadow property", function () {
    expect(parser.parseCode("<?php\ntrait T {\n    private $prop;\n}\nclass C1 {\n    /** Doc comment */\n    private $prop;\n}\nclass C2 extends C1 {\n}\nclass C3 extends C2 {\n    use T;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
