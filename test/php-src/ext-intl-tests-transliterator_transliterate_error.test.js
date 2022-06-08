// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/transliterator_transliterate_error.phpt
  it("Transliterator::transliterate (error)", function () {
    expect(parser.parseCode("<?php\nini_set(\"intl.error_level\", E_WARNING);\n$tr = Transliterator::create(\"latin\");\n//Arguments\nvar_dump(transliterator_transliterate($tr,\"str\",7));\ntry {\n    transliterator_transliterate($tr,\"str\",7,6);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n//bad UTF-8\ntransliterator_transliterate($tr, \"\\x80\\x03\");\necho \"Done.\\n\";\n?>")).toMatchSnapshot();
  });
});
