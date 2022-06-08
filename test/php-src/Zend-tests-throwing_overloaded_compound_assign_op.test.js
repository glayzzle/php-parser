// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/throwing_overloaded_compound_assign_op.phpt
  it("Exception in compound assign op should prevent call to overloaded object handlers", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __get($k) {\n        $this->$k = 42;\n        return 0;\n    }\n}\n$test = new ArrayObject;\n$test[0] = 42;\ntry {\n    $test[0] %= 0;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test);\n$test2 = new Test;\ntry {\n    $test2->prop %= 0;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($test2);\n?>")).toMatchSnapshot();
  });
});
