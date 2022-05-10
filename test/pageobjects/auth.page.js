class AuthPage{

//locators
//sign up information
get input_CreateEmail(){
    return $('#email_create');
}

get btn_CreateAccount()
{
    return $('#SubmitCreate');
}
// sign in credentials
get input_Login_Email()
{
    return $('#email');
}
get input_Login_Password()
{
    return $('#passwd');
}
get btn_Signin()
{
    return $('#SubmitLogin');
}
//ACTIONS


}

export default new AuthPage();