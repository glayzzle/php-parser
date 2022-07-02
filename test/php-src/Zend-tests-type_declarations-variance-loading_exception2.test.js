// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/loading_exception2.phpt
  it("Exception while loading class -- interface case", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    throw new Exception(\"Class $class does not exist\");\n});\nclass A {}\n// Graceful failure allowed\nfor ($i = 0; $i < 2; $i++) {\n    try {\n        class B extends A implements I {\n        }\n    } catch (Exception $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\ninterface J {}\nspl_autoload_register(function($class) {\n    // Tie up B in a variance obligation.\n    class X {\n        public function test(): J {}\n    }\n    class Y extends X {\n        public function test(): B {}\n    }\n}, true, true);\n// Fallback to fatal error, as we can't unlink class B anymore.\ntry {\n    class B extends A implements I, J {\n    }\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
