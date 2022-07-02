// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_args.003.phpt
  it("func_get_args() outside of a function declaration", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(func_get_args());\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
