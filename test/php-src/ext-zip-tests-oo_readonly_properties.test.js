// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zip/tests/oo_readonly_properties.phpt
  it("Test that ZipArchive properties are read-only", function () {
    expect(parser.parseCode("<?php\n$zip = new ZipArchive();\ntry {\n    $zip->lastId = 1;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ntry {\n    $zip->lastId += 1;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($zip->lastId);\ntry {\n    $zip->status = 1;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($zip->status);\ntry {\n    $zip->statusSys = 1;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($zip->statusSys);\ntry {\n    $zip->numFiles = 1;\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($zip->numFiles);\ntry {\n    $zip->filename = \"a\";\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($zip->filename);\ntry {\n    $zip->comment = \"a\";\n} catch (Error $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\nvar_dump($zip->comment);\n?>")).toMatchSnapshot();
  });
});
