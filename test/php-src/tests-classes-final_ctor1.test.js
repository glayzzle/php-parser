// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/final_ctor1.phpt
  it("ZE2 cannot override final __construct", function () {
    expect(parser.parseCode("<?php\nclass Base\n{\n    public final function __construct()\n    {\n    }\n}\nclass Works extends Base\n{\n}\nclass Extended extends Base\n{\n    public function __construct()\n    {\n    }\n}\n?>")).toMatchSnapshot();
  });
});
