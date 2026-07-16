# My Portfolio

Hey there! This cozy corner of the internet is my personal portfolio, packed with projects, experiments, and all the things that keep me curious. Wander around, enjoy the vibes, and get to know what I have been building.

## Say Hello

- LinkedIn: https://www.linkedin.com/in/giacomoimpoco/
- GitHub: https://github.com/gimpoco1
- Email: impoco126@gmail.com

I am always open to collaborate-whether it is a wild idea, a polished product, or a weekend hack, I am game. Drop me a message and let us cook up something fun together!

## Live GitHub activity

The hero loads the latest 12 months of contribution data through the Netlify
Function at `/api/github-contributions`.

1. Create a read-only GitHub personal access token.
2. In Netlify, open **Site configuration → Environment variables**.
3. Add it as a secret value named `GITHUB_CONTRIBUTIONS_TOKEN`. If your plan
   supports variable scopes, enable the **Functions** scope.
4. Redeploy the project.

The token is only read by the server-side function. Successful responses are
cached by Netlify for one hour. To run the function locally, add the same value
to `.env` and use `npx netlify dev`; the regular Vite server displays the
GitHub fallback state instead.
