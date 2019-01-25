function greet(name)
{

    if(name == null)
    {
        return 'Hello, my friend.';
    }

    else if(Array.isArray(name))
    {
        return arrayGreet(name)
    }

    else if(name.toUpperCase() === name)
    {
        return `HELLO ${name}!`;
    }
    return `Hello, ${name}.`;
}

function arrayGreet(name)
{
    if(name.length > 2)
    {
        var message = `Hello,` 
        for(i =0; i < name.length; i++)
        {
            if(i == name.length-1)
            {
                message = message + ` and ${name[i]}.`
            }

            else
            {
                message = message + ` ${name[i]},`
            }
        }
        return message;
        
    }
    else (Array.isArray(name))
    {
        return `Hello, ${name[0]} and ${name[1]}.`;
    }
}
module.exports = greet;
