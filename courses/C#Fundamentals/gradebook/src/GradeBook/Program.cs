using System;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var x = 1.1;
            var y = 1.2;
            
            var result = 0.0;  
            var numbers = new double[3] { 12.7, x, y };
            result += numbers[0];
            result += numbers[1];
            result += numbers[2];

            Console.WriteLine(result);
            // if (args.Length > 0)
            // {
            //     Console.WriteLine($"Hello {args[0]}!");
            // } else {
            //     Console.WriteLine("Hello World!");
            // }
        }
    }
}
