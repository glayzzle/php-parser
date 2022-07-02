// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/final_private_ctor.phpt
  it("Final private constructors cannot be overridden", function () {
    expect(parser.parseCode("<?php\nclass Base\n{\n    private final function __construct()\n    {\n    }\n}\nclass Extended extends Base\n{\n    public function __construct()\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
