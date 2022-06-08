// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug75457.phpt
  it("Bug #75457 (heap-use-after-free in php7.0.25)", function () {
    expect(parser.parseCode("<?php\n$pattern = \"/(((?(?C)0?=))(?!()0|.(?0)0)())/\";\nvar_dump(preg_match($pattern, \"hello\"));\n?>")).toMatchSnapshot();
  });
});
