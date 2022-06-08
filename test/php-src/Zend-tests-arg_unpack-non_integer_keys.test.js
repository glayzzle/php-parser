// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/arg_unpack/non_integer_keys.phpt
  it("Argument unpacking does not work with non-integer keys", function () {
    expect(parser.parseCode("<?php\nfunction foo(...$args) {\n    var_dump($args);\n}\nfunction gen() {\n    yield 1.23 => 123;\n    yield \"2.34\" => 234;\n}\ntry {\n    foo(...gen());\n} catch (Error $ex) {\n    echo \"Exception: \" . $ex->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
