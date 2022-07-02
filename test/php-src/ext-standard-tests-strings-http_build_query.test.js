// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/http_build_query.phpt
  it("http_build_query() function", function () {
    expect(parser.parseCode("<?php\n$array = array(\"foo\"=>\"bar\",\"baz\"=>1,\"test\"=>\"a ' \\\" \", \"abc\", 'float' => 10.42, 'true' => true, 'false' => false);\nvar_dump(http_build_query($array));\nvar_dump(http_build_query($array, 'foo'));\nvar_dump(http_build_query($array, 'foo', ';'));\n?>")).toMatchSnapshot();
  });
});
