import {
    gql
} from "@apollo/client";

export const GET_ITEMS = gql`
   query{
            getItems{
                id,
                name,
                completed
            }
        }
`;


