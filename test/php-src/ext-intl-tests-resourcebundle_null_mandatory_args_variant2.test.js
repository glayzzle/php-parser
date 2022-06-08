// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/resourcebundle_null_mandatory_args_variant2.phpt
  it("ResourceBundle constructor bundle accepts NULL for first two arguments", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$r = new ResourceBundle('en_US', NULL);\n$c = $r->get('calendar')->get('gregorian')->get('DateTimePatterns')->get(0);\nvar_dump($c);\nini_set('intl.default_locale', 'pt_PT');\n$r = new ResourceBundle(NULL, NULL);\n$c = $r->get('calendar')->get('gregorian')->get('DateTimePatterns')->get(0);\nvar_dump($c);\n?>")).toMatchSnapshot();
  });
});
