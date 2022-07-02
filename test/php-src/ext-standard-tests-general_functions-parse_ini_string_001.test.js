// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/parse_ini_string_001.phpt
  it("Test parse_ini_string() function", function () {
    expect(parser.parseCode("<?php\n$parse_string = <<<EOD\n; Comment starts with semi-colon(;)\n; Section starts with [<section name>]\n; start of ini file\n[Constans]\none = 1\nfive = 5\nanimal = BIRD\nLanguage = PHP\nPHP_CONSTANT = 1.2345678\n10 = Ten\nHELLO = HELLO\n[date]\ndate =\ntime =\n[paths]\npath = /usr/local/bin\nURL = http://www.php.net\n[Decimal]\nDecimal_value1 = 100\nDecimal_value2 = -100\nDecimal_value3 = -2147483647\nDecimal_value4 = 2147483647\nDecimal_value5 = -2147483648\nDecimal_value6 = 2147483648\n[Octal]\nOctal_value = 0100\n[Hex]\nHex_value1 = 0x101\nHex_Value2 = 0x102\nHex_Value2 = 0x103\n[Non-alphanumerics_as_values]\n;Non-alpha numeric chars without quotes\nNon_alpha1 = ;\nNon_alpha2 = +\nNon_alpha3 = *\nNon_alpha4 = %\nNon_alpha5 = <>\nNon_alpha6 = @\nNon_alpha7 = #\nNon_alpha8 = -\nNon_alpha9 = :\nNon_alpha10 = ?\nNon_alpha11 = /\nNon_alpha12 = \\\n;These chars have a special meaning when used in the value,\n;  hence parser throws an error\n;Non_alpha13 = &\n;Non_alpha14 = ^\n;Non_alpha15 = {}\n;Non_alpha16 = |\n;Non_alpha17 = ~\n;Non_alpha18 = !\n;Non_alpha19 = $\n;Non_alpha20 = ()\nNon_alpha1_quotes = \";\"\nNon_alpha2_quotes = \"+\"\nNon_alpha3_quotes = \"*\"\nNon_alpha4_quotes = \"%\"\nNon_alpha5_quotes = \"<>\"\nNon_alpha6_quotes = \"@\"\nNon_alpha7_quotes = \"#\"\nNon_alpha8_quotes = \"^\"\nNon_alpha9_quotes = \"-\"\nNon_alpha10_quotes = \"=\"\nNon_alpha11_quotes = \":\"\nNon_alpha12_quotes = \"?\"\nNon_alpha13_quotes = \"/\"\n;Non_alpha14_quotes = \"\\\"\nNon_alpha15_quotes = \"&\"\nNon_alpha16_quotes = \"{}\"\nNon_alpha17_quotes = \"|\"\nNon_alpha18_quotes = \"~\"\nNon_alpha19_quotes = \"!\"\n;Non_alpha20_quotes = \"$\"\nNon_alpha21_quotes = \"()\"\n[Non-alpha numerics in strings]\n;expected error, as the non-alphanumeric chars not enclosed in double quotes(\"\")\nNon_alpha_string1 = Hello@world\n;Non_alpha_string2 = Hello!world\n;Non_alpha_string3 = Hello#world\n;Non_alpha_string4 = Hello%world\n;Non_alpha_string5 = Hello&world\n;Non_alpha_string6 = Hello*world\n;Non_alpha_string7 = Hello+world\n;Non_alpha_string8 = Hello-world\n;Non_alpha_string9 = Hello'world\n;Non_alpha_string10 = Hello:world\n;Non_alpha_string11 = Hello;world\n;Non_alpha_string12 = Hello<world\n;Non_alpha_string13 = Hello>world\n;Non_alpha_string14 = Hello>world\n;Non_alpha_string15 = Hello?world\n;Non_alpha_string16 = Hello\\world\n;Non_alpha_string17 = Hello^world\n;Non_alpha_string18 = Hello_world\n;Non_alpha_string19 = Hello|world\n;Non_alpha_string20 = Hello~world\n;Non_alpha_string21 = Hello`world\n;Non_alpha_string22 = Hello(world)\n[Non-alpha numerics in strings -with quotes]\nNon_alpha_string1_quotes = \"Hello@world\"\nNon_alpha_string2_quotes = \"Hello!world\"\nNon_alpha_string3_quotes = \"Hello#world\"\nNon_alpha_string4_quotes = \"Hello&world\"\nNon_alpha_string5_quotes = \"Hello*world\"\nNon_alpha_string6_quotes = \"Hello+world\"\nNon_alpha_string7_quotes = \"Hello-world\"\nNon_alpha_string8_quotes = \"Hello'world\"\nNon_alpha_string9_quotes = \"Hello:world\"\nNon_alpha_string10_quotes = \"Hello;world\"\nNon_alpha_string11_quotes = \"Hello<world\"\nNon_alpha_string12_quotes = \"Hello>world\"\nNon_alpha_string13_quotes = \"Hello>world\"\nNon_alpha_string14_quotes = \"Hello?world\"\nNon_alpha_string15_quotes = \"Hello\\world\"\nNon_alpha_string16_quotes = \"Hello^world\"\nNon_alpha_string17_quotes = \"Hello_world\"\nNon_alpha_string18_quotes = \"Hello|world\"\nNon_alpha_string19_quotes = \"Hello~world\"\nNon_alpha_string20_quotes = \"Hello`world\"\nNon_alpha_string21_quotes = \"Hello(world)\"\n[Newlines_in_Values]\nString1 = \"Hello, world\\nGood Morning\"\nString2 = \"\\nHello, world\n             Good Morning\\n\"\nString3 = 'Hello, world\\tGood Morning'\nString4 = \"\\n\"\nString5 = \"\\n\\n\"\nString6 = Hello, world\\tGood Morning\n[ReservedKeys_as_Values]\nKey1 = YES\nKey2 = Yes\nKey3 = yEs\nKey4 = NO\nKey5 = No\nKey6 = nO\nKey7 = TRUE\nKey8 = True\nKey9 = tRUE\nKey10 = true\nKey11 = FALSE\nKey12 = False\nKey13 = false\nKey14 = fAlSE\nKey15 = NULL\nKey16 = Null\nKey17 = nuLL\nKey18 = null\n[ReservedKeys_as_Keys]\n; Expected:error, reserved key words must not be used as keys for ini file\n;YES = 1\n;Yes = 2\n;yEs = 1.2\n;YES = YES\n;NO = \"\"\n;No = \"string\"\n;nO = \"\\0\"\n;TRUE = 1.1\n;True = 1\n;tRUE = 5\n;true = TRUE\n;FALSE = FALSE\n;False = \"\"\n;false = \"hello\"\n;fAlSE = \"\"\n;NULL = \"\"\n;Null = 0\n;nuLL = \"\\0\"\n;null = NULL\n; end of ini file\nEOD;\necho \"*** Test parse_ini_string() function:  with various keys and values given in string ***\\n\";\necho \"-- ini string without process_sections optional arg --\\n\";\ndefine('BIRD', 'Humming bird');\n$ini_array = parse_ini_string($parse_string);\nprint_r($ini_array);\necho \"\\n-- ini string with process_sections as TRUE --\\n\";\n$ini_array = parse_ini_string($parse_string, TRUE);\nprint_r($ini_array);\necho \"*** Done **\\n\";\n?>")).toMatchSnapshot();
  });
});
