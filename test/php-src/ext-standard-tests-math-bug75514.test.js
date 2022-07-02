// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/bug75514.phpt
  it("Bug #75514 mt_rand returns value outside [$min,$max]", function () {
    expect(parser.parseCode("<?php\nmt_srand(0, MT_RAND_PHP);\nvar_dump(mt_rand(0,999999999), mt_rand(0,999));\n?>")).toMatchSnapshot();
  });
});
