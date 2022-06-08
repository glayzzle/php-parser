// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_011.phpt
  it("Testing instantiation using namespace:: prefix", function () {
    expect(parser.parseCode("<?php\nnamespace foo;\nclass bar {\n}\nclass_alias('foo\\bar', 'foo\\baz');\nvar_dump(new namespace\\baz);\n?>")).toMatchSnapshot();
  });
});
