// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/bug73100.phpt
  it("Bug #73100 (session_destroy null dereference in ps_files_path_create)", function () {
    expect(parser.parseCode("<?php\nob_start();\nvar_dump(session_start());\nsession_module_name(\"user\");\nvar_dump(session_destroy());\ntry {\n    session_module_name(\"user\");\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n?>\n===DONE===")).toMatchSnapshot();
  });
});
