// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug49184.phpt
  it("Bug #67296 (filter_input doesn't validate variables)", function () {
    expect(parser.parseCode("<?php\n  var_dump(filter_input(INPUT_SERVER, \"HTTP_X_FORWARDED_FOR\", FILTER_UNSAFE_RAW));\n  var_dump($_SERVER[\"HTTP_X_FORWARDED_FOR\"]);\n  var_dump(getenv(\"HTTP_X_FORWARDED_FOR\"));\n  var_dump(\"done\");\n?>")).toMatchSnapshot();
  });
});
