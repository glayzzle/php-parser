// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/recursive_wrong_args.phpt
  it("Recursive call with too few args", function () {
    expect(parser.parseCode("<?php\nfunction f($arg) {\n    f();\n}\ntry {\n    f();\n} catch (ArgumentCountError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
