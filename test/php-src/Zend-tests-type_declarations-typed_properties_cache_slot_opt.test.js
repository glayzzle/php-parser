// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_cache_slot_opt.phpt
  it("Demonstrate that cache_slot optimization is illegal due to cache_slot merging", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public int $prop;\n    public function method() {\n        // Opcache merges cache slots for both assignments.\n        $this->prop = 1;\n        try {\n            $this->prop = \"foobar\";\n        } catch (TypeError $e) {\n            echo $e->getMessage(), \"\\n\";\n        }\n        var_dump($this->prop);\n    }\n}\n$test = new Test;\n$test->method();\n$test->method();\n?>")).toMatchSnapshot();
  });
});
