export interface FetchQl {
  (query: string, variables?: JSONSerializable, opts?: Dict<any>): Promise<any>;
}

interface GraphQLResponse {
  data: any;
  error: any;
}

const clientFactory = (
  endpoint: string,
  tokenGetter: () => string
): FetchQl => {
  return function fetchQL(
    query: string,
    variables?: JSONSerializable,
    opts?: Dict<any>
  ) {
    return fetch(endpoint, {
      method: "POST",
      headers: new Headers({
        Authorization: tokenGetter(),
        ...authHeaders(),
      }),
      body: JSON.stringify({ query, variables }),
      ...opts,
    })
      .then((response) => {
        if (!response.ok) {
          console.log({ response }, "response", response.statusText);
          throw new Error(response.statusText);
        }
        console.log({ response }, "client");
        return response;
      })
      .then<GraphQLResponse>((response) => response.json())
      .then(({ data, error }) => {
        console.log({ data, error });
        if (error) {
          throw new Error();
        }

        return data;
      });
  };
};

const authHeaders = () => {
  return {
    "Content-Type": "application/json",
  };
};

export default clientFactory;
