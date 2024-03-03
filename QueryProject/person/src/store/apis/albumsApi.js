import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        fetchFn: async (...args) => {
            await pause(1000);
            return fetch(...args);
        },
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                query: () => {
                    return {
                        url: '/users',
                        method: 'GET',
                    };
                },
            }),
            addUser: builder.mutation({

                query: () => {
                    return {
                        url: '/users',
                        method: 'POST',
                        body: {
                            name: faker.name.fullName(),
                        },
                    };
                },
            }),
            removeUser: builder.mutation({
                invalidatesTags: () => {
                    return [{ type: 'User' }]
                },
                query: (user) => {
                    return {
                        url: `/users/${user.id}`,
                        method: 'DELETE',
                    };
                },
            }),
        };
    },
});

export const { useFetchUsersQuery, useAddUserMutation, useRemoveUserMutation } =
    usersApi;
export { usersApi };
