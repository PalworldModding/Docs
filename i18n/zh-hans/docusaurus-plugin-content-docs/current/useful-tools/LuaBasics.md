---
sidebar_position: 2
---

# Lua Basics

# Basic Syntax and Data Types

LUA is a lightweight and easy to learn programming language. In this section, we will cover the basic structure of a LUA script, as well as the different data types available and how to manipulate them.

## Script Structure
A LUA script is a plain text file with the `.lua` file extension. The script is executed from top to bottom, and it can contain a combination of statements, comments, and functions.

### Statements
Statements are commands that perform a specific action, such as assigning a value to a variable or calling a function.

-- This is a statement that assigns the value "hello" to the variable "greeting"
greeting = "hello"

### Comments
Comments are used to add notes or explanations to the code and are ignored by the interpreter. In LUA, comments are created using double dashes (`--`).
```lua
-- This is a comment and will be ignored by the interpreter
greeting = "hello"
```

:::tip
It's a great practice to leave comments around your code to explain what it does, for not only yourself but others.
:::

```lua
    -- Function to check pal's health
    function checkPalHealth()
        -- Get pal using getPal function
        local pal = getPal("anubis")
        -- Return pal's health
        return pal.health
    end
```

### Functions
Functions are blocks of code that perform a specific task and can be reused throughout the script. Functions are defined using the `function` keyword and are called using their name followed by parentheses (`()`).
```lua
-- This is a function that prints a greeting message
function sayHello()
    print("Hello!")
end

-- This is how the function is called
sayHello()
```

## Data Types
LUA supports several data types, including:

### Numbers
Numbers are used to represent numeric values and can be integers or floating-point numbers.
```lua
-- This is a number
age = 25

-- This is also a number, but with a decimal point
price = 9.99
```
### Strings
Strings are used to represent text and are enclosed in double or single quotes.
```lua
-- This is a string
name = "John"

-- This is also a string
address = '123 Main St'
```
### Booleans
Booleans are used to represent true or false values.
```lua
-- This is a boolean
isValid = true

-- This is also a boolean
isCompleted = false
```
### Tables [Tables and Metatables](./LuaBasics#tables-and-metatables)
Tables are used to store collections of values and can be used as arrays or dictionaries.
```lua
-- This is a table
myTable = {1, 2, 3}

-- This is also a table, but with named keys
myDictionary = {name = "John", age = 25}
```
### Manipulating Data
LUA provides several built-in functions and operators for manipulating data, such as concatenating strings, performing mathematical operations, and more.
```lua
-- Concatenating strings
greeting = "Hello, " .. "world!"

-- Performing mathematical operations
sum = 2 + 2
difference = 10 - 5
product = 2 * 3
quotient = 10 / 2
```

:::tip
This is just a small introduction to LUA basic syntax and data types, there is much more to learn and explore, such as control structures, libraries and modules, OOP and more.
:::

:::warning
Please keep in mind that the code snippets will not run as it is and it is intended to be used as an example and reference.
:::



## Variables and Functions

In LUA, variables are used to store and manipulate data, and functions are used to organize and reuse code.

### Variables
In LUA, variables are declared using the `local` keyword or without it.
```lua
-- Declaring a variable
local x = 5

-- Declaring a variable without the `local` keyword
y = 10
```
It's recommended to use the local keyword when declaring a variable, as it limits the scope of the variable to the current function or file, and prevents accidental global variable assignments.

LUA supports several data types, including numbers, strings, booleans, and tables.
```lua
-- Declaring a number variable
local age = 25

-- Declaring a string variable
local name = "John"

-- Declaring a boolean variable
local isValid = true

-- Declaring a table variable
local myTable = {1, 2, 3}
```
### Functions
In LUA, functions are declared using the function keyword and can be called using the function name followed by parentheses.
```lua
-- Declaring a function
function sayHello()
    print("Hello!")
end

-- Calling a function
sayHello()
```
Functions can also take parameters and return values.
```lua
-- Declaring a function with parameters
function add(x, y)
    return x + y
end

-- Calling a function with arguments
result = add(5, 10)
```
Functions can be stored in variables and passed as arguments to other functions.
```lua
-- Storing a function in a variable
local myFunction = function()
    print("Hello!")
end

-- Passing a function as an argument
otherFunction(myFunction)
```
This is just a small introduction to variables and functions in LUA, there is much more to learn and explore, such as closures, recursion, and more.

## Flow Control

In LUA, flow control statements are used to control the flow of execution of a script. These include `if`, `else`, `elseif`, `for`, `while`, and `repeat` statements.

### If-Else Condition
The `if` statement is used to check if a certain condition is true and execute a block of code if it is. The `else` statement is used as an alternative if the condition is not true.
```lua
-- If-else statement
local x = 5
if x > 10 then
    print("x is greater than 10")
else
    print("x is less than or equal to 10")
end`
```
### Elseif Condition
The `elseif` statement is used to check multiple conditions. If the first condition is not true, the script will check the next one, and so on, until a true condition is found or the end of the script is reached.
```lua
-- Elseif statement
local x = 5
if x > 10 then
    print("x is greater than 10")
elseif x < 0 then
    print("x is less than 0")
else
    print("x is between 0 and 10")
end`
```
##3 For Loop
The `for` loop is used to iterate over a range of numbers or elements in an array or table. The loop variable is declared and initialized before the loop, and the loop will continue until the end condition is met.
```lua
-- For loop
for i = 1, 10 do
    print(i)
end`
```
### While Loop
The `while` loop is used to execute a block of code repeatedly as long as a certain condition is true.
```lua
-- While loop
local x = 5
while x > 0 do
    print(x)
    x = x - 1
end
```

### Repeat Until
The `repeat` statement is used to execute a block of code repeatedly until a certain condition is met. The code block is executed at least once before the condition is checked.
```lua
-- Repeat until
local x = 5
repeat
    x = x - 1
    print(x)
until x == 0
```
The above code snippet will execute the loop until x is equal to 0, and the value of x will be decremented in each iteration.


## Tables and Metatables

In Lua, tables are a fundamental data structure used to store and organize data. A table is a collection of key-value pairs, where each key is unique within the table. Tables can be used as arrays, dictionaries, objects, or a combination of these.

### Creating a Table
To create a table, you can use curly braces `{}` and separate the key-value pairs with commas. Keys can be either numbers or strings, and values can be any Lua data type, including other tables.

```lua
-- Creating a table
local myTable = {
    ["name"] = "John",
    ["age"] = 25,
    [3] = "hello",
    -- Tables can be used as values of other tables
    ["nestedTable"] = {
        ["key"] = "value"
    }
}
```

In this example, the table myTable has four key-value pairs. The first key "name" has the value "John", the second key "age" has the value 25, the third key 3 has the value "hello", and the fourth key "nestedTable" has another table as its value.

### Accessing Table Elements
You can access the elements of a table using the table name followed by the key in square brackets `[]`.

```lua
-- Accessing table elements
print(myTable["name"]) -- Output: John
print(myTable.name)     -- Output: John
print(myTable[3])      -- Output: hello
print(myTable.nestedTable.key) -- Output: value
```
### Metatables

Metatables are used to define the behavior of a table when certain operations are performed on it. A metatable is a table that can be set as the metatable of another table. The metatable contains metamethods, which are functions that define the behavior of the table when certain operations are performed on it.

```lua
-- Creating a metatable
local myMetatable = {
    __add = function(table1, table2)
        local newTable = {}
        for k, v in pairs(table1) do
            newTable[k] = v
        end
        for k, v in pairs(table2) do
            newTable[k] = v
        end
        return newTable
    end
}

-- Setting the metatable
setmetatable(myTable, myMetatable)

-- Using the metamethod
local myOtherTable = {
    ["city"] = "New York",
    ["country"] = "USA"
}
local myCombinedTable = myTable + myOtherTable
print(myCombinedTable.name)     -- Output: John
print(myCombinedTable.city)     -- Output: New York
```

In this example, the `__add` metamethod is defined to combine two tables into a new table. The setmetatable function is used to set `myMetatable` as the metatable of myTable. Finally, the `+` operator is used to combine `myTable` and `myOtherTable` into `myCombinedTable`.
