// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug72888.phpt
  it("Bug #72888 (Segfault on clone on splFileObject)", function () {
    expect(parser.parseCode("<?php\n$x = new SplFileObject(__FILE__);\ntry {\n    $y=clone $x;\n} catch (Error $e) {\n    var_dump($e->getMessage());\n}\nvar_dump($y);\n?>")).toMatchSnapshot();
  });
});
