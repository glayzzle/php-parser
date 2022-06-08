// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ns_042.phpt
  it("042: Import in namespace and constants", function () {
    expect(parser.parseCode("<?php\nnamespace test\\ns1;\nconst FOO = \"ok\\n\";\nuse test\\ns1 as ns2;\nuse test as ns3;\necho FOO;\necho \\test\\ns1\\FOO;\necho \\test\\ns1\\FOO;\necho ns2\\FOO;\necho ns3\\ns1\\FOO;\n?>")).toMatchSnapshot();
  });
});
