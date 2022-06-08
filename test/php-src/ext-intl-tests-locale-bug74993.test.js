// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/locale/bug74993.phpt
  it("Bug #74993 Wrong reflection on some locale_* functions", function () {
    expect(parser.parseCode("<?php\n$funcs = [\n    'locale_get_display_language',\n    'locale_get_display_name',\n    'locale_get_display_region',\n    'locale_get_display_script',\n    'locale_get_display_variant',\n    'locale_filter_matches',\n    'locale_lookup',\n];\nforeach ($funcs as $func) {\n    echo (new ReflectionFunction($func));\n}\n?>")).toMatchSnapshot();
  });
});
