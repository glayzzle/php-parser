// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/func_get_args.phpt
  it("Testing func_get_args() throws error when called from the global scope", function () {
    expect(parser.parseCode("<?php\ntry {\n    func_get_args();\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
