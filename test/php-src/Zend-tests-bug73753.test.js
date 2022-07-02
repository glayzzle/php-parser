// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug73753.phpt
  it("Bug #73753 Non packed arrays and duplication", function () {
    expect(parser.parseCode("<?php\nfunction iterate($current, $a, $result = null) {\n    if (!$current) {\n        return $result;\n    }\n    return iterate(getNext($a), $a, $current);\n}\nfunction getNext(&$a) {\n    return next($a);\n}\nfunction getCurrent($a) {\n    return current($a);\n}\nfunction traverse($a) {\n    return iterate(getCurrent($a), $a);\n}\n$arr = array(1 => 'foo', 'b' => 'bar', 'baz');\nvar_dump(traverse($arr));\n?>")).toMatchSnapshot();
  });
});
