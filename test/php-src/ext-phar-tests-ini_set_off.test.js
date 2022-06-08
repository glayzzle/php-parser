// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/ini_set_off.phpt
  it("Phar: test ini_set with readonly and require_hash disabled", function () {
    expect(parser.parseCode("<?php\nvar_dump(ini_set('phar.require_hash', 1));\nvar_dump(ini_set('phar.readonly', 1));\nvar_dump(ini_get('phar.require_hash'));\nvar_dump(ini_get('phar.readonly'));\nini_set('phar.require_hash', 0);\nini_set('phar.readonly', 0);\nvar_dump(Phar::canWrite());\n?>\nyes\n<?php\nvar_dump(ini_set('phar.require_hash', 'yes'));\nvar_dump(ini_set('phar.readonly', 'yes'));\nvar_dump(ini_get('phar.require_hash'));\nvar_dump(ini_get('phar.readonly'));\nvar_dump(Phar::canWrite());\nini_set('phar.require_hash', 0);\nini_set('phar.readonly', 0);\n?>\non\n<?php\nvar_dump(ini_set('phar.require_hash', 'on'));\nvar_dump(ini_set('phar.readonly', 'on'));\nvar_dump(ini_get('phar.require_hash'));\nvar_dump(ini_get('phar.readonly'));\nvar_dump(Phar::canWrite());\nini_set('phar.require_hash', 0);\nini_set('phar.readonly', 0);\n?>\ntrue\n<?php\nvar_dump(ini_set('phar.require_hash', 'true'));\nvar_dump(ini_set('phar.readonly', 'true'));\nvar_dump(Phar::canWrite());\nvar_dump(ini_get('phar.require_hash'));\nvar_dump(ini_get('phar.readonly'));\n?>\n0\n<?php\nvar_dump(ini_set('phar.require_hash', 0));\nvar_dump(ini_set('phar.readonly', 0));\nvar_dump(Phar::canWrite());\nvar_dump(ini_get('phar.require_hash'));\nvar_dump(ini_get('phar.readonly'));\n?>")).toMatchSnapshot();
  });
});
