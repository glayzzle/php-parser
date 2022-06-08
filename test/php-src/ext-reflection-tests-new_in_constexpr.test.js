// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/new_in_constexpr.phpt
  it("Handling of new in constant expressions in reflection", function () {
    expect(parser.parseCode("<?php\nfunction test1() {\n    static $x = new stdClass;\n    return $x;\n}\n$rf = new ReflectionFunction('test1');\n$s = $rf->getStaticVariables();\nvar_dump($s['x'] === test1());\nfunction test2($x = new stdClass) {\n    return $x;\n}\n$rf = new ReflectionFunction('test2');\n$rp = $rf->getParameters()[0];\n// Parameter default should *not* be the same.\nvar_dump($rp->getDefaultValue() !== test2());\n?>")).toMatchSnapshot();
  });
});
