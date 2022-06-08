// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug65545.phpt
  it("SplFileObject::fread function", function () {
    expect(parser.parseCode("<?php\n$obj = new SplFileObject(__FILE__, 'r');\n$data = $obj->fread(5);\nvar_dump($data);\ntry {\n    $data = $obj->fread(0);\n    var_dump($data);\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n// read more data than is available\n$data = $obj->fread(filesize(__FILE__) + 32);\nvar_dump(strlen($data) === filesize(__FILE__) - 5);\n?>")).toMatchSnapshot();
  });
});
