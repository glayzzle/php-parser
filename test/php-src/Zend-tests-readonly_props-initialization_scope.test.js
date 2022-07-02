// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/initialization_scope.phpt
  it("Initialization can only happen from private scope", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public readonly int $prop;\n    public function initPrivate() {\n        $this->prop = 3;\n    }\n}\nclass B extends A {\n    public function initProtected() {\n        $this->prop = 2;\n    }\n}\n$test = new B;\ntry {\n    $test->prop = 1;\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    $test->initProtected();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$test->initPrivate();\nvar_dump($test->prop);\n// Rebinding bypass works.\n$test = new B;\n(function() {\n    $this->prop = 1;\n})->bindTo($test, A::class)();\nvar_dump($test->prop);\nclass C extends A {\n    public readonly int $prop;\n}\n$test = new C;\n$test->initPrivate();\nvar_dump($test->prop);\nclass X {\n    public function initFromParent() {\n        $this->prop = 1;\n    }\n}\nclass Y extends X {\n    public readonly int $prop;\n}\n$test = new Y;\ntry {\n    $test->initFromParent();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
