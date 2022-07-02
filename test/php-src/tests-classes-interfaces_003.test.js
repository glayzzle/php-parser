// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/interfaces_003.phpt
  it("ZE2 interface and __construct", function () {
    expect(parser.parseCode("<?php\nclass MyObject {}\ninterface MyInterface\n{\n    public function __construct(MyObject $o);\n}\nclass MyTestClass implements MyInterface\n{\n    public function __construct(MyObject $o)\n    {\n    }\n}\n$obj = new MyTestClass;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
