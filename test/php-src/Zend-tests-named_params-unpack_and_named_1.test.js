// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/unpack_and_named_1.phpt
  it("Named args after unpacking (supported)", function () {
    expect(parser.parseCode("<?php\nfunction test(...$args) {\n    var_dump($args);\n}\ntest(...[1, 2], a: 3);\ntest(...[1, 'a' => 2], b: 3);\nfunction test2($a, $b, $c = 3, $d = 4) {\n    var_dump($a, $b, $c, $d);\n}\ntest2(...[1, 2], d: 40);\ntest2(...['b' => 2, 'a' => 1], d: 40);\ntry {\n    test2(...[1, 2], b: 20);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    test2(...[1, 'b' => 2], b: 20);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
