using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    class Operation
    {
        bool exit = false;

        double num1;
        double num2;
        
        public void Main()
        {
            while (exit == false)
            {
                Console.Write("Enter: ");
                string val = Console.ReadLine();

                switch (val)
                {
                    case "exit":
                        exit = true;
                        break;
                    case "help":
                        Console.WriteLine("Enter 'exit' to exit the program");
                        Console.WriteLine("Enter 'calculate' to begin calculation");
                        Console.WriteLine("Enter the command without qoute marks");
                        Console.WriteLine("Available operators: +, -, *, /");
                        break;
                    case "calculate":
                        Calculation();
                        break;
                    default:
                        Console.WriteLine("Enter a valid command, enter 'help' for hints");
                        break;
                }

            }
        }

        private void Calculation()
        {
            Console.WriteLine("Enter the first number: ");

            try { num1 = double.Parse(Console.ReadLine()); }
            catch(FormatException)
            { Console.WriteLine("Enter a valid command."); }

            Console.WriteLine("Enter the operation sign: ");
            string op = Console.ReadLine();

            Console.WriteLine("Enter the second number: ");

            try { num2 = double.Parse(Console.ReadLine()); }
            catch (FormatException)
            { Console.WriteLine("Enter a valid command."); }

            Console.WriteLine(num1 + op + num2 + " is what you entered.");
            double ans = 0;

            switch (op)
            {
                case "+":
                    ans = num1 + num2;
                    break;
                case "-":
                    ans = num1 - num2;
                    break;
                case "*":
                    ans = num1 * num2;
                    break;
                case "/":
                    if (num2 == 0)
                    {
                        Console.WriteLine("You cannot dive by zero, your answer is not correct");
                    }
                    else
                        ans = num1 / num2;
                    break;
                default:
                    Console.WriteLine("You did not enter a valid operator.");
                    break;
            }

            Console.WriteLine("Your answer is: " + ans);
            return;

        }
    }
}
