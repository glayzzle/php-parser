// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/output_started_at_eval.phpt
  it("Output start at eval()", function () {
    expect(parser.parseCode("<?php\neval('echo \"Foo\\n\";');\nheader('Foo: Bar');\n?>")).toMatchSnapshot();
  });
});
