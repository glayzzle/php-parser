// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/gettext/tests/bug66267.phpt
  it("#66265: gettext doesn't switch locales within the same script", function () {
    expect(parser.parseCode("<?php\n$domain = 'domain';\n$loc = [\"de_DE\", \"fr_FR\", \"en_US\"];\nforeach ($loc as $l) {\n    putenv(\"LC_ALL=$l\");\n    setlocale(LC_ALL, $l);\n    $path = realpath(__DIR__ . DIRECTORY_SEPARATOR . \"66265\");\n    bindtextdomain($domain, $path);\n    bind_textdomain_codeset($domain, \"UTF-8\");\n    textdomain($domain);\n    echo 'LC_ALL=', getenv('LC_ALL'), \"\\n\";\n    echo 'hello=', _('hello'), \"\\n\";\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
