export const SignUpForm = () => {

    const handleSubmit = e => {
        e.preventDefault()

        const name = e.currentTarget.elements.userName.value;
        const email = e.currentTarget.elements.userEmail.value;
        const password = e.currentTarget.elements.userPassword.value;

        console.log(name, email, password)
        e.target.reset(); 
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userName">
                    Name:
                    <input type="text" name="userName"/>
                </label>
                <label htmlFor="userEmail">
                    Email:
                    <input type="email" name="userEmail"/>
                </label>
                <label htmlFor="userPassword">
                    Password:
                    <input type="password" name="userPassword"/>
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}