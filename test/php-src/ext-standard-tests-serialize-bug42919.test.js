// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug42919.phpt
  it("Bug #42919 (Unserializing of namespaced class object fails)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nclass Bar {\n}\necho serialize(new Bar) . \"\\n\";\n$x = unserialize(serialize(new Bar));\necho get_class($x) . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
