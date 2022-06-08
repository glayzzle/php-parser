// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg1.phpt
  it("mb_ereg() and invalid arguments", function () {
    expect(parser.parseCode("<?php\n$a = array(\n    array(1,2,3),\n    array(\"\", \"\", \"\"),\n    array(array(), 1, \"\"),\n    array(1, array(), \"\"),\n    array(1, \"\", array()),\n    );\nforeach ($a as $args) {\n    try {\n        var_dump(mb_ereg($args[0], $args[1], $args[2]));\n    } catch (\\TypeError|\\ValueError $e) {\n        echo get_class($e) . ': ' . $e->getMessage() . \\PHP_EOL;\n    }\n    var_dump($args);\n}\n?>")).toMatchSnapshot();
  });
});
