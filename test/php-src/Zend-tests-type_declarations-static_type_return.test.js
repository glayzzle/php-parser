// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/static_type_return.phpt
  it("Static return type", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function test1(): static {\n        return new static;\n    }\n    public function test2(): static {\n        return new self;\n    }\n    public function test3(): static {\n        return new static;\n    }\n    public function test4(): static|array {\n        return new self;\n    }\n}\nclass B extends A {\n    public function test3(): static {\n        return new C;\n    }\n}\nclass C extends B {}\n$a = new A;\n$b = new B;\nvar_dump($a->test1());\nvar_dump($b->test1());\necho \"\\n\";\nvar_dump($a->test2());\ntry {\n    var_dump($b->test2());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n\";\nvar_dump($a->test3());\nvar_dump($b->test3());\necho \"\\n\";\nvar_dump($a->test4());\ntry {\n    var_dump($b->test4());\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"\\n\";\n$test = function($x): static {\n    return $x;\n};\ntry {\n    var_dump($test(new stdClass));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n$test = $test->bindTo($a);\nvar_dump($test($a));\n?>")).toMatchSnapshot();
  });
});
