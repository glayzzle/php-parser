// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug79503.phpt
  it("Bug #79503 (Memory leak on duplicate metadata)", function () {
    expect(parser.parseCode("<?php\ntry {\n    new Phar(__DIR__ . '/bug79503.phar');\n} catch (UnexpectedValueException $ex) {\n    echo $ex->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
