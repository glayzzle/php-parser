// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplTempFileObject_constructor_basic.phpt
  it("SPL SplTempFileObject constructor sets correct defaults when pass 0 arguments", function () {
    expect(parser.parseCode("<?php\nvar_dump(new SplTempFileObject());\n?>")).toMatchSnapshot();
  });
});
