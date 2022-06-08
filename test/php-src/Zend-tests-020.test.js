// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/020.phpt
  it("func_get_arg() invalid usage", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(func_get_arg(1));\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nfunction bar() {\n    var_dump(func_get_arg(1));\n}\nfunction foo() {\n    bar(func_get_arg(1));\n}\ntry {\n    foo(1,2);\n} catch (\\Error $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>")).toMatchSnapshot();
  });
});
