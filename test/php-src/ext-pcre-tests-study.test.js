// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/study.phpt
  it("Study regex", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/(?:(?:(?:(?:(?:(.))))))/  S', 'aeiou', $dump));\nvar_dump($dump[1]);\nvar_dump(preg_match('/(?:(?:(?:(?:(?:(.))))))/', 'aeiou', $dump));\nvar_dump($dump[1]);\nvar_dump(preg_match('/(?>..)((?:(?>.)|.|.|.|u))/S', 'aeiou', $dump));\nvar_dump($dump[1]);\n// try to trigger usual \"match known text\" optimization\nvar_dump(preg_match('/^aeiou$/S', 'aeiou', $dump));\nvar_dump($dump[0]);\nvar_dump(preg_match('/aeiou/S', 'aeiou', $dump));\nvar_dump($dump[0]);\n?>")).toMatchSnapshot();
  });
});
