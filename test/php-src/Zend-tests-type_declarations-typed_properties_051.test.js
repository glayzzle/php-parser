// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_051.phpt
  it("Weak casts must not leak", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public string $a;\n}\nclass B {\n    function __toString() {\n        return str_repeat(\"ok\", 2);\n    }\n}\nclass C {\n}\n$o = new A;\n$o->a = new B;\nvar_dump($o->a);\ntry {\n    $o->a = new C;\n} catch (Throwable $e) {\n    echo $e->getMessage().\"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
