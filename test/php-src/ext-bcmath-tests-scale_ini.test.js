// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/bcmath/tests/scale_ini.phpt
  it("BCMath functions return result with default scale", function () {
    expect(parser.parseCode("<?php\necho\n    'bcadd:    ', bcadd('2', '1'), PHP_EOL,\n    'bcdiv:    ', bcdiv('2', '1'), PHP_EOL,\n    'bcmul:    ', bcmul('2', '1'), PHP_EOL,\n    'bcpow:    ', bcpow('2', '1'), PHP_EOL,\n    'bcpowmod: ', bcpowmod('2', '1', '3'), PHP_EOL,\n    'bcsqrt:   ', bcsqrt('4'), PHP_EOL,\n    'bcsub:    ', bcsub('2', '1'), PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
