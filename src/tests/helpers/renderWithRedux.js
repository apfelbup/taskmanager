import { store } from "../../redux/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";


export const renderWithRedux = (component, initialState) => {
    const reduxStore = initialState ? store(initialState) : store;
    
    return render(
        <Provider store={reduxStore}>
            {component}
        </Provider>
    )
} 