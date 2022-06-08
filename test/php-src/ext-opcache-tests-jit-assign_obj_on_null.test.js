// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_obj_on_null.phpt
  it("ASSIGN_OBJ on null reference returned from __get()", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    public function &__get($name) {\n        return $this->prop;\n    }\n}\nfunction test() {\n    $obj = new Test;\n    $obj->x->y = 1;\n}\nfunction test2() {\n    $obj = new Test;\n    $obj->x->y += 1;\n}\ntry {\n    test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test2();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
