// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/printf_64bit.phpt
  it("Test printf() function (64bit)", function () {
    expect(parser.parseCode("<?php\n/* Various input arrays for different format types */\n$float_variation  = array( \"%f\", \"%-f\", \"%+f\", \"%7.2f\", \"%-7.2f\", \"%07.2f\", \"%-07.2f\", \"%'#7.2f\" );\n$float_numbers    = array( 0, 1, -1, 0.32, -0.32, 3.4. -3.4, 2.54, -2.54, 1.2345678e99, -1.2345678e99 );\n$int_variation    = array( \"%d\", \"%-d\", \"%+d\", \"%7.2d\", \"%-7.2d\", \"%07.2d\", \"%-07.2d\", \"%'#7.2d\" );\n$int_numbers      = array( 0, 1, -1, 2.7, -2.7, 23333333, -23333333, \"1234\" );\n$char_variation   = array( 'a', \"a\", 67, -67, 99 );\n$string_variation = array( \"%5s\", \"%-5s\", \"%05s\", \"%'#5s\" );\n$strings          = array( NULL, \"abc\", 'aaa' );\n/* Checking warning messages */\n/* Zero argument */\necho \"\\n*** Output for zero argument ***\\n\";\ntry {\n    printf();\n} catch (TypeError $e) {\n    echo $e->getMessage(), \"\\n\";\n}\n/* Number of arguments not matching as specified in format field */\necho \"\\n*** Output for insufficient number of arguments ***\\n\";\n$string = \"dingy%sflem%dwombat\";\n$nbr = 5;\n$name = \"voudras\";\ntry {\n    printf(\"%d $string %s\", $nbr, $name);\n} catch (\\ArgumentCountError $e) {\n    print('Error found: '.$e->getMessage());\n}\n/* Scalar argument */\necho \"\\n*** Output for scalar argument ***\\n\";\nprintf(3);\n/* Float type variations */\n$counter = 1;\necho \"\\n\\n*** Output for float type ***\\n\";\necho \"\\n Input Float numbers variation array is:\\n\";\nprint_r($float_numbers);\nforeach( $float_variation as $float_var )\n{\n echo \"\\n\\nFloat Iteration $counter\";\n foreach( $float_numbers as $float_num )\n {\n  echo \"\\n\";\n  printf( $float_var, $float_num );\n }\n $counter++;\n}\n/* Integer type variations */\n$counter = 1;\necho \"\\n\\n*** Output for integer type ***\\n\";\necho \"\\n Input Integer numbers variation array is:\\n\";\nprint_r($int_numbers);\nforeach( $int_variation as $int_var )\n{\n echo \"\\n\\nInteger Iteration $counter\";\n foreach( $int_numbers as $int_num )\n {\n  echo \"\\n\";\n  printf( $int_var, $int_num );\n }\n $counter++;\n}\n/* Binary type variations */\necho \"\\n\\n*** Output for binary type ***\\n\";\necho \"\\n Input  numbers variation array is:\\n\";\nprint_r($int_numbers);\n foreach( $int_numbers as $bin_num )\n {\n  echo \"\\n\";\n  printf( \"%b\", $bin_num );\n }\n/* Chararter type variations */\necho \"\\n\\n*** Output for char type ***\\n\";\necho \"\\n Input Characters variation array is:\\n\";\nprint_r($char_variation);\nforeach( $char_variation as $char )\n{\n echo \"\\n\";\n printf( \"%c\", $char );\n}\n/* Scientific type variations */\necho \"\\n\\n*** Output for scientific type ***\\n\";\necho \"\\n Input numbers variation array is:\\n\";\nprint_r($int_numbers);\nforeach( $int_numbers as $num )\n{\n echo \"\\n\";\n printf( \"%e\", $num );\n}\n/* Unsigned Integer type variation */\necho \"\\n\\n*** Output for unsigned integer type ***\\n\";\necho \"\\n Input Integer numbers variation array is:\\n\";\nprint_r($int_numbers);\nforeach( $int_numbers as $unsig_num )\n{\n echo \"\\n\";\n printf( \"%u\", $unsig_num );\n}\n/* Octal type variations */\necho \"\\n\\n*** Output for octal type ***\\n\";\necho \"\\n Input numbers variation array is:\\n\";\nprint_r($int_numbers);\nforeach( $int_numbers as $octal_num )\n{\n echo \"\\n\";\n printf( \"%o\", $octal_num );\n}\n/* Hexadecimal type variations */\necho \"\\n\\n*** Output for hexadecimal type ***\\n\";\necho \"\\n Input numbers variation array is:\\n\";\nprint_r($int_numbers);\nforeach( $int_numbers as $hexa_num )\n{\n echo \"\\n\";\n printf( \"%x\", $hexa_num );\n}\n/* String type variations */\necho \"\\n\\n*** Output for string type ***\\n\";\necho \"\\n Input Strings format variation array is:\\n\";\nprint_r($string_variation);\necho \"\\n Input strings variation array is:\\n\";\nprint_r($strings);\nforeach( $string_variation as $string_var )\n{\n foreach( $strings as $str )\n {\n  echo \"\\n\";\n  printf( $string_var, $str );\n }\n}\n/* variations of %g type */\n$format_g = array(\"%g\", \"%.0g\", \"%+g\", \"%-g\", \"%-1.2g\", \"%+1.2g\", \"%G\", \"%.0G\", \"%+G\", \"%-G\", \"%-1.2G\", \"%+1.2G\");\necho \"\\n\\n*** Output for '%g' type ***\\n\";\necho \"\\n Input format variation array is:\\n\";\nprint_r($format_g);\nforeach( $format_g as $formatg )\n{\n printf(\"\\n$formatg\",123456);\n printf(\"\\n$formatg\",-123456);\n}\n/* Some more typical cases */\n$tempnum = 12345;\n$tempstring = \"abcdefghjklmnpqrstuvwxyz\";\necho\"\\n\\n*** Output for '%%%.2f' as the format parameter ***\\n\";\nprintf(\"%%%.2f\",1.23456789e10);\necho\"\\n\\n*** Output for '%%' as the format parameter ***\\n\";\nprintf(\"%%\",1.23456789e10);\necho\"\\n\\n*** Output for precision value more than maximum ***\\n\";\nprintf(\"%.988f\",1.23456789e10);\necho\"\\n\\n*** Output for invalid width(-15) specifier ***\\n\";\ntry {\n    printf(\"%030.-15s\", $tempstring);\n} catch (ValueError $e) {\n    echo $e->getMessage();\n}\necho\"\\n\\n*** Output for '%F' as the format parameter ***\\n\";\nprintf(\"%F\",1.23456789e10);\necho\"\\n\\n*** Output for '%X' as the format parameter ***\\n\";\nprintf(\"%X\",12);\necho\"\\n\\n*** Output  with no format parameter ***\\n\";\nprintf($tempnum);\necho\"\\n\\n*** Output for multiple format parameters ***\\n\";\nprintf(\"%d  %s  %d\\n\", $tempnum, $tempstring, $tempnum);\necho\"\\n\\n*** Output for excess of mixed type arguments  ***\\n\";\nprintf(\"%s\", $tempstring, $tempstring, $tempstring);\necho\"\\n\\n*** Output for string format parameter and integer type argument ***\\n\";\nprintf(\"%s\", $tempnum);\necho\"\\n\\n*** Output for integer format parameter and string type argument ***\\n\";\nprintf(\"%d\", $tempstring);\n?>")).toMatchSnapshot();
  });
});
