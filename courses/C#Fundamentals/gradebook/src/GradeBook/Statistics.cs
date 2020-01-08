namespace GradeBook
{
  public class Statistics
  {
    public double average;
    public double low;
    public double high;

    public char letter;

    public void Book()
    {
      this.average = 0.0;
      this.high = 0.0;
      this.low = 0.0;
      this.letter = 'F';
    }

  }
}