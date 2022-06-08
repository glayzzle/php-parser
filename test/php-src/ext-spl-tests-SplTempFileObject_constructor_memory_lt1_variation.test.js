// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplTempFileObject_constructor_memory_lt1_variation.phpt
  it("SPL SplTempFileObject constructor sets correct defaults when passed a negative value", function () {
    expect(parser.parseCode("<?php\nvar_dump(new SplTempFileObject(-1));\n?>")).toMatchSnapshot();
  });
});
