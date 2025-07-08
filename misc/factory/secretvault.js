const secretVault = (
    function () {
        let secret = null;
        const setSecret = (newSecret) => {
            secret = newSecret;
        };
        // const revealSecret = (password) => {
        //     if (password === 'opensesame') {
        //         return secret;
        //     } else {
        //         return null
        //     }
        // };
        const revealSecret = (password) => password === 'opensesame' ? secret : null;
        const clearSecret = () => {
            secret = null;
        };
        return { setSecret, revealSecret, clearSecret };
    }

)();

const vault = secretVault;

vault.setSecret('Hey Lazer Lips, your momma was a snowblower!');
console.log(vault.revealSecret('wrongpassword'));
console.log(vault.revealSecret('opensesame'));
vault.clearSecret();
console.log(vault.revealSecret('opensesame'));
console.log(vault.secret);