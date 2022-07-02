// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/ini_set_types.phpt
  it("ini_set() accepts non-strings under strict_types", function () {
    expect(parser.parseCode("<?php\ndeclare(strict_types=1);\nini_set('docref_root', null);\nvar_dump(ini_get('docref_root'));\nini_set('html_errors', true);\nvar_dump(ini_get('html_errors'));\nini_set('html_errors', false);\nvar_dump(ini_get('html_errors'));\nini_set('precision', 6);\nvar_dump(ini_get('precision'));\n// There are no float options in always enabled extensions.\n// Just use a random string property, even though it doesn't make sense.\nini_set('user_agent', 3.14);\nvar_dump(ini_get('user_agent'));\ntry {\n    ini_set('foo', []);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
