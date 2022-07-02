// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/prev_error2.phpt
  it("prev - ensure warning is received when passing an indirect temporary.", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass temporary variables to prev() to test behaviour\n */\nfunction f() {\n    $array  = array(1,2);\n    end($array);\n    return $array;\n}\necho \"\\n-- Passing an indirect temporary variable --\\n\";\nvar_dump(prev(f()));\n?>")).toMatchSnapshot();
  });
});
