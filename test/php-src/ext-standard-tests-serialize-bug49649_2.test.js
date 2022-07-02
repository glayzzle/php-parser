// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug49649_2.phpt
  it("Bug #49649 (unserialize() doesn't handle changes in property visibility) - to private", function () {
    expect(parser.parseCode("<?php\n/**\n *class Foo\n *{\n *\tprivate $private = 1;\n *\n *\tprotected $protected = 2;\n *\n *\tpublic $public = 3;\n *\n *\tpublic $notThere = 'old';\n * }\n *\n * echo base64_encode(serialize(new Foo()));\n *\n * The class above represents the serialized, base64_encoded string below.\n*/\n$serialized = 'TzozOiJGb28iOjQ6e3M6MTI6IgBGb28AcHJpdmF0ZSI7aToxO3M6MTI6IgAqAHByb3RlY3RlZCI7aToyO3M6NjoicHVibGljIjtpOjM7czo4OiJub3RUaGVyZSI7czozOiJvbGQiO30';\nclass Foo\n{\n    private $public = null;\n    private $protected = null;\n    private $private = null;\n}\n$class = unserialize(base64_decode($serialized));\nvar_dump($class);\n?>")).toMatchSnapshot();
  });
});
