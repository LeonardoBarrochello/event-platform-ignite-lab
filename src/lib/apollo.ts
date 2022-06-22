import { ApolloClient, InMemoryCache } from "@apollo/client";


export const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://api-sa-east-1.graphcms.com/v2/cl4ouvk0i15mx01xsafkcd4pm/master"
});