// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/intl/tests/bug74264.phpt
  it("Bug #74264 (grapheme_sttrpos() broken for negative offsets)", function () {
    expect(parser.parseCode("<?php\nforeach (range(-5, -1) as $offset) {\n    var_dump(\n        grapheme_strrpos('déjàààà', 'à', $offset),\n        grapheme_strripos('DÉJÀÀÀÀ', 'à', $offset)\n    );        \n}\n?>")).toMatchSnapshot();
  });
});
