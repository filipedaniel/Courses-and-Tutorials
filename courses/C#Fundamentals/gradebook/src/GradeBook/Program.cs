using System;

namespace GradeBook
{
    class Program
    {
        static void Main(string[] args)
        {
            var book = new Book("book1");
            book.AddGrade(12.3);
            book.AddGrade(10.2);
            book.AddGrade(9.4);
            book.ShowStatistics();
        }
    }
}
