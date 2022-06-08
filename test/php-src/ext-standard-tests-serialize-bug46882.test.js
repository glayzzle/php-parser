// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug46882.phpt
  it("Bug #46882 (Serialize / Unserialize misbehaviour under OS with different bit numbers)", function () {
    expect(parser.parseCode("<?php\nvar_dump(unserialize('i:5000000000;') == 5000000000);\n?>")).toMatchSnapshot();
  });
});
