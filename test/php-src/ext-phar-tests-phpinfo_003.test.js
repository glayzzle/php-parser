// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phpinfo_003.phpt
  it("Phar: phpinfo display 3", function () {
    expect(parser.parseCode("<?php\nphpinfo(INFO_MODULES);\n?>")).toMatchSnapshot();
  });
});
