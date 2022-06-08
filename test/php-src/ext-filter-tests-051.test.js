// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/051.phpt
  it("filter_var() and default values", function () {
    expect(parser.parseCode("<?php\n$tmp = $default = 321;\nvar_dump(filter_var(\"123asd\", FILTER_VALIDATE_INT, array(\"options\"=>array(\"default\"=>$default))));\n?>")).toMatchSnapshot();
  });
});
