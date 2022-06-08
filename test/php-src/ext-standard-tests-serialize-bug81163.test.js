// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug81163.phpt
  it("Test __sleep returns non-array", function () {
    expect(parser.parseCode("<?php\nclass foo\n{\n    private $private = 'private';\n}\nclass bar extends foo\n{\n    public function __sleep()\n    {\n        return (new bar());\n    }\n}\nserialize(new bar());\n?>")).toMatchSnapshot();
  });
});
