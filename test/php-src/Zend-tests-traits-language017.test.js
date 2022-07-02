// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language017.phpt
  it("Invalid conflict resolution (unused trait as lhs of \"as\")", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    function foo() {echo \"T1\\n\";}\n}\ntrait T2 {\n        function foo() {echo \"T2\\n\";}\n}\nclass C {\n    use T1 {\n        T2::foo as private;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
