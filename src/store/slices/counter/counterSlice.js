import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        counter: 10,
        times: 0
    },
    reducers: {
        increment: (state) => {
            //! https://react-redux.js.org/tutorials/quick-start
            //Redux Toolkit nos permite escribir lógica "mutante" en reductores. Eso
            // en realidad no muta el estado porque usa la biblioteca Immer,
            // que detecta cambios en un "estado de borrador" y produce un nuevo
            // estado inmutable basado en esos cambios
            state.counter += 1;
        },
      /* Una función reductora. */
        incrementBy: (state, action) => {
            console.log(action);
            state.counter += action.payload;
        },
        decrement: (state) => {
            state.counter -= 1;
        },

    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementBy } = counterSlice.actions;
