// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/soundex.phpt
  it("soundex() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(soundex(\"\"));\nvar_dump(soundex(-1));\n$array = array(\n\"From\",\n\"that\",\n\"time\",\n\"on\",\n\"Sam\",\n\"thought\",\n\"that\",\n\"he\",\n\"sensed\",\n\"a\",\n\"change\",\n\"in\",\n\"Gollum\",\n\"again.\",\n\"He was more fawning and would-be friendly; but Sam surprised some strange looks in his eyes at times, especially towards Frodo.\"\n);\nforeach ($array as $str) {\n    var_dump(soundex($str));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
