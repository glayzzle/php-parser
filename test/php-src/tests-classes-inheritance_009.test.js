// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/inheritance_009.phpt
  it("Ensure private methods with the same name are not checked for inheritance rules - abstract", function () {
    expect(parser.parseCode("<?php\nclass A {\n    private function test() {}\n}\nabstract class B extends A {\n    abstract function test();\n}\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
