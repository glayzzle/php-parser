// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_obj_002.phpt
  it("JIT ASSIGN_OBJ: Assign undefined vatiable to property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    public int $prop2;\n}\nfunction test() {\n    $o = new Test;\n    $o->prop = $undef;\n    var_dump($o->prop);\n}\nfunction test2() {\n    $o = new Test;\n    $o->prop2 = $undef;\n}\ntest();\ntry {\n    test2();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
