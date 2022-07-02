// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/static_properties_003_error1.phpt
  it("Attempting to access static properties using instance property syntax", function () {
    expect(parser.parseCode("<?php\nclass C {\n    protected static $y = 'C::$y';\n}\n$c = new C;\necho \"\\n--> Access non-visible static prop like instance prop:\\n\";\nunset($c->y);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
