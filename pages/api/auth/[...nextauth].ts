import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";


export default NextAuth({
  pages: {
    signIn: "/signin"
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      id: "credentials",
      // The credentials are used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: {label: "Username", type: "text", placeholder: "user@example.com"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials, req) {
        let user;
        // Add logic here to look up the user from the credentials supplied
        if (
          (process.env.ROOT_USERNAME && process.env.ROOT_USERNAME === credentials?.username) &&
          (process.env.ROOT_PASSWORD && process.env.ROOT_PASSWORD === credentials?.password)) {
          user = {id: 0, name: "preview", email: "root@example.com"};
        }

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
  ]
})