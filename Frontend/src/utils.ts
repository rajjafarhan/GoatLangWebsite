export const links = [
    {
      id: "0",
      title: "Data Types",
      path: "/handbook/handbook-content/datatypes",
    },
    {
      id: "1",
      title: "Variables",
      path: "/handbook/handbook-content/variables",
    },
    {
      id: "2",
      title: "Array",
      path: "/handbook/handbook-content/array",
    },
    {
      id: "3",
      title: "Object",
      path: "/handbook/handbook-content/objects",
    },
    {
      id: "4",
      title: "For Loop",
      path: "/handbook/handbook-content/forloop",
    },
    {
      id: "5",
      title: "While Loop",
      path: "/handbook/handbook-content/whileloop",
    },
    {
      id: "6",
      title: "If Else",
      path: "/handbook/handbook-content/ifelse",
    },
    {
      id: "7",
      title: "Display statement", 
      path: "/handbook/handbook-content/display",
    },
    {
      id: "8",
      title: "Function",
      path: "/handbook/handbook-content/function",
    },
    {
      id: "9",
      title: "Classes",
      path: "/handbook/handbook-content/classes",
    },
    {
      id: "10",
      title: "polymorphism",
      path: "/handbook/handbook-content/polymorphism",
    },
    {
      id: "11",
      title: "Inheritance",
      path: "/handbook/handbook-content/Inheritance",
    },
    {
      id: "12",
      title: "Encapsulation",
      path: "/handbook/handbook-content/Encapsulation",
    },
    
    {
      id: "13",
      title: "Abstraction",
      path: "/handbook/handbook-content/Abstraction",
    },
    {
      id: "14",
      title: "Interface",
      path: "/handbook/handbook-content/Interface",
    },
  
  ];

  export const hanbookContent = [
      {
    id: "0",
    title: "Data Types",
    path: 'datatypes',
    content: {
        desc: "Goatlang supports a variety of data types to represent different kinds of values. Let's explore the common data types and how they are used in this caprine-inspired language.",
        h1: "Common Data Types"
    },
    code: [
        {
            head: "Number",
            codeString: "age = 3",
            explanation: "The 'Number' data type represents numeric values. Here, 'age' is assigned the value 3."
        },
        {
            head: "String",
            codeString: "name = 'GoatLang'",
            explanation: "The 'String' data type represents textual data. Here, 'name' is assigned the string 'GoatLang'."
        },
        {
            head: "Boolean",
            codeString: "isCaprine = true",
            explanation: "The 'Boolean' data type represents true or false values. Here, 'isCaprine' is assigned the value 'true'."
        },
        {
            head: "Array",
            codeString: "numbers = [1, 2, 3, 4, 5]",
            explanation: "The 'Array' data type represents an ordered list of values. Here, 'numbers' is an array containing the numbers 1 through 5."
        },
        {
            head: "Object",
            codeString: "person = { name: 'Bob', age: 25 }",
            explanation: "The 'Object' data type represents a collection of key-value pairs. Here, 'person' is an object with 'name' and 'age' properties."
        },
        {
            head: "Null",
            codeString: "nullValue = null",
            explanation: "The 'null' data type represents the absence of a value. Here, 'nullValue' is assigned the value 'null'."
        },
        {
            head: "Undefined",
            codeString: "undefinedValue = undefined",
            explanation: "The 'undefined' data type represents an uninitialized or undefined value. Here, 'undefinedValue' is assigned the value 'undefined'."
        },
        {
            head: "Function",
            codeString: "fun greet() {\n    display('Baa, hello!')\n}",
            explanation: "The 'Function' data type represents a callable block of code. Here, 'greet' is a function that displays a greeting message."
        },
    ]
}
      ,
    {
        id: "1",
        title: "Variables",
        path:'variables',
        content:{desc:"In Goatlang, variables serve as containers for storing and manipulating data. Let's unravel the basics of working with variables in this caprine-inspired language." ,
         h1:"Declaration and Initialization"},
        code : [
            {
              head:"Local Scope",  
              codeString:"a = 1",
                explanation:"Here, the variable a is limited to the local scope, accessible within its defined context."
            },
            {
              head:"Global Scope",
              codeString:"global const a = 1",
              explanation:"For global scope, use the global keyword before declaring the variable.By prefixing with global, you extend the variable's scope to the entire program, making it accessible from anywhere"
              
            },
            {
              head:"Constants",
              codeString:"const pi = 3.14 ",
              explanation:"Declare constants using the const keyword. Constants cannot be changed once assigned."
              
            },{
              head:"Data Types",
              codeString:"age = 3        //integer \nweight = 42.5  // float \nname = 'Billy' //string " ,
              explanation:"Declare constants using the const keyword. Constants cannot be changed once assigned."
              
            },
            {
              head:"Initialization",
              codeString:"goatCount = 5 " ,
              explanation:"Variables can be initialized at the time of declaration or later in the code."
              
            },
            {
              head:"Variable Naming",
              codeString:"1stPlace = 'Invalid'  // Incorrect naming \nfrom = 'Invalid'  //'from' is a reserved keyword" ,
              explanation:"* Do not start variable names with a number or special character.\n* Avoid using reserved keywords as variable names."
              
            }
            
        ]
    },
    {
        id: "2",
        title: "Array",
        path:'array',
        content:{desc:"Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.",
        h1:"GoatLang Array"},
        code : [
            {
                head:"Array Initialization",
                codeString:"arr = [1,2,3];",
                explanation:"To declare an array, specify the name of the array followed by using array literal to insert values in a comma-separated list, inside curly braces."
            },
            {
              head:"Access the Elements of an Array",
              codeString:"numbers = [1, 2, 3, 4, 5]; \nnumbers -> 0;",
              explanation:"This statement accesses the value of the first element in numbers. You can access elements by referring to the index number. Remember that array indexes in Goat Lang start with 0, with numbers->0 representing the first element."
            },
            {
              codeString:"numbers = [1, 2, 3, 4, 5]; \nnumbers -> (numbers.length-1);",
              explanation:"This statement accesses the value of the element one less than the length of array."
              
            },
            {
              head:"Modifying an Array",
              codeString:"numbers = [1, 2, 3, 4, 5]; \nnumbers -> 0 = 5;",
              explanation:"This statement accesses the value of the first element in numbers and modifies its value from initial value 1 to final value 5. The value at the first index is updated."
            },
        ]
    },
    {
    id: "3",
    title: "Objects",
    path: 'objects',
    content: {
        desc: "In Goatlang, objects allow you to group related data and functionality together. Let's explore the fundamentals of working with objects in this caprine-inspired language.",
        h1: "Object Declaration and Initialization"
    },
    code: [
        {
            head: "Creating Objects",
            codeString: "person = { name: 'Bob', age: 25, city: 'Caprineville' }",
            explanation: "Here, we create an object 'person' with properties like 'name', 'age', and 'city'. Each property is associated with a value."
        },
        {
            head: "Accessing Properties",
            codeString: "personName = person.name",
            explanation: "To access the 'name' property of the 'person' object, we use dot notation. 'personName' will be assigned the value 'Bob'."
        },
        {
            head: "Adding New Properties",
            codeString: "person.job = 'Goat Developer'",
            explanation: "You can dynamically add new properties to an existing object. Here, we add a 'job' property to the 'person' object."
        },
        {
            head: "Nested Objects",
            codeString: "address = { city: 'Caprineville', zip: '12345' }\nperson.address = address",
            explanation: "Objects can also contain other objects. Here, we create an 'address' object and nest it within the 'person' object."
        },
        {
            head: "Object Methods",
            codeString: "person.sayHello = function() { return 'Baa, hello!' }",
            explanation: "In GoatLang, objects can have methods (functions as properties). Here, 'sayHello' is a method of the 'person' object."
        },
    ]
}
,
    {
      id: "4",
      title: "For Loop",
      path:'forloop',
      content:{desc:"Loops can execute a block of code as long as a specified condition is reached.\nLoops are handy because they save time, reduce errors, and they make code more readable.",
      h1:"Goat Lang For Loop"},
      code : [
          {
              head:"Initialization",
              codeString:"i = 0; \t//Initialize the index variable",
              explanation:"In Goat Lang, before using a for loop it's essential to initialize the index variable. This is done outside the loop, typically before the loop structure."
          },
          {
            head:"Loop Structure",
            codeString:"for i from statement 1 to statement 2 by statement 3 { \n\t// Code to be executed in each iteration//  \n}",
            explanation:"Here, from 0 to 2 by 1 indicates that the loop will iterate from 0 to 2 (inclusive) with a step size of 1. You can adjust these parameters based on your specific requirements."
          },
          
          {
            head:"Loop Example 1",
            codeString:"i = 0; \t// Initialize the index variable \nfor i from 0 to 2 by 1 {\n\tdisplay(i); \n}",
            explanation:"In this example, the loop will print the values 0, 1, and 2, as it iterates over the specified range with a step size of 1."
          },
          {
            head:"Loop Example 2",
            codeString:"i = 0; \nfor i from 0 to 5 by 1 {\n\tdisplay(i); \n} \n// Outputs: 0, 1, 2, 3, 4, 5",
            explanation:"In this example, the loop will print the values 0, 1, and 2, as it iterates over the specified range with a step size of 1."
          },


      ]
  },
  {
    id: "5",
    title: "While Loop",
    path: 'whileloop',
    content: {
        desc: "In Goatlang, the 'while' loop allows you to repeatedly execute a block of code as long as a specified condition is true. Let's explore the usage and syntax of 'while' loops in this caprine-inspired language.",
        h1: "Basic Structure and Usage"
    },
    code: [
        {
            head: "Initializing a Variable",
            codeString: "i = 0",
            explanation: "Before entering the 'while' loop, you often need to initialize a variable. Here, 'i' is initialized to 0."
        },
        {
            head: "While Loop Syntax",
            codeString: "until (i < 10) {\n    i = i + 1\n    display(i)\n}",
            explanation: "The 'until' keyword is used to start a 'while' loop, followed by the condition in parentheses. The code inside the curly braces will be executed as long as the condition is true."
        },
        {
            head: "Loop Condition",
            codeString: "i < 10",
            explanation: "The condition inside the parentheses determines when the 'while' loop should continue executing. In this case, the loop continues as long as 'i' is less than 10."
        },
        {
            head: "Updating the Variable",
            codeString: "i = i + 1",
            explanation: "Within the 'while' loop, you often need to update the variable that is part of the loop condition. Here, 'i' is incremented by 1 in each iteration."
        },
        {
            head: "Displaying Output",
            codeString: "display(i)",
            explanation: "Here, the 'display' function is used to output the current value of 'i'. You can replace this with any code relevant to your use case."
        },
        {
            head: "Loop Termination",
            codeString: "// Loop terminates when i is no longer less than 10",
            explanation: "The loop continues executing as long as the condition is true. In this example, it terminates when 'i' is no longer less than 10."
        },
        {
            head: "Infinite Loop Caution",
            codeString: "// Ensure the loop condition will eventually become false",
            explanation: "Be cautious to avoid infinite loops. Ensure that the loop condition will eventually evaluate to false, or include a mechanism to break out of the loop."
        }
    ]
}

  ,
  {
    id: "6",
    title: "If Else",
    path:'ifelse',
    content:{desc:"The if-else statement in Goatlang enables conditional execution, allowing the program to follow different paths based on specified conditions. This construct enhances the flexibility of your code, making it responsive to varying scenarios \nWith if-else, you can create divergent code branches, executing specific blocks when conditions are met and alternate blocks when conditions are not satisfied. This facilitates decision-making within your Goatlang programs, providing a way to handle different cases dynamically. \nThe elf keyword extends this functionality by allowing the inclusion of multiple conditions, enhancing the language's capability to express complex decision trees. By using elf, you can streamline your code and improve its readability, making it easier to manage multiple scenarios within a single if-else structure. Explore the examples provided to understand how to effectively implement if-else and elf in your Goatlang programs"},
    code : [
        {
          head:"Syntax for basic if-else statement" , 
          codeString:"if (age > 18) \n{  \ndisplay('You are an adult.') \n} \nelse \n{ \ndisplay('You are a minor.') \n}",
          
        },
        {
          head:"Multiple conditions with ' elf ' keyword" , 
          codeString:"if (condition1) \n{  \n   //Code for Condition1 \n} \nelf (condition2) \n{ \n   // Code for condition2 \n} elf (condition3) \n{ \n   // Code for condition3 \n} else \n{ \n   // Code to execute when none of the conditions are true \n}",
          explanation:"This code snippet represents a versatile conditional structure in Goatlang. It begins with an initial 'if' condition (condition1), followed by alternative 'elf' conditions (condition2 and condition3), each with specific code blocks. The 'else' block contains code to execute when none of the preceding conditions are true. This construct allows for a multi-branch decision-making process, accommodating different scenarios based on the fulfillment of various conditions."
        },
        {
          head:"Nested if Statements",
          codeString:"if (age > 18) \n{ \n   display('You are an adult.') \n   if (income > 30000) \n   { \n      display('You have a higher income.') \n   } \n   else \n   { \n      display('You have a lower income.') \n   } \n} \nelse \n{ \n   display('You are a minor.') \n}",
          explanation:"Nested 'if' statements in Goatlang provide a way to evaluate multiple conditions in a hierarchical manner. Each 'if' statement inside another is known as a nested 'if,' and it allows for intricate decision-making"
        }
    ]
},
{
    id: "7",
    title: "Display Statements",
    path: 'display',
    content: {
        desc: "In Goatlang, display statements are used to output information to the user or developer. Let's explore the different ways to display information in this caprine-inspired language.",
        h1: "Usage and Syntax"
    },
    code: [
        {
            head: "Displaying Variables",
            codeString: "name = 'GoatLang'\ndisplay(name)",
            explanation: "The 'display' statement is used to output the value of a variable. Here, the value of the 'name' variable will be displayed."
        },
        {
            head: "Concatenation",
            codeString: "age = 3\ndisplay('The goat is ' + age + ' years old')",
            explanation: "You can concatenate strings and variables within the 'display' statement. This is useful for creating dynamic output."
        },
        {
            head: "Multiple Parameters",
            codeString: "height = 1.2\ndisplay('Height:', height, 'm')",
            explanation: "The 'display' statement can take multiple parameters, separating them with commas. Each parameter will be displayed in order."
        },
        {
            head: "String Literals",
            codeString: "display('Hello, world!')",
            explanation: "You can directly display string literals using the 'display' statement. This is useful for fixed text or messages."
        },
        {
            head: "Expression Evaluation",
            codeString: "result = 5 * 7\ndisplay('The result is:', result)",
            explanation: "Expressions can be evaluated within the 'display' statement. Here, the result of the expression '5 * 7' will be displayed."
        },
        {
            head: "Formatting Output",
            codeString: "pi = 3.14159\ndisplay('Value of pi:', pi.toFixed(2))",
            explanation: "You can format the output of numerical values using methods like 'toFixed'. Here, the value of 'pi' is displayed with two decimal places."
        },
        {
            head: "Special Characters",
            codeString: "display('Newline character: \\nTab character: \\t')",
            explanation: "Special characters can be included in the 'display' statement. Here, the newline character '\\n' and tab character '\\t' are used."
        }
    ]
}

,
{
    id: "8",
    title: "User-Defined Functions",
    path: 'function',
    content: {
        desc: "In Goatlang, user-defined functions allow you to encapsulate a block of code for reusability. Let's delve into the details of defining and using functions in this caprine-inspired language.",
        h1: "Function Declaration and Invocation"
    },
    code: [
        {
            head: "Creating Functions",
            codeString: "fun greet(name) {\n    return 'Baa, hello ' + name + '!'\n}",
            explanation: "Here, we define a function 'greet' that takes a parameter 'name' and returns a greeting message. The 'fun' keyword is used to declare a function."
        },
        {
            head: "Function Invocation",
            codeString: "message = greet('Alice')",
            explanation: "To invoke a function, use its name followed by parentheses and provide any required arguments. The 'message' variable will contain the result of the 'greet' function."
        },
        {
            head: "Parameters and Arguments",
            codeString: "fun add(a, b) {\n    return a + b\n}\nresult = add(3, 5)",
            explanation: "Functions can take parameters (inputs). In this example, the 'add' function takes two parameters 'a' and 'b', and returns their sum when invoked with arguments 3 and 5."
        },
        {
            head: "Default Parameters",
            codeString: "fun exponentiate(base, power=2) {\n    return base ** power\n}\nresult = exponentiate(3)",
            explanation: "You can provide default values for parameters. If the 'power' parameter is not provided when invoking 'exponentiate', it defaults to 2."
        },
        {
            head: "Return Statement",
            codeString: "fun multiply(a, b) {\n    let result = a * b\n    return result\n}",
            explanation: "The 'return' statement is used to specify the value that the function should return. Here, 'multiply' returns the product of 'a' and 'b'."
        },
        {
            head: "Function Scope",
            codeString: "let globalVar = 10\nfun printGlobalVar() {\n    print(globalVar)\n}\nprintGlobalVar()",
            explanation: "Functions have their own scope. Variables defined inside a function are local to that function, unless explicitly declared as global."
        }
    ]
},{
    id: "9",
    title: "Classes",
    path: 'classes',
    content: {
        desc: "This part of GoatLang is under development and will be released shortly. Stay tuned to explore the variety of data types that will be supported in GoatLang to represent different kinds of values.",
    },
    code: [
        {
            head: "",
            codeString: "//coming soon",
            
        }
        // Repeat the structure for each data type you initially intended to cover
    ]
},{
    id: "10",
    title: "polymorphism",
    path: 'polymorphism',
    content: {
        desc: "This part of GoatLang is under development and will be released shortly. Stay tuned to explore the variety of data types that will be supported in GoatLang to represent different kinds of values.",
    },
    code: [
        {
            head: "",
            codeString: "//coming soon",
            
        }
        // Repeat the structure for each data type you initially intended to cover
    ]
},{
    id: "11",
    title: "Inheritance",
    path: 'Inheritance',
    content: {
        desc: "This part of GoatLang is under development and will be released shortly. Stay tuned to explore the variety of data types that will be supported in GoatLang to represent different kinds of values.",
    },
    code: [
        {
            head: "",
            codeString: "//coming soon",
            
        }
        // Repeat the structure for each data type you initially intended to cover
    ]
},{
    id: "12",
    title: "Encapsulation",
    path: 'Encapsulation',
    content: {
        desc: "This part of GoatLang is under development and will be released shortly. Stay tuned to explore the variety of data types that will be supported in GoatLang to represent different kinds of values.",
    },
    code: [
        {
            head: "",
            codeString: "//coming soon",
            
        }
        // Repeat the structure for each data type you initially intended to cover
    ]
},{
    id: "13",
    title: "Abstraction",
    path: 'Abstraction',
    content: {
        desc: "This part of GoatLang is under development and will be released shortly. Stay tuned to explore the variety of data types that will be supported in GoatLang to represent different kinds of values.",
    },
    code: [
        {
            head: "",
            codeString: "//coming soon",
            
        }
        // Repeat the structure for each data type you initially intended to cover
    ]
},{
    id: "14",
    title: "Interface",
    path: 'Interface',
    content: {
        desc: "This part of GoatLang is under development and will be released shortly. Stay tuned to explore the variety of data types that will be supported in GoatLang to represent different kinds of values.",
    },
    code: [
        {
            head: "",
            codeString: "//coming soon",
            
        }
        // Repeat the structure for each data type you initially intended to cover
    ]
}


    
  ]
