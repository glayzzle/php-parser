// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_sqlite/tests/open_basedir.phpt
  it("PDO SQLite open_basedir check", function () {
    expect(parser.parseCode("<?php\nchdir(__DIR__);\ntry {\n    $db = new PDO('sqlite:../not_in_open_basedir.sqlite');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $db = new PDO('sqlite:file:../not_in_open_basedir.sqlite');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\ntry {\n    $db = new PDO('sqlite:file:../not_in_open_basedir.sqlite?mode=ro');\n} catch (Exception $e) {\n    echo $e->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
