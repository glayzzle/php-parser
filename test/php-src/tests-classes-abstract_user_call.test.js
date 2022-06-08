// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_user_call.phpt
  it("ZE2 An abstract method cannot be called indirectly", function () {
    expect(parser.parseCode("<?php\nabstract class test_base\n{\n    abstract function func();\n}\nclass test extends test_base\n{\n    function func()\n    {\n        echo __METHOD__ . \"()\\n\";\n    }\n}\n$o = new test;\n$o->func();\ntry {\n    call_user_func(array($o, 'test_base::func'));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
