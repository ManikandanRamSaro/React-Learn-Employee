export default class FirstClass
{
    constructor()
    {

    }

    toUpperCase(input)
    {
        let newInput=new String(input);
        return newInput.toUpperCase();
    }
    FirstLetterOnlytoUpperCase(input)
    {
        let newInput=new String(input);
        let output='';
        if(newInput.length>0)
        {
            if(newInput.length<=1)
            {
            output=newInput.toUpperCase();
            }
            else
            {
                let part1=newInput.charAt(0).toUpperCase();
                let part2=newInput.substr(1, newInput.length-1).toLowerCase();

                output=part1.concat(part2);
            }
        }
        return output;
    }
    sortedList(input)
    {
        let newInput=new String(input);
        let unorder=newInput.split(',');
        let list=unorder.sort((a,b)=>a-b);
        return list.toString();
    }
}