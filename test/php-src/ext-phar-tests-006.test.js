// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/006.phpt
  it("Phar::mapPhar truncated manifest (manifest length truncated)", function () {
    expect(parser.parseCode("<?php\ntry {\nPhar::mapPhar('hio');\n} catch (Exception $e) {\necho $e->getMessage();\n}\n__HALT_COMPILER(); ?>")).toMatchSnapshot();
  });
});
