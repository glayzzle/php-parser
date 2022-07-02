// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_003.phpt
  it("Attempting to access static properties using instance property syntax", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public static $x = 'C::$x';\n    protected static $y = 'C::$y';\n}\n$c = new C;\necho \"\\n--> Access visible static prop like instance prop:\\n\";\nvar_dump(isset($c->x));\nunset($c->x);\necho $c->x;\n$c->x = 1;\n$ref = 'ref';\n$c->x =& $ref;\nvar_dump($c->x, C::$x);\necho \"\\n--> Access non-visible static prop like instance prop:\\n\";\nvar_dump(isset($c->y));\n//unset($c->y);\t\t// Fatal error, tested in static_properties_003_error1.phpt\n//echo $c->y;\t\t// Fatal error, tested in static_properties_003_error2.phpt\n//$c->y = 1;\t\t// Fatal error, tested in static_properties_003_error3.phpt\n//$c->y =& $ref;\t// Fatal error, tested in static_properties_003_error4.phpt\n?>")).toMatchSnapshot();
  });
});
