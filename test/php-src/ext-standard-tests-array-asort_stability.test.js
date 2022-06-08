// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/asort_stability.phpt
  it("asort() is stable", function () {
    expect(parser.parseCode("<?php\n$array = $origArray = array_fill(0, 1000, null);\nasort($array);\nvar_dump($array === $origArray);\n?>")).toMatchSnapshot();
  });
});
