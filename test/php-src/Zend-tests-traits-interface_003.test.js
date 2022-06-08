// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/interface_003.phpt
  it("Testing to implement Serializable interface by traits", function () {
    expect(parser.parseCode("<?php\ntrait foo {\n    public function serialize() {\n        return 'foobar';\n    }\n    public function unserialize($x) {\n        var_dump($x);\n    }\n}\nclass bar implements Serializable {\n    use foo;\n}\nvar_dump($o = serialize(new bar));\nvar_dump(unserialize($o));\n?>")).toMatchSnapshot();
  });
});
