// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language016.phpt
  it("Invalid conflict resolution (unused trait as rhs of \"insteadof\")", function () {
    expect(parser.parseCode("<?php\ntrait T1 {\n    function foo() {echo \"T1\\n\";}\n}\ntrait T2 {\n        function foo() {echo \"T2\\n\";}\n}\nclass C {\n    use T1 {\n        T1::foo insteadof T2;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
