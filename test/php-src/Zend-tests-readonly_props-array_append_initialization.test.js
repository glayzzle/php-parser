// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/readonly_props/array_append_initialization.phpt
  it("Use array append as initialization", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public readonly array $a;\n    public function init() {\n        $this->a[] = 1;\n        var_dump($this->a);\n    }\n}\nfunction init() {\n    $c = new C;\n    $c->a[] = 1;\n    var_dump($c->a);\n}\n(new C)->init();\ntry {\n    init();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
