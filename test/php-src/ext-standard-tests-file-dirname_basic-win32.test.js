// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/dirname_basic-win32.phpt
  it("Test dirname() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing dirname() : basic functionality ***\\n\";\n// Initialise all required variables\n$paths = array(\n            '',\n            ' ',\n            'c:',\n            'c:\\\\',\n            'c:/',\n            'afile',\n            'c:\\test\\afile',\n            'c:\\\\test\\\\afile',\n            'c://test//afile',\n            'c:\\test\\afile\\\\',\n            '/usr/lib/locale/en_US',\n            '//usr/lib//locale/en_US',\n            '\\\\',\n            '\\\\\\\\',\n            '/',\n            '//',\n            '///',\n            '/usr/lib/locale/en_US/',\n            'c:\\windows/system32\\drivers/etc\\hosts',\n            '/usr\\lib/locale\\en_US',\n            '   c:\\test\\adir\\afile.txt',\n            'c:\\test\\adir\\afile.txt   ',\n            '   c:\\test\\adir\\afile.txt   ',\n            '   /usr/lib/locale/en_US',\n            '/usr/lib/locale/en_US   ',\n            '   /usr/lib/locale/en_US   ',\n            ' c:',\n            '\t\tc:\\test\\adir\\afile.txt',\n            '/usr',\n            '/usr/',\n            );\nforeach ($paths as $path) {\n    var_dump( dirname($path) );\n}\n?>")).toMatchSnapshot();
  });
});
