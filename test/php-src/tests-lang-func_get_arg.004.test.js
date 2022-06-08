// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_arg.004.phpt
  it("func_get_arg on non-existent arg", function () {
    expect(parser.parseCode("<?php\nfunction foo($a)\n{\n    try {\n        var_dump(func_get_arg(2));\n    } catch (\\Error $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\nfoo(2, 3);\n?>")).toMatchSnapshot();
  });
});
