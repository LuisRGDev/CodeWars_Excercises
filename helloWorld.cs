using System;
using System.Text;

public static class Kata
{
    
    public static string Encode(string s){
        if (s == null) { 
        
        return null;
        }
        var sb = new StringBuilder(s.Length);
        foreach (char c in s)
        {
            sb.Append((char)(c * 6));
        }
        return sb.ToString();
    }

    public static string Decode(string s) {
        if (s == null)
        {
            return null;
        }
        var sb = new StringBuilder(s.Length);
        foreach(char c in s) {
            sb.Append((char)(c / 6));
        }
        return sb.ToString();
    }

}

class Program
{
    static void Main() {
        string original = "Hello World";
        string encoded = Kata.Encode(original);
        string decoded = Kata.Decode(encoded);

        Console.WriteLine(original);
        Console.WriteLine(encoded);
        Console.WriteLine(decoded);
    }


}