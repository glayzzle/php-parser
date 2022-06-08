// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_exists_003.phpt
  it("Checking if exists interface, trait, abstract and final class", function () {
    expect(parser.parseCode("<?php\ninterface a { }\nabstract class b { }\nfinal class c { }\ntrait d {}\nvar_dump(class_exists('a'));\nvar_dump(class_exists('b'));\nvar_dump(class_exists('c'));\nvar_dump(class_exists('d'));\n?>")).toMatchSnapshot();
  });
});
