// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_needs_rehash_error.phpt
  it("Test error operation of password_needs_rehash()", function () {
    expect(parser.parseCode("<?php\ntry {\n    var_dump(password_needs_rehash(''));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(password_needs_rehash('', []));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(password_needs_rehash(array(), PASSWORD_BCRYPT));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(password_needs_rehash(\"\", PASSWORD_BCRYPT, \"foo\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\necho \"OK!\";\n?>")).toMatchSnapshot();
  });
});
