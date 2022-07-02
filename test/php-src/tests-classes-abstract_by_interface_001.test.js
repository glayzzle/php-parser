// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/classes/abstract_by_interface_001.phpt
  it("ZE2 An abstract method may not be called", function () {
    expect(parser.parseCode("<?php\nclass Root {\n}\ninterface MyInterface\n{\n    function MyInterfaceFunc();\n}\nabstract class Derived extends Root implements MyInterface {\n}\nclass Leaf extends Derived\n{\n    function MyInterfaceFunc() {}\n}\nvar_dump(new Leaf);\nclass Fails extends Root implements MyInterface {\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
