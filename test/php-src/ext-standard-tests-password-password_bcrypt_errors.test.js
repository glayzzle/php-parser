// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_bcrypt_errors.phpt
  it("Test error operation of password_hash() with bcrypt hashing", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\ntry {\n    password_hash(\"foo\", PASSWORD_BCRYPT, array(\"cost\" => 3));\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(password_hash(\"foo\", PASSWORD_BCRYPT, array(\"cost\" => 32)));\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
