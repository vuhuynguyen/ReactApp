import { useContext } from 'react';
import FontsContext from '../context/Font';

function useFontsContext() {
    const fontsContext = useContext(FontsContext);

    if (!fontsContext)
        throw new Error(
            'No FontsContext.Provider found when calling usefontsContext.'
        );

    return fontsContext;
}

export default useFontsContext;
