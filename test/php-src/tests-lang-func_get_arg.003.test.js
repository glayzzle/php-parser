// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_arg.003.phpt
  it("func_get_arg outside of a function declaration", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(func_get_arg(0));\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
