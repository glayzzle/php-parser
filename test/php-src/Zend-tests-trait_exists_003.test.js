// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/trait_exists_003.phpt
  it("Checking trait_exists(): interface, trait, abstract and final class", function () {
    expect(parser.parseCode("<?php\ninterface a { }\nabstract class b { }\nfinal class c { }\ntrait d {}\nvar_dump(trait_exists('a'));\nvar_dump(trait_exists('b'));\nvar_dump(trait_exists('c'));\nvar_dump(trait_exists('d'));\n?>")).toMatchSnapshot();
  });
});
