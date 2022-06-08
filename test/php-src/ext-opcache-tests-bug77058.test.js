// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug77058.phpt
  it("Bug #77058: Type inference in opcache causes side effects", function () {
    expect(parser.parseCode("<?php\nfunction myfunc(){\n  $Nr = 0;\n  while(1){\n    $x--;\n    $x++;\n    if( ++ $Nr >= 2 ) break;\n  }\n  echo \"'$Nr' is expected to be 2\", PHP_EOL;\n}\nmyfunc();\n?>")).toMatchSnapshot();
  });
});
