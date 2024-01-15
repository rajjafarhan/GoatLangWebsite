export const links = [
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
      title: "Switch Statement",
      path: "/handbook/handbook-content/switch",
    },
    {
      id: "8",
      title: "Function",
      path: "/handbook/handbook-content/function",
    },
    {
      id: "9",
      title: "Button 6",
      path: "/handbook/handbook-content/button6",
    },
  ];

  export const hanbookContent = [
    {
        id: "1",
        title: "Variables",
        path:'variables',
        content:{desc:"In Goatlang, variables serve as containers for storing and manipulating data. Let's unravel the basics of working with variables in this caprine-inspired language.",
      h1:"Declaration"},
        code : [
            {
              head:"Local Scope",  
              codeString:"a = 1",
                explanation:"Here, the variable a is limited to the local scope, accessible within its defined context."
            },
            {
              head:"Global Scope",
              codeString:"global const a = 1;",
              explanation:"For global scope, use the global keyword before declaring the variable.By prefixing with global, you extend the variable's scope to the entire program, making it accessible from anywhere"
              
            },
            {
              head:"Constants",
              codeString:"const pi = 3.14; ",
              explanation:"Declare constants using the const keyword. Constants cannot be changed once assigned."
              
            },{
              head:"Data Types",
              codeString:"var age = 3   //integer \nvar weight = 42.5  // float \nvar name = 'Billy' " ,
              explanation:"Declare constants using the const keyword. Constants cannot be changed once assigned."
              
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
    
  ]