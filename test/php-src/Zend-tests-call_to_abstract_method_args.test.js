// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/call_to_abstract_method_args.phpt
  it("Check that arguments are freed when a call to an abstract method throws", function () {
    expect(parser.parseCode("<?php\nabstract class Test {\n    abstract static function method();\n}\ntry {\n    Test::method(new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$ret = new stdClass;\ntry {\n    $ret = Test::method(new stdClass);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
