// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_003_error4.phpt
  it("Attempting to access static properties using instance property syntax", function () {
    expect(parser.parseCode("<?php\nclass C {\n    protected static $y = 'C::$y';\n}\n$c = new C;\necho \"\\n--> Access non-visible static prop like instance prop:\\n\";\ntry {\n    $c->y =& $ref;\n} catch (Error $e) {\n    echo $e, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
