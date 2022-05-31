using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {

            Console.WriteLine("Hello");
            Console.WriteLine("Enter help for hints");

            Operation operation = new Operation();

            operation.Main();

            Console.WriteLine("Closing.");
        }
    }
}
