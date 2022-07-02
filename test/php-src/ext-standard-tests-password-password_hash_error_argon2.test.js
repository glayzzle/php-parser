// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/password/password_hash_error_argon2.phpt
  it("Test error operation of password_hash() with Argon2i and Argon2id", function () {
    expect(parser.parseCode("<?php\ntry {\n    password_hash('test', PASSWORD_ARGON2I, ['memory_cost' => 0]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    password_hash('test', PASSWORD_ARGON2I, ['time_cost' => 0]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    password_hash('test', PASSWORD_ARGON2I, ['threads' => 0]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    password_hash('test', PASSWORD_ARGON2ID, ['memory_cost' => 0]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    password_hash('test', PASSWORD_ARGON2ID, ['time_cost' => 0]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    password_hash('test', PASSWORD_ARGON2ID, ['threads' => 0]);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
