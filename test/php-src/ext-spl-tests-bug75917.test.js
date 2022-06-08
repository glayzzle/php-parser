// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug75917.phpt
  it("Bug #75917 (SplFileObject::seek broken with CSV flags)", function () {
    expect(parser.parseCode("<?php\n$expected = [\n    ['john', 'doe', 'john.doe@example.com', '0123456789'],\n    ['jane', 'doe', 'jane.doe@example.com'],\n];\n$tmp = new SplTempFileObject();\nforeach ($expected as $row) {\n    $tmp->fputcsv($row);\n}\n$tmp->setFlags(0);\n$tmp->seek(23);\nvar_dump($tmp->current());\n$tmp->setFlags(SplFileObject::READ_CSV | SplFileObject::SKIP_EMPTY);\n$tmp->seek(23);\nvar_dump($tmp->current());\n?>")).toMatchSnapshot();
  });
});
