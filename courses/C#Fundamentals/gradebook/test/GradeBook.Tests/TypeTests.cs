using System;
using Xunit;

namespace GradeBook.Tests
{
    public class TypeTests
    {
        [Fact]
        public void GetBookReturnsDifferentObjects()
        {
            var book1 = GetBook("Name 1");
            var book2 = GetBook("Name 2");

            Assert.Equal("Name 1", book1.GetName());
            Assert.Equal("Name 2", book2.GetName());
    	    Assert.NotSame(book1, book2);
        }

        [Fact]
        public void TwoVarsCanReferenceSameObject()
        {
            //Given
            var book1 = GetBook("Book 1");
            var book2 = book1;

            //Then
            Assert.Same(book1, book2);
            Assert.True(object.ReferenceEquals(book1, book2));
        } 

        [Fact]
        public void CanSetNameFromReference()
        {
            var book = GetBook("Book 1");
            SetName(book, "New Name");

            Assert.Equal("New Name", book.GetName());
        }

        [Fact]
        public void CSharpIsPassByValue()
        {
            var book = GetBook("Book 1");
            GetBookSetName(book,"New Name");

            Assert.Equal("Book 1", book.GetName());
        }

        [Fact]
        public void CSharpAndPassByRef()
        {
            var book = GetBook("Book 1");
            GetBookSetName(out book,"New Name");

            Assert.Equal("New Name", book.GetName());
        }

        [Fact]
        public void ValueTypeAlsoPassByValue()
        {
            var x = GetInt();
            SetInt(ref x);

            Assert.Equal(42, x);
        }

        [Fact]
        public void StringsBehaveLikeValueTypes()
        {
            string name = "Jhon";
            string nameUpper = MakeUppercase(name);

            Assert.Equal("Jhon", name);
            Assert.Equal("JHON", nameUpper);
        }
        // ------

        private string MakeUppercase(string param)
        {
            return param.ToUpper();
        }

        private int GetInt()
        {
            return 3;
        }

        private void SetInt(ref int z)
        {
            z = 42;
        }

        private void SetName(Book book, string name)
        {
            book.SetName(name);
        }

        private void GetBookSetName(Book book, string name)
        {
            book = new Book(name);
        }

        private void GetBookSetName(out Book book, string name)
        {
            book = new Book(name);
        }

        private Book GetBook(string name)
        {
            return new Book(name);
        }
    }
}
