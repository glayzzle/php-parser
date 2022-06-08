// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/image/iptcembed_003.phpt
  it("iptcembed() unable to open file", function () {
    expect(parser.parseCode("<?php\nvar_dump(iptcembed(-1, __DIR__ . '/iptcembed/DOES_NOT_EXIST.ERR', -1));\n?>")).toMatchSnapshot();
  });
});
