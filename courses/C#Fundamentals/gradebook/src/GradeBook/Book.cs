using System;
using System.Collections.Generic;

namespace GradeBook
{
    public class Book
    {   
        // private string Name;
        public string Name
        {
            get;
            set;
           /*  get
            {
                return this.name;
            }
            set
            {
                if (!String.IsNullOrEmpty(value))
                {
                    this.name = value;
                }
                else
                {
                    throw new ArgumentException($"Value is empty or null!");
                }
            } */
        }
        private List<double> grades;

        public Book(string name)
        {
            this.Name = name;
            this.grades = new List<double>();
        }

        public void AddGrade(double value)
        {
            if (value <= 100 && value >= 0)
            {
                this.grades.Add(value);
            }
            else
            {
                throw new ArgumentException($"Invalid {nameof(value)}");
            }
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

        public Statistics GetStatistics()
        {
            Statistics stats = new Statistics();
            
            stats.average = this.Average();
            stats.low = this.LowGrade();
            stats.high = this.HighGrade();

            switch (stats.average)
            {
                case var d when d >= 90.0:
                    stats.letter = 'A';
                    break;
                case var d when d >= 80.0:
                    stats.letter = 'B';
                    break;
                case var d when d >= 70.0:
                    stats.letter = 'C';
                    break;
                case var d when d >= 60.0:
                    stats.letter = 'D';
                    break;
                default:
                    stats.letter = 'F';
                    break;
            }

            return stats;
        }
        
    }
}