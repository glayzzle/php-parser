// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/directory/DirectoryClass_error_001.phpt
  it("Changing Directory::$handle property", function () {
    expect(parser.parseCode("<?php\n$d = dir(getcwd());\ntry {\n    $d->handle = \"Havoc!\";\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($d->handle);\n$d = dir(getcwd());\ntry {\n    unset($d->handle);\n} catch (Error $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($d->handle);\n?>")).toMatchSnapshot();
  });
});
