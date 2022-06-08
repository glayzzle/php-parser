// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/init_fcall_001.phpt
  it("JIT INIT_FCALL: 001 too deep nesting level", function () {
    expect(parser.parseCode("<?php\nini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(\nini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(\nini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(ini_set(\nini_set(ini_set(ini_set(ini_set(ini_set(ini_set(\n)))))))))))))))))))))))))))))))));\n?>")).toMatchSnapshot();
  });
});
