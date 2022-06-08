// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30922.phpt
  it("Bug #30922 (reflective functions crash PHP when interfaces extend themselves)", function () {
    expect(parser.parseCode("<?php\ninterface RecurisiveFooFar extends RecurisiveFooFar {}\nclass A implements RecurisiveFooFar {}\n$a = new A();\nvar_dump($a instanceOf A);\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
