// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/assign_obj_op_of_fetch_dim.phpt
  it("Type inference for $ary[$idx]->prop +=", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $ary = [];\n    $ary[0]->y += 2;\n    var_dump(is_object($ary[0]));\n}\ntry {\n    test();\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
