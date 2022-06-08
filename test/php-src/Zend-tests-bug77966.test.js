// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug77966.phpt
  it("Bug #77966: Cannot alias a method named \"namespace\"", function () {
    expect(parser.parseCode("<?php\ntrait A {\n    function namespace() {\n        echo \"Called\\n\";\n    }\n}\nclass C {\n    use A {\n        namespace as bar;\n    }\n}\n$c = new C;\n$c->bar();\n$c->namespace();\n?>")).toMatchSnapshot();
  });
});
