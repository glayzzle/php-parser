// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug79526.phpt
  it("Bug #79526 (`__sleep` error message doesn't include the name of the class)", function () {
    expect(parser.parseCode("<?php\nclass A\n{\n    public function __sleep() {\n        return 1;\n    }\n}\nserialize(new A());\nclass B\n{\n    public function __sleep() {\n        return [1];\n    }\n}\nserialize(new B());\n?>\nDone")).toMatchSnapshot();
  });
});
