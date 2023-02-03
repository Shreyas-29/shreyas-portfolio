import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!;

// Fetching about me details
export const getAbout = async () => {
    const query = gql`
        query MyQuery{
            aboutsConnection {
                edges {
                    cursor
                    node {
                        aboutMe
                        id
                        featuredImage {
                            url
                        }
                        photo1 {
                            url
                        }
                        photo2 {
                            url
                        }
                        photo3 {
                            url
                        }
                        photo4 {
                            url
                        }
                        names {
                            title
                            id
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.aboutsConnection.edges;
}

export const getTitle = async () => {
    const query = gql`
        query GetTitle{
            names{
                title
                id
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.names;

}

export const getServices = async () => {
    const query = gql`
        query MyQuery{
            servicesConnection {
                edges {
                    cursor
                    node {
                        id
                        title
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `
    const result = await request(graphqlAPI, query);
    return result.servicesConnection.edges;
}

export const getWork = async () => {
    const query = gql`
        query MyQuery {
            worksConnection {
                edges {
                    cursor
                    node {
                        github
                        id
                        title
                        view
                        featuredImage {
                            url
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.worksConnection.edges;
};

export const getSkills = async () => {
    const query = gql`
        query MyQuery {
            skillsConnection {
                edges {
                    node {
                        icon {
                            url
                        }
                        id
                        title
                        color
                        description
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.skillsConnection.edges;
};

export const getExps = async () => {
    const query = gql`
       query MyQuery {
        experiences {
                id
                year
                workExperiences {
                    id
                    info
                    name
                    company
                }
            }
        }
    `

    const result = await request(graphqlAPI, query);

    return result.experiences;
}

export const getWorkExp = async () => {
    const query = gql`
        query MyQuery {
            workExperiencesConnection {
                edges {
                    cursor
                    node {
                        id
                        name
                        info
                        company
                        experience {
                            id
                            year
                        }
                    }
                }
            }
        }
    `;

    const result = await request(graphqlAPI, query);
    return result.workExperiencesConnection.edges;
};

// Client form data
export const getClient = async (obj: any) => {
    const result = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    return result.json();
}