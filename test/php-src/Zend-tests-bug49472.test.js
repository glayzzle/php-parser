// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug49472.phpt
  it("Bug #49472 (Constants defined in Interfaces can be overridden)", function () {
    expect(parser.parseCode("<?php\ninterface ia {\n    const c = 'Sea';\n    const y = 2;\n}\nclass Foo implements ia {\n}\nclass FooBar extends Foo implements ia {\n    const x = 1;\n    const c = 'Ocean';\n    public function show() {\n        return ia::c;\n    }\n}\nnew FooBar;\n?>\n===DONE===")).toMatchSnapshot();
  });
});
