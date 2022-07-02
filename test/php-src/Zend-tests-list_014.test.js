// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/list_014.phpt
  it("Cannot destructure using array(), even if nested", function () {
    expect(parser.parseCode("<?php\n[array($a)] = [array(42)];\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
