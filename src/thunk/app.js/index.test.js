import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk  from 'redux-thunk';

import {fetchUserData} from './index';



describe('fetchUserData',()=>{
    const mockStore = configureMockStore([thunk]);
    const store = mockStore({});
    test('dispatch the correct action',async () => {
        const expectedPayload =  ["loader", "user_data", "loader"]
       await  store.dispatch(fetchUserData())
        const actions = store.getActions();
        expect(actions.map(v => v.type)).toEqual(expectedPayload);
       });

    })