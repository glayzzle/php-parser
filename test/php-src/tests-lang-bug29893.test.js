// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug29893.phpt
  it("Bug #29893 (segfault when using array as index)", function () {
    expect(parser.parseCode("<?php\n$base = 50;\ntry {\n    $base[$base] -= 0;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
