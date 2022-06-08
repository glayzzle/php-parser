// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/004.phpt
  it("Phar::mapPhar no __HALT_COMPILER();", function () {
    expect(parser.parseCode("<?php\ntry {\nPhar::mapPhar('hio');\n} catch (Exception $e) {\necho $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
