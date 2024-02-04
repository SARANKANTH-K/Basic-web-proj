Validateform ()
{
    password=value.password()
    if(password=='')
    {
        var ans=/^?=.*[A=Z]?=.{2,}/;
        return ans;
    }
}