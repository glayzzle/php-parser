// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/generator_return_without_value.phpt
  it("Generators can return without values", function () {
    expect(parser.parseCode("<?php\nfunction gen() {\n    yield;\n    return;\n}\nfunction gen2() {\n    yield;\n    return null;\n}\nfunction gen3() {\n    return;\n    yield;\n}\nfunction gen4() {\n    return;\n    yield;\n}\nvar_dump(gen());\nvar_dump(gen2());\nvar_dump(gen3());\nvar_dump(gen4());\n?>")).toMatchSnapshot();
  });
});
