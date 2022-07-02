// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/methods-on-non-objects-call-user-func.phpt
  it("call_user_func() in combination with \"Call to a member function method() on a non-object\"", function () {
    expect(parser.parseCode("<?php\n$comparator = null;\ntry {\n    var_dump(call_user_func([$comparator, 'compare'], 1, 2));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
