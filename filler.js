var fillForm = function ()
        {
            var inputs = $("input");
            for (var i = 0; i < inputs.length; i++)
            {
                var input = $(inputs[i]);
                if (input.attr("type") == "number")
                {
                    input.val(Math.floor(Math.random() * 1000) + 1);
                } else if (input.attr("type") == "checkbox")
                {
                    input.prop("checked", true);
                }
                else if (input.attr("type") == "email")
                {
                    var result = '';
                    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var charactersLength = characters.length;
                    for (var y = 0; y < 10; y++)
                    {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                        result +="@";
                    for (var y = 0; y < 3; y++)
                    {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    } 
                        result +=".com";
                        input.val(result);
                }else if (input.attr("type") == "text")
                {
                    var result = '';
                    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var charactersLength = characters.length;
                    for (var y = 0; y < 10; y++)
                    {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    input.val(result);
                }
                    else if (input.attr("type") == "password")
                {
                    var result = '';
                    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var characters_special = '@!#$%^&*()_+=-,./:?><;';
                    var charactersLength = characters.length;
                    for (var y = 0; y < 4; y++)
                    {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                        result += characters_special.charAt(Math.floor(Math.random() * characters_special.length));
                    for (var y = 0; y < 4; y++)
                    {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    result += characters_special.charAt(Math.floor(Math.random() * characters_special.length));
                    for (var y = 0; y < 4; y++)
                    {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    input.val(result);
                }
                         else if (input.attr("type") == "tel")
                {
                    var result = '0535';
                    var characters = '123456789';
                    var charactersLength = characters.length;
                    for (var y = 0; y < 8; y++)
                    {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }
                    input.val(result);
                }
            }
            var inputs = $("textarea");
            for (var i = 0; i < inputs.length; i++)
            {
                var input = $(inputs[i]);
                input.val(Math.floor(Math.random() * 1000) + 1);
            }
            var inputs = $("select");
            for (var i = 0; i < inputs.length; i++)
            {
                var input = $(inputs[i]);
                var number = Math.floor(Math.random() * input.find("option").length);
                input.prop(number);
console.log(number);
            }
        }
