// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69761.phpt
  it("Bug #69761 (Serialization of anonymous classes should be prevented)", function () {
    expect(parser.parseCode("<?php\n$instance = new class('foo') {\n    public function __construct($i) {\n    }\n};\nvar_dump(serialize($instance));\n?>")).toMatchSnapshot();
  });
});
