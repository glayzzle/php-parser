// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_obj_001.phpt
  it("JIT ASSIGN_OBJ: Assign property on null", function () {
    expect(parser.parseCode("<?php\nfunction test1($o) {\n    $o->x = new stdClass;\n}\nfunction test2($o) {\n    $o->x += new stdClass;\n}\ntry {\n    test1(null);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test2(null);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
