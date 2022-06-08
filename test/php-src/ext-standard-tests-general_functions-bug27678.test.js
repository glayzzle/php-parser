// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/bug27678.phpt
  it("Bug #27678 (number_format() crashes with large numbers)", function () {
    expect(parser.parseCode("<?php\nnumber_format(1e80, 0, '', ' ');\nnumber_format(1e300, 0, '', ' ');\nnumber_format(1e320, 0, '', ' ');\n$num = number_format(1e1000, 0, '', ' ');\nvar_dump(strlen($num) == 3); // $num == 'inf'\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
