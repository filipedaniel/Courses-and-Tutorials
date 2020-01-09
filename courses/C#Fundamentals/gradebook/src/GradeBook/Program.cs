using System;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var book = new Book("book1");
            while (true)
            {
                Console.WriteLine("Enter a grade or 'q' to exit!");
                var input = Console.ReadLine();

                if (input == "q")
                {
                    break;
                }

                try
                {
                    var grade = double.Parse(input);
                    book.AddGrade(grade); 
                }
                catch (ArgumentException e)
                {
                    Console.WriteLine(e.Message);
                }
                catch (FormatException e)
                {
                    Console.WriteLine(e.Message);
                }
            }
                
            Statistics stats = book.GetStatistics();
            
            Console.WriteLine($"The average grade for book {book.Name} is {stats.average:N2}!");
            Console.WriteLine($"The lowers grade is {stats.low}!");
            Console.WriteLine($"The highest grade is {stats.high}!");
            Console.WriteLine($"The letter grade is {stats.letter}!");
        }
    }
}
