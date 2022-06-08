// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_internal.phpt
  it("Test ResourceBundle::__construct() with internal ICU bundles", function () {
    expect(parser.parseCode("<?php\n$b = new ResourceBundle('de_DE', 'ICUDATA-region');\nvar_dump($b->get('Countries')->get('DE'));\n$b = new ResourceBundle('icuver', 'ICUDATA');\nvar_dump($b->get('ICUVersion') !== NULL);\n$b = new ResourceBundle('supplementalData', 'ICUDATA', false);\nvar_dump($b->get('cldrVersion') !== NULL);\n?>")).toMatchSnapshot();
  });
});
