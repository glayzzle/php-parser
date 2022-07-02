// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/restrict_globals/invalid_pass_by_ref.phpt
  it("$GLOBALS cannot be passed by reference (runtime error)", function () {
    expect(parser.parseCode("<?php\nfunction by_ref(&$ref) {}\ntry {\n    by_ref($GLOBALS);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    by_ref2($GLOBALS);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nfunction by_ref2(&$ref) {}\n?>")).toMatchSnapshot();
  });
});
