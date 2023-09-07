

export const LoginForm = () => {
    return (
        <div>
            <form>
                <label>
                    Email:
                    <input type="email" name="userEmail"/>
                </label>
                <label>
                    Password:
                    <input type="password" name="userPassword"/>
                </label>
                <button type="submit">Log in</button>
            </form>
        </div>
    )
}