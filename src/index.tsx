import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter} from "react-router-dom";
import {StyledEngineProvider} from "@mui/material";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <StyledEngineProvider injectFirst>

                    <App/>
                </StyledEngineProvider>

            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

