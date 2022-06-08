// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/ctor_extra_named_args.phpt
  it("Passing unknown named args to a non-existing ctor", function () {
    expect(parser.parseCode("<?php\nclass Test {}\ntry {\n    new stdClass(x: \"nope\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    new Test(x: \"nope\");\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
