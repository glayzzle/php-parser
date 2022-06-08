// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sprintf_f_3.phpt
  it("sprintf %f #3", function () {
    expect(parser.parseCode("<?php\nsetlocale(LC_NUMERIC, \"is_IS\", \"is_IS.UTF-8\");\nvar_dump(sprintf(\"%.3f\", 100.426));\nvar_dump(sprintf(\"%.2f\", 100.426));\nvar_dump(sprintf(\"%f'\",  100.426));\n$money1 = 68.75;\n$money2 = 54.35;\n$money = $money1 + $money2;\nvar_dump(sprintf(\"%01.2f\", $money));\nvar_dump(sprintf(\"%.3e\", $money));\n?>")).toMatchSnapshot();
  });
});
