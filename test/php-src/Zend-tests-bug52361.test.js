// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug52361.phpt
  it("Bug #52361 (Throwing an exception in a destructor causes invalid catching)", function () {
    expect(parser.parseCode("<?php\nclass aaa {\n    public function __destruct() {\n        try {\n            throw new Exception(__CLASS__);\n        } catch(Exception $ex) {\n            echo \"1. $ex\\n\";\n        }\n    }\n}\nfunction bbb() {\n    $a = new aaa();\n    throw new Exception(__FUNCTION__);\n}\ntry {\n    bbb();\n    echo \"must be skipped !!!\";\n} catch(Exception $ex) {\n    echo \"2. $ex\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
