// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fetch_obj_006.phpt
  it("JIT: FETCH_OBJ 006", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    readonly array $prop;\n}\n$test = new Test;\ntry {\n    throw new Exception;\n} catch (Exception) {}\n$appendProp2 = (function() {\n    $this->prop[] = 1;\n})->bindTo($test, Test::class);\n$appendProp2();\n$appendProp2();\n?>")).toMatchSnapshot();
  });
});
