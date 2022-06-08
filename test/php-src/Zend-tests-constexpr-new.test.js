// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new.phpt
  it("new in constant expressions", function () {
    expect(parser.parseCode("<?php\ntry {\n    eval('static $a = new DoesNotExist;');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nstatic $b = new stdClass;\nvar_dump($b);\ntry {\n    eval('static $c = new stdClass([] + 0);');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nclass Test {\n    public function __construct(public $a, public $b) {}\n}\ntry {\n    eval('static $d = new Test(new stdClass, [] + 0);');\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nstatic $e = new Test(new stdClass, 42);\nvar_dump($e);\nclass Test2 {\n    public function __construct() {\n        echo \"Side-effect\\n\";\n        throw new Exception(\"Failed to construct\");\n    }\n}\ntry {\n    eval('static $f = new Test2();');\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
