// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/bug80915.phpt
  it("Bug #80915: Taking a reference to $_SERVER hides its values from phpinfo()", function () {
    expect(parser.parseCode("<?php\n$_ENV = [];\n$_SERVER = [ 'test' => 'test' ];\n$reference =& $_SERVER;\nphpinfo(INFO_VARIABLES);\n?>")).toMatchSnapshot();
  });
});
