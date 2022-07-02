// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/basic/bug67988.phpt
  it("Bug #67988 (htmlspecialchars() does not respect default_charset specified by ini_set)", function () {
    expect(parser.parseCode("<?php\nini_set('default_charset', 'cp1252');\nvar_dump(ini_get('default_charset'));\nvar_dump(ini_get('internal_encoding'));\nvar_dump(ini_get('input_encoding'));\nvar_dump(ini_get('output_encoding'));\nvar_dump(htmlentities(\"\\xA3\", ENT_HTML5));\nvar_dump(htmlentities(\"\\xA3\", ENT_HTML5, 'cp1252'));\nvar_dump(bin2hex(html_entity_decode(\"&pound;\", ENT_HTML5)));\nvar_dump(bin2hex(html_entity_decode(\"&pound;\", ENT_HTML5, 'cp1252')));\n?>")).toMatchSnapshot();
  });
});
