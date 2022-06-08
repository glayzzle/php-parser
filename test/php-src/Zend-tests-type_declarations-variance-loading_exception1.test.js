// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/variance/loading_exception1.phpt
  it("Exception while loading class -- parent case", function () {
    expect(parser.parseCode("<?php\nspl_autoload_register(function($class) {\n    throw new Exception(\"Class $class does not exist\");\n});\n// Graceful failure allowed\nfor ($i = 0; $i < 2; $i++) {\n    try {\n        class B extends A {\n        }\n    } catch (Exception $e) {\n        echo $e->getMessage(), \"\\n\";\n    }\n}\ninterface I {}\nspl_autoload_register(function($class) {\n    // Tie up B in a variance obligation.\n    class X {\n        public function test(): I {}\n    }\n    class Y extends X {\n        public function test(): B {}\n    }\n}, true, true);\n// Fallback to fatal error, as we can't unlink class B anymore.\ntry {\n    class B extends A implements I {\n    }\n} catch (Exception $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
