// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/typehints/fq_nullable.phpt
  it("Fully-qualified nullable parameter type", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nfunction test(?\\stdClass $param) {}\ntest(new \\stdClass);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
