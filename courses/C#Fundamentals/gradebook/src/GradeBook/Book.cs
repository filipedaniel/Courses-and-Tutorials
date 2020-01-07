using System;
using System.Collections.Generic;

namespace GradeBook
{
    class Book
    {
        private string name;
        private List<double> grades;

        public Book(string name)
        {
            this.name = name;
            this.grades = new List<double>();
        }

        public string GetName()
        {
            return this.name;
        }

        public void AddGrade(double value)
        {
            this.grades.Add(value);
        }

        public double HighGrade()
        {
            var res = 0.0;

            foreach (double number in this.grades)
            {
                res = Math.Max(res, number);
            }

            return res;
        }

        public double LowGrade()
        {
            var res = this.HighGrade();

            foreach (double number in this.grades)
            {
                res = Math.Min(res, number);
            }

            return res;
        }

        public double Average()
        {
            var res = 0.0;

            foreach (double number in this.grades)
            {
                res += number;
            }

            return res / grades.Count;
        }

        public void ShowStatistics()
        {
            Console.WriteLine($"The average grade for book {this.name} is {this.Average()}!");
            Console.WriteLine($"The lowers grade is {this.LowGrade()}!");
            Console.WriteLine($"The highest grade is {this.HighGrade()}!");
        }
        
    }
}