// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/versioning/phpversion.phpt
  it("phpversion test", function () {
    expect(parser.parseCode("<?php\nprint phpversion();\nprint \"\\n\";\nprint phpversion('standard');\n?>")).toMatchSnapshot();
  });
});
