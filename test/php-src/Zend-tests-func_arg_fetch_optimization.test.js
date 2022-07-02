// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/func_arg_fetch_optimization.phpt
  it("FETCH_DIM_FUNC_ARG that cannot be optimized to FETCH_DIM_R because it appends", function () {
    expect(parser.parseCode("<?php\nfunction test($x) {\n    test($x[][$y]);\n}\ntry {\n    test([]);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
