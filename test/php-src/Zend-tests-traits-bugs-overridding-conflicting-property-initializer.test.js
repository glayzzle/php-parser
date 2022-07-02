// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/bugs/overridding-conflicting-property-initializer.phpt
  it("Properties are considered incompatible if they are different in any of their\ndefined characteristics. Thus, initialization values have to be equal, too.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait foo\n{\n    public $zoo = 'foo::zoo';\n}\nclass baz\n{\n    use foo;\n    public $zoo = 'baz::zoo';\n}\n$obj = new baz();\necho $obj->zoo, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
