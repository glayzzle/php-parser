// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/typed_properties_026.phpt
  it("Test typed properties inherit traits with typed properties", function () {
    expect(parser.parseCode("<?php\ntrait Foo{\n    private int $baz;\n}\nclass Baz{\n    use Foo;\n    function get(){\n        return $this->baz;\n    }\n}\nvar_dump((new Baz)->get());\n?>")).toMatchSnapshot();
  });
});
