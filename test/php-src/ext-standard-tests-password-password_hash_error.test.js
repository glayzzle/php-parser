// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_hash_error.phpt
  it("Test error operation of password_hash()", function () {
    expect(parser.parseCode("<?php\n//-=-=-=-\ntry {\n    var_dump(password_hash(\"foo\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    password_hash(\"foo\", array());\n} catch (TypeError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    var_dump(password_hash(\"foo\", 19, new StdClass));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(password_hash(\"foo\", PASSWORD_BCRYPT, \"baz\"));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\ntry {\n    var_dump(password_hash(array(), PASSWORD_BCRYPT));\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
