// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/ini_use_exceptions_basic.phpt
  it("intl.use_exceptions INI setting", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.use_exceptions\", true);\n$t = transliterator_create('any-hex');\ntry {\n    var_dump($t->transliterate('a', 3));\n} catch (IntlException $intlE) {\n    var_dump($intlE->getMessage());\n}\nini_set(\"intl.use_exceptions\", false);\nini_set(\"intl.error_level\", E_NOTICE);\nvar_dump($t->transliterate('a', 3));\n?>")).toMatchSnapshot();
  });
});
