// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { GraphQLClient, gql } from 'graphql-request';


const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

const graphcmsToken = process.env.GRAPHCMS_TOKEN!;


export default async function clients(req: any, res: any) {
    const { name, email, message } = req.body;

    const graphQLClient = new GraphQLClient(graphqlAPI!, {
        headers: {
            authorization: `Bearer ${graphcmsToken!}`
        }
    });

    const query = gql`
        mutation CreateClient($name:String!, $email: String!, $message: String!){
            createClient(data: {name: $name, email: $email, message: $message}){id}
        }
    `
    try {
        const result = await graphQLClient.request(query, req.body);
        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }


}
