class FormValidation{
    formValues ={
        username: "",
        email: "",
        phonenumber: "",
        password: "",
        confirmpassword: ""
    }
    errorValues = {
        usernameErr:"",
        emailErr: "", 
        phonenumberErr: "",
        passwordErr: "",
        confirmpasswordErr: ""
    }

    showErrorMsg(index, msg){
       const form_group = document.getElementsByClassName('from-group')[index];

       form_group.classList.add('error');

       form_group.getElementsByTagName('span')[0].textContent = msg;
    }
    showSuccessMsg(index){
        const form_group = document.getElementsByClassName('from-group')[index];

        form_group.classList.remove('error');

        form_group.classList.add('success');
    }
    getInputs(){
       this.formValues.username = document.getElementById('username').value.trim();

       this.formValues.email = document.getElementById('email').value.trim();

       this.formValues.phonenumber = document.getElementById("phonenumber").value.trim();

       this.formValues.password = document.getElementById('password').value.trim();

       this.formValues.confirmpassword = document.getElementById('confirmpassword');
    }
    validateUsername(){
        if(this.formValues.username === ""){
            this.errorValues.usernameErr = "* Please Enter Your Name"

            this.showErrorMsg(0, this.errorValues.usernameErr)

        }else if(this.formValues.username.length <= 4){
            this.errorValues.usernameErr = "* Username Must Be Atleast 5 Characters"

            this.showErrorMsg(0,this.errorValues.usernameErr)

        }else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* Username Should Not Exceeds 14 Characters"

            this.showErrorMsg(0,this.errorValues.usernameErr)

        }else{
            this.errorValues.usernameErr = "";

            this.showSuccessMsg(0)
        }
    }
    validateEmail(){

    }
    validatePhonenumber(){

    }
    validatePassword(){

    }
    validateConfirmPassword(){

    }
    altertMessage(){

    }
    removeInput(){

    }

}

const ValidateUserInputs = new FormValidation();

document.getElementsByClassName('form')[0].addEventListener('submit', event => {
    event.preventDefault();

    ValidateUserInputs.getInputs();

    ValidateUserInputs.validateUsername();
})

