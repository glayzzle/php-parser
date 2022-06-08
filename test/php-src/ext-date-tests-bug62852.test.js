// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug62852.phpt
  it("Bug #62852 (Unserialize invalid DateTime causes crash), variation 1", function () {
    expect(parser.parseCode("<?php\n$s1 = 'O:8:\"DateTime\":3:{s:4:\"date\";s:20:\"10007-06-07 03:51:49\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:3:\"UTC\";}';\ntry {\n    unserialize( $s1 );\n} catch ( Exception $e ) {}\n?>")).toMatchSnapshot();
  });
});
