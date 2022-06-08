// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/preload_trait_alias.phpt
  it("Preloading trait uses with aliased names", function () {
    expect(parser.parseCode("<?php\nvar_dump(get_class_methods('TraitAliasTest'));\n?>")).toMatchSnapshot();
  });
});
