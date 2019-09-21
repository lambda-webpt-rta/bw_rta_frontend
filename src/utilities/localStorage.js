export const loadState = () => {
        try {
            const serializedState = localStorage.getItem('state');
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse((serializedState)
            }
            catch (err) {
                "error setting localstorage|state"
            }

            export const saveState = (state) => {
                try {
                    const serializedState = JSON.stringify(state);
                    localStorage.setItem('state', serializedState);
                } catch (err) {
                    "error setting localstorage|state"
                }
            }