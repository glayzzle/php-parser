// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_num_args.003.phpt
  it("func_num_args() outside of a function declaration", function () {
    expect(parser.parseCode("<?php\ntry {\n    func_num_args();\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
