// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug76337.phpt
  it("Bug 76337: segmentation fault when an extension use zend_register_class_alias() and opcache enabled", function () {
    expect(parser.parseCode("<?php\nvar_dump(class_exists('_ZendTestClassAlias'));\n?>")).toMatchSnapshot();
  });
});
