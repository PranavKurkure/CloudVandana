package codingAssignments;
import java.util.*;

public class ParentClass {

	public static void main(String[] args) {
		CreateAnArray();
		System.out.println("\n===============================================");
		RomanToInteger();
		System.out.println("===============================================");
		CheckPangram();

	}
	
	public static void CreateAnArray()
	{
		int arr[] = new int[] {1,2,3,4,5,6,7};
		System.out.println("Array without shuffling");
		for(int i=0;i<arr.length;i++)
		{
			System.out.print(arr[i]+" ");
		}
		System.out.println("\n------------------------------");
		for(int i=0;i<arr.length-1;i++)
		{
			int temp = arr[i];
			arr[i] = arr[i+1];
			arr[i+1] = temp;
			i++;
		}
		System.out.println("Array after shuffling");
		for(int i=0;i<arr.length;i++)
		{
			System.out.print(arr[i]+" ");
		}
		
	}

	public static void RomanToInteger()
	{
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter roman to convert into integer : ");
		String s = sc.next();
		s = s.toUpperCase();
		HashMap<Character, Integer> romanMap = new HashMap<>();
        romanMap.put('I', 1);
        romanMap.put('V', 5);
        romanMap.put('X', 10);
        romanMap.put('L', 50);
        romanMap.put('C', 100);
        romanMap.put('D', 500);
        romanMap.put('M', 1000);
        int result = 0;
        int prevValue = 0;

        for (int i = s.length() - 1; i >= 0; i--) {
            int currValue = romanMap.get(s.charAt(i));

            // If the current value is less than the previous value, subtract it
            if (currValue < prevValue) {
                result -= currValue;
            } else {
                result += currValue;
            }

            prevValue = currValue;
        }
        System.out.println("Integer : "+result);
	}

	public static void CheckPangram()
	{
		Scanner sc = new Scanner(System.in);
		String alphabets = "abcdefghijklmnopqrstuvwxyz";
		System.out.println("Enter sentence to check Pangram : ");
		String str = sc.next();
		str = str.toLowerCase();
		HashSet<Character> set = new HashSet<Character>();
		for(int i=0;i<str.length();i++)
		{
			if(alphabets.contains(str.charAt(i)+""))
			{
				set.add(str.charAt(i));
			}
			
		}
		for (Character element : set) {
            System.out.print(element+" ");
        }
		System.out.println(set.size());
		if(set.size() == 26)
		{
			System.out.println("Sentence is a pangram!");
		}
		else
		{
			System.out.println("Sentence is NOT a pangram!");
		}
		
	}
}
