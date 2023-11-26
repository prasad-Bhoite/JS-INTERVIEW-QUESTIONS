const str="prasad";
const frequency = [];

for(let i=0;i<str.length;i++)
{
    frequency[i] = 1;
    for(let j=i+1;j<str.length;j++)
    {
         if(str[i] === str[j])
         {
            frequency[i]++;
            str[j]='O';
         }
    }
}

console.log("Characters and their corresponding frequencies");
for(let i=0;i<str.length;i++)
{
    if(str[i]!='' && str[i]!='O')
    {
        console.log(str[i],frequency[i]);
    }

}