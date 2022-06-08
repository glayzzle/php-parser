// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplTempFileObject_constructor_maxmemory_basic.phpt
  it("SPL SplTempFileObject constructor sets correct values when passed fixed memory size", function () {
    expect(parser.parseCode("<?php\nvar_dump(new SplTempFileObject(1024));\n?>")).toMatchSnapshot();
  });
});
