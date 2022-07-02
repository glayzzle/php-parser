// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug49893.phpt
  it("Bug #49893 (Crash while creating an instance of Zend_Mail_Storage_Pop3)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __destruct() {\n        try {\n            throw new Exception(\"2\");\n        } catch (Exception $e) {\n            echo $e->getMessage() . \"\\n\";\n        }\n    }\n}\nclass B {\n    function __construct() {\n        $this->a = new A();\n        throw new Exception(\"1\");\n    }\n}\ntry {\n    $b = new B();\n} catch(Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
