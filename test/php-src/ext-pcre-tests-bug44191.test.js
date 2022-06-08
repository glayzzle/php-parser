// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/bug44191.phpt
  it("Bug #44191 (preg_grep messes up array index)", function () {
    expect(parser.parseCode("<?php\n$array = range(1, 10);\npreg_grep('/asdf/', $array);\nforeach ($array as $k => $v) {\n    print $k;\n}\n?>")).toMatchSnapshot();
  });
});
