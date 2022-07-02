// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_048.phpt
  it("Closure 048: Use in preg_replace_callback() using variables by reference", function () {
    expect(parser.parseCode("<?php\nfunction replace_variables($text, $params) {\n    $c = function($matches) use (&$params, &$text) {\n        $text = preg_replace( '/(\\?)/', array_shift( $params ), $text, 1 );\n    };\n    preg_replace_callback( '/(\\?)/', $c, $text );\n    return $text;\n}\necho replace_variables('a=?', array('0')) . \"\\n\";\necho replace_variables('a=?, b=?', array('0', '1')) . \"\\n\";\necho replace_variables('a=?, b=?, c=?', array('0', '1', '2')) . \"\\n\";\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
