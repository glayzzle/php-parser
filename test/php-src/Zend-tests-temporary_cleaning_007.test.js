// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/temporary_cleaning_007.phpt
  it("Exception inside a foreach loop with return", function () {
    expect(parser.parseCode("<?php\nclass saboteurTestController {\n    public function isConsistent() { throw new \\Exception(); }\n}\n$controllers = array(new saboteurTestController(),new saboteurTestController());\nforeach ($controllers as $controller) {\n    try {\n        if ($controller->isConsistent()) {\n            return $controller;\n        }\n    } catch (\\Exception $e) {\n        echo \"Exception\\n\";\n    }\n}\n?>")).toMatchSnapshot();
  });
});
