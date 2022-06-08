// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug52062.phpt
  it("Bug #52062 (large timestamps with DateTime::getTimestamp and DateTime::setTimestamp) (32 bit)", function () {
    expect(parser.parseCode("<?php\n$d = new DateTime('@100000000000');\nvar_dump($d->format('Y-m-d H:i:s U'));\ntry {\n    var_dump($d->getTimestamp());\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\nvar_dump($d->format('U'));\ntry {\n    $d->setTimestamp(100000000000);\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\nvar_dump($d->format('Y-m-d H:i:s U'));\ntry {\n    var_dump($d->getTimestamp());\n} catch (\\ValueError $e) {\n    echo $e->getMessage() . \\PHP_EOL;\n}\n$i = new DateInterval('PT100000000000S');\nvar_dump($i->format('%s'));\n?>")).toMatchSnapshot();
  });
});
