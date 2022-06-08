// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/session/tests/session_set_cookie_params_variation7.phpt
  it("Test session_set_cookie_params() function : array parameter variation", function () {
    expect(parser.parseCode("<?php\nob_start();\necho \"*** Testing session_set_cookie_params() : array parameter variation ***\\n\";\n// Invalid cases\ntry {\n    session_set_cookie_params([]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    session_set_cookie_params([\"unknown_key\" => true, \"secure_invalid\" => true]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(ini_get(\"session.cookie_secure\"));\nvar_dump(ini_get(\"session.cookie_samesite\"));\nvar_dump(session_set_cookie_params([\"secure\" => true, \"samesite\" => \"please\"]));\nvar_dump(ini_get(\"session.cookie_secure\"));\nvar_dump(ini_get(\"session.cookie_samesite\"));\nvar_dump(ini_get(\"session.cookie_lifetime\"));\nvar_dump(session_set_cookie_params([\"lifetime\" => 42]));\nvar_dump(ini_get(\"session.cookie_lifetime\"));\nvar_dump(ini_get(\"session.cookie_path\"));\ntry {\n    session_set_cookie_params([\"path\" => \"newpath/\"], \"arg after options array\");\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump(ini_get(\"session.cookie_path\"));\necho \"Done\";\nob_end_flush();\n?>")).toMatchSnapshot();
  });
});
