// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/property009.phpt
  it("Handling of public fields with traits needs to have same semantics as with normal inheritance, however, we do add strict warnings since it is easier to run into something unexpected with changing traits.", function () {
    expect(parser.parseCode("<?php\nclass BaseWithPropA {\n  public $hello = 0;\n}\n// This is how publics are handled in normal inheritance\nclass SubclassClassicInheritance extends BaseWithPropA {\n  public $hello = 0;\n}\n// And here, we need to make sure, that the traits behave the same\ntrait AHelloProperty {\n  public $hello = 0;\n}\nclass BaseWithTPropB {\n    use AHelloProperty;\n}\nclass SubclassA extends BaseWithPropA {\n    use AHelloProperty;\n}\nclass SubclassB extends BaseWithTPropB {\n    use AHelloProperty;\n}\n$classic = new SubclassClassicInheritance;\nvar_dump($classic);\n$a = new SubclassA;\nvar_dump($a);\n$b = new SubclassB;\nvar_dump($b);\n?>")).toMatchSnapshot();
  });
});
