export const authConfig = {
    pages: {
        signIn: 'login',
    },
    providers: [],
    callbacks: {
        async jwt({ token }) {
            // console.log(token);
            if (!token) {
                return token
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id;
                session.user.isAdmin = token.isAdmin;
            }
            return session;
        },
        authorized({ auth, request }) {
            const user = auth?.user;
            const isOnAdminPage = request.nextUrl?.pathname.startsWith('/admin');
            const isOnUserPage = request.nextUrl?.pathname.startsWith('/user-info');
            const isOnUserNav = request.nextUrl?.pathname.startsWith('/user-nav');
            const isOnLoginPage = request.nextUrl?.pathname.startsWith('/login');
            // console.log(auth);

            if (isOnAdminPage && !user?.email === "admin@gmail.com") {
                return false;
            }
            if (isOnUserPage && !user) {
                return false;
            }
            if (isOnLoginPage && user) {
                return Response.redirect(new URL("/", request.nextUrl));
            }
            if (isOnUserNav && !user) {
                return false;
            }
            return true;
        }
    }
}