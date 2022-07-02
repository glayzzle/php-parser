// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/factory_001.phpt
  it("ZE2 factory objects", function () {
    expect(parser.parseCode("<?php\nclass Circle {\n    function draw() {\n        echo \"Circle\\n\";\n    }\n}\nclass Square {\n    function draw() {\n        print \"Square\\n\";\n    }\n}\nfunction ShapeFactoryMethod($shape) {\n    switch ($shape) {\n        case \"Circle\":\n            return new Circle();\n        case \"Square\":\n            return new Square();\n    }\n}\nShapeFactoryMethod(\"Circle\")->draw();\nShapeFactoryMethod(\"Square\")->draw();\n?>")).toMatchSnapshot();
  });
});
