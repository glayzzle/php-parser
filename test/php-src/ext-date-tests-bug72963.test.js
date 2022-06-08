// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug72963.phpt
  it("Bug #72963 (Null-byte injection in CreateFromFormat and related functions)", function () {
    expect(parser.parseCode("<?php\n$strings = [\n\t'8/8/2016',\n\t\"8/8/2016\\0asf\",\n];\nforeach ($strings as $string) {\n\t$d1 = $d2 = $d3 = NULL;\n\techo \"\\nCovering string: \", addslashes($string), \"\\n\\n\";\n\ttry {\n\t\t$d1 = DateTime::createFromFormat('!m/d/Y', $string);\n\t} catch (ValueError $v) {\n\t\techo $v->getMessage(), \"\\n\";\n\t}\n\ttry {\n\t\t$d2 = DateTimeImmutable::createFromFormat('!m/d/Y', $string);\n\t} catch (ValueError $v) {\n\t\techo $v->getMessage(), \"\\n\";\n\t}\n\ttry {\n\t\t$d3 = date_parse_from_format('m/d/Y', $string);\n\t} catch (ValueError $v) {\n\t\techo $v->getMessage(), \"\\n\";\n\t}\n\tvar_dump($d1, $d2, $d3);\n}\n?>")).toMatchSnapshot();
  });
});
