// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/sqlite3/tests/sqlite3_21_security.phpt
  it("SQLite3 open_basedir checks", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\n$directory = __DIR__ . '/';\n$file = uniqid() . '.db';\necho \"Within test directory\\n\";\n$db = new SQLite3($directory . $file);\nvar_dump($db);\nvar_dump($db->close());\nunlink($directory . $file);\necho \"Above test directory\\n\";\ntry {\n    $db = new SQLite3('../bad' . $file);\n} catch (Exception $e) {\n    echo $e . \"\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
