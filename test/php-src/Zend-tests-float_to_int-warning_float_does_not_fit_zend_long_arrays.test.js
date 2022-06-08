// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/float_to_int/warning_float_does_not_fit_zend_long_arrays.phpt
  it("Implicit float to int conversions when float too large should warn, array variant", function () {
    expect(parser.parseCode("<?php\n$float = 10e120;\n$string_float = (string) $float;\nvar_dump((int) $float);\nvar_dump((int) $string_float === PHP_INT_MAX);\n$arrayConstant = [10e120 => 'Large float', (string) 10e120 => 'String large float'];\n$arrayDynamic = [$float => 'Large float', $string_float => 'String large float'];\nvar_dump($arrayConstant);\nvar_dump($arrayDynamic);\n$array = ['0', '1', '2'];\nvar_dump($array[10e120]);\nvar_dump($array[(string) 10e120]);\nvar_dump($array[$float]);\nvar_dump($array[$string_float]);\n?>")).toMatchSnapshot();
  });
});
