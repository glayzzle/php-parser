// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug60536_003.phpt
  it("Properties should be initialized correctly (relevant to #60536)", function () {
    expect(parser.parseCode("<?php\nclass BaseWithPropA {\n  private $hello = 0;\n}\ntrait AHelloProperty {\n  private $hello = 0;\n}\nclass BaseWithTPropB {\n    use AHelloProperty;\n}\nclass SubclassA extends BaseWithPropA {\n    use AHelloProperty;\n}\nclass SubclassB extends BaseWithTPropB {\n    use AHelloProperty;\n}\n$a = new SubclassA;\nvar_dump($a);\n$b = new SubclassB;\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
